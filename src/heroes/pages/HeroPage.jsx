import React from "react";
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroePage = () => {
  const { heroId } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) return <Navigate to="/" />;

  return (
    <div className="row mt-5 ">
      <div className="col-md-4 mb-3 mb-md-0">
        <img
          className="img-fluid img-thumbnail animate__animated animate__fadeInLeft"
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-md-8">
        <h1>{hero.superhero}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};
