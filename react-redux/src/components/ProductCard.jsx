import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteDataFunc } from "../redux/dataSlice";

const ProductCard = ({ dt }) => {
  const [openEdit, setOpenEdit] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="w-[200px] h-[200px] relative m-2 rounded-sm">
      <img className="w-full h-full rounded-sm" src={dt?.url} alt="" />
      <div className="absolute left-0 bottom-0 bg-blue-400 text-white w-full px-2">
        <div className="text-lg font-semibold">{dt?.name}</div>
        <div className="text-sm">{dt?.price}₺</div>
      </div>
      <div
        onClick={() => setOpenEdit(!openEdit)}
        className="absolute top-0 right-0"
      >
        <BsThreeDots color="white" size={24} />
      </div>
      {openEdit && (
        <div className="bg-black border border-white text-white absolute top-3 right-2 p-2 text-sm">
          <div
            onClick={() => dispatch(deleteDataFunc(dt?.id))}
            className="cursor-pointer"
          >
            Sil
          </div>
          <div className="cursor-pointer">Güncelle</div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
