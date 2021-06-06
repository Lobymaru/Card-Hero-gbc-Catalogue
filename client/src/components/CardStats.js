import React from 'react';
import MonsterStats from './MonsterStats'

function CardStats({cardStats, cardType}) {

    const DrawMagicStats= () =>{
        return (null)
    }

    const DrawMasterStats= () =>{
        return (null)
    }
    const DrawPost= () =>{
        switch(cardType){
            case "monster": 
                return (
                    <>
                        <MonsterStats cardStats={cardStats}/>
                    </>);
            case "magic": 
                return (
                    <>
                        {DrawMagicStats()}
                    </>);
            default:
                return (
                    <>
                        {DrawMasterStats()}
                    </>);
        }
    }
    return (
        <>
            {DrawPost()}
        </>
    )
}

export default CardStats
