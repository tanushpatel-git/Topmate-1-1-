const Service = require("../models/userService.model");
const { verifyToken } = require("../utility/jwToken");
const User = require("../models/user.model");


const slugify = require("slugify");

const createService = async (req, res) => {
  try {
    const { token } = req.cookies;
    const { id } = verifyToken(token);

    const { title, category, price } = req.body;

    const slug = slugify(title, { lower: true, strict: true });

    const service = await Service.create({
      ...req.body,
      user: id,
      slug,
    });

    return res.status(200).json({
      status: true,
      message: "Service created",
      service,
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
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
    console.log("PARAM:", req.params.serviceId);

    const service = await Service.findById(req.params.serviceId);

    console.log("FOUND:", service);

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
    console.log('call successfull')
    const service = await Service.findById(req.params.id)
      .populate("user", "-password -__v");

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }


    console.log(service);
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
    const { token } = req.cookies;
    if (!token) {
      return res.status(200).json({ status: false, message: "Login first" });
    }

    const { id } = verifyToken(token);
    const { serviceId } = req.params;

    const service = await Service.findOne({
      _id: serviceId,
      user: id,
    });

    if (!service) {
      return res.status(200).json({
        status: false,
        message: "Service not found or unauthorized"
      });
    }

    await Service.updateOne(
      { _id: serviceId },
      { $set: req.body }
    );

    return res.status(200).json({
      status: true,
      message: "Service updated successfully",
    });

  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
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

    console.log("QUERY:", q);
    
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
