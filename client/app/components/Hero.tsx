import React from 'react';

export default function Hero(teams: any) {

    return ( 
        <div id="Hero">
            <div id="HomeTitleContainer">
                <h1 id="HomeTitle">FootballFinder</h1>
                <div id="HomeEventsButtonContainer">
                    <a href={`/events`}><p id='HomeEventsButton'>All Events</p></a>
                </div>
            </div>
            <div id="CardContainer">
                {teams.teams.rows.map((team: any) => (
                    <div id='Card' key={team.id}>
                        <div id="ImageContainer">
                            <a href={team.id}><img id='Logo' src={team.image} /></a>
                        </div>
                        <div id="NameContainer">
                            <p id='Name'>{team.name}</p>
                            <div id="LocationContainer">
                                <a href={`/events/${team.location}`}><p id='Location'>{team.location}</p></a>
                            </div>
                        </div>
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
                    overflow: hidden;   
                }
                #HomeTitleContainer { 
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 10%;
                    align-items: center;
                    justify-content: space-between;
                    background-color: black;
                    z-index: 2;
                 }
                #HomeTitle {
                    color: white;
                    font-size: 50px;
                    font-weight: bold;
                    text-shadow: 5px 5px 10px white;
                }
                #HomeEventsButtonContainer{
                    display: flex;
                    position: relative;
                    width: 10%;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-color: black;
                    margin-top: 20px;
                }
                #HomeEventsButton {
                    width: 110px;
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    text-shadow: 5px 5px 10px white;
                    border: 1px solid white;
                    border-radius: 30px;
                }
                #HomeEventsButtonContainer a {
                    text-decoration: none;
                }
                #HomeEventsButton:hover {
                    transform: scale(1.1);
                    transition: transform 0.3s ease-in-out;
                    opacity: 0.5;
                }
                #CardContainer {
                    display: grid;
                    position: relative;
                    width: 100%;
                    height: 85%;
                    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
                    align-items: center;
                    justify-content: center;
                }
                #Card{
                    display: flex;  
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 5px;

                }
                #ImageContainer {   
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 70%;
                    overflow: hidden;
                    z-index: 1;
                    justify-content: center;
                }
                #Logo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                    justify-content: center;
                }
                #Logo:hover {
                    transform: scale(1.1);
                    transition: transform 0.5s ease-in-out;
                }
                #NameContainer {    
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 20%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color: black;
                    z-index: 2;
                }
                #Name {
                    color: white;
                    font-size: 30px;
                    font-weight: bold;
                }
                #LocationContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 50%;
                    flex-direction: column;
                    align-items: center; 
                    justify-content: center;
                    text-align: center;
                    color: white;
                }
                #LocationContainer a {
                    text-decoration: none;
                }
                #Location{
                    color: white;
                    font-size: 20px;  
                    border: 1px solid white;
                    border-radius: 30px;
                    width: 150px;
                }
                #Location:hover{
                    transform: scale(1.1);
                    transition: transform 0.3s ease-in-out;
                    opacity: 0.5;
                }
            `}
        </style>
        </div>
    )
}