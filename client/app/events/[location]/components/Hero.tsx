import React from 'react';

export default function Hero(events: any) {
    
    console.log(events.events.rows);
    return ( 
        <div id="Hero">
            <div id="EventTitleNavbarContainer">
                <div id="EventsTitleContainer">
                    <h1 id="EventTitle">FootballFinder</h1>
                    <a href={`/`}><p id='EventsButton'>Home</p></a>
                </div>
            </div>
            <div id="HeroContainer">
                {events.events.rows.map((event: any) => (
                    <div id='Card' key={event.id}>
                        <div id="EventImageContainer">
                            <img id='EventImage' src={event.image} alt="" />
                        </div>
                        <div id='EventTextContainer'>
                            <p>{event.name}</p>
                            <p>{event.location}</p>
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
                    overflow: scroll;
                }
                #EventTitleNavbarContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 10%;
                    align-items: center;
                    justify-content: space-between;
                }
                #EventTitle {
                    color: white;
                    font-size: 2em;
                }
                #EventsTitleContainer {
                    display: flex;
                    position: absolute;
                    width: 90%;
                    height: 100%;
                    align-items: center;
                    justify-content: space-between;
                    text-align: center;
                    padding-left: 50px;
                }
                #EventsTitleContainer a {
                    text-decoration: none;
                }
                #EventsButton {
                    width: 110px;
                    color: white;
                    font-size: 20px;
                    font-weight: bold;
                    border: 1px solid white;
                    border-radius: 30px;
                }
                #EventsButton:hover {
                    transform: scale(1.1);
                    transition: transform 0.3s ease-in-out;
                    opacity: 0.5;
                }
                #HeroContainer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    overflow: scroll;
                }
                #Card {
                    display: flex;
                    position: relative;
                    width: 90%;
                    height: 300px;
                    margin-top: 20px;
                }
                #EventImageContainer {
                    display: flex;
                    position: relative;
                    width: 80%;
                    height: 100%;
                    border: 1px solid white;
                }
                #EventImage {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                #EventTextContainer {
                    display: flex;
                    position: relative;
                    width: 50%;
                    height: 100%;
                }
                #EventTextContainer {
                    display: flex;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border: 1px solid white;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                p {
                    color: white;
                }
            `}
        </style>
        </div>
    )
}