import {  Card, CardActionArea, CardContent, CardMedia, Typography, AccordionSummary, AccordionDetails, Accordion } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Loader from "../../Components/Loader/Loader";

export const ERROR = 'Ошибка загрузки данных. Попробуйте обновить страницу';

const CountyPage = () => {

  const params = useParams();

  const [country, setCountry] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApiData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${params.country}`).then((response) => response.json());
        setCountry(response[0]);
      } catch (error) {
        setError("Ошибка при загрузке данных. Пожалуйста, попробуйте еще раз.");
      }
    };
    setLoading(true);
    getApiData();
    setLoading(false);

  }, [params.country]);

  if (loading) {
    return <Loader />
  };

  if (error) {
    return <div>{ERROR}</div>
  };

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={country?.flags?.svg}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {country?.name?.common}
        </Typography>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Capital</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {country?.capital || 'Capital is not defined at the moment'}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Area</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {country?.area || 'Area is not defined at the moment'}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Population</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {country?.population || 'Population is not defined at the moment'}
          </Typography>
        </AccordionDetails>
      </Accordion>
      </CardContent>
    </CardActionArea>
  </Card>
  )
}

export default CountyPage;