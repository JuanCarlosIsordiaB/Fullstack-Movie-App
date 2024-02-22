import React, { useEffect, useState } from "react";
import axios from "axios";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchUrl, rowId }) => {
  const [movies, setMovies] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const getMovies = async () => {
    try {
      if (fetchUrl) {
        const { data } = await axios.get(fetchUrl);
        setMovies(data.results);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [fetchUrl]);

  const sliceLeft = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliceRight = () => {
    var slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="mt-12">
      <h2 className="dark:text-white text-slate-900 font-bold text-3xl p-4 ">
        {title}
      </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={sliceLeft}
          className="left-0 bg-indigo-500 text-white rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <Movie
              item={item}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              key={id}
              id={id}
            />
          ))}
        </div>
        <MdChevronRight
          onClick={sliceRight}
          className="bg-indigo-500 right-0 rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block text-white"
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
