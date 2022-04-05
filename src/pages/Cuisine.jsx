import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();
  const getCuisine = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );

    const data = await api.json();
    setCuisine(data.results);
  };

  useEffect(() => {
    getCuisine(params.id);
    console.log(params.id);
  }, [params.id]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cuisine.map((item) => {
        return (
          <Link to={"/recipes/" + item.id}>
            <Card key={item.id}>
              <h1>{item.title}</h1>
              <img src={item.image} alt={item.name} />
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 5rem;
  margin: 5rem 0;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    position: absolute;
    z-index: 10;
    font-size: small;
    color: white;
    left: 50;
    text-align: center;
  }
  img {
    border-radius: 1rem;
  }
`;

export default Cuisine;
