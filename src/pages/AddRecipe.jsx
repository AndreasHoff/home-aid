import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import { db } from '../firebase';

const AddRecipeContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #c5bb00;
    min-height: 100vh;
    gap: 6rem;

    .input-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1em;
    }

    .input-row input {
        flex: 1;
        margin-right: 0.5em;
    }

    .input-row input:last-child {
        margin-right: 0;
    }

    .step {
        margin: 2rem 0;
    }
`;


const AddRecipe = () => {
    const [kitchenUtensils, setKitchenUtensils] = useState('');
    const [name, setName] = useState('');
    const [colonialGoods, setColonialGoods] = useState('');
    const [allergies, setAllergies] = useState('');
    const [urlIdentifier, setUrlIdentifier] = useState('');
    const [stepOneCurrentSubParagraph, setStepOneCurrentSubParagraph] = useState('');
    const [stepTwoCurrentSubParagraph, setStepTwoCurrentSubParagraph] = useState('');
    const [stepThreeCurrentSubParagraph, setStepThreeCurrentSubParagraph] = useState('');
    const [stepFourCurrentSubParagraph, setStepFourCurrentSubParagraph] = useState('');
    const [stepFiveCurrentSubParagraph, setStepFiveCurrentSubParagraph] = useState('');
    const [stepSixCurrentSubParagraphSix, setStepSixCurrentSubParagraph] = useState('');
    const [ingredients, setIngredients] = useState({
        ingredients: [],
    });

    const [stepOne, setStepOne] = useState({
        headline: '',
        image: '',
        subParagraphs: [],
    });
    const [stepTwo, setStepTwo] = useState({
        headline: '',
        image: '',
        subParagraphs: [],
    });
    const [stepThree, setStepThree] = useState({
        headline: '',
        image: '',
        subParagraphs: [],
    });
    const [stepFour, setStepFour] = useState({
        headline: '',
        image: '',
        subParagraphs: [],
    });
    const [stepFive, setStepFive] = useState({
        headline: '',
        image: '',
        subParagraphs: [],
    });
    const [stepSix, setStepSix] = useState({
        headline: '',
        image: '',
        subParagraphs: [],
    });

    const addSubParagraphStepOne = () => {
        if (stepOneCurrentSubParagraph.trim() !== '') {
          setStepOne({
            ...stepOne,
            subParagraphs: [...stepOne.subParagraphs, stepOneCurrentSubParagraph],
          });
          setStepOneCurrentSubParagraph('');
        }
    };

    const addSubParagraphStepTwo = () => {
        if (stepTwoCurrentSubParagraph.trim() !== '') {
          setStepTwo({
            ...stepOne,
            subParagraphs: [...stepTwo.subParagraphs, stepTwoCurrentSubParagraph],
          });
          setStepTwoCurrentSubParagraph('');
        }
    };

    const addSubParagraphStepThree = () => {
        if (currentSubParagraph.trim() !== '') {
          setStepOne({
            ...stepOne,
            subParagraphs: [...stepOne.subParagraphs, currentSubParagraph],
          });
          setCurrentSubParagraph('');
        }
    };

    const addSubParagraphStepFour = () => {
        if (currentSubParagraph.trim() !== '') {
          setStepOne({
            ...stepOne,
            subParagraphs: [...stepOne.subParagraphs, currentSubParagraph],
          });
          setCurrentSubParagraph('');
        }
    };

    const addSubParagraphStepFive = () => {
        if (currentSubParagraph.trim() !== '') {
          setStepOne({
            ...stepOne,
            subParagraphs: [...stepOne.subParagraphs, currentSubParagraph],
          });
          setCurrentSubParagraph('');
        }
    };

    const addSubParagraphStepSix = () => {
        if (currentSubParagraph.trim() !== '') {
          setStepOne({
            ...stepOne,
            subParagraphs: [...stepOne.subParagraphs, currentSubParagraph],
          });
          setCurrentSubParagraph('');
        }
    };

    useEffect(() => {
    console.log('step 1', stepOne.subParagraphs);
    console.log('step 2', stepTwo.subParagraphs);
    console.log('step 3', stepThree.subParagraphs);
    console.log('step 4', stepFour.subParagraphs);
    console.log('step 5', stepFive.subParagraphs);
    console.log('step 6', stepSix.subParagraphs);
    }, [stepOne.subParagraphs, stepTwo.subParagraphs, stepThree.subParagraphs, stepFour.subParagraphs, stepFive.subParagraphs, stepSix.subParagraphs]);

    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a reference to the 'recipes' collection
            const recipesRef = collection(db, 'recipes');
            // Create a new document in the 'recipes' collection with the kitchenUtensils data
            await addDoc(recipesRef, { kitchenUtensils, recipeName, colonialGoods, allergies, urlIdentifier });
            setKitchenUtensils('');
            setName('');
            setColonialGoods('');
            setAllergies('');
            setUrlIdentifier('');
            formRef.current.reset();

            console.log('Recipe added successfully!');
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <>
            <Helmet>
                <title>HomeAid | Add recipe</title>
            </Helmet>
        
            <AddRecipeContainer className="container">
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="input-row">
                        <input 
                            type="text" 
                            value={name}
                            onChange={e => setName(e.target.value)} placeholder="Name of recipe" 
                            required 
                        />
                        <input 
                            type="text" 
                            value={urlIdentifier}
                            onChange={e => setUrlIdentifier(e.target.value)} placeholder="Url Identifier" 
                            required 
                        />
                    </div>
                    <div className="input-row">
                        <input 
                            type="text" 
                            value={allergies}
                            onChange={e => setAllergies(e.target.value)} placeholder="Allergies" 
                            required 
                        />
                        <input 
                            type="text" 
                            value={colonialGoods}
                            onChange={e => setColonialGoods(e.target.value)} placeholder="Colonial Goods" 
                            required 
                        />
                    </div>
                    <div className="input-row">
                        <input 
                            type="text" 
                            value={kitchenUtensils}
                            onChange={e => setKitchenUtensils(e.target.value)} placeholder="Kitchen Utensils" 
                            required 
                        />
                    </div>

                    <div className="steps-container">

                        <div className='stepOne'>
                            <h2>Step One</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepOne.headline}
                                    onChange={e => setStepOne({...stepOne, headline: e.target.value})} placeholder="Overskrift" 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    value={stepOne.image}
                                    onChange={e => setStepOne({...stepOne, image: e.target.value})} placeholder="Url på billede" 
                                    required 
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepOneCurrentSubParagraph}
                                    onChange={e => setStepOneCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                    required 
                                />
                            </div>
                            <button onClick={addSubParagraphStepOne}>Add Sub Paragraph</button>
                            {stepOne.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>

                        <div className='stepTwo'>
                            <h2>Step Two</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepTwo.headline}
                                    onChange={e => setStepTwo({...stepTwo, headline: e.target.value})} placeholder="Overskrift" 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    value={stepTwo.image}
                                    onChange={e => setStepTwo({...stepTwo, image: e.target.value})} placeholder="Url på billede" 
                                    required 
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepTwoCurrentSubParagraph}
                                    onChange={e => setStepTwoCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                    required 
                                />
                            </div>
                            <button onClick={addSubParagraphStepTwo}>Add Sub Paragraph</button>
                            {stepTwo.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>
                        {/* <div className='stepOne'>
                            <h2>Step One</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepOne.headline}
                                    onChange={e => setStepOne({...stepOne, headline: e.target.value})} placeholder="Overskrift" 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    value={stepOne.image}
                                    onChange={e => setStepOne({...stepOne, image: e.target.value})} placeholder="Url på billede" 
                                    required 
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={currentSubParagraph}
                                    onChange={e => setCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                    required 
                                />
                            </div>
                            <button onClick={addSubParagraphStepOne}>Add Sub Paragraph</button>
                            {stepOne.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>
                        <div className='stepOne'>
                            <h2>Step One</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepOne.headline}
                                    onChange={e => setStepOne({...stepOne, headline: e.target.value})} placeholder="Overskrift" 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    value={stepOne.image}
                                    onChange={e => setStepOne({...stepOne, image: e.target.value})} placeholder="Url på billede" 
                                    required 
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={currentSubParagraph}
                                    onChange={e => setCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                    required 
                                />
                            </div>
                            <button onClick={addSubParagraphStepOne}>Add Sub Paragraph</button>
                            {stepOne.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>
                        <div className='stepOne'>
                            <h2>Step One</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepOne.headline}
                                    onChange={e => setStepOne({...stepOne, headline: e.target.value})} placeholder="Overskrift" 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    value={stepOne.image}
                                    onChange={e => setStepOne({...stepOne, image: e.target.value})} placeholder="Url på billede" 
                                    required 
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={currentSubParagraph}
                                    onChange={e => setCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                    required 
                                />
                            </div>
                            <button onClick={addSubParagraphStepOne}>Add Sub Paragraph</button>
                            {stepOne.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>
                        <div className='stepOne'>
                            <h2>Step One</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepOne.headline}
                                    onChange={e => setStepOne({...stepOne, headline: e.target.value})} placeholder="Overskrift" 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    value={stepOne.image}
                                    onChange={e => setStepOne({...stepOne, image: e.target.value})} placeholder="Url på billede" 
                                    required 
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={currentSubParagraph}
                                    onChange={e => setCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                    required 
                                />
                            </div>
                            <button onClick={addSubParagraphStepOne}>Add Sub Paragraph</button>
                            {stepOne.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div> */}
                    </div>
                    <button type="submit">Add Recipe</button>
                </form>
            </AddRecipeContainer>
        </>
    )
}

export default AddRecipe