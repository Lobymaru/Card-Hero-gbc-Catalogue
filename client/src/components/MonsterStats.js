import React from 'react';
import './MonsterStats.css';

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
        let simbolEnd = val.atq2.search(" ")
        if (simbolEnd === -1){simbolEnd = val.atq2.length}
        return(val.atq2.slice(0, simbolEnd))
    }

    const CheckSecondAttack = (val) =>{
        if (val.atq2 === '') {return (false)}
        else {return (true)}
    }

    const CheckAbility = (val) =>{
        if (val.ability === '') {return (false)}
        else {return (true)}
    }

    const AttackDamage = (val) =>{
        if (val.atq2.slice(-1) === 'D' | val.atq2.slice(-1) === 'p') {return(val.atq2.slice(-2))}
        else {return('')}
    }

    const SecondAttack = ({val}) =>{
        return(
            <div className="card__stats__attack__2">
                <div className="card__stats__attack__2__damage">
                    <img src={process.env.PUBLIC_URL + '/images/simbols/Power Stone.png'} alt="Power Stone" className="card__stats__attack__2__power__stone" />
                    <t>{val.atq2_cost}</t>
                    <img src={process.env.PUBLIC_URL + '/images/simbols/' + ProcessSimbol(val) + '.png'} alt={ProcessSimbol(val)} className="card__stats__attack__2__simbol" />
                    <t>{AttackDamage(val)}</t>
                </div>
                <t>{val.atq2_effect}</t>
            </div>
        )}

    const Ability = ({val}) => {
        return(
            <div className="card__stats__ability">
                <p>{val.ability}</p>
            </div>)
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
                        <img src={process.env.PUBLIC_URL + '/images/simbols/Basic Attack.png'} alt="Basic Attack" className="card__stats__attack__1__simbol"/>
                        <t>{val.atq1.slice(1)}</t>
                    </div>
                        {CheckSecondAttack(val) && <SecondAttack val={val}/>}
                        {CheckAbility(val) && <Ability val={val}/>}
                </div>
            </div>
        ))}
        <div className="full__card__filler" />
    </>
    )
}

export default MonsterStats
