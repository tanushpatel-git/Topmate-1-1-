import React from "react";

const EditableField = ({
  label,
  name,
  value,
  editingField,
  setEditingField,
  handleChange,
  type = "text",
  placeholder = "",
  isPassword = false,
}) => {
  const isEditing = editingField === name;

  return (
    <div className="flex justify-between items-start border-b pb-4 mb-4">
      <div className="w-full">
        <p className="text-lg font-medium text-gray-600">{label}</p>

        {isEditing ? (
          <input
            type={type}
            name={name}
            value={value || ""}
            onChange={handleChange}
            placeholder={placeholder}
            className="mt-1 w-full border px-3 py-2 rounded-md"
          />
        ) : (
          <p className="text-gray-800">
            {isPassword ? "••••••••" : value}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={() => setEditingField(null)}
              className="text-sm underline"
            >
              Save
            </button>
            <button
              onClick={() => setEditingField(null)}
              className="text-sm text-red-500 underline"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setEditingField(name)}
            className="text-sm underline"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default EditableField;