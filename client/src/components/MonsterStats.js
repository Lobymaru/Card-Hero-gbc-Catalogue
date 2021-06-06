import React from 'react'

function MonsterStats({cardStats}) {
    return (
        <>
        {cardStats.map((val) => (
            <div className="card__stats__wrapper">
                <div className="card__stats__lvl">
                    <p>LVL {val.lvl} HP {val.hp}</p>
                </div>
                <div className="card__stats__attacks">
                    <div className="card__stats_attack__1">
                      <p>{val.atq1.slice(1)}</p>
                    </div>
                    <div className="card__stats__attack__2">
                        <p>{val.atq2.slice(val.atq2.search(" "))}</p>
                    </div>
                </div>
            </div>
        ))}
    </>
    )
}

export default MonsterStats
