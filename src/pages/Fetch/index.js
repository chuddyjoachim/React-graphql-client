import React, { useEffect, useState } from "react";
import Select from "../../components/select";

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
        setCountry((_) => ({ countries: countries }));
      });
  };
  useEffect(async () => {
    await getData(url);
  }, []);
  const handleCountry = (value) => {
    setCountry((_) => ({ ..._, country: value }));
  };

  return (
    <div>
      <h1>Fetch-Api example</h1>
      <br />

      <Select
        country={country}
        countries={countries}
        handleSelect={handleCountry}
      />
    </div>
  );
}
