import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  let params = useParams();

  const fetchRecipe = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const recipes = await data.json();
    setRecipe(recipes);
  };

  useEffect(() => {
    fetchRecipe();
  }, [params.name]);

  return (
    <RecipeWrapper>
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
      </div>
        <Info>
          <Button 
          className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>
            Instructions
          </Button>
          <Button 
          className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>
            Ingredients
          </Button>
          {activeTab === "instructions" && (
            <div>
            <h3 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h3>
            </div>
            )}
          {activeTab === 'ingredients' && (
             <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
          )}
          ;
        </Info>
    </RecipeWrapper>
  );
}

const RecipeWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  p {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const Button = styled.button`
  position: center;
  border: 2px solid black;
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  margin-right: 20rem;
  margin-left: 3rem;
  font-weight: 600;
  width: 10rem;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;