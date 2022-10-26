import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const onSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "" && search.trim().length > 0) {
      return navigate(`/search?q=${search}`);
    }
  };
  return (
    <form className="d-flex me-auto" role="search" onSubmit={onSearch}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};
