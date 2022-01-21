import React from "react";

const Pet = ({ type, city, breed, description, image, name, state }) => {
  return (
    <div
      className="listOfPets"
      style={{
        backgroundColor: "white",
        margin: "1em",
        padding: "0.5em",
        border: "solid 1px #ad343e",
        borderRadius: "7px",
      }}
    >
      <div className="info">
        <h1
          style={{
            fontFamily: "cursive",
            color: "#ad343e",
          }}
        >
          Name: {name}
        </h1>
        <h3>
          Type: {type}, {breed}
        </h3>
        <h3>
          City: {city}, {state}
        </h3>
        <h3 style={{ marginBottom: "2px" }}>Description:</h3>
        <h5 style={{ marginTop: "7px" }}>{description}</h5>
      </div>

      <img src={image} className="image" />
    </div>
  );
};

export default Pet;
