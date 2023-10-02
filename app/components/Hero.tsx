'use client'
import React from 'react';

export default function Hero(teams: any) {

    return ( 
        <div id="Hero">
            <div id="CardContainer">
                {teams.teams.rows.map((team: any) => (
                    <div id='Card' key={team.id}>
                        <div id="ImageContainer">
                            <a href={team.id}> <img id='Logo' src={team.image} /></a>
                        </div>
                        <div id="NameContainer">
                            <p id='Name'>{team.name}</p>
                            <div id="LocationContainer">
                                <p id='Location'>{team.location}</p>
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
                #CardContainer {
                    display: grid;
                    position: relative;
                    width: 100%;
                    height: 99%;
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
                    border: 1px solid blue;

                }
                #ImageContainer {   
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 80%;
                    overflow: hidden;
                    z-index: 1;
                    justify-content: center;
                    border: 1px solid green;
                }
                #Logo {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                    justify-content: center;
                    border: 1px solid green;
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
                    border: 1px solid red;
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
                    border: 1px solid yellow;
                }
            `}
        </style>
        </div>
    )
}