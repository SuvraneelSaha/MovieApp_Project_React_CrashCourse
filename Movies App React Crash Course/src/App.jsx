import React from "react";

import Search from "./components/Search";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // searchTerm = "New Search Term"; 
  // not allowed |^| 
  // you only mutate the state using the setter function 

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
