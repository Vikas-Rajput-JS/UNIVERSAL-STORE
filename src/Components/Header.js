import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

let name = JSON.parse(sessionStorage.getItem("Name"));

export default function Header() {
  const getdata = useSelector((state) => state.CartRedcuer.Carts);
  let carts = getdata;
  return (
    <div className="w-[100%] h-[7vh] bg-purple-600 flex items-center  cursor-pointer bg-gradient-to-r from-cyan-300 to-indigo-600 shadow-2xl shadow-black ">
      <div className="w-[28%] sm:w-[90%] justify-end h-[7vh] flex justify-around items-center  ">
        <img
          className="w-[60px] h-[6vh] rounded-full"
          src="https://cdn.dribbble.com/users/4843167/screenshots/14540242/dribbble-min_4x.jpg"
          alt=""
        />
        <h1 className="hidden sm:flex  font-semibold animation duration-100 hover:scale-110 hover:text-violet-500">
          ＵＮＩＶＥＲＳＡＬ ＳＴＯＲＥ
        </h1>
      </div>
      <div className="sm:w-[72%] w-[56%] h-[7vh] flex justify-center items-center ">
        <div className="w-[60%] flex justify-around ml-20">
          <button className="w-24 h-10 hidden   rounded-xl bg-green-500">Home</button>
        </div>
        <div className="  mt-2 text-orange-500 font-bold hidden sm:flex flex-col ">
          <img
            className="w-[40px]"
            src="https://cdn-icons-png.flaticon.com/128/552/552721.png"
            alt=""
          />
          <h1 className="mb-2">{name}</h1>
        </div>
        <div className="flex justify-center md:block w-[35px] h-[35px] ml-8 bg-orange-500 rounded-full items-center ">
          <a
            className="relative text-gray-700 hover:text-gray-600 animation duration-100 hover:scale-125"
            href="#"
          >
            <Link to={"/Cart"}>
              <svg
                className="h-8 w-8 animation duration-100 hover:scale-125"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <span className="absolute top-0 left-0 rounded-full w-[20px] ml-1 mb-1  h-[20px] animation duration-100 hover:scale-125 bg-indigo-500 flex justify-center items-center  p-1  text-white font-bold">
              {carts.length}
            </span>
          </a>
        </div>
        <Link to={"/"}>
         
          <h1 className="text-white ml-1 sm:ml-8 font-serif ml-10">Log Out</h1>
        </Link>
      </div>
    </div>
  );
}
