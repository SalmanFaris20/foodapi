import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h1>Vegetarian Pick</h1>
        <Splide
          options={{
            arrows: false,
            perPage: 3,
            drag: "free",
            pagination: false,
            gap: "4rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={"/recipes/" + recipe.id}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  h1 {
    font-size: 1rem;
    margin: 2rem 0rem;
  }
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  p {
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 10;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, 0%);
    width: 100%;
    height: 40%;
    font-weight: 600;
    font-size: 1rem;
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
