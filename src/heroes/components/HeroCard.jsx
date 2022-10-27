import { Link } from "react-router-dom";

export const HeroCard = ({ hero }) => {
  const { id, superhero, alter_ego, first_appearance, characters } = hero;
  const heroImg = `/assets/heroes/${id}.jpg`;

  return (
    <div className="card mb-3 animate__animated animate__zoomIn">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={heroImg}
            className="img-fluid rounded-start"
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <h6 className="card-subtitle">{alter_ego}</h6>
            {/*    {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )} */}
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`} className="card-link">
              See more...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
