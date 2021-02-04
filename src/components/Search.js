import React, { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { setSearch } = useGlobalContext();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(text);
  };
  return (
    <div className="search">
      <form className="form">
        <input
          className="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="search menu"
        />
        <button className="btn" type="submit" onClick={handleSubmit}>
          search
        </button>
      </form>
    </div>
  );
};

export default Search;
