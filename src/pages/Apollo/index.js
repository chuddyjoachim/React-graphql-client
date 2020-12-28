import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";
import Select from "../../components/select";

// initialize a GraphQL client
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

export default function Apollo() {
  const [{ country, countries }, setCountry] = useState({
    countries: [],
    country: "US",
  });
  const handleCountry = (value) => {
    setCountry((_) => ({ ..._, country: value }));
  };

  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  useEffect(() => {
    if (data) {
      setCountry((_) => ({ ..._, countries: data.countries }));
    }
  }, [data]);

  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }
  return (
    <div>
      <h1>Apollo-client Method</h1>
      <br />
      <Select
        country={country}
        countries={countries}
        handleSelect={handleCountry}
      />
    </div>
  );
}
