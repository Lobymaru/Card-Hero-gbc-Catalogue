import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Axios from 'axios';

const Modal = ({ setSelectedCard, selectedCard }) => {

  const [cardStats, setCardStats] = useState([]);

  useEffect(() => {
     Axios.get('http://localhost:3001/api/get-stats', {
      params: {
        cardId: selectedCard.id_cards,
        cardType: selectedCard.type
      }
    }).then((response) => {
      setCardStats(response.data)
    })
  }, []);

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedCard(null);
    }
  }

  console.log(selectedCard.id_cards)
  console.log(cardStats)

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className="full__card__container" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <figure className='full__card__pic-wrap'>
          <img src={process.env.PUBLIC_URL + '/images/cards-full-art/' + selectedCard + '.png'} alt={selectedCard} className='full__card__img'/>
        </figure>
      </motion.div>
    </motion.div>
  )
}

export default Modal;