import React, { useEffect, useLayoutEffect, useState } from "react";
import requests from "../req";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const getMovies = async () => {
    try {
      const { data } = await axios.get(requests.requestPopular);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    getMovies();
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "....";
    } else {
      return str;
    }
  };

  return (
    <>
      <div className="m-2 rounded-lg overflow-hidden relative h-[550px] text-white">
        <div className="w-full h-full relative">
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie?.title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="absolute inset-0 top-[20%] p-4 md:p-8 flex flex-col justify-center">
            <h1 className="font-bold text-3xl md:text-5xl text-indigo-300">
              {movie?.title}
            </h1>
            <div className="my-4">
              <button className="text-white py-2 px-5 bg-indigo-500 hover:bg-indigo-700 transition-all rounded-md">
                Play
              </button>
              <button className="border text-white border-gray-400 py-2 px-5 ml-4">
                Watch Later
              </button>
            </div>
            <p className="text-gray-200 text-sm">
              Released: {movie?.release_date}
            </p>
            <p className="text-white md:w-1/2">
              {truncateString(movie?.overview, 100)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
