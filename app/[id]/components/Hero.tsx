import React from 'react';

export default function Hero(team: any) {


    return ( 
        <div id="IndividualHero">
            <div id="IndividualContainer">
                {team.team.rows.map((team: any) => (
                    <div id='' key={team.id}>
                        <p>{team.name}</p>
                    </div>
                ))}
            </div>
        <style>
            {`
                #IndividualHero {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                #IndividualContainer{
                    display: flex;  
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                p {
                    color: red;
                }
            `}
        </style>
        </div>
    )
}