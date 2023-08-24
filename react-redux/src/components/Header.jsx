import React from "react";
import { MdAddBox } from "react-icons/md";
import { modalFunc } from "../redux/modalSlice";
import { searchDataFunc } from "../redux/dataSlice";
import { useDispatch } from "react-redux";
import { sortingDataFunc } from "../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between bg-gray-200 px-4 py-3">
      <div className="text-2xl">Redux Uygulama</div>
      <div className="flex items-center gap-3">
        <div>
          <select
            onChange={(e) => dispatch(sortingDataFunc(e.target.value))}
            className="h-6 rounded-lg"
            name=""
            id=""
          >
            <option value="asc">Artan</option>
            <option value="desc">Azalan</option>
          </select>
        </div>
        <div>
          <input
            onChange={(e) => dispatch(searchDataFunc(e.target.value))}
            className="h-10 rounded-lg px-2"
            type="text"
            placeholder="Search"
          />
        </div>
        <div
          onClick={() => dispatch(modalFunc())}
          className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
        >
          <MdAddBox size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
