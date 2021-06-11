import React from 'react';
import MonsterStats from './MonsterStats'
import MagicStats from './MagicStats'
import MasterStats from './MasterStats'

function CardStats({cardStats, cardType}) {
    console.log("type", cardType)
    console.log("Stats", cardStats)

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
                        <MagicStats cardStats={cardStats}/>
                    </>);
            default:
                return (
                    <>
                        <MasterStats cardStats={cardStats}/>
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
