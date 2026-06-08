import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, Check, ExternalLink } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setFirstName,
  setLastName,
  setDisplayName,
  setTopmateIntro,
  setAboutYourself,
  setSocialLink,
  setProfileImage,
} from "../../redux/userProfileDesign/profile";
import { updateProfileDesign, uploadProfileImage } from "../../services/userAuthServices/profileDesignService";

export default function AccountEdit({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const {
    firstName,
    lastName,
    displayName,
    topmateIntro,
    aboutYourself,
    socialLink,
    profileImage,
  } = useSelector((state) => state.userProfile);

  const { firstName: mainName, lastName: mainLastName, userName: mainUserName } = useSelector((state) => state.userData);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateProfileDesign({
        firstName: firstName || mainName,
        lastName: lastName || mainLastName,
        displayName: displayName || mainUserName,
        topmateIntro,
        aboutYourself,
        socialLink,
        profileImage,
      });
    } catch (err) {
      console.error("Failed to save profile", err);
    } finally {
      setSaving(false);
      onClose();
    }
  };

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
                <button onClick={onClose}>
                  <X size={24} />
                </button>
              </div>

              {/* Profile Photo */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img
                    src={profileImage}
                    alt="profile"
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div>
                    <p className="font-medium">Profile photo</p>
                    <p className="text-sm text-gray-500">Required</p>
                  </div>
                </div>

                <input
                  type="file"
                  hidden
                  id="upload"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (!file) return;
                    setUploading(true);
                    try {
                      const res = await uploadProfileImage(file);
                      if (res.status) {
                        dispatch(setProfileImage(res.imageUrl));
                      }
                    } catch (err) {
                      console.error("Failed to upload image", err);
                    } finally {
                      setUploading(false);
                    }
                  }}
                />

                <label
                  htmlFor="upload"
                  className="flex items-center gap-2 text-sm underline cursor-pointer"
                >
                  <Upload size={16} /> {uploading ? "Uploading..." : "Upload Photo"}
                </label>
              </div>

              {/* Topmate Link */}
              <div className="mb-6">
                <p className="mb-2 font-medium">Your topmate page link</p>
                <div className="flex items-center border rounded-xl overflow-hidden">
                  <span className="px-3 py-2 bg-gray-100 text-sm">
                    topmate.io/
                  </span>
                  <input
                    className="flex-1 px-3 py-2 outline-none"
                    value={mainUserName}
                    disabled
                  />
                  <Check className="mr-2" size={16} />
                  <ExternalLink className="mr-3" size={16} />
                </div>
              </div>

              {/* Name */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="mb-1">First Name</p>
                  <input
                    className="w-full border rounded-xl px-3 py-2"
                    value={firstName}
                    placeholder={mainName}
                    onChange={(e) =>
                      dispatch(setFirstName(e.target.value))
                    }
                  />
                </div>

                <div>
                  <p className="mb-1">Last Name</p>
                  <input
                    className="w-full border rounded-xl px-3 py-2"
                    value={lastName}
                    placeholder={mainLastName}
                    onChange={(e) =>
                      dispatch(setLastName(e.target.value))
                    }
                  />
                </div>
              </div>

              {/* Display Name */}
              <div className="mb-6">
                <p className="mb-1">Display Name</p>
                <input
                  className="w-full border rounded-xl px-3 py-2"
                  value={displayName}
                  placeholder={mainUserName}
                  onChange={(e) =>
                    dispatch(setDisplayName(e.target.value))
                  }
                />
              </div>

              {/* Intro */}
              <div className="mb-6">
                <p className="mb-1">Your topmate intro</p>
                <input
                  className="w-full border rounded-xl px-3 py-2"
                  value={topmateIntro}
                  onChange={(e) =>
                    dispatch(setTopmateIntro(e.target.value))
                  }
                />
              </div>

              {/* About */}
              <div className="mb-6">
                <p className="mb-1">About yourself</p>
                <textarea
                  className="w-full border rounded-xl px-3 py-2 h-28"
                  value={aboutYourself}
                  onChange={(e) =>
                    dispatch(setAboutYourself(e.target.value))
                  }
                />
              </div>

              {/* Social Link */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Social Link</h3>
                <input
                  placeholder="Enter social link"
                  className="w-full border rounded-xl px-3 py-2"
                  value={socialLink}
                  onChange={(e) =>
                    dispatch(setSocialLink(e.target.value))
                  }
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  disabled={saving}
                  className={`px-4 py-2 rounded-xl ${saving ? "bg-gray-400" : "bg-black text-white"}`}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}