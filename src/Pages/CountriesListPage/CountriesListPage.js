import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ERROR } from "../CountryPage/CountryPage";
import Loader from "../../Components/Loader/Loader";

const CountriesListPage =() => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all").then((response) => response.json());
        setCountries(response);
      } catch (error) {
        setError("Ошибка при загрузке данных. Пожалуйста, попробуйте еще раз.");
      }
    };

    setLoading(true);
    getApiData();
    setLoading(false);

  }, []);

  if (loading) {
    return <Loader />
  };

  if (error || !Array.isArray(countries)) {
    return <div>{ERROR}</div>
  };

  return (
    <div>
      {countries?.map((country) => <div key={country.name.common}>
        <Link to={`/${country.name.common}`}>
        <Typography variant="h6" gutterBottom>
        {country.name.common}
      </Typography>
        </Link>
      </div>)}
    </div>
  )
}

export default CountriesListPage;