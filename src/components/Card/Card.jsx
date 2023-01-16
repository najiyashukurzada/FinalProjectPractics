import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/data').then((res) => {
            setCards(res.data);
            console.log(res.data)
        })
    },[])

    return (
        <div className='row'>
            {cards.map((card, index) => {
                return(
                    <Link className='link' to={`/detail/${card.id}`} key={index} >
                        <div className='card' key={index}>
                              <img src="https://ntvb.tmsimg.com/assets/p23063500_b_h8_ad.jpg?w=960&h=540" alt="wednsday"/>
                              <div className='pro'>
                                  <p>Id: {card.id}</p>
                                  <p>Products: {card.product}</p>
                                  <p>Price: {card.price}</p>
                                  <p>Description: {card.description}</p>
                              </div>
                        </div>
                    </Link>
                    ) 
                })
            }
        </div>
    )
}

export default Card