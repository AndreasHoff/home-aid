import { addDoc, collection } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
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
    const [stepSixCurrentSubParagraph, setStepSixCurrentSubParagraph] = useState('');
    const [currentIngredient, setCurrentIngredient] = useState('');
    const [currentSubIngredient, setCurrentSubIngredient] = useState('');
    const [ingredients, setIngredients] = useState({});
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
            ...stepTwo,
            subParagraphs: [...stepTwo.subParagraphs, stepTwoCurrentSubParagraph],
          });
          setStepTwoCurrentSubParagraph('');
        }
    };

    const addSubParagraphStepThree = () => {
        if (stepThreeCurrentSubParagraph.trim() !== '') {
          setStepThree({
            ...stepThree,
            subParagraphs: [...stepThree.subParagraphs, stepThreeCurrentSubParagraph],
          });
          setStepThreeCurrentSubParagraph('');
        }
    };

    const addSubParagraphStepFour = () => {
        if (stepFourCurrentSubParagraph.trim() !== '') {
          setStepFour({
            ...stepFour,
            subParagraphs: [...stepFour.subParagraphs, stepFourCurrentSubParagraph],
          });
          setStepFourCurrentSubParagraph('');
        }
    };

    const addSubParagraphStepFive = () => {
        if (stepFiveCurrentSubParagraph.trim() !== '') {
          setStepFive({
            ...stepFive,
            subParagraphs: [...stepFive.subParagraphs, stepFiveCurrentSubParagraph],
          });
          setStepFiveCurrentSubParagraph('');
        }
    };

    const addSubParagraphStepSix = () => {
        if (stepSixCurrentSubParagraph.trim() !== '') {
          setStepSix({
            ...stepSix,
            subParagraphs: [...stepSix.subParagraphs, stepSixCurrentSubParagraph],
          });
          setStepSixCurrentSubParagraph('');
        }
    };

    const addSubIngredient = (ingredientName) => {
        if (currentSubIngredient.trim() !== '') {
            setIngredients({
                ...ingredients,
                [ingredientName]: [...(ingredients[ingredientName] || []), currentSubIngredient],
            });
            setCurrentSubIngredient('');
        }
    };

    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const recipesRef = collection(db, 'recipes');
            await addDoc(recipesRef, { kitchenUtensils, name, colonialGoods, allergies, urlIdentifier, stepOne, stepTwo, stepThree, stepFour, stepFive, stepSix, ingredients});
            setStepOneCurrentSubParagraph('');
            setStepTwoCurrentSubParagraph('');
            setStepThreeCurrentSubParagraph('');
            setStepFourCurrentSubParagraph('');
            setStepFiveCurrentSubParagraph('');
            setStepSixCurrentSubParagraph('');
            setStepOne({headline: '', image: '', subParagraphs: []});
            setStepTwo({headline: '', image: '', subParagraphs: []});
            setStepThree({headline: '', image: '', subParagraphs: []});
            setStepFour({headline: '', image: '', subParagraphs: []});
            setStepFive({headline: '', image: '', subParagraphs: []});
            setStepSix({headline: '', image: '', subParagraphs: []});
            setCurrentSubIngredient('');
            setCurrentIngredient('');
            setIngredients({});
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
                             
                        />
                        <input 
                            type="text" 
                            value={urlIdentifier}
                            onChange={e => setUrlIdentifier(e.target.value)} placeholder="Url Identifier" 
                             
                        />
                    </div>
                    <div className="input-row">
                        <input 
                            type="text" 
                            value={allergies}
                            onChange={e => setAllergies(e.target.value)} placeholder="Allergies" 
                             
                        />
                        <input 
                            type="text" 
                            value={colonialGoods}
                            onChange={e => setColonialGoods(e.target.value)} placeholder="Colonial Goods" 
                             
                        />
                    </div>
                    <div className="input-row">
                        <input 
                            type="text" 
                            value={kitchenUtensils}
                            onChange={e => setKitchenUtensils(e.target.value)} placeholder="Kitchen Utensils" 
                             
                        />
                    </div>

                    <div className="steps-container">

                        <div id='step-one'>
                            <h2>1</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepOne.headline}
                                    onChange={e => setStepOne({...stepOne, headline: e.target.value})} placeholder="Overskrift" 
                                     
                                />
                                <input 
                                    type="text" 
                                    value={stepOne.image}
                                    onChange={e => setStepOne({...stepOne, image: e.target.value})} placeholder="Url på billede" 
                                     
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepOneCurrentSubParagraph}
                                    onChange={e => setStepOneCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                     
                                />
                            </div>
                            <button type='button' onClick={addSubParagraphStepOne}>Add Sub Paragraph</button>
                            {stepOne.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>

                        <div id='step-two'>
                            <h2>2</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepTwo.headline}
                                    onChange={e => setStepTwo({...stepTwo, headline: e.target.value})} placeholder="Overskrift" 
                                     
                                />
                                <input 
                                    type="text" 
                                    value={stepTwo.image}
                                    onChange={e => setStepTwo({...stepTwo, image: e.target.value})} placeholder="Url på billede" 
                                     
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepTwoCurrentSubParagraph}
                                    onChange={e => setStepTwoCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                     
                                />
                            </div>
                            <button type='button' onClick={addSubParagraphStepTwo}>Add Sub Paragraph</button>
                            {stepTwo.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>

                        <div id='step-three'>
                            <h2>3</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepThree.headline}
                                    onChange={e => setStepThree({...stepThree, headline: e.target.value})} placeholder="Overskrift" 
                                     
                                />
                                <input 
                                    type="text" 
                                    value={stepThree.image}
                                    onChange={e => setStepThree({...stepThree, image: e.target.value})} placeholder="Url på billede" 
                                     
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepThreeCurrentSubParagraph}
                                    onChange={e => setStepThreeCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                     
                                />
                            </div>
                            <button type='button' onClick={addSubParagraphStepThree}>Add Sub Paragraph</button>
                            {stepThree.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>

                        <div id='step-four'>
                            <h2>4</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepFour.headline}
                                    onChange={e => setStepFour({...stepFour, headline: e.target.value})} placeholder="Overskrift" 
                                     
                                />
                                <input 
                                    type="text" 
                                    value={stepFour.image}
                                    onChange={e => setStepFour({...stepFour, image: e.target.value})} placeholder="Url på billede" 
                                     
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepFourCurrentSubParagraph}
                                    onChange={e => setStepFourCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                     
                                />
                            </div>
                            <button type='button' onClick={addSubParagraphStepFour}>Add Sub Paragraph</button>
                            {stepFour.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>

                        <div id='step-five'>
                            <h2>5</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepFive.headline}
                                    onChange={e => setStepFive({...stepFive, headline: e.target.value})} placeholder="Overskrift" 
                                     
                                />
                                <input 
                                    type="text" 
                                    value={stepFive.image}
                                    onChange={e => setStepFive({...stepFive, image: e.target.value})} placeholder="Url på billede" 
                                     
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepFiveCurrentSubParagraph}
                                    onChange={e => setStepFiveCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                     
                                />
                            </div>
                            <button type='button' onClick={addSubParagraphStepFive}>Add Sub Paragraph</button>
                            {stepFive.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>

                        <div id='step-six'>
                            <h2>6</h2>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepSix.headline}
                                    onChange={e => setStepSix({...stepSix, headline: e.target.value})} placeholder="Overskrift" 
                                     
                                />
                                <input 
                                    type="text" 
                                    value={stepSix.image}
                                    onChange={e => setStepSix({...stepSix, image: e.target.value})} placeholder="Url på billede" 
                                     
                                />
                            </div>
                            <div className="input-row">
                                <input 
                                    type="text" 
                                    value={stepSixCurrentSubParagraph}
                                    onChange={e => setStepSixCurrentSubParagraph(e.target.value)}
                                    placeholder="Sub Paragraph" 
                                     
                                />
                            </div>
                            <button type='button' onClick={addSubParagraphStepSix}>Add Sub Paragraph</button>
                            {stepSix.subParagraphs.map((subParagraph, index) => (
                            <p key={index}>{subParagraph}</p>
                            ))}
                        </div>

                    </div>
                    
                    <div>
                        <h2>Ingredienser</h2>
                        <div className="input-row">
                            <input 
                                type="text" 
                                value={currentIngredient}
                                onChange={e => setCurrentIngredient(e.target.value)}
                                placeholder="Ingredient" 
                            />
                            <input 
                                type="text" 
                                value={currentSubIngredient}
                                onChange={e => setCurrentSubIngredient(e.target.value)}
                                placeholder="Sub Ingredient" 
                            />
                        </div>
                        <button type="button" onClick={() => addSubIngredient(currentIngredient)}>Add Sub Ingredient</button>
                        {Object.entries(ingredients).map(([ingredientName, subIngredients], index) => (
                        <div key={index}>
                            <h3>{ingredientName}</h3>
                            {subIngredients.map((subIngredient, subIndex) => (
                                <p key={subIndex}>{subIngredient}</p>
                            ))}
                        </div>
                        ))}
                    </div>
                    <button type="submit">Add Recipe</button>
                </form>
            </AddRecipeContainer>
        </>
    )
}

export default AddRecipe