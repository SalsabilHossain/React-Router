import React from "react";
import "./Info.css";
import Card from "./Card";
import Banner from "./Banner";

const Info = (title) => {
  const titles = [
    { id: 0, title: "Professional" },
    { id: 1, title: "Affordable " },
    { id: 2, title: "State of the Art" },
    { id: 3, title: "Flexible" },
  ];

  return (
    <div>
      <div className="info">
        {titles.map((title) => (
          <div className="title-list">{title.title}</div>
        ))}
      </div>

      <Card />
      <Banner />
    </div>
  );
};
export default Info;
