import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Axios from 'axios';
import './Modal.css'
import CardStats from './CardStats'


const Modal = ({ setSelectedCard, selectedCard }) => {

  const [cardStats, setCardStats] = useState([]);
  const [expansionColor, setExpansionColor] = useState(null);
  const [bannerColor, setBannerColor] = useState(null);

  useEffect(() => {
    Axios.get('https://card-hero-gbc-catalogue.onrender.com/api/get-stats', {
      params: {
        cardId:selectedCard.id_cards,
        cardType:selectedCard.type
      }
    }).then(async (response) => {
      setCardStats(response.data);
      setExpansionColor(getExpansionColorByInitials(getInitials(selectedCard.expansion)));
      setBannerColor(getBannerColor(selectedCard.type))
    })
  }, [selectedCard, expansionColor, bannerColor]);

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedCard(null);
      setCardStats(null);
    }
  }

  const getInitials = (expansion) => {
    return(expansion.replace(/[a-z, &]/g, ''))
  }

  const normalizeId = (id) =>{
    let zero='';
    const idString=id.toString();
    let i = 0;
    for (; i < 3-idString.length; i++) {
      zero=zero+'0'
    }
    return(zero+id)
  }

  const getExpansionColorByInitials = (expansionInitials) => {
    switch(expansionInitials){
      case "MM" :
        return('#68c858');
      case "MW":
        return('#4098f8');
      case "SW":
        return('#e88000');
      case "SI":
        return('#c020a0');
      default:
        return("aliceblue"); 
    }
  }

  const getBannerColor = (typeOfCard) =>{
    switch(typeOfCard){
      case ('monster'):
        return('#ff0000');
      case('magic'):
        return('#0000ff');
      default:
        return('#00ff00')
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className="full__card__container" 
        style={{background:expansionColor}}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <div className="card__basic__info" >
          <figure className='full__card__pic-wrap'>
            <img src={process.env.PUBLIC_URL + '/images/cards-full-art/' + selectedCard.name + '.png'} alt={selectedCard.name} className='full__card__img'/>
          </figure>
          <div className="card__basic__info__data__wrapper">
            <div className="card__basic__info__name__wrapper">
              <div className="card__basic__info__expansion" style={{color:expansionColor}}>{getInitials(selectedCard.expansion)}</div>
              <div className="card__basic__info__id">{normalizeId(selectedCard.id_cards)}</div>
              <div className="card__basic__info__name">{selectedCard.name}</div>
            </div>
            <div className="card__basic__info__type__wrapper" style={{background:bannerColor}}>
              <p style={{background:bannerColor}}>{selectedCard.type}</p>
            </div>
            <div className="card__basic__info__flavor__text__wrapper">

            </div>
          </div>
        </div>
        <div className="full__card__stats__container">
          <CardStats cardStats={cardStats} cardType={selectedCard.type} cardExpansionColor={expansionColor}/>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Modal;
