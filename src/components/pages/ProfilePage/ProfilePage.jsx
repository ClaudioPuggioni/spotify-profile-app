import React from "react";
import Profile from "../../templates/Profile/Profile";

export default function ProfilePage() {
  return (
    <div id="profilePageContainer">
      <Profile profileStatusArr artistsArr tracksArr />
    </div>
  );
}
