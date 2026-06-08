import React, { useState, useEffect } from "react";
import ProfileNavbar from "../ProfileComponent/ProfileNavbar";
import ColorSet from "../ProfileComponent/ColorSet";
import AccountEdit from "../ProfileComponent/AccountEdit";
import AddHighlight from "../ProfileComponent/AddHighlight";
import Badge from "../ProfileComponent/Badge";
import ArrangmentOfServicePrice from "../ProfileComponent/ArrangmentOfServicePrice";
import MainProfile from "../ProfileComponent/MainLookOfProfileCollection/MainProfile";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile, setColor, setServices } from "../../redux/userProfileDesign/profile";
import { getProfileDesign, getMyServices, updateProfileDesign } from "../../services/userAuthServices/profileDesignService";


const colors = [
  "#d9534f",
  "#8e73d8",
  "#7ea6d6",
  "#d88942",
  "#e9c58b",
];

const Profile = () => {
  const dispatch = useDispatch();
  const savedColor = useSelector((state) => state.userProfile.color);

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [editHighlightType, setEditHighlightType] = useState(-1);
  const [selectedColor, setSelectedColor] = useState(savedColor || colors[4]);
  const [view, setView] = useState("desktop");

  const handleEditHighlight = (type) => {
    setEditHighlightType(type);
    setOpen3(true);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfileDesign();
        if (res.status && res.data) {
          dispatch(setUserProfile(res.data));
          setSelectedColor(res.data.color || colors[4]);
        }
        const resOfService = await getMyServices();
        if (resOfService) {
          dispatch(setServices(resOfService));
          await updateProfileDesign({ services: resOfService })
        }
      } catch (err) {
        console.error("Failed to load profile design", err);
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    dispatch(setColor(selectedColor));
  }, [selectedColor]);

  return (
    <div className="h-screen overflow-auto flex flex-col scroll-smooth">
      <ProfileNavbar
        view={view}
        setView={setView}
        onClose4={() => setOpen4(!open4)}
        onClose3={() => setOpen3(!open3)}
        onClose2={() => setOpen2(!open2)}
        onClose5={() => setOpen5(!open5)}
        selectedColor={selectedColor}
        onClose={() => setOpen(!open)}
      />
      <ColorSet
        isOpen={open}
        onClose={() => setOpen(!open)}
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <AccountEdit
        isOpen={open2}
        onClose={() => setOpen2(!open2)}
      />
      <AddHighlight
        isOpen={open3}
        onClose={() => { setOpen3(!open3); setEditHighlightType(-1); }}
        editType={editHighlightType}
      />
      <ArrangmentOfServicePrice
        isOpen={open4}
        onClose={() => setOpen4(!open4)}
      />
      <Badge
        isOpen={open5}
        onClose={() => setOpen5(!open5)}
      />

      <MainProfile view={view} onEditHighlight={handleEditHighlight} />
    </div>
  );
};


export default Profile;
