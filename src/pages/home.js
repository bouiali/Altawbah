import styled from 'styled-components';
import { useEffect, useState } from 'react';
import {SectionHeading} from '../globalStyles';
import packages from '../data/packages.json';
import services from '../data/services.json';
import trips from '../data/trips.json';
import Package from '../components/package';
import Service from '../components/service';
import Trip from '../components/trip';
import { useLocation, Link } from 'react-router-dom';


const Landing = styled.section`
    position: relative;
    left: 0;
    top: 0;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    z-index: 0;
    padding: 0;
    i{
        position: absolute;
        font-size: 30px;
        font-weight: bolder;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        z-index: 2;
        margin: 0;
        transition: 500ms;
    }
    i:hover{
        color: green;
    }
   
    .home_background{
        height: 90vh;
        min-width: 100%;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
    &::before{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(0 5 0 / 80%);
        z-index: 2;
    }
    .fa-chevron-left{
        left: 20px;
    }
    .fa-chevron-right{
        right: 20px;
    }
    .text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -25%);
        text-align: center;
        width: 100%;
        z-index: 2;
        h2{
            letter-spacing: -3px;
            color: green;
            font-size: 65px;
        }
        p{
            color: white;
            font-size: 25px;
            font-weight: 500;
            line-height: 2;
        }
        button{
            margin-top: 95px;
            background-color: green;
            color: white;
        }
    }
    @media(max-width: 650px){
        .text h2{
            font-size: 50px;
        }
    }
    @media(max-width: 430px){
        .text p{
            font-size: 20px;
        }
    }
    @media(max-width: 365px){
        .text p{
            font-size: small;
        }
    }
    .text {
        animation: landing-text-animation 1 2s linear;
    }
    @keyframes landing-text-animation {
        from {
            gap: 300px;
            opacity: 0;
        }
        to {
            gap: 20px;
            opacity: 1;
        }
    }
`;

const Packages = styled.section`
    background-color: white;
    .packages_container{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    >p{
        text-align: center;
        color: black;
        padding: 30px 0;
        font-size: 25px;
        font-weight: 400;
    }

    >button{
        background-color: green;
        color: white;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Trips = styled.section`
    background-color: white;
    .trips_container{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    >button{
        background-color: green;
        color: white;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        margin: 30px 0;
    }
`;

const Services = styled.section`
    background-color:#cecece;
    .services_container{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

const Subscribe = styled.section`
    position: relative;
    color: white;
    font-size: larger;
    &::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgb(0 0 0 / 70%);
    }
    .container{
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;
        p {
            margin: 0;
            line-height: 2;
            margin-left: 50px;
        }
        form {
            display: flex;
            justify-content: space-between;
            gap: 10px;
            align-items: center;
            border: 1px solid white;
            background-color: transparent;
            
            input:first-of-type{
                background-color: transparent;
                border: none;
                width: fit-content;
                outline: none;
                font-size: large;
                color: white;
                &::placeholder{
                    color: white;
                    text-transform: capitalize;
                }
            }
            input:last-of-type{
                background-color: green;
                color: white;
                border: none;
                text-transform: uppercase;
                padding: 20px;
            }
            i{
                font-size: 20px;
                color: white;
                padding: 0 0 0 20px;
            } 
        }
    }
    @media (max-width:992px){
        .container{
            flex-wrap: wrap;
            text-align: center;
            grid-gap: 50px;
            justify-content: center;
            p{
                margin: 0;
            }
            form{
                gap: 5px;
                input:first-of-type{
                    font-size: small;
                }
                input:last-of-type{
                    padding: 20px 10px;
                }
                i{
                    padding: 0 0 0 10px;
                }
            }
        }
    }
`;

const ContactUs = styled.section`
    background-color: white;    
    .contact{
        display: flex;
        justify-content: space-around;
        align-items: baseline;
        gap: 50px;
        flex-wrap: wrap;
        form{
            input,textarea{
                width: 100%;
                border: none;
                height: 50px;
                margin: 20px 0;
                padding: 0 20px;
                font-size: medium;
                background-color: #eee;
                border-bottom: 2px solid #777;
                forced-color-adjust: none;
            }
            textarea{
                padding: 10px 20px;
                height: 100px;
                resize: none;
                font-size: 20px;
            }
            button{
                padding: 10px 20px;
                border: none;
                background-color: white;
                border-radius: 5px;
                border: 2px solid green;
                color: green;
                font-size: larger;
                font-weight: bold;
                transition: 500ms;
            }
            button:hover{
                color: white;
                background-color: green;
            }
            input:focus, textarea:focus{
                outline: none;
                border-bottom: 2px solid green;
            }
        }
        .contact_info{
            >div{
                padding: 10px 0;
            }
            h3{
                font-weight: normal;
            }
            p{
                line-height: 2;
                color: #777;
                font-size: large;
            }
            address{
                line-height: 2;
                color: #777;
                font-size: large;
            }
            i{
                color: green;
                padding-right:  5px;
            }
        }
    }
    @media(max-width: 719px ){
        .contact_container{
            text-align: center;
        }
    }
`;

function Home(){
    //landing
    let paths = ["images/haram-gate.jpeg","images/haram-gate2.jpeg"];
    let [imageIndex, setImageIndex] = useState(0);

    //packeges
    let packagesData = packages.packages;

    //trips
    let tripsData = trips.trips;

    //services
    let servicesData = services.services;

    //hashing
    const location = useLocation();
    useEffect(()=>{
        if(location.hash){
            const el = document.getElementById(location.hash.replace('#',''));
            if(el)
                el.scrollIntoView({behavior:"smooth"});
        }else{
            document.querySelector("header").scrollIntoView();
        }
    },[location]);

    return(
        <>
            {/* landing */}

            <Landing>
                <div className='backgrounds'>
                    <img alt="landing-background" className='home_background' src={paths[imageIndex]}/>
                </div>
                <div className='text'>
                    <h2>Altawbah voyages</h2>
                    <p>Votre chemin vers la maison sacree</p>
                    <Link to={"/#trips"}>
                        <button>Nos packages</button>
                    </Link>
                </div>
                <i class="fa-solid fa-chevron-left" 
                    onClick={()=>{
                        if(imageIndex > 0)
                            setImageIndex(imageIndex-1);
                        else
                            setImageIndex(paths.length-1);
                    }}
                />
                <i class="fa-solid fa-chevron-right" 
                    onClick={()=>{
                        let back = document.querySelector(".backgrounds");
                        back.style.left = "-100%";
                        if(imageIndex < paths.length-1)
                            setImageIndex(imageIndex+1);
                        else
                            setImageIndex(0);
                    }}
                />
            </Landing>

            {/* packages 
            <Packages id='packages'>
                <SectionHeading>
                    <h2>Packages</h2>
                </SectionHeading>
                <div className='packages_container'>
                    {
                        packagesData != null ? (
                            packagesData.map((el)=>{
                                return(
                                    <Package el = {el}/>
                                );
                            })
                        ):null
                    }
                </div>
                <p>Contact us if you have special request</p>
                <button onClick={()=>{ window.open("#contact","_self") }}>Contact us</button>
            </Packages>
            */}

            {/* trip */}

            <Trips id='trips'>
                <SectionHeading>
                    <h2>nos packages</h2>
                </SectionHeading>
                <div className='trips_container'>
                    {
                        tripsData != null ? (
                            tripsData.map((el)=>{
                                return(
                                    <Trip el = {el}/>
                                );
                            })
                        ):null
                    }
                </div>
                <button onClick={()=>{ window.open("#contact","_self") }}>Contactez nous</button>
            </Trips>

            {/* services */}

            <Services id='services'>
                <SectionHeading>
                    <h2>Services</h2>
                </SectionHeading>
                <div className='services_container'>
                    {
                        services != null ?(
                            servicesData.map((el)=>{
                            return(
                                    <Service el={el}/>
                                );
                            })
                        ):null
                    }
                </div>
            </Services>

            {/* subscribe */}

            <Subscribe>
                <div class="container">
                    <form action="">
                        <i class="far fa-envelope fa-lg"></i>
                        <input type="email" placeholder="Votre email"/>
                        <input type="submit" value="S'aboner"/>
                    </form>
                    <p>Abonnez-vous pour recevoir les derniers packages et promotions.</p>
                </div>
            </Subscribe>        

            {/* contact us*/}

            <ContactUs id='contact'>
                <SectionHeading>
                    <h2>contactez-nous</h2>
                </SectionHeading>
                <div className='contact'>
                    <form>
                        <input type='text' placeholder='Nom'></input>
                        <input type='email' placeholder='Email'></input>
                        <textarea placeholder='Demande'></textarea>
                        <button type='submit'>Envoyer</button>
                    </form>
                    <div className='contact_info'>
                        <div>
                            <h3>Entrer en contact</h3>
                            <p>
                                <i class="fa-solid fa-phone" />
                                +966 56 672 1559
                            </p>
                            <p>
                                <i class="fa-solid fa-phone" />
                                +966 54 701 8646
                            </p>
                        </div>
                        {/*
                        <div>
                            <h3>where we are</h3>
                            <address>
                                <i class="fa-solid fa-location-dot" />
                                madinah, center<br/>
                                123-4567-890<br/>
                                Ksa
                            </address>
                        </div>
                        */}
                        <div>
                            <h3>Nos heures de travails</h3>
                            <p>
                                <i class="fa-regular fa-clock" />
                                24/7
                            </p>
                        </div>
                    </div>
                </div>
            </ContactUs>
        </>
    )
}

export default Home;