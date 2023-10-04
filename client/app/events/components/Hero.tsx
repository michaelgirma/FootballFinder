import React from 'react';

export default function Hero(events: any) {
    

    return ( 
        <div id="AllEventHero">
            <div id="AllEventNavbarContainer">
                <div id="AllEventsTitleContainer">
                    <h1 id="AllEventsTitle">FootballFinder</h1>
                    <a href={`/`}><p id='AllEventsButton'>Home</p></a>
                </div>
            </div>
            <div id="AllEventHeroContainer">
                {events.events.rows.map((event: any) => (
                    <div id='Card' key={event.id}>
                        <div id="AllEventImageContainer">
                            <img id='AllEventImage' src={event.image} alt="" />
                        </div>
                        <div id='AllEventTextContainer'>
                            <p>{event.name}</p>
                            <p id='AllEventLocation'>{event.location}</p>
                        </div>
                    </div>
                ))}
            </div>
        <style>
            {`
                #AllEventHero {
                    display: flex;
                    position: relative;
                    width: 100vw;
                    height: 100vh;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                #AllEventNavbarContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    align-items: center;
                    justify-content: space-between;
                }
                #AllEventsTitleContainer {
                    display: flex;
                    position: absolute;
                    width: 90%;
                    height: 100%;
                    align-items: center;
                    justify-content: space-between;
                    text-align: center;
                    padding-left: 50px;
                }
                #AllEventsTitle {
                    color: white;
                    font-size: 2em;
                }
                #AllEventsButton {
                    color: white;
                    font-size: 1.5em;
                    border: 1px solid white;
                    width: 100px;
                    border-radius: 30px;
                }
                #AllEventsButton:hover {
                    transform: scale(1.1);
                    transition: transform 0.3s ease-in-out;
                    opacity: 0.5;
                }
                #AllEventsTitleContainer a {
                    text-decoration: none;
                }
                #AllEventHeroContainer{
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    overflow: scroll;   
                }
                #Card {
                    display: flex;
                    position: relative;
                    width: 75%;
                    height: 200px;
                    margin-bottom: 10px;
                    border-radius: 10px;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid white;
                }
                #AllEventImageContainer {
                    display: flex;
                    position: relative;
                    width: 30%;
                    height: 100%;
                    align-items: center;
                    justify-content: center;
                }
                #AllEventImage {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
                #AllEventTextContainer {
                    display: flex;
                    position: relative;
                    width: 70%;
                    height: 100%;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                #AllEventTextContainer p {
                    color: white;
                    font-size: 22px;
                }
                p {
                    color: white;
                }
            `}
        </style>
        </div>
    )
}