import React from 'react';

export default function Hero(team: any) {


    return ( 
        <div id="IndividualHero">
            <div id="IndividualContainer">
                {team.team.rows.map((team: any) => (
                    <div id='card' key={team.id}>
                        <div id="IdImageContainer">
                            <img src={team.image} alt=""/>
                        </div>
                        <div id="IdTextContainer">
                            <div id="IdHomeButtonContainer">
                                <a href={`/`}><p id='IdHomeButton'>Home</p></a>
                            </div>
                            <div id="IdLocationContainer">
                                <a href={`/events/${team.location}`}><p>{team.location}</p></a>
                            </div>
                            <div id="IdNameContainer">
                                <p>{team.name}</p>
                            </div>
                        </div>
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
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                }
                #card {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                }
                #IdImageContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 70%;
                    overflow: hidden;
                    z-index: 1;
                    justify-content: flex-start;
                }
                #IdImageContainer img {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                #IdTextContainer {
                    display: flex;
                    position: relative;
                    width: 40%;
                    height: 80%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    z-index: 2;
                }
                #IdNameContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 25%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: black;
                    z-index: 2;
                }
                #IdNameContainer p {
                    color: white;
                    font-size: 30px;
                    font-weight: bold;
                }
                #IdLocationContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 15%;
                    flex-direction: column;
                    align-items: center; 
                    justify-content: center;
                    text-align: center;
                    color: white;
                }
                #IdLocationContainer p {
                    width: 400px;
                    font-size: 50px;
                    color: white;
                    border: 1px solid white;
                    border-radius: 30px;
                }
                #IdLocationContainer a {
                    text-decoration: none;
                }
                #IdLocationContainer p:hover {
                    transform: scale(1.1);
                    transition: transform 0.5s ease-in-out;
                    opacity: 0.5;
                }
                #IdHomeButtonContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 25%;
                    flex-direction: column;
                    align-items: center; 
                    justify-content: center;
                    text-align: center;
                    color: white;
                }
                #IdHomeButtonContainer p {
                    width: 200px;
                    font-size: 28px;
                    color: white;
                    border: 1px solid white;
                    border-radius: 30px;
                }
                #IdHomeButtonContainer a {
                    text-decoration: none;
                }
                #IdHomeButtonContainer p:hover {
                    transform: scale(1.1);
                    transition: transform 0.5s ease-in-out;
                    opacity: 0.5;
                }
            `}
        </style>
        </div>
    )
}