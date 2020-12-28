import React, { useEffect, useState } from "react";

export default function Fetch() {
  const [{ country, countries }, setCountry] = useState({
    countries: [],
    country: "",
  });
  const url = "https://countries.trevorblades.com/"; // curl 'https://countries.trevorblades.com/' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json' -H 'Accept: application/json' -H 'Connection: keep-alive' -H 'DNT: 1' -H 'Origin: https://countries.trevorblades.com' --data-binary '{"query":"# Write your query or mutation here\nquery Continent{\n  countries{\n    name\n    code\n  }\n}"}' --compressed'

  const getData = async (uri) => {
    await fetch(uri, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // Accept: "application/json",
        // "Accept-Encoding": "gzip, deflate, br",
      },
      body: JSON.stringify({
        query: `
        query Continent{
          countries{
            name
            code
          }
        }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let countries = data.data.countries;
        console.log(countries);
        setCountry((_) => ({ countries: countries }));
      });
  };
  useEffect(async () => {
    await getData(url);
    // effect
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div>
      <h1>Fetch-Api example</h1>
      <br />

      <select
        value={country}
        onChange={(event) =>
          setCountry((_) => ({ ..._, country: event.target.value }))
        }
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
