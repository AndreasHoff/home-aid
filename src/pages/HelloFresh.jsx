import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image1 from '../assets/images/1.png'
import { db } from '../firebase.js'

const HelloFreshContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #c5bb00;
    min-height: 100vh;
    gap: 6rem;

    .add-recipe {
        margin-top: 10rem;

        .button {
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: blue;
            color: white;
            font-size: 19px;
            text-decoration: none;
            height: 4rem;
            width: 8rem;
            transition: all 0.3s ease 0s;
            border: none;
            border-radius: 45px;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);

            &:hover {
                cursor: pointer;
                transform: translateY(-7px);
                box-shadow: 0px 15px 20px rgba(12, 112, 226, 0.4);
            }
        }
    }

    .gallery {
        margin-top: 10rem;
        align-content: start;
        display: grid;
        grid-template-columns: repeat(4, 200px);
        row-gap: 6rem;
        max-width: 1200px;
        width: 100%;
        justify-items: center;
        justify-content: space-between;

        .item {
            height: 200px;
            width: 200px;
            background-color: rgb(255, 191, 117);
            border-radius: 0.5rem;
            box-shadow: 
                rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, 
                rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
            transition: transform 0.3s;
            border-radius: 0.5rem;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            &:hover {
                cursor: pointer;
                transform: scale(1.05);
            }

            p {
                display: flex;
                justify-content: center;
            }
        }
    }
`;

const images = {
    1: image1,
  };

const HelloFresh = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const recipeCollection = collection(db, 'recipes');
          const recipeSnapshot = await getDocs(recipeCollection);
          const recipeData = recipeSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
          setRecipes(recipeData);
        };
      
        fetchData();
      }, []);

    return (
        <>
            <Helmet>
                <title>HomeAid | HelloFresh </title>
            </Helmet>

            <HelloFreshContainer>
                <div className="add-recipe">
                    <Link className='button' to='/hello-fresh/add-recipe'>Add Recipe</Link>
                </div>
                <div className='gallery'>
                    {recipes.map((recipe) => (
                    <Link key={recipe.id} to={`/hello-fresh/${recipe.urlIdentifier}`}>
                        <div className="item">
                        <img src='https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_500,q_50,w_1900/hellofresh_s3/image/HF201104_R01_W51_SE_C12343801-3_KB_Main_Reshoot_low-f6f9d3c2.jpg' alt={recipe.name} />
                        <p>{recipe.name}</p>
                        </div>
                    </Link>
                    ))}
                </div>
            </HelloFreshContainer>
        </>
    )
}

export default HelloFresh