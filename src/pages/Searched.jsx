import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searchRecipes, setsearchRecipes] = useState([]);
  let params = useParams();
  const getSearch = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );

    const data = await api.json();
    setsearchRecipes(data.results);
  };

  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchRecipes.map((item) => {
        return (
          <Link to={"/recipes/" + item.id}>
            <Card key={item.id}>
              <h1>{item.title}</h1>
              <img src={item.image} alt={item.title} />
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
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

export default Searched;
