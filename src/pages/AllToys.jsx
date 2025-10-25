import React, { useEffect, useState } from "react";
import ToyCard from "../components/PopularToys/ToyCard";

const AllToys = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("/allToys.json")
      .then((res) => res.json())
      .then((data) => {
        setPopular(data);
      });
  }, []);

  return (
    <div>
      <title>All Toys - Kids Toy Store</title>
      <h2 className="text-3xl font-bold text-center my-8">
        Browse Different Toys
      </h2>
      <div className="mx-20 py-10 border-2 rounded border-amber-300 m-10">
        <div className="flex-col gap-10 mx-auto items-center md:grid md:grid-cols-3 md:gap-0 md:ml-10">
          {popular.map((toy) => (
            <ToyCard key={popular.toyId} toy={toy}></ToyCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToys;
