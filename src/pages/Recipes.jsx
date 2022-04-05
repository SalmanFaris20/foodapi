import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipes() {
  const [recipes, setRecipes] = useState({});
  const [active, setActive] = useState("instruction");

  let params = useParams();
  const getRecipes = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const data = await api.json();
    setRecipes(data);
    console.log(data);
  };

  useEffect(() => {
    getRecipes();
  }, [params.name]);

  return (
    <Wrapper>
      <div>
        <h1>{recipes.title}</h1>
        <img src={recipes.image} alt="" />
      </div>
      <Info>
        <Father>
          <Button
            className={active === "instruction" && "active"}
            onClick={() => setActive("instruction")}
          >
            Summary
          </Button>
          <Button
            className={active === "ingredient" && "active"}
            onClick={() => setActive("ingredient")}
          >
            Instruction
          </Button>
        </Father>
        <div>
          {active === "instruction" && (
            <h3 dangerouslySetInnerHTML={{ __html: recipes.summary }}></h3>
          )}
          {active === "ingredient" && (
            <h3 dangerouslySetInnerHTML={{ __html: recipes.instructions }}></h3>
          )}
        </div>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
  h1 {
    font-size: 1rem;
    font-weight: 200;
    margin: 2rem 0rem;
  }
`;

const Father = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
`;

const Button = styled.div`
  background: linear-gradient(35deg, #494949, #313131);
  padding: 1rem;
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
  color: white;
`;

const Info = styled.div`
  gap: 2rem;
  height: 5rem;
  color: black;
  h3 {
    font-size: 1rem;
    font-weight: 200;
  }
`;

export default Recipes;
