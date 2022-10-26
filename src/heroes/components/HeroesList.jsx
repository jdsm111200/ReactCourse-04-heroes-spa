import React from "react";
import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroesList = ({ publisher }) => {
  const heroesByPublisher = useMemo(
    () => getHeroesByPublisher(publisher),
    [publisher]
  );
  return (
    <div className="row row-cols-1 row-cols-md-3 g-2">
      {heroesByPublisher.map((hero) => (
        <div className="cols" key={hero.id}>
          <HeroCard hero={hero} />
        </div>
      ))}
    </div>
  );
};
