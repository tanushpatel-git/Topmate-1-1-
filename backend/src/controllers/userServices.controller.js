const Service = require("../models/userService.model");
const { verifyToken } = require("../utility/jwToken");
const slugify = require("slugify");
const { cloudinary } = require("../utility/CloudInary");
const mongoose = require("mongoose");



const uploadToCloudinary = async (file) => {
  try {

    let resourceType = "auto";

    if (file.mimetype.includes("pdf")) {
      resourceType = "raw";
    }

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "products",
      resource_type: resourceType,
    });

    return result.secure_url;

  } catch (error) {
    console.log("Cloudinary upload error:", error);
    throw new Error("Image upload failed");
  }
};


const createService = async (req, res) => {
  try {

    const uploadedFiles = req.files || [];

    const files = uploadedFiles.map((file) => {

      let fileType = "link";

      if (file.mimetype.includes("pdf")) {
        fileType = "pdf";
      }

      else if (file.mimetype.includes("image")) {
        fileType = "image";
      }

      else if (file.mimetype.includes("video")) {
        fileType = "video";
      }

      return {
        fileType,
        url: `/uploads/${file.filename}`,
        fileName: file.originalname,
      };
    });

const slug = slugify(req.body.title, {
  lower: true,
  strict: true,
}) + "-" + Date.now();

const service = await Service.create({
  ...req.body,
  slug,
  files,
});
    res.status(201).json({
      success: true,
      service,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Error creating service",
    });
  }
};

const getMyServices = async (req, res) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(200).json({ status: false, message: "Login first" });
    }

    const { id } = verifyToken(token);

    const services = await Service.find({ user: id })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      status: true,
      services,
    });

  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { serviceId } = req.params;

    if (!serviceId || !mongoose.Types.ObjectId.isValid(serviceId)) {
      return res.status(400).json({ message: "Invalid service ID" });
    }

    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.json({ service });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error" });
  }
};

const getSingleService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
      .populate("user", "-password -__v");

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }


    res.status(200).json({
      success: true,
      data: service,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateService = async (req, res) => {
  try {

    const { serviceId } = req.params;

    const uploadedFiles = req.files || [];
    const files = [];

    // CLOUDINARY UPLOAD
    for (const file of uploadedFiles) {

      const cloudinaryUrl = await uploadToCloudinary(file);

      let fileType = "link";

      if (file.mimetype.includes("pdf")) {
        fileType = "pdf";
      }
      else if (file.mimetype.includes("image")) {
        fileType = "image";
      }
      else if (file.mimetype.includes("video")) {
        fileType = "video";
      }

      files.push({
        fileType,
        url: cloudinaryUrl,
        fileName: file.originalname,
      });
    }

    // LINKS
    let links = [];

    if (req.body?.links) {

      if (Array.isArray(req.body.links)) {
        links = req.body.links;
      } else {
        links = [req.body.links];
      }
    }

    // LINK OBJECTS
    const linkFiles = links.map((link) => ({
      fileType: "link",
      url: link,
      fileName: "External Link",
    }));

    // UPDATE OBJECT
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      longDescription: req.body.longDescription,
      price: req.body.price,
      instructions: req.body.instructions,
    };

    // PUSH FILES ONLY IF EXISTS
    if (files.length > 0 || linkFiles.length > 0) {

      updateData.$push = {
        files: {
          $each: [...files, ...linkFiles],
        },
      };
    }

    const updatedService = await Service.findByIdAndUpdate(
      serviceId,
      updateData,
      { returnDocument: "after" }
    );

    res.status(200).json({
      status: true,
      message: "Service updated successfully",
      service: updatedService,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      status: false,
      message: "Internal server error",
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const { serviceId } = req.params;

    const service = await Service.findById(serviceId);

    if (!service) {
      return res.status(404).json({
        status: false,
        message: "Service not found",
      });
    }

    await Service.findByIdAndDelete(serviceId);

    return res.status(200).json({
      status: true,
      message: "Service deleted successfully",
    });

  } catch (error) {
    console.error("Delete Service Error:", error);
    return res.status(500).json({
      status: false,
      message: "Server error",
    });
  }
};

const searchServices = async (req, res) => 
  {
  try {
    const { q } = req.query;

    
    const services = await Service.find({
      $text: { $search: q },
      isActive: true,
      status: "published"
    });

    return res.status(200).json({
      status: true,
      services,
    });

  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};


const getAllServices = async (req, res) => {

  try {

    const services = await Service.find();

    res.status(200).json({
      success: true,
      services,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};


module.exports = {
  createService,
  getMyServices,
  getSingleService,
  updateService,
  deleteService,
  searchServices,
  getServiceById,
  getAllServices
};
