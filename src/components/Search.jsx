import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/searched/" + input);
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      <FiSearch />
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </FormStyles>
  );
}

const FormStyles = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  border-radius: 2rem;
  width: 30%;
  background: linear-gradient(35deg, #494949, #313131);
  margin: 2rem 0;
  input {
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    background-color: transparent;
  }
  svg {
    color: white;
    position: absolute;
    left: 1em;
  }
`;

export default Search;
