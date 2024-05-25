import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import image1 from '../assets/images/1.png'
import image2 from '../assets/images/2.png'
import image3 from '../assets/images/3.png'
import image4 from '../assets/images/4.png'
import image5 from '../assets/images/5.png'
import image6 from '../assets/images/6.png'
import image7 from '../assets/images/7.png'
import image8 from '../assets/images/8.png'
import recipes from '../assets/recipes.json'
import '../styles/HelloFresh.css'

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

const HelloFresh = () => {
  return (
    <>
        <Helmet>
            <title>HomeAid | HelloFresh </title>
        </Helmet>

        <div className="container">
            <div className='gallery'>
                {recipes.map((recipe) => (
                    <Link key={recipe.id} to={`/hello-fresh/${recipe.urlIdentifier}`}>
                        <div className="item">
                            <img src={images[recipe.id]} alt={recipe.name} />
                            <p>{recipe.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>
  )
}

export default HelloFresh