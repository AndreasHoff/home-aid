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
`;


const AddRecipe = () => {
    const [kitchenUtensils, setKitchenUtensils] = useState('');
    const [name, setName] = useState('');
    const [colonialGoods, setColonialGoods] = useState('');
    const [ingredients, setIngredients] = useState('');

    const formRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a reference to the 'recipes' collection
            const recipesRef = collection(db, 'recipes');
            // Create a new document in the 'recipes' collection with the kitchenUtensils data
            await addDoc(recipesRef, { kitchenUtensils });
            setKitchenUtensils('');
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
                    <input 
                        type="text" 
                        value={kitchenUtensils}
                        onChange={e => setKitchenUtensils(e.target.value)} placeholder="Kitchen Utensils" 
                        required 
                    />
                    <button type="submit">Add Recipe</button>
                </form>
            </AddRecipeContainer>
        </>
    )
}

export default AddRecipe