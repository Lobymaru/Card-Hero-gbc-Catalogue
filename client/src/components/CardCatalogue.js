import React from 'react';
import CardItem from './CardItem'

function CardCatalogue(props) {
    console.log('catalogo')
    console.log(props)
    {props.map((val) =>{
        return (
            <div className='cards'>
                <div className="cards__container">
                    <div className="cards_wrapper">
                        <ul className="cards__item">
                            <CardItem
                            name={val.name}
                            id_cards={val.id_cards}/>
                        </ul>
                    </div>
                </div>         
            </div>
        )})
    }
}

export default CardCatalogue
