import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const AddRecipeContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #c5bb00;
    min-height: 100vh;
    gap: 6rem;
`;


const AddRecipe = () => {
    return (
        <>
            <Helmet>
                <title>HomeAid | Add recipe</title>
            </Helmet>
        
            <AddRecipeContainer className="container">
                <div>add recipe</div>
            </AddRecipeContainer>
        </>
    )
}

export default AddRecipe