import React from "react";

const Pet = ({ type, city, breed, description, image, name, state }) => {
  return (
    <div class="listOfPets">
      <div>
        <h1 style={{ fontFamily: "cursive", color: "#ad343e" }}>
          Name: {name}
        </h1>
        <h3>
          Type: {type}, {breed}
        </h3>
        <h3>
          City: {city}, {state}
        </h3>
        <h4>{description}</h4>
      </div>

      <img src={image} style={{ width: "400px", height: "300px" }} />
    </div>
  );
};

export default Pet;
