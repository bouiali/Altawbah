import styled from "styled-components";
import ImageSlider from "../components/imageSlider";
import { useLocation } from "react-router-dom";
import { SectionHeading } from "../globalStyles";
import { useEffect } from "react";

const TripDetailsContainer = styled.div`
    background-color: transparent;
    .land{
        width: 100%;
        height: 35vh; 
        background-color: rgb(0 5 0 / 70%);
    }
    a{
        cursor: pointer;
        border-bottom: 1px solid black;
        &:hover{
            color: green;
            border-color: green;
        }
    }
    section{
        background-color: white;
    }
    h3{
        line-height: 2;
        i{
            color: green;
            font-size: 35px;
            margin-right: 10px;
        }
    }
    p{
        font-size: medium;
        line-height: 1.5;
    }
    ul{
        padding: 20px;
        li{
            padding: 10px;
        }
    }
    .package-features{
        background-color: #cecece;
        >div:last-child{
            >div{
                padding: 20px 0;
                border-bottom: 2px solid #777;
            }
            >div:last-child{
                border: none;
            }
        }
    }
    .hotel-details{
        display: flex;
        padding: 20px 0;
        justify-content: space-between;
        gap: 20px;
        >div{
           width: 50%;
        }
    }
    .details{
        padding: 20px 0 20px 20px;
        >div{
            display: flex;
            align-items: baseline;
            padding: 10px 0 10px 10px;
            >i{
                color: green;
                font-size: 25px;
                margin-right: 20px;
                width: 30px;
            }
        }
    }
    .trip-details{
        >div{
            padding: 20px 0;
        }
        #flight-information{
            border-bottom: 1px solid #777;
        }
    }
    .tickets{
        display: flex;
        justify-content: space-around;
        gap: 20px;
        flex-wrap: wrap;
        padding: 20px 0;
        .ticket{
            text-align: center;
            border: 1px solid green;
            padding: 20px 10px;
            border-radius: 10px;
            h4{
                color: green;
                font-size: 25px;
                border-bottom: 1px solid;
                padding-bottom: 20px;
            }
            .path{
                display: flex;
                justify-content: space-around;
                gap: 20px;
                flex-wrap: wrap;
                padding-top: 20px;
                border-bottom: 1px solid green;
                p, i{
                    line-height: 2;
                    color: green;
                }
                hr{
                    border: 1px dashed green;
                }
                .depart, .baggage{
                    text-align: start;
                }
                .arrival{
                    text-align: end;
                }
                >div >div{
                    gap: 20px;
                }
            }
        }
    }
    @media(max-width: 950px){
        .hotel-details{
            flex-direction: column;
            >div{
                width: 100%;
            }
        }
        .hotel-details: nth-child(2){
            flex-direction: column-reverse;
        }
    }
    @media (max-width: 430px){
        .tickets{
            .ticket{
                padding: 20px 5px;
                P{
                    font-size: small;
                }
                .path{
                    gap: 5px;
                    >div >div{
                        gap: 10px;
                    }
                }
            }
        }
    }
`;

function TripDetails(){
    const location = useLocation();
    const {trip, tripIndex} = location.state;
    const ticketDetails = trip.ticket_details;

    function goTo(id){
        document.getElementById(id).scrollIntoView();
    }

    function starsMaker(stars){
        let array = [];
        for(let i=0;i<5;++i){
            if(i<stars)
                array.push(<i class="fa-solid fa-star" style={{color:"rgb(255, 212, 59)", fontSize:"20px"}}></i>);
            else
                array.push(<i class="fa-regular fa-star" style={{color:"rgb(255, 212, 59)", fontSize:"20px"}}></i>);
        }
        return array;
    }

    function pathMaker(path){
        return (
            <div className="path">
                <div>
                    <p>{path.airline}</p>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <div className="depart">
                            <i class="fa-solid fa-plane-departure" ></i>
                            <p>{path.from}</p>
                            <p>{path.depart.date}</p>
                            <p>{path.depart.time}</p>
                        </div>
                        <div className="arrival">
                            <i class="fa-solid fa-plane-arrival" ></i>
                            <p>{path.to}</p>
                            <p>{path.arrival.date}</p>
                            <p>{path.arrival.time}</p>
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <p>bagages</p>
                    <div className="baggage">
                        <p>enregistré: {path.checked_baggage}</p>
                        <p>cabin: {path.cabin_baggage}</p>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(()=>{
        document.querySelector(".package-details").scrollIntoView();
    },[])

    return(
        <TripDetailsContainer>
            <div className="land" ></div>
            <section className="package-details">
                <SectionHeading>
                    <h2>details</h2>
                </SectionHeading>
                <h3>
                    <i class="fa-solid fa-link"></i>
                    liens de page :
                </h3>
                <ul>
                    <li onClick={()=>goTo("package-features")}>
                        <a>caractéristiques du package:</a>
                    </li>
                    <ul>
                        <li onClick={()=>goTo("makkah-hotel")}>
                            <a>Hôtel de La Mecque</a>
                        </li>
                        <li onClick={()=>goTo("madinah-hotel")}>
                            <a>Hôtel de Médine</a>
                        </li>
                        <li onClick={()=>goTo("included-services")}>
                            <a>services inclus</a>
                        </li>
                        <li onClick={()=>goTo("optional-services")}>
                            <a>services optionnels</a>
                        </li>
                        <li onClick={()=>goTo("requirments")}>
                           <a>exigences</a>
                        </li>
                    </ul>
                    <li onClick={()=>goTo("trip-details")}>
                        <a>détails du voyage:</a>  
                    </li>
                    <ul>
                        <li onClick={()=>goTo("flight-information")}>
                            <a>informations de vol</a>
                        </li>
                        <li onClick={()=>goTo("trip-program")}>
                           <a>programme de voyage</a>
                        </li>
                    </ul>
                    <li onClick={()=>{goTo("pricing")}}>
                        <a>prix</a>
                    </li>
                </ul>
            </section>
            <section className="package-features" id="package-features">
                <SectionHeading>
                    <h2>caractéristiques</h2>
                </SectionHeading>
                <div>
                    <div className="hotel-details" id="makkah-hotel">
                        <div>
                            <h3>
                                <i class="fa-solid fa-hotel"></i>
                                La Mecque : {trip.makkah_hotel.name}.
                            </h3>
                            <div className="details">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>
                                        taux : 
                                        {
                                            [""].map(()=>starsMaker(trip.makkah_hotel.stars))
                                        }
                                    </p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-person-walking" />
                                    <p>distance : {trip.makkah_hotel.distance} du haram.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-utensils" />
                                    <p>repas : {trip.makkah_hotel.meals}.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-bed" />
                                    <p>nuits : {trip.makkah_hotel.nights}.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    <p>emplacement : <a href={trip.makkah_hotel.location} target="_blank">emplacement de l'hôtel</a>.</p>
                                </div>
                            </div>
                        </div>
                        <ImageSlider links={trip.makkah_hotel.images_paths}></ImageSlider>
                    </div>
                    <div className="hotel-details" id="madinah-hotel">
                        <ImageSlider links={trip.madinah_hotel.images_paths}></ImageSlider>
                        <div>
                            <h3>
                                <i class="fa-solid fa-hotel"></i>
                                la Médine : {trip.madinah_hotel.name}.
                            </h3>
                            <div className="details">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>
                                        taux : 
                                        {
                                            [""].map(()=>starsMaker(trip.madinah_hotel.stars))
                                        }
                                    </p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-person-walking" />
                                    <p>distance : {trip.madinah_hotel.distance} du haram.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-utensils" />
                                    <p>repas : {trip.madinah_hotel.meals}.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-bed" />
                                    <p>nuits : {trip.madinah_hotel.nights}.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    <p>emplacement : <a href={trip.madinah_hotel.location} target="_blank">emplacement de l'hôtel</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="included-services">
                        <h3>
                            <i class="fa-solid fa-list-check"></i>
                            services inclus :
                        </h3>
                        <div className="details">
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>visa.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>billet d'avion.</p>                              
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>hôtels.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>bus modernes pour le transport : depuis et vers l'aéroport, Médine et Makkah Mazarat et entre La Mecque et Médine.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>guide pour : départ, mazarat, oumra et retour. </p>
                                
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>makkah mazarat : jabal al-nour, arafah, muzdalifah, mina et jabal thawr.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>madinah mazarat : quba, qiblatain, ouhoud et jardin.</p>
                            </div>
                        </div>
                    </div>
                    <div id="optional-services">
                        <h3>
                            <i class="fa-solid fa-square-check"></i>
                            services optionnels :
                        </h3>
                        <div className="details">
                            <div>
                                <i class="fa-solid fa-train-subway"></i>
                                <p>Réservation de train : pour voyager entre Médine et La Mecque, cela prend 2h au lieu de 4h en voiture, transport compris entre l'hôtel et la gare, 90$ pour l'économique ou 130$ pour les affaires.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-wheelchair"></i>
                                <p>pousseur : possibiliter de reserver un pousseur pour les persones en necessiter afin d'accomplire la omra.</p>
                            </div>
                        </div>
                    </div>
                    <div id="requirments">
                        <h3>
                            <i class="fa-solid fa-folder"></i>
                            exigences :
                        </h3>
                        <div className="details">
                            <div>
                                <i class="fa-solid fa-passport"></i>
                                <p>Passeport : valable au moins 6 mois à compter de la date de retour.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trip-details" id="trip-details">
                <SectionHeading>
                    <h2>Le programme</h2>
                </SectionHeading>
                <div id="flight-information">
                    <h3>
                        <i class="fa-solid fa-plane"></i>
                        informations de vol :
                    </h3>
                    <div className="tickets">
                        <div className="ticket">
                            <h4>billet aller</h4>
                            {
                                ticketDetails.go_ticket.map((path)=>pathMaker(path))
                            }
                        </div>
                        <div className="ticket">
                            <h4>billet retour</h4>
                            {
                                ticketDetails.return_ticket.map((path)=>pathMaker(path))
                            }
                        </div>
                    </div>
                </div>
                <div id="trip-program">
                    <h3>
                        <i class="fa-solid fa-calendar-days"></i>
                        programme du voyage :
                    </h3>
                </div>
            </section>
            <section id="pricing" style={{backgroundColor:"#cecece"}}>
                <SectionHeading>
                    <h2>prix</h2>
                </SectionHeading>
            </section>
        </TripDetailsContainer>
    );
}

export default TripDetails;