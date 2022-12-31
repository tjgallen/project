import { FaPizzaSlice } from 'react-icons/fa';
import { GiFruitBowl, GiNoodles } from 'react-icons/gi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/Mediterranean'}>
        <GiFruitBowl />
        <h4>Mediterranean</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #f7f7f7, #eaeaea);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    font-size: 0.8rem;
  }
svg {
  font-size: 1.5rem;
}
&.active {
  background: linear-gradient(to right, #f27121, #e94057);
}
`;

export default Category;