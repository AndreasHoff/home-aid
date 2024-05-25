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
                <div className='recipe-image'>
                    <img className='image' src={images[recipe.id]} alt={recipe.name} />
                </div>
                <div className='recipe'>
                    <div className='left-column'>
                        <div className='lets-get-going'></div>
                        <div className='colonial-goods'></div>
                        <div className='ingredients'>
                            <table>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <div className='nutrition-facts'></div>
                        <div className='allergies'></div>
                    </div>
                    <div className='right-column'>
                        <div className='step-one'>
                            <img src="" alt="" />
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
                            <img src="" alt="" />
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
                            <img src="" alt="" />
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
                            <img src="" alt="" />
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
                            <img src="" alt="" />
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
                            <img src="" alt="" />
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