import React from "react";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
  return (
    <div>
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
              <div className="badge badge-secondary flex items-center gap-1">
                <div>
                  <AiFillStar className="text-yellow-400"/>
                </div>
                <div>{toy.rating}</div>
              </div>
            </h2>
            <p>{toy.description}</p>
            <div className="card-actions ">
              
              <div className="badge badge-outline">
                Stock - {toy.availableQuantity}
              </div>
              <div className="badge badge-outline">Price - ${toy.price}</div>
              <button className="btn badge badge-outline"><Link to={`/toydetails/${toy.toyId}`}>View More</Link></button>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default ToyCard;
