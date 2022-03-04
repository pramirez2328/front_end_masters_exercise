import React from "react";
import Pet from "./Pet";

function Result({ pets }) {
  if (pets.length === 0) {
    return <h1 className="search">Sorry, there are no pets, search again!</h1>;
  }

  return (
    <>
      <div className="search">
        {pets.map((anim) => {
          return (
            <div key={`pet-${anim.id}`}>
              <Pet
                type={anim.animal}
                city={anim.city}
                breed={anim.breed}
                description={anim.description}
                image={anim.images[0]}
                name={anim.name}
                state={anim.state}
              />
              <hr id="line" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Result;
