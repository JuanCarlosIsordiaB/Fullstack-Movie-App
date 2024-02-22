import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
const Movie = ({ id, item, setHoveredIndex, hoveredIndex }) => {
  const addMovie = (id) => {
    //console.log(id);
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "....";
    } else {
      return str;
    }
  };

  return (
    <div
      className="w-[220px] sm:w-[220px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative m-2"
      onMouseEnter={() => setHoveredIndex(id)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <img
        className="rounded-md overflow-hidden w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full p-3 flex flex-col justify-end bg-black/20 hover:bg-black/40 transition-all">
        {hoveredIndex === id && (
          <p className="absolute top-3 right-3" onClick={() => addMovie(id)}>
            {item.like ? (
              <FaHeart className="text-white" />
            ) : (
              <FaRegHeart className="text-white" />
            )}
          </p>
        )}
        <h3 className="font-bold text-md text-white white-space-normal">
          {truncateString(item?.title, 20)}
        </h3>
      </div>
    </div>
  );
};

export default Movie;
