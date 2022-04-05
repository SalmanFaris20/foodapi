import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";

function CardPopular({ title, image, pricePerServing }) {
  return (
    <Card>
      <p>{title}</p>
      <img src={image} alt={title} />
      <h1>${pricePerServing}</h1>
      <Gradient />
      <Buy>
        <BsFillCartFill />
        <h1>Buy</h1>
      </Buy>
    </Card>
  );
}

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
    height: 100%;
    font-weight: 600;
    font-size: 1rem;
  }
  h1 {
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
    height: 50%;
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

const Buy = styled.div`
  background: linear-gradient(to right, #f27121, #e94057);
  width: 100%;
  height: 20%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  gap: 1rem;
  svg {
    color: white;
  }
  h1 {
    height: 10%;
  }
`;

export default CardPopular;
