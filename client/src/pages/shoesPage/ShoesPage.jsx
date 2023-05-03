import React, { useEffect, useRef, useState } from "react";
import "./ShoesPage.css";
import newRequest from "../../utils/newRequest";
import ShoeCard from "../../components/ShoeCard.jsx/ShoeCard.jsx";
import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function Shoes() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();


  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["shoes"],
    queryFn: () =>
      newRequest
        .get(
          `/shoes`
        )
        .then((res) => {
          return res.data;
        }),
  });
  console.log(data);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);



  return (
        <div className="cards">
          {isLoading
            ? "loading"
            : error
            ? "Something went wrong!"
            : data.map((shoe) => <ShoeCard key={shoe._id} item={shoe} />)}
        </div>
  );
}

export default Shoes;
