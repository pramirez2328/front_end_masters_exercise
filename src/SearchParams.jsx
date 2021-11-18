import React, { useEffect, useState } from "react";
import Pet from "./Pet";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile", "cat"];

//hello

function SearchParams() {
  const [city, setCity] = useState("");
  const [animal, updateAnimal] = useState("");

  async function getPets() {
    const pets = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${city}`
    );

    const petsJson = await pets.json();
    console.log(petsJson);
  }

  useEffect(() => {
    getPets();
  }, [animal, city]);

  const handleLocation = (e) => {
    setCity(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setCity("");
    updateAnimal("");
  };

  return (
    <div className="search-params">
      <form onSubmit={handleForm}>
        <label htmlFor="city">
          Location
          <input type="text" id="city" value={city} onChange={handleLocation} />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal, i) => {
              return (
                <option key={`${animal}-${i}`} value={animal}>
                  {animal}
                </option>
              );
            })}
          </select>
        </label>

        <button>submit</button>
      </form>
      <Pet name="dog" animal="canino" breed="pastor aleman" />
    </div>
  );
}

export default SearchParams;
