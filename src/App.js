import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {MdFoodBank} from "react-icons/md";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <MdFoodBank />
          <Logo to={"/"}>Recipe Roundup</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
     </BrowserRouter>
    </div>

  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: 400;
  font-family: 'Tangerine', serif;
  `;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0rem;
  svg{
    font-size: 2rem;
  }
`;

export default App;
