import React from "react";

const Slider = () => {
  return (
    <div className="flex w-9/12 justify-between mx-auto">
      <div className="">
        <h2 className="text-3xl font-bold text-center my-8">
          Welcome to Kids Toy Store
        </h2>
      </div>
      <div className="w-8/12 mx-auto">
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Burger"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
