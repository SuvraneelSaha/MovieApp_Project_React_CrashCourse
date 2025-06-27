import React from "react";

import Search from "./components/Search";
import { useState, useEffect } from "react";

// Api - application programming interfact - set of rules that allows one app to talk to another

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // searchTerm = "New Search Term";
  // not allowed |^|
  // you only mutate the state using the setter function

  const fetchMovies = async () => {
    try {
    } catch (error) {
      console.error(`Error fetching Movies : ${error}`);
    }
  };

  useEffect(() => {}, []);
  // only runs this when the component loads

  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            without the Hassle
          </h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white">{searchTerm}</h1>
      </div>
    </main>
  );
};

export default App;
