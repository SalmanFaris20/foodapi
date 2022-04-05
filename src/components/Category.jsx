import { FaPizzaSlice, FaCloudMeatball, FaHamburger } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <Marker>
      <SetLink to={"/cuisine/American"}>
        <FaPizzaSlice />
        <h1>American</h1>
      </SetLink>
      <SetLink to={"/cuisine/Japanese"}>
        <FaCloudMeatball />
        <h1>Japanese</h1>
      </SetLink>
      <SetLink to={"/cuisine/Korean"}>
        <FaHamburger />
        <h1>Korean</h1>
      </SetLink>
      <SetLink to={"/cuisine/Italian"}>
        <GiFruitBowl />
        <h1>Italian</h1>
      </SetLink>
    </Marker>
  );
}

const Marker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: small;
  gap: 4rem;
`;

const SetLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  text-decoration: none;
  cursor: pointer;
  margin: 3rem 0;

  h1 {
    color: white;
    font-size: 0.8rem;
  }

  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
`;

export default Category;
