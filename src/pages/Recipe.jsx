import NoSleep from 'nosleep.js';
import React, { useState } from 'react';
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

            > div {
                margin-right: 3rem;
            }
        }

        .right-column {
            flex: 3;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;

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
    const [noSleep, setNoSleep] = useState(new NoSleep());
    const { urlIdentifier } = useParams();
    const recipe = recipes.find((recipe) => recipe.urlIdentifier === String(urlIdentifier));

    const toggleNoSleep = () => {
        !noSleep.isEnabled ? noSleep.enable() : noSleep.disable();
    };

    if (!recipe) {
        return <p>Recipe not found</p>;
    }

    return (
        <>
            <Helmet>
                <title>HomeAid | {recipe.name}</title>
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
                            <p>Stegepande, gryde og skærebræt</p>
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
                            <div className="image-with-number">
                                <img className='step-image' src={image1} alt="" />
                                <div className='number'>1</div>
                            </div>
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
                            <div className="image-with-number">
                                <img className='step-image' src={image2} alt="" />
                                <div className='number'>2</div>
                            </div>
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
                            <div className="image-with-number">
                                <img className='step-image' src={image3} alt="" />
                                <div className='number'>3</div>
                            </div>
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
                            <div className="image-with-number">
                                <img className='step-image' src={image4} alt="" />
                                <div className='number'>4</div>
                            </div>
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
                            <div className="image-with-number">
                                <img className='step-image' src={image5} alt="" />
                                <div className='number'>5</div>
                            </div>
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
                            <div className="image-with-number">
                                <img className='step-image' src={image6} alt="" />
                                <div className='number'>6</div>
                            </div>
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