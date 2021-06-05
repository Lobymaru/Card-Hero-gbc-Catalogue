import React from 'react';
import './CardItem.css';

function CardItem(props) {
    return (
    <>
        <li className='card__item'>
            <div className='card__container' >
                <figure className='card__item__pic-wrap'>
                    <img src={process.env.PUBLIC_URL + '/images/cards-full-art/' + props.name + '.png'} alt={props.name} className='card__item__img'/>
                </figure>
                <div className='card__item__info'>
                    <h5 className='card__item__name'>{props.id}# {props.name}</h5>
                </div>
            </div>
        </li>
    </>
    )
}

export default CardItem
