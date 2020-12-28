import React from "react";

export default function Select({ country, countries, handleSelect }) {
  return (
    <>
      <select
        value={country}
        onChange={(event) => {
          let value = event.target.value;
          handleSelect(value);
        }}
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </>
  );
}
