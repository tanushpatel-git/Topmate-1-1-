import React from "react";
import ProfileNavbar from "../ProfileComponent/ProfileNavbar";
import ColorSet from "../ProfileComponent/ColorSet";
import AccountEdit from "../ProfileComponent/AccountEdit";
import AddHighlight from "../ProfileComponent/AddHighlight";
import Badge from "../ProfileComponent/Badge";
import { useState } from "react";
import ArrangmentOfServicePrice from "../ProfileComponent/ArrangmentOfServicePrice";

const colors = [
  "#d9534f",
  "#8e73d8",
  "#7ea6d6",
  "#d88942",
  "#e9c58b",
];

const Profile = () => {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[4]);

  return (
    <>
      <ProfileNavbar
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
        onClose={() => setOpen3(!open3)}
      />
      <ArrangmentOfServicePrice
        isOpen={open4}
        onClose={() => setOpen4(!open4)}
      />
      <Badge
        isOpen={open5}
        onClose={() => setOpen5(!open5)}
      />
    </>
  );
};


export default Profile;
