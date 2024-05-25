import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    height: 4rem;
    display: flex;
    justify-content: flex-start ;
    align-items: center;
    background-color: #0f6ecd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    gap: 2rem;
    margin-bottom: 0.01px;

    .child {
        margin: 0 1rem;

        .link {
            text-decoration: none;
            color: white;

            &:hover {
                color: #acacac;
            }
        }

        .active {
            color: #acacac;
        }
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <div className="child">
                <NavLink to='/' className='link'>Home</NavLink>
            </div>
            <div className="child">
                <NavLink to='/hello-fresh' className='link'>Hello Fresh</NavLink>
            </div>
        </NavbarContainer>
    )
}

export default Navbar