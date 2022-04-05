import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
import CardPopular from "./CardPopular";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
      // console.log(data);
    }
  };

  return (
    <div>
      <Wrapper>
        <h1>Trending</h1>
        <Splide
          options={{
            arrows: false,
            perPage: 4,
            drag: "free",
            pagination: false,
            gap: "4rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                {/* <Link to={"/recipes/" + recipe.id}> */}
                <CardPopular
                  title={recipe.title}
                  image={recipe.image}
                  pricePerServing={recipe.pricePerServing}
                ></CardPopular>
                {/* </Link> */}
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

export default Popular;
