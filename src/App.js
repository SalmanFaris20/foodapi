import Pages from "./pages/Pages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import { GiFoodTruck } from "react-icons/gi";
import styled from "styled-components";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Heading>
        <Logo to={"/"}>
          <GiFoodTruck />
          <h1>Spoonacular</h1>
        </Logo>
        <Search />
        <Cart />
      </Heading>
      <Category />
      <Pages />
    </Router>
  );
}

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  h1 {
    font-size: 1rem;
    color: linear-gradient(35deg, #494949, #313131);
  }
  svg {
    font-size: 3rem;
  }

  text-decoration: none;
`;

export default App;
