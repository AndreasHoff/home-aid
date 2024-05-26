import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import image1 from '../assets/images/1.png'
import image2 from '../assets/images/2.png'
import image3 from '../assets/images/3.png'
import image4 from '../assets/images/4.png'
import image5 from '../assets/images/5.png'
import image6 from '../assets/images/6.png'
import image7 from '../assets/images/7.png'
import image8 from '../assets/images/8.png'
import recipes from '../assets/recipes.json'

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
            overflow: hidden;
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
        }
    }
`;

const images = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    8: image8
  };

const HelloFresh = () => {
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
                            <img src={images[recipe.id]} alt={recipe.name} />
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