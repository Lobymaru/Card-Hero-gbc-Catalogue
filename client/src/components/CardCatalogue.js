import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import CardItem from './CardItem';
import Modal from './Modal';
import './CardCatalogue.css';
import { motion } from "framer-motion";

function CardCatalogue() {
    
    const container = {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2
        }
      }
    };
    
    const item = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1
      }
    };
    
    const [cardList, setCardList] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null)

    useEffect(() => {
        Axios.get('https://card-hero-catalogue.cyclic.app/api/get-all').then((response) => {
          setCardList(response.data)
        })
      }, []);

    return(
      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {cardList.map((val) => (
          <motion.li key={val.name} className="item" variants={item} whileHover={{scale: 1.3}} onClick={() => setSelectedCard(val)}>
              <CardItem name={val.name} id={val.id_cards}  />
          </motion.li>
        ))}
        {selectedCard && (<Modal setSelectedCard={setSelectedCard} selectedCard={selectedCard} />)}
      </motion.ul>
    );
}

export default CardCatalogue;
