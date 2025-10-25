import React from "react";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  return (
    <div>
      <Link to={`/toydetails/${toy.toyId}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {toy.toyName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{toy.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ToyCard;
