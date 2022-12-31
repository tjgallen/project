import {useState} from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input);
    setInput("");
  };

  return (
    <FormStyle onSubmit={submitHandler} >
      <div>
        <FaSearch></FaSearch>
      <input 
        onChange={(e) => setInput(e.target.value)} type="text" 
        placeholder="Search for a recipe" 
        value={input} />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0 auto;
  position: relative;
  width: 100%;
  input{
    border: none;
    border-radius: 1rem;
    background: linear-gradient(35deg, #f7f7f7, #eaeaea);
    font-size: 1.5rem;
    color: black;
    padding: 1rem 3rem;
    outline: none;
    width: 100%;
  }
  svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search