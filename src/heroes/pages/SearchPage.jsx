import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { getHeroByQuery } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const heroesFiltered = useMemo(() => getHeroByQuery(q), [q]);
  return (
    <div className="row mt-3">
      <div className="col-12">
        <div
          className="alert alert-info"
          role="alert"
          style={{
            display: q === "" && heroesFiltered.length === 0 ? "" : "none",
          }}
        >
          Search a hero
        </div>
        <div
          className="alert alert-danger"
          role="alert"
          style={{
            display: q !== "" && heroesFiltered.length === 0 ? "" : "none",
          }}
        >
          No heros with "<b>{q}</b>"
        </div>
        {heroesFiltered.length > 0 && <h1>Results for "{q}"</h1>}
        {heroesFiltered.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
};
