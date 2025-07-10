import styled from "styled-components";
import ImageSlider from "../components/imageSlider";
import { useLocation } from "react-router-dom";
import { SectionHeading } from "../globalStyles";
import { useEffect } from "react";

const PackageDetailsContainer = styled.div`
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

function PackageDetails(){
    const location = useLocation();
    const {currentPackage, tripIndex} = location.state;
    const ticketDetails = currentPackage.trips[tripIndex].ticket_details;

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
                    <p>baggage</p>
                    <div className="baggage">
                        <p>checked : {path.checked_baggage}</p>
                        <p>cabin : {path.cabin_baggage}</p>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(()=>{
        document.querySelector(".package-details").scrollIntoView();
    },[])

    return(
        <PackageDetailsContainer>
            <div className="land" ></div>
            <section className="package-details">
                <SectionHeading>
                    <h2>details</h2>
                </SectionHeading>
                <h3>
                    <i class="fa-solid fa-link"></i>
                    page links :
                </h3>
                <ul>
                    <li onClick={()=>goTo("package-features")}>
                        <a>package features:</a>
                    </li>
                    <ul>
                        <li onClick={()=>goTo("makkah-hotel")}>
                            <a>makkah hotel</a>
                        </li>
                        <li onClick={()=>goTo("madinah-hotel")}>
                            <a>madinah hotel</a>
                        </li>
                        <li onClick={()=>goTo("included-services")}>
                            <a>included services</a>
                        </li>
                        <li onClick={()=>goTo("optional-services")}>
                            <a>optional services</a>
                        </li>
                        <li onClick={()=>goTo("requirments")}>
                           <a>requirments</a>
                        </li>
                    </ul>
                    <li onClick={()=>goTo("trip-details")}>
                        <a>trip details:</a>  
                    </li>
                    <ul>
                        <li onClick={()=>goTo("flight-information")}>
                            <a>flight information</a>
                        </li>
                        <li onClick={()=>goTo("trip-program")}>
                           <a>trip program</a>
                        </li>
                    </ul>
                    <li onClick={()=>{goTo("pricing")}}>
                        <a>pricing</a>
                    </li>
                </ul>
            </section>
            <section className="package-features" id="package-features">
                <SectionHeading>
                    <h2>features</h2>
                </SectionHeading>
                <div>
                    <div className="hotel-details" id="makkah-hotel">
                        <div>
                            <h3>
                                <i class="fa-solid fa-hotel"></i>
                                makkah hotel : {currentPackage.makkah_hotel.name}.
                            </h3>
                            <div className="details">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>
                                        rate : 
                                        {
                                            [""].map(()=>starsMaker(currentPackage.makkah_hotel.stars))
                                        }
                                    </p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-person-walking" />
                                    <p>distance : {currentPackage.makkah_hotel.distance} to haram.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-utensils" />
                                    <p>meals : {currentPackage.makkah_hotel.meals}.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-bed" />
                                    <p>nights : {currentPackage.makkah_hotel.nights}.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    <p>location : <a href={currentPackage.makkah_hotel.location} target="_blank">hotel location</a>.</p>
                                </div>
                            </div>
                        </div>
                        <ImageSlider links={currentPackage.makkah_hotel.images_paths}></ImageSlider>
                    </div>
                    <div className="hotel-details" id="madinah-hotel">
                        <ImageSlider links={currentPackage.madinah_hotel.images_paths}></ImageSlider>
                        <div>
                            <h3>
                                <i class="fa-solid fa-hotel"></i>
                                madinah hotel : {currentPackage.madinah_hotel.name}.
                            </h3>
                            <div className="details">
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <p>
                                        rate : 
                                        {
                                            [""].map(()=>starsMaker(currentPackage.madinah_hotel.stars))
                                        }
                                    </p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-person-walking" />
                                    <p>distance : {currentPackage.madinah_hotel.distance} to haram.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-utensils" />
                                    <p>meals : {currentPackage.madinah_hotel.meals}.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-bed" />
                                    <p>nights : {currentPackage.madinah_hotel.nights}.</p>
                                </div>
                                <div>
                                    <i class="fa-solid fa-map-location-dot"></i>
                                    <p>location : <a href={currentPackage.madinah_hotel.location} target="_blank">hotel location</a>.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="included-services">
                        <h3>
                            <i class="fa-solid fa-list-check"></i>
                            included services :
                        </h3>
                        <div className="details">
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>visa.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>flight ticket.</p>                              
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>hotels.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>modern buses to transport : from & to airport, madinah & makkah mazarat and between makkah & madinah.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>guid for : depart, mazarat, umrah and return. </p>
                                
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>makkah mazarat : jabal el-nour, arafat, muzdalifah, mina and jabal thaour.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-check"></i>
                                <p>madinah mazarat : quba, qiblatain, ouhoud and garden.</p>
                            </div>
                        </div>
                    </div>
                    <div id="optional-services">
                        <h3>
                            <i class="fa-solid fa-square-check"></i>
                            optional services :
                        </h3>
                        <div className="details">
                            <div>
                                <i class="fa-solid fa-train-subway"></i>
                                <p>train booking : to travel between madinah & makkah, that take 2h instead 4h by car, including transport between hotel & train station, 90$ for economie or 150$ for buisniess.</p>
                            </div>
                            <div>
                                <i class="fa-solid fa-wheelchair"></i>
                                <p>wheelchair pusher : to doing umrah and guiding whith your language for 100$.</p>
                            </div>
                        </div>
                    </div>
                    <div id="requirments">
                        <h3>
                            <i class="fa-solid fa-folder"></i>
                            requirments :
                        </h3>
                        <div className="details">
                            <div>
                                <i class="fa-solid fa-passport"></i>
                                <p>Passport : valid for at least 6 months from the date of departure.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trip-details" id="trip-details">
                <SectionHeading>
                    <h2>program</h2>
                </SectionHeading>
                <div id="flight-information">
                    <h3>
                        <i class="fa-solid fa-plane"></i>
                        flight information :
                    </h3>
                    <div className="tickets">
                        <div className="ticket">
                            <h4>go ticket</h4>
                            {
                                ticketDetails.go_ticket.map((path)=>pathMaker(path))
                            }
                        </div>
                        <div className="ticket">
                            <h4>return ticket</h4>
                            {
                                ticketDetails.return_ticket.map((path)=>pathMaker(path))
                            }
                        </div>
                    </div>
                </div>
                <div id="trip-program">
                    <h3>
                        <i class="fa-solid fa-calendar-days"></i>
                        trip program :
                    </h3>
                </div>
            </section>
            <section id="pricing" style={{backgroundColor:"#cecece"}}>
                <SectionHeading>
                    <h2>pricing</h2>
                </SectionHeading>
            </section>
        </PackageDetailsContainer>
    );
}

export default PackageDetails;