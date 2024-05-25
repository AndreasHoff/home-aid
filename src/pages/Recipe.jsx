import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';
import recipes from '../assets/recipes.json';

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

const Recipe = () => {
    const { urlIdentifier } = useParams();
    const recipe = recipes.find((recipe) => recipe.urlIdentifier === String(urlIdentifier));

    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    return (
        <>
        <Helmet>
            <title>HomeAid | {recipe.name}</title>
        </Helmet>
            <div>
                <img src={images[recipe.id]} alt={recipe.name} />
                <h1>{recipe.name}</h1>
                <p>{recipe.instructions}</p>
                <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Recipe;