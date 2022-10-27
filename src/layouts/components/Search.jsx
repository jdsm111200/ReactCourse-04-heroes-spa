import queryString from "query-string";
import { useEffect } from "react";
import { useState } from "react";
import { createSearchParams, useLocation, useNavigate } from "react-router-dom";

export const Search = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [search, setSearch] = useState(q);
  const navigate = useNavigate();
  
  useEffect(() => {
    setSearch(q);
  }, [q]);

  const onSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "" && search.trim().length > 0) {
      return navigate({
        pathname: "/search",
        search: `?${createSearchParams({ q: search })}`,
      });
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
