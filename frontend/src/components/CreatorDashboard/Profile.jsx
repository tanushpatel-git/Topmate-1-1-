import React from "react";
import ProfileNavbar from "../ProfileComponent/ProfileNavbar";
import ColorSet from "../ProfileComponent/ColorSet";
import { useState } from "react";

const colors = [
  "#d9534f",
  "#8e73d8",
  "#7ea6d6",
  "#d88942",
  "#e9c58b",
];

const Profile = () => {

  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[4]);

  return (
    <>
      <ProfileNavbar selectedColor={selectedColor} onClose={() => setOpen(!open)} />
      <ColorSet isOpen={open} onClose={() => setOpen(!open)} colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
    </>
  );
};


export default Profile;
