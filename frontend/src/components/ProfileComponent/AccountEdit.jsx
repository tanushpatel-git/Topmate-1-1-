import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Plus, Check, ExternalLink } from "lucide-react";

export default function AccountEdit(    { isOpen, onClose }) {

  return (
    <div className="flex absolute z-50 items-center justify-center h-screen bg-gray-100">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-[720px] max-h-[90vh] overflow-y-auto bg-white rounded-2xl p-6 shadow-xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Edit Profile</h2>
                <button onClick={() => onClose()}>
                  <X size={24} />
                </button>
              </div>

              {/* Profile Photo */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-xl" />
                  <div>
                    <p className="font-medium">Profile photo</p>
                    <p className="text-sm text-gray-500">Required</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm underline">
                  <Upload size={16} /> Upload Photo
                </button>
              </div>

              {/* Topmate link */}
              <div className="mb-6">
                <p className="mb-2 font-medium">Your topmate page link</p>
                <div className="flex items-center border rounded-xl overflow-hidden">
                  <span className="px-3 py-2 bg-gray-100 text-sm">
                    topmate.io/
                  </span>
                  <input
                    className="flex-1 px-3 py-2 outline-none"
                    defaultValue="tanush_patel"
                  />
                  <Check className="mr-2" size={16} />
                  <ExternalLink className="mr-3" size={16} />
                </div>
              </div>

              {/* Name */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="mb-1">First Name</p>
                  <input className="w-full border rounded-xl px-3 py-2" defaultValue="Tanush" />
                </div>
                <div>
                  <p className="mb-1">Last Name</p>
                  <input className="w-full border rounded-xl px-3 py-2" defaultValue="Patel" />
                </div>
              </div>

              {/* Display Name */}
              <div className="mb-6">
                <p className="mb-1">Display Name</p>
                <input className="w-full border rounded-xl px-3 py-2" defaultValue="Tanush Patel" />
              </div>

              {/* Intro */}
              <div className="mb-6">
                <p className="mb-1">Your topmate intro (Required)</p>
                <input
                  className="w-full border rounded-xl px-3 py-2"
                  defaultValue=""
                />
              </div>

              {/* About */}
              <div className="mb-6">
                <p className="mb-1">About yourself</p>
                <textarea
                  className="w-full border rounded-xl px-3 py-2 h-28"
                  defaultValue=""
                />
              </div>

              {/* Social Links */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Social Links</h3>
                <button className="w-full border border-dashed rounded-xl py-3 flex items-center justify-center gap-2 text-gray-600">
                  <Plus size={16} /> Add social link
                </button>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-black text-white rounded-xl"
                >
                  Save Changes
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
