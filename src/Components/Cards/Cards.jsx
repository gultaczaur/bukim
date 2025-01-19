import React, { useContext, useEffect, useState } from 'react'
import "./cards.css"
import { LuHeart } from "react-icons/lu";
import { useNavigate } from 'react-router';
import { GlobalContext } from '../../Context/Context';
const Cards = ({ item }) => {
    const { addToCart } = useContext(GlobalContext);
    const navigate = useNavigate()
    const [clicked, setClicked] = useState(false); 
    const [isFavorite, setIsFavorite] = useState(false);
    

    // const handleClick = () => {
    //   addToCart(item); 
      
    //   setClicked(true); 
    // };
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const existingItem = favorites.find((favItem) => favItem.id === item.id);
        if (existingItem) {
            setIsFavorite(true);
        }
    }, [item.id]);
    const handleClick = () => {
        let cart = JSON.parse(localStorage.getItem('card')) || []; 
        const existingItem = cart.find((cartItem) => cartItem.id === item.id); 
    
        if (existingItem) {
          existingItem.number += 1; 
        } else {
          item.number = 1; 
          cart.push(item); 
        }
    
        localStorage.setItem('card', JSON.stringify(cart)); 
        setClicked(true); 
      };
      const handleHeartClick = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const existingItem = favorites.find((favItem) => favItem.id === item.id);

        if (existingItem) {
            favorites = favorites.filter((favItem) => favItem.id !== item.id); 
            setIsFavorite(false);
        } else {
            favorites.push(item); 
            setIsFavorite(true);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    return (
        <div className='cards' >

            <div className='cards-cont'>
                <div className='card-cash'><strong>{item.cash}₼</strong> <span>Cash purchase<br />DİSCOUNT!</span></div>
                <div className="cards-heart-scale">
                    <div  onClick={handleHeartClick} className="cards-heart"><LuHeart style={{ color: isFavorite ? 'red' : '' }}  className='cards-heart-icon' /></div>
                    <div className="cards-scale"><a href=""><span></span></a></div>
                </div>
                <img className='card-img' src={item.image} alt="" />
                <h3 className='card-title'>
                    {item.title}
                </h3>
                <div className='price-payment'>
                    <div className='price'>

                        <p>Price</p>
                        <strong>{item.price}₼</strong>
                    </div>
                    <div className='payment'>
                        <p>Installment payment</p>
                        <span>{item.month} month </span><strong>{item.payment}₼</strong>
                    </div>
                </div>
                <button
                    onClick={handleClick}
                    style={{
                        backgroundColor: clicked ? '#4CAF50' : '',
                        color: clicked ? '#fff' : '',
                       
                    }}
                >
                    {clicked ? 'Added to cart' : 'Add to cart'}
                </button>
            </div>
        </div>
    )
}

export default Cards