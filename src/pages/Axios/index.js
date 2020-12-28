import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "../../components/select";

export default function Axios() {
  const [{ country, countries }, setCountry] = useState({
    countries: [],
    country: "",
  });
  const url = "https://countries.trevorblades.com/";

  const getAxiosData = async (url) => {
    await axios
      .post(url, {
        query: `
        query Continent{
          countries{
            name
            code
          }
        }
        `,
      })
      .then((response) => {
        let countries = response.data.data.countries;
        setCountry((_) => ({ countries: countries }));
      });
  };
  useEffect(async () => {
    await getAxiosData(url);
  }, []);

  const handleCountry = (value) => {
    setCountry((_) => ({ ..._, country: value }));
  };

  return (
    <div>
      <h1>Axios example</h1>
      <br />

      <Select
        country={country}
        countries={countries}
        handleSelect={handleCountry}
      />
    </div>
  );
}
