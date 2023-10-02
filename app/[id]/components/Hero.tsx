import React from 'react';

export default function Hero(team: any) {


    return ( 
        <div id="Hero">
            <div id="HeroContainer">
                {team.team.rows.map((team: any) => (
                    <div id='' key={team.id}>
                        <p>{team.name}</p>
                    </div>
                ))}
            </div>
        <style>
            {`
                #Hero {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                #HeroContainer {}
                p {
                    color: red;
                }
            `}
        </style>
        </div>
    )
}