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
            <img src="https://static.vecteezy.com/system/resources/previews/011/098/350/original/fire-flat-cartoon-png.png" alt="" />
            <span>
              {!isNaN(item.totalHype / item.hypeNumber) &&
                Math.round(item.totalHype / item.hypeNumber)}
            </span>
          </div>
        </div>
        <hr className="shoeCard-divider" />
        <div className="shoeCard-detail">
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
