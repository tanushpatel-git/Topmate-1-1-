import React, { useState, useEffect } from "react";
import { FiExternalLink, FiCopy } from "react-icons/fi";
import { useParams } from "react-router-dom";
import useGetService from "../../hooks/useGetService";
import useUpdateService from "../../hooks/useUpdateService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import DeleteServiceHook from "../../hooks/DeleteServiceHook";

const ServiceCustomize = () => {

  const { type, serviceId } = useParams();
  const { mutate: updateService, isPending } = useUpdateService();
  const navigate = useNavigate();
  const { data, isLoading } = useGetService(serviceId);

  const [showFileInput, setShowFileInput] = useState(false);
  const [showInstructionInput, setShowInstructionInput] = useState(false);

const { mutate: deleteService } = DeleteServiceHook();




  const [formData, setFormData] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    instructions: "",
    link:"",
  });




const handleUpdate = () => {
  if (!formData.title || !formData.price) {
    alert("Required fields missing");
    return;
  }

  updateService(
    { id: serviceId, formData },
    {
      onSuccess: (data) => {
        if (data.status) {
          navigate(`/creator-dashboard/services/${type}`);
        }
      }
    }
  );
};



const handleDelete = (id) => {
  const confirmDelete = window.confirm("Are you sure?");

  if (!confirmDelete) return;

  deleteService(id, {
    onSuccess: () => {
      alert("Deleted successfully");
      navigate(`/creator-dashboard/services/${type}`);
    },
    onError: () => {
      alert("Delete failed");
    },
  });
};










  useEffect(() => {
    if (data?.service) {
      setFormData({
        title: data.service.title || "",
        description: data.service.description || "",
        longDescription: data.service.longDescription || "",
        price: data.service.price || "",
        instructions: data.service.instructions || "",
      });
    }

    console.log(data);
  }, [data]);


  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b px-10 py-5">
        <div className="flex items-center gap-3 text-gray-700">
          <button>←</button>
          <h1 className="text-xl font-semibold">Edit</h1>
        </div>  

        <div className="flex gap-2">
          <div className="flex items-center h-11 border rounded-lg px-3 cursor-pointer">
            <FiExternalLink size={20} />
          </div>
          <div className="flex items-center h-11 border rounded-lg px-3 cursor-pointer">
            <FiCopy size={20} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 m-10">
        <button className="bg-black text-white px-4 py-1 rounded-full">
          Basic Details
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex gap-8 m-10">

        {/* LEFT */}
        <div className="w-[35%] space-y-5">

          <input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Title"
            className="w-full border p-2 rounded"
          />

          <input
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Short Description"
            className="w-full border p-2 rounded"
          />

          <input
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            placeholder="Price ₹"
            className="w-full border p-2 rounded"
          />

          <textarea
            onChange={(e) =>
              setFormData({ ...formData, longDescription: e.target.value })
            }
            placeholder="Describe your service in detail"
            className="w-full border p-2 rounded h-40"
          />

          {/* Add File */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowFileInput(!showFileInput)}
              className="border px-4 py-2 rounded"
            >
              Add  link
            </button>

            {showFileInput && (
              <input
                type="text"
                placeholder="Paste link here..."
                className="border p-2 rounded"
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
              />
            )}
          </div>

          {/* Instructions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={() => setShowInstructionInput(!showInstructionInput)}
              className="border px-4 py-2 rounded">
              Add Instructions
            </button>

            {showInstructionInput && (
              <input
                value={formData.instructions}
                onChange={(e) =>
                  setFormData({ ...formData, instructions: e.target.value })
                }
                placeholder="Buyer instructions here..."
                className="border p-2 rounded"
              />
            )}

            <button
  onClick={handleUpdate}
  className="bg-black text-white px-4 py-2 rounded w-full"
  disabled={isPending}
>
  {isPending ? "Updating..." : "Save Changes"}
</button>
          </div>

          {/* Actions */}
          <div>
            <h2 className="font-semibold mb-2">Service Actions</h2>

            <div className="flex gap-3">
              <button className="border text-red-500 px-4 py-2 rounded " onClick={() => handleDelete(serviceId)}>
                Delete Service
              </button>
              <button className="border px-4 py-2 rounded" >
                Duplicate Service
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center h-[200px]">
          <div className="w-[300px] bg-white border rounded-xl p-5 shadow-sm">
            <span className="text-xs bg-yellow-100 px-2 py-1 rounded">
              Beta
            </span>

            <h3 className="font-semibold mt-2">
              Create service landing page
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Optimized for conversion and a better way to present a service
            </p>

            <button className="bg-black text-white w-full mt-4 py-2 rounded">
              Try Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServiceCustomize;