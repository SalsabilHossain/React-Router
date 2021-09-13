import React from "react";
import team from "../Images/team-1.jpg";
import team_1 from "../Images/team-4.jpg";
import team_2 from "../Images/team-5.jpg";

import "./Card.css";

const Card = () => {
  const cardArr = [
    {
      img: team_1,
      header: "text",
      content: "some tesr",
    },
    {
      img: team_2,
      header: "some text",
      content: "some text.",
    },
  ];
  return (
    <div className="container">
      <div className="card-container">
        {cardArr.map((card) => (
          <div className="card_">
            <img className="team-img" src={card.img} alt="Avatar" />
            <h4 className="card_header">{card.header}</h4>
            <p>{card.content}</p>
          </div>
        ))}
        <div className="time-table"></div>
      </div>
    </div>
  );
};

export default Card;
