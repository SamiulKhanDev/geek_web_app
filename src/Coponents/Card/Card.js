import React from "react";
import "./Card.css";
const Card = ({ login, avatar_url: avatar }) => {
  return (
    <div className="card_container">
      <div className="card_container_avatar">
        <img src={avatar} alt="user_img" />
      </div>
      <div className="card_container_login">
        <h3>{login.toUpperCase()}</h3>
      </div>
    </div>
  );
};

export default Card;
