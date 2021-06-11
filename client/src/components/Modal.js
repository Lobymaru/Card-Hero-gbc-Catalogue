import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Axios from 'axios';
import './Modal.css'
import CardStats from './CardStats'


const Modal = ({ setSelectedCard, selectedCard }) => {

  const [cardStats, setCardStats] = useState([]);

  useEffect(() => {
      Axios.get('http://localhost:3001/api/get-stats', {
        params: {
          cardId:selectedCard.id_cards,
          cardType:selectedCard.type
        }
    }).then(async (response) => {
      setCardStats(response.data)
    })
  }, []);

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedCard(null);
      setCardStats(null);
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className="full__card__container" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <div className="card__basic__info">
          <figure className='full__card__pic-wrap'>
            <img src={process.env.PUBLIC_URL + '/images/cards-full-art/' + selectedCard.name + '.png'} alt={selectedCard.name} className='full__card__img'/>
          </figure>
        </div>
        <div className="full__card__stats__container">
          <CardStats cardStats={cardStats} cardType={selectedCard.type}/>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal;