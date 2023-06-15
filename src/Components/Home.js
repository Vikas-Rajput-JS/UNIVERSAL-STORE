import React, { useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Slider from "./Slider";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../Redux/Actions/Action";
import { Dispatch } from "redux";
import Data from "./APIs/API";
import Watch from "./APIs/WatchAPI";
import perfume from "./APIs/Perfume";
import Mackup from "./APIs/Mackup";
import PropagateLoader from "react-spinners/PropagateLoader";
import Maskara from "./APIs/Maskara";

export default function Home() {
  localStorage.setItem("Data", JSON.stringify(Data));
  const [items, setitems] = useState(Data);

  return (
    <div className=" w-[100%] h-auto bg-amber-400">
      <div className="w-[100%] h-[7vh] fixed top-0">
        <Header />
      </div>
      <div className="w-[100%] h-[93vh] mt-[7vh]">
        <Banner />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <a
          className="relative inline-flex items-center justify-start cursor-pointer inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          onClick={() => {
            window.location.href = "/Home";
            localStorage.setItem("Data", JSON.stringify(Data));
          }}
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            All{" "}
          </span>
        </a>
        <a
          className="relative inline-flex ml-10 cursor-pointer items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          onClick={() => {
            window.location.href = "/Home";
            localStorage.setItem("dat", "ok");
            localStorage.setItem("Data", JSON.stringify(Watch));
          }}
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            Watches
          </span>
        </a>
       
        <a
          className="relative inline-flex ml-10 cursor-pointer items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          onClick={() => {
            window.location.href = "/Home";
            localStorage.setItem("dat", "ok");
            localStorage.setItem("Data", JSON.stringify(Maskara));
          }}
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
           Maskara
          </span>
        </a>
        <a
          className="relative inline-flex ml-10 cursor-pointer items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          onClick={() => {
            window.location.href = "/Home";
            localStorage.setItem("dat", "ok");
            localStorage.setItem("Data", JSON.stringify(perfume));
          }}
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            Perfume
          </span>
        </a>
        <a
          className="relative inline-flex ml-10 cursor-pointer items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium transition-all bg-blue-600 rounded-full hover:bg-white group"
          onClick={() => {
            window.location.href = "/Home";
            localStorage.setItem("dat", "ok");
            localStorage.setItem("Data", JSON.stringify(Mackup));
          }}
        >
          <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-white rounded-full"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-blue-600">
            Mackup
          </span>
        </a>
      </div>

      <form className="flex items-center mt-10">
        <label for="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos, Design Templates..."
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => {
            let input = document.getElementById("search").value;
            if (input == "watch") {
              window.location.href = "http://localhost:3000/Home";
              localStorage.setItem("dat", "ok");
              localStorage.setItem("Data", JSON.stringify(Watch));
            } else if (input == "phone") {
              window.location.href = "http://localhost:3000/Home";
              localStorage.setItem("Data", JSON.stringify(Data));
            }

            if (input == "perfume") {
              window.location.href = "http://localhost:3000/Home";
              localStorage.setItem("Data", JSON.stringify(perfume));
            }
            if ((input == "beauty", input == "mackup")) {
              window.location.href = "http://localhost:3000/Home";
              localStorage.setItem("Data", JSON.stringify(Mackup));
            }
            if (input == "maskara") {
              window.location.href = "http://localhost:3000/Home";
              localStorage.setItem("Data", JSON.stringify(Maskara));
            }
          }}
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 -ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Search
        </button>
      </form>

      <div classNameName="w-[100%] h-auto mt-52">
        <Card />
      </div>
    </div>
  );
}
