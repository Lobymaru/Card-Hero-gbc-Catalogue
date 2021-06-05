import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import CardItem from './CardItem'
import './CardCatalogue.css'
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

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
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
          <motion.li key={val.name} className="item" variants={item}>
              <CardItem name={val.name} id={val.id_cards}/>
          </motion.li>
        ))}
      </motion.ul>
    );
}

export default CardCatalogue;
