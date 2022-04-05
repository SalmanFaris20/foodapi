import React from "react";
import { BsCartCheck } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Cart() {
  return (
    <Grid to={"/checkout"}>
      <BsCartCheck fontSize="2rem" />
      <Count>0</Count>
    </Grid>
  );
}

const Grid = styled(Link)`
  display: flex;
`;

const Count = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: linear-gradient(35deg, #494949, #313131);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  font-size: 0.5rem;
`;

export default Cart;
