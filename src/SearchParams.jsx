import React, { useEffect, useState } from "react";
import Result from "./Result";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
import useBreedList from "./useBreedList";
function SearchParams() {
  const [city, setCity] = useState("");
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  console.log("hey");
  async function getPets() {
    const petsResponse = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${city}&breed=${breed}`
    );

    const petsJson = await petsResponse.json();
    setPets(petsJson.pets);
  }

  useEffect(() => {
    getPets();
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    getPets();
    setCity("");
    setAnimal("");
  };

  return (
    <div className="search-params">
      <form onSubmit={handleForm}>
        <label htmlFor="city">
          Location
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {ANIMALS.map((item, i) => {
              return (
                <option key={`${item}-${i}`} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {breeds.map((item, i) => {
              return (
                <option key={`${item}-${i}`} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </label>

        <button>Submit</button>
      </form>
      {<Result pets={pets} />}
    </div>
  );
}
export default SearchParams;
