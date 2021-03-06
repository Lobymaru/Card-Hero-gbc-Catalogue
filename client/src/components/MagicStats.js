import React from 'react';
import './MagicStats.css';

function MagicStats({cardStats}) {
    return (
        <>
            {cardStats.map((val) => (
            <div className= "card__stats__magic__wrapper">
                <img src={process.env.PUBLIC_URL + '/images/simbols/Power Stone.png'} alt="Power Stone" className="card__stats__magic__power__stone" />
                <t>{val.cost}: </t>
                <t>{val.effect}</t>
            </div>
            ))}
            <div className="full__card__filler" />
        </>
    )
}

export default MagicStats


