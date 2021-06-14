import React from 'react';
import './MasterStats.css';

function MasterStats({cardStats}) {
    console.log(cardStats)
    return (
        <>
            {cardStats.map((val) =>(
                <div className='card__stats__master__ability__wrapper'>
                    <div className="card__stats__master__ability">
                        <img src={process.env.PUBLIC_URL + '/images/simbols/Power Stone.png'} alt="Power Stone" className="card__stats__magic__power__stone" />
                        <t>{val.first_cost}: </t>
                        <t>{val.first_effect}</t>            
                    </div>
                    <div className="card__stats__master__ability">
                        <img src={process.env.PUBLIC_URL + '/images/simbols/Power Stone.png'} alt="Power Stone" className="card__stats__magic__power__stone" />
                        <t>{val.second_cost}: </t>
                        <t>{val.second_effect}</t> 
                    </div>
                    <div className="card__stats__master__ability">
                        <img src={process.env.PUBLIC_URL + '/images/simbols/Power Stone.png'} alt="Power Stone" className="card__stats__magic__power__stone" />
                        <t>{val.third_cost}: </t>
                        <t>{val.third_effect}</t> 
                    </div>
                </div>
            ))}
            <div className="full__card__filler" />
        </>
    )
}

export default MasterStats
