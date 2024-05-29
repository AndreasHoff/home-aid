import { collection, getDocs, query, where } from "firebase/firestore";
import NoSleep from 'nosleep.js';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// import recipes from '../assets/recipes.json';
import { db } from '../firebase';

const RecipeContainer = styled.div`

    .no-sleep-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 1rem;
    }

    display: flex;
    background-color: #ffffff;
    margin: 2rem;
    flex-direction: column;
    align-items: center;
    max-width: 80%;

    input[type="checkbox"] {
        position: relative;
        width: 120px;
        height: 40px;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        background: linear-gradient(0deg, #adadad, #848484);
        outline: none;
        border-radius: 20px;
        box-shadow: 
            rgb(143, 143, 143) 0px 0px 0px 4px,
            rgb(134, 134, 134) 0px 0px 0px 5px,
            rgb(113 113 113) 0px 0px 10px inset,
          rgba(0, 0, 0, 0.5) 0px 5px 20px, 
          rgba(0, 0, 0, 0.2) 0px 0px 15px inset;
    }

    input:checked[type="checkbox"] {
        background: linear-gradient(0deg, #6ca740, #589f22);
        box-shadow: 0 0 2px #6ca740, 0 0 0 4px #888888, 0 0 0 5px #a7a7a7,
            inset 0 0 10px #888888, 0 5px 20px rgba(123, 123, 123, 0.5),
            inset 0 0 15px rgba(131, 131, 131, 0.2);
    }

    input[type="checkbox"]:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 40px;
        background: linear-gradient(0deg, #929292, #6b6b6b);
        border-radius: 20px;
        box-shadow: 0 0 0 1px #767676;
        transform: scale(0.98, 0.96);
        transition: 0.5s;
    }

    input:checked[type="checkbox"]:before {
        left: 40px;
    }

    input[type="checkbox"]:after {
        content: "";
        position: absolute;
        top: calc(50% - 2px);
        left: 65px;
        width: 4px;
        height: 4px;
        background: linear-gradient(0deg, #6b6b6b, #909090);
        border-radius: 50%;
        transition: 0.5s;
    }

    input:checked[type="checkbox"]:after {
        background: #719d50;
        left: 105px;
        box-shadow: 0 0 5px #589f22, 0 0 15px #589f22;
    }

    h3 {
        color: #6ca740;
        margin-top: 0;
        margin-bottom: 0;
    }

    p {
        margin-top: 0;
    }

    table {
        width: 100%;

        tr {
            th {
                text-align: center;
                padding: 0.5rem;
            }

            td {
                text-align: center;
                padding: 0.5rem;
            }

            td:first-child {
                text-align: left;
            }
        }

        .odd {
            background-color: #a3cd8481
        }

        .even {
            background-color: #ffffff;
        }
    }

    .recipe {
        display: flex;
        margin: 0 2rem;

        .left-column {
            flex: 1;
            display: flex;
            flex-direction: column;
            row-gap: 1rem;

            > div {
                margin-right: 3rem;
            }
        }

        .right-column {
            flex: 3;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
            height: fit-content;

            .image-with-number {
                position: relative;
            }

            .number {
                align-content: center;
                text-align: center;
                background-color: white;
                color: #6ca740;
                font-size: 1.5rem;
                font-weight: 600;
                position: absolute;
                top: 0;
                left: 0;
                height: 40px;
                width: 40px;
            }

            .step-image {
                width: 100%;
                height: 200px;
            }
        }
    }

    @media (min-width: 600px) {
        .no-sleep-container {
            display: none;
        }
    }

    @media screen and (max-width: 400px){
        input[type="checkbox"] {
        width: 60px;
        height: 20px;
        }

        input[type="checkbox"]:before {
            width: 40px;
            height: 20px;
            border-radius: 10px;
        }

        input:checked[type="checkbox"]:before {
            left: 20px;
        }

        input[type="checkbox"]:after {
            left: 30px;
            width: 2px;
            height: 2px;
        }

        input:checked[type="checkbox"]:after {
            left: 52px;
            
        }

        .recipe {
            flex-direction: column;

            .right-column {
            grid-template-columns: repeat(1, 1fr);
        }
        }
        
    }
`;


const Recipe = () => {
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState(null);
    const [noSleep, setNoSleep] = useState(new NoSleep());
    const { urlIdentifier } = useParams();
    //const recipe = recipes.find((recipe) => recipe.urlIdentifier === String(urlIdentifier));

    useEffect(() => {
        const fetchData = async () => {
          const recipeCollection = collection(db, 'recipes');
          const q = query(recipeCollection, where("urlIdentifier", "==", urlIdentifier));
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const recipeData = querySnapshot.docs[0].data();
            setRecipe(recipeData);
          }
          setLoading(false);
        };
      
        fetchData();
      }, [urlIdentifier]);

    const toggleNoSleep = () => {
        !noSleep.isEnabled ? noSleep.enable() : noSleep.disable();
    };

    if (!recipe) {
        return <p>Loading recipe</p>;
    }

    return (
        <>
            <Helmet>
                <title>HomeAid | {recipe ? String(recipe.name) : 'Loading...'}</title>
            </Helmet>

            <RecipeContainer>
                    <div className='no-sleep-container'>
                        <input type='checkbox' onClick={toggleNoSleep}></input>
                        <p className='no-sleep'>Undgå at skærmen slukker</p>
                    </div>
                <div className='recipe'>
                    <div className='left-column'>
                        <div className='lets-get-going'>
                            <h3>Lad os komme i gang</h3>
                            <p>Husk at vaske hænder i 20 sekunder før du starter. Skyl derefter grøntsager, frugter og urter. Glem ikke at vaske hænder og køkkenredskaber umiddelbart efter håndtering af råt kød og rå fisk</p>
                        </div>
                        <div className='kitchen-utensils'>
                            <h3>Køkkenredskaber</h3>
                            <p>{recipe.kitchenUtensils}</p>
                        </div>
                        <div className='colonial-goods'>
                            <h3>Kolonialvarer</h3>
                            <p>{recipe.colonialGoods}</p>
                        </div>
                        <div className='ingredients'>
                            <h3>Ingredienser</h3>
                            <table>
                                <tbody>
                                    <tr className='odd'>
                                        <th></th>
                                        <th>2 personer</th>
                                        <th>4 personer</th>
                                    </tr>
                                    {recipe && recipe.ingredients && Object.values(recipe.ingredients).map((ingredient, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                                            <td>{ingredient[0]}</td>
                                            <td>{ingredient[1]}</td>
                                            <td>{ingredient[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='nutrition-facts'>
                            <h3>Næringsindhold</h3>
                            <table>
                                <tbody>
                                    <tr className='odd'>
                                        <th></th>
                                        <th>Pr. 100g</th>
                                        <th>Pr. portion 575g</th>
                                    </tr>
                                    {recipe && recipe.nutritionFacts && Object.values(recipe.nutritionFacts).map((nutrient, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                                            <td>{nutrient[0]}</td>
                                            <td>{nutrient[1]}</td>
                                            <td>{nutrient[2]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className='allergies'>
                            <h3>Allergener</h3>
                            <p>{recipe.allergies}</p>
                        </div>
                    </div>
                    <div className='right-column'>
                        <div className='step-one'>
                            <div className="image-with-number">
                                <img className='step-image' src={recipe.stepOne.image} alt="" />
                                <div className='number'>1</div>
                            </div>
                            <h3>{recipe.stepOne.headline}</h3>
                            {recipe.stepOne.subParagraphs.map((subParagraph, index) => (
                                <p key={index} className={`text-${index + 1}`}>
                                    {subParagraph}
                                </p>
                            ))}
                            {recipe.stepOne.tip && 
                                <p className='tip'>Tip: {recipe.stepOne.tip}</p>
                            }
                        </div>
                        <div className='step-two'>
                            <div className="image-with-number">
                                <img className='step-image' src={recipe.stepTwo.image} alt="" />
                                <div className='number'>2</div>
                            </div>
                            <h3>{recipe.stepTwo.headline}</h3>
                            {recipe.stepTwo.subParagraphs.map((subParagraph, index) => (
                                <p key={index} className={`text-${index + 1}`}>
                                    {subParagraph}
                                </p>
                            ))}
                            {recipe.stepTwo.tip && 
                                <p className='tip'>Tip: {recipe.stepTwo.tip}</p>
                            }
                        </div>
                        <div className='step-three'>
                            <div className="image-with-number">
                                <img className='step-image' src={recipe.stepThree.image} alt="" />
                                <div className='number'>3</div>
                            </div>
                            <h3>{recipe.stepThree.headline}</h3>
                            {recipe.stepThree.subParagraphs.map((subParagraph, index) => (
                                <p key={index} className={`text-${index + 1}`}>
                                    {subParagraph}
                                </p>
                            ))}
                            {recipe.stepThree.tip && 
                                <p className='tip'>Tip: {recipe.stepThree.tip}</p>
                            }
                        </div>
                        <div className='step-four'>
                            <div className="image-with-number">
                                <img className='step-image' src={recipe.stepFour.image} alt="" />
                                <div className='number'>4</div>
                            </div>
                            <h3>{recipe.stepFour.headline}</h3>
                            {recipe.stepFour.subParagraphs.map((subParagraph, index) => (
                                <p key={index} className={`text-${index + 1}`}>
                                    {subParagraph}
                                </p>
                            ))}
                            {recipe.stepFour.tip && 
                                <p className='tip'>Tip: {recipe.stepFour.tip}</p>
                            }
                        </div>
                        <div className='step-five'>
                            <div className="image-with-number">
                                <img className='step-image' src={recipe.stepFive.image} alt="" />
                                <div className='number'>5</div>
                            </div>
                            <h3>{recipe.stepFive.headline}</h3>
                            {recipe.stepFive.subParagraphs.map((subParagraph, index) => (
                                <p key={index} className={`text-${index + 1}`}>
                                    {subParagraph}
                                </p>
                            ))}
                            {recipe.stepFive.tip && 
                                <p className='tip'>Tip: {recipe.stepFive.tip}</p>
                            }
                        </div>
                        <div className='step-six'>
                            <div className="image-with-number">
                                <img className='step-image' src={recipe.stepSix.image} alt="" />
                                <div className='number'>6</div>
                            </div>
                            <h3>{recipe.stepSix.headline}</h3>
                            {recipe.stepSix.subParagraphs.map((subParagraph, index) => (
                                <p key={index} className={`text-${index + 1}`}>
                                    {subParagraph}
                                </p>
                            ))}
                            {recipe.stepSix.tip && 
                                <p className='tip'>Tip: {recipe.stepSix.tip}</p>
                            }
                        </div>
                    </div>
                </div>
            </RecipeContainer>
        </>
    );
};

export default Recipe;