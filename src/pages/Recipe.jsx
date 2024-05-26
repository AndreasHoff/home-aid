import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';
import recipes from '../assets/recipes.json';

const RecipeContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #c5bb00;
    min-height: 100vh;
    gap: 6rem;
    flex-direction: column;
    align-items: center;

    h3 {
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
            background-color: #f0f0f0;
        }

        .even {
            background-color: #ffffff;
        }
    }

    .recipe-image {
        margin-top: 2rem;
        width: 500px;
    }

    .recipe {
        display: flex;
        margin: 0 2rem;

        .left-column {
            flex: 1;

            > div {
                margin-right: 3rem;
            }
        }

        .right-column {
            flex: 3;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;

            .step-image {
                width: 100%;
                height: 200px;
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

            <RecipeContainer>
                <div>
                    <img className='recipe-image' src={images[recipe.id]} alt={recipe.name} />
                </div>
                <div className='recipe'>
                    <div className='left-column'>
                        <div className='lets-get-going'>
                            <h3>Lad os komme i gang</h3>
                            <p>Husk at vaske hænder i 20 sekunder før du starter. Skyl derefter grøntsager, frugter og urter. Glem ikke at vaske hænder og køkkenredskaber umiddelbart efter håndtering af råt kød og rå fisk</p>
                        </div>
                        <div className='colonial-goods'>
                            <h3>Kolonialvarer</h3>
                            <p>Salt, peber, olivenolie, vand, sukker og smør</p>
                        </div>
                        <div className='ingredients'>
                            <h3>Ingredienser</h3>
                            <table>
                                <tr className='odd'>
                                    <th></th>
                                    <th>2 personer</th>
                                    <th>4 personer</th>
                                </tr>
                                <tr className='even'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='odd'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='even'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='odd'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='even'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='odd'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='even'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='odd'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='even'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='odd'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                                <tr className='even'>
                                    <td>Balsamico</td>
                                    <td>12 ml</td>
                                    <td>25 ml</td>
                                </tr>
                            </table>
                        </div>
                        <div className='nutrition-facts'>
                            <h3>Næringsindhold</h3>
                            <table>
                                <tr className='odd'>
                                    <th></th>
                                    <th>Pr. 100g</th>
                                    <th>Pr. portion 365g</th>
                                </tr>
                                <tr className='even'>
                                    <td>Energi</td>
                                    <td>659kj/157 kcal</td>
                                    <td>2407 kj/575 kcal</td>
                                </tr>
                                <tr className='odd'>
                                    <td>Fedt</td>
                                    <td>5g</td>
                                    <td>20g</td>
                                </tr>
                                <tr className='even'>
                                    <td>Heraf mættet fedt</td>
                                    <td>2g</td>
                                    <td>4g</td>
                                </tr>
                                <tr className='odd'>
                                    <td>Heraf sukkerarter</td>
                                    <td>3g</td>
                                    <td>6g</td>
                                </tr>
                            </table>
                        </div>
                        <div className='allergies'>
                            <h3>Allergener</h3>
                            <p>5) krebsdyr 7) mælk 8) æg 10) selleri 14) sulfitter</p>
                        </div>
                    </div>
                    <div className='right-column'>
                        <div className='step-one'>
                            <img className='step-image' src={image1} alt="" />
                            <h3>Forbered Risotto</h3>
                            <p className='text-one'>Tænd ovnen på 220°C/200°C varmluft</p>
                            <p className='text-two'>Pres eller hak hvidløg fint</p>
                            <p className='text-three'>Smelt smør [1spsk | 2spsk] med en smule olivenolie i en stegepande på middelhøj varme</p>
                            <p className='text-four'>Tilsæt skarlotteløg og halvdelen af hvidløg og steg under omrøring i 2-3 min, eller indtil møre. Tilsæt ris og steg videre i 1-2 min eller indtil let gennemsigtige</p>
                            <p className='text-five'></p>
                            <p className='text-six'></p>
                            <p className='tip'></p>
                        </div>
                        <div className='step-two'>
                            <img className='step-image' src={image2} alt="" />
                            <h3>Bag risotto</h3>
                            <p className='text-one'>Tilsæt vand [5 dl | 10 dl] Hvide løjer & urter og grøntsagsboullion, og bring i kog. Tag panden af varmen</p>
                            <p className='text-two'>Overfør til et ildfast fad og dæk til med sølvpapir.</p>
                            <p className='text-three'>Bag i ovnen i 18-22 min eller indtil væden er absorberet og risene er 'al dente'</p>
                            <p className='text-four'></p>
                            <p className='text-five'></p>
                            <p className='text-six'></p>
                            <p className='tip'>'Al dente' betyder at risene er kogte, men stadig har en smule bid</p>
                        </div>
                        <div className='step-three'>
                            <img className='step-image' src={image3} alt="" />
                            <h3>Bag cherrytomater</h3>
                            <p className='text-one'>Halver cherrytomaterne</p>
                            <p className='text-two'>Fordel på en bageplade med bagepapir. Dryp med balsamico, en smule olivenolie og sukker [1spsk | 2spsk] og krydr med et nip salt og peber</p>
                            <p className='text-three'>Bag i ovnen i 15 min når risottoen har 15 min tilbage</p>
                            <p className='text-four'>Skyl spinat under koldt vand i et dørslag</p>
                            <p className='text-five'></p>
                            <p className='text-six'></p>
                            <p className='tip'></p>
                        </div>
                        <div className='step-four'>
                            <img className='step-image' src={image4} alt="" />
                            <h3>Steg rejer</h3>
                            <p className='text-one'>Snit chili fint</p>
                            <p className='text-two'>Hak basilikum groft</p>
                            <p className='text-three'>Opvarm en smule olivenolie i samme stegepande på middelhøj varme. Opvarm en smule olivenolie i samme stegepande på middelhøj varme.</p>
                            <p className='text-four'>Skyl spinat under koldt vand i et dørslag</p>
                            <p className='text-five'></p>
                            <p className='text-six'></p>
                            <p className='tip'></p>
                        </div>
                        <div className='step-five'>
                            <img className='step-image' src={image5} alt="" />
                            <h3>Bland risotto</h3>
                            <p className='text-one'>Tag risotto ud af ovnen</p>
                            <p className='text-two'>Hak basilikum groft</p>
                            <p className='text-three'>Opvarm en smule olivenolie i samme stegepande på middelhøj varme. Opvarm en smule olivenolie i samme stegepande på middelhøj varme.</p>
                            <p className='text-four'>Skyl spinat under koldt vand i et dørslag</p>
                            <p className='text-five'></p>
                            <p className='text-six'></p>
                            <p className='tip'>Tilsæt et skvæt vand hvis risottoen ser tør ud</p>
                        </div>
                        <div className='step-six'>
                            <img className='step-image' src={image6} alt="" />
                            <h3>Server</h3>
                            <p className='text-one'>Anret risotto i dybe tallerkener</p>
                            <p className='text-two'>Top med rejer og resterende basilikum</p>
                            <p className='text-three'>Server med resterende citronbåde</p>
                            <p className='text-four'>Skyl spinat under koldt vand i et dørslag</p>
                            <p className='text-five'></p>
                            <p className='text-six'></p>
                            <p className='tip'></p>
                        </div>
                    </div>
                </div>
            </RecipeContainer>
        </>
    );
};

export default Recipe;