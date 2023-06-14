import React from "react";

export default function Banner() {
  return (
    <div
      className="w-[100%] h-[93vh] flex  items-center"
      style={{
        backgroundImage:
          "url(https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 93vh",
      }}
    >
      <div className="w-[100%] h-[35vh]  items-center justify-center flex border-y-sky-300 mt-[40%]  ">
        <div className="'w-[25%]">
          <h1 className="text-red-700 text-4xl font-extrabold  mt-36 ">
            SPECIAL SALE!!
          </h1>
         
            <p className="w-[250px] text-amber-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              cupiditate nisi suscipit rerum fugiat officia eius quos maxime
              fugit itaque!
            </p>
          
        </div>
        <div>
          <a
            class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md ml-10 mt-20"
            onClick={() => {
              window.scrollBy(0, 890);
            }}
          >
            <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
              <span class="relative text-white">Shop Now</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
