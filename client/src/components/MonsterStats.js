import React from 'react'
import './MonsterStats.css'

function MonsterStats({cardStats}) {

    const ProcessSimbol=(val) =>{

        const simbol=Simbol(val)

        switch(simbol){
            case "~>*":
                return("Anywhere Effect");
            case "~>":
                return("Anywhere");
            case "--->":
                return("Piercing");
            case ">>>":
                return("Reach");
            case ">>":
                return("Long Shot");
            case "/1/":
                return("Over 1");
            case "/2/":
                return("Over 2");
            default:
                return("None");

        }
    }

    const Simbol= (val) =>{
        return(val.atq2.slice(0, val.atq2.search(" ")))
    }


    return (
        <>
        {cardStats.map((val) => (
            <div className="card__stats__wrapper">
                <div className="card__stats__lvl">
                    <t className= "card__stats__lvl__text">LVL </t>
                    <t>{val.lvl} </t> 
                    <t className="card__stats__lvl__text"> HP </t>
                    <t> {val.hp}</t>
                </div>
                <div className="card__stats__attacks">
                    <div className="card__stats_attack__1">
                        <img src={process.env.PUBLIC_URL + '/images/simbols/Basic Attack.png'} alt="Basic Attack" />
                        <t>{val.atq1.slice(1)}</t>
                    </div>
                    <div className="card__stats__attack__2">
                        <img src={process.env.PUBLIC_URL + '/images/simbols/Power Stone.png'} alt="Power Stone" />
                        <t>{val.atq2_cost}</t>
                        <img src={process.env.PUBLIC_URL + '/images/simbols/' + ProcessSimbol(val) + '.png'} alt={ProcessSimbol(val)} />
                        <t>{val.atq2.slice(-2)}</t>
                        <t>{val.atq2_effect}</t>
                    </div>
                    <div className="card__stats__ability">
                        <p>{val.ability}</p>
                    </div>
                </div>
            </div>
        ))}
    </>
    )
}

export default MonsterStats
