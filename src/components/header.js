import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import trips from '../data/trips.json';


const HeaderContainer = styled.header`
    position: absolute;
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px 5px 10px;
    margin: 0 20px;
    border-bottom: 2px solid #ececec;
    background-color: rgb(0 0 0 / 30%);
    z-index: 1;
    img{
        height: 80px;
        cursor: pointer;
    }
    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }
    li, .select{
        color: white;
        font-weight: 500;
        font-size: large;
        cursor: pointer;
    }
    .sections{
        justify-content: space-between;
        gap: 30px;
        .active{
            li{
                color: green;
                &::before{
                    background-color: green;
                }
            }
        }
        li{
            position: relative;
            padding: 0;
        }
        li::before{
            content: '';
            position: absolute;
            height: 2px;
            width: 100%;
            left: 0;
            bottom: -39px;
            background-color: white;
        }
        li:hover{
            color: green;
        }
        li:hover::before{
            background-color: green;
        }
    }
    .select{
        position: relative;
        >div{
            display: none;
            flex-direction: column;
            gap: 20px;
            position: absolute;
            width: max-content;
            top: 100%;
            left: 0;
            padding: 20px 10px;
            z-index: 3;
            background-color: rgb(0 0 0 / 70%);
            border-bottom: 3px solid green;
            a{
                color: white;
                font-weight: 500;
                font-size: large;
                cursor: pointer;
                &:hover{
                    color: green;
                }
            }
        }
        &:hover{
            color: green;
            >div{
                display: flex;
            }
        }
    }
    .stack{
        display: none;
        span{
            display: block;
            height: 2px;
            width: 30px;
            background-color: white;
        }
    }
    @media (max-width: 1075px){
        .sections{
            display: none;
            flex-direction: column;
            gap: 20px;
            position: absolute;
            width: 100%;
            top: 100%;
            left: 0;
            padding: 20px 0;
            z-index: 3;
            background-color: rgb(0 0 0 / 70%);
            border-bottom: 3px solid green;
            li, .select{
                padding-left: 20px;
                width: fit-content;
                &::before{
                    width: 0;
                }
            }
            li:hover{
                color: green;
            }
        }
        .stack{
            display: flex;
            flex-direction: column;
            gap: 7px;
            &:hover{
                .section{
                    display: flex;
                }
            }
        }
    }
    @media (min-width: 1076px){
        .sections{
            display: flex !important;
        }
    }
`;

function Header(){

    let tripsData = trips.trips;

    return(
        <HeaderContainer>
             <Link to={"/"}>
                <img src="images/navbarLogo.png" alt="logo"></img>
            </Link>
            <nav>
                <ul className="sections">
                    <NavLink className={({isActive})=>isActive && 'active'} to={"/"}>
                        <li>Acceuil</li>
                    </NavLink>
                    <div className="select">
                        Omra
                        <i class="fa-solid fa-chevron-down" style={{marginLeft: "5px", fontSize: "10px"}}></i>
                        <div>
                            {
                                tripsData != null ? (
                                    tripsData.map((el, index)=>{
                                        if(el.start_from_price != "BIENTÔT"){
                                            return(
                                                <Link to={"/tripDetails"} state={{trip : el, tripIndex : index}}>
                                                    Depart de {el.from}, {el.month}
                                                </Link>
                                            );
                                        }
                                    })
                                ):null
                            }
                        </div>
                    </div>
                    <NavLink className={({isActive})=>isActive && 'active'} to={"/Hajj2026"}>                        
                        <li>Hajj 2026</li>
                    </NavLink>
                    <Link to={"/#services"}>                        
                        <li>Services</li>
                    </Link>
                    <Link className={({isActive})=>isActive && 'active'} to={"/#contact"}>
                        <li>Contactez nous</li>
                    </Link>
                    <NavLink className={({isActive})=>isActive && 'active'} to={"/AboutUs"}>
                        <li>qui sommes-nous ?</li>
                    </NavLink>
                </ul>
                <ul className='stack' onClick={()=>{
                    const sections = document.querySelector(".sections")
                    if(sections.style.display === "flex"){
                        sections.style.display = "none";
                    }else{
                        sections.style.display = "flex";
                    }
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </ul>
            </nav>
        </HeaderContainer>
    );
}

export default Header;