import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import './ShoeCard.css'
import newRequest from "../../utils/newRequest";

const ShoeCard = ({ item }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <Link to={`/shoe/${item._id}`} className="shoeCard-link">
      <div className="shoeCard">
        <img className="shoeCard-cover" src={item.cover} alt="" />
        <div className="shoeCard-info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="shoeCard-user">
              <img className="shoeCard-avatar" src={data.img || "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"} alt="" />
              <span className="shoeCard-username">{data.username}</span>
            </div>
          )}
          <p className="shoeCard-desc">{item.desc}</p>
          <div className="shoeCard-star">
            <img src="./img/star.png" alt="" />
          </div>
        </div>
        <hr className="shoeCard-divider" />
        <div className="shoeCard-detail">
          <img className="shoeCard-heart" src="./img/heart.png" alt="" />
          <div className="shoeCard-price">
            <span className="shoeCard-starting-at">STARTING AT</span>
            <h2 className="shoeCard-price-amount">$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShoeCard;
