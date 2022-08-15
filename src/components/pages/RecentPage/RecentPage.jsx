import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import Recent from "../../templates/Recent/Recent";

export default function RecentPage() {
  const { recentPlayedList } = useSelector((state) => state.infoApi);
  return (
    <div id="recentPage">
      <Recent tracksArr={recentPlayedList} imgStyle={{ objectFit: "cover" }} />
    </div>
  );
}
