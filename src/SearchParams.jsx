import React, { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile", "cat"];

function SearchParams() {
  const [location, setLocation] = useState("");
  const [animal, updateAnimal] = useState("");

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    setLocation("");
    updateAnimal("");
  };

  return (
    <div className="search-params">
      <form onSubmit={handleForm}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            onChange={handleLocation}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => updateAnimal(e.target.value)}
            onBlur={(e) => updateAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((animal, i) => {
              console.log(`${animal}-${i}`);
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
    </div>
  );
}

export default SearchParams;
