import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { modalFunc } from "../redux/modalSlice";
import { createDataFunc, updateDataFunc } from "../redux/dataSlice";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { modal } = useSelector((state) => state.modal);
  const { data, keyword } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({
    name: "",
    price: "",
    url: "",
  });
  const onChangeFunc = (e, type) => {
    if (type == "url") {
      setProductInfo((prev) => ({
        ...prev,
        [e.target.name]: URL.createObjectURL(e.target.files[0]),
      }));
    } else {
      setProductInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  let loc = location?.search.split("=")[1];

  useEffect(() => {
    if (loc) {
      setProductInfo(data.find((dt) => dt.id == loc));
    }
  }, [loc]);
  console.log(location, "data");
  const buttonFunc = () => {
    dispatch(createDataFunc({ ...productInfo, id: data.length + 1 }));
    dispatch(modalFunc());
  };

  const buttonUpdateFunc = () => {
    dispatch(updateDataFunc({ ...productInfo, id: loc }));
    dispatch(modalFunc());
    navigate("/");
  };
  const contentModal = (
    <>
      <Input
        value={productInfo.name}
        type={"text"}
        placeholder={"Ürün Ekle"}
        name={"name"}
        id={"name"}
        onChange={(e) => onChangeFunc(e, "name")}
      />
      <Input
        value={productInfo.price}
        type={"text"}
        placeholder={"Fiyat Ekle"}
        name={"price"}
        id={"price"}
        onChange={(e) => onChangeFunc(e, "price")}
      />
      <Input
        type={"file"}
        placeholder={"Resim Seç"}
        name={"url"}
        id={"url"}
        onChange={(e) => onChangeFunc(e, "url")}
      />
      <Button
        btnText={loc ? "Ürün Güncelle" : "Ürün Olustur"}
        onClick={loc ? buttonUpdateFunc : buttonFunc}
      />
    </>
  );
  const filteredItems = data.filter((dt) =>
    dt.name.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <div>
      <div className="flex items-center flex-wrap">
        {filteredItems?.map((dt, i) => (
          <ProductCard key={i} dt={dt} />
        ))}
      </div>

      {modal && (
        <Modal
          content={contentModal}
          title={loc ? "Ürün Güncelle" : "Ürün Olustur"}
        />
      )}
    </div>
  );
};

export default Products;
