import styled from "styled-components";
import { Link } from "react-router-dom";
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
            color: green;
        }
        .active::before{
            background-color: green;
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
    @media (max-width: 850px){
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
    @media (min-width: 850px){
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
                    <Link to={"/"}>
                        <li className='active'>Acceuil</li>
                    </Link>
                    <div className="select">
                        Omra
                        <div>
                            {
                                tripsData != null ? (
                                    tripsData.map((el, index)=>{
                                        return(
                                            <Link to={"/tripDetails"} state={{trip : el, tripIndex : index}}>
                                                Depart de {el.from}, {el.month}
                                            </Link>
                                        );
                                    })
                                ):null
                            }
                        </div>
                    </div>
                    <Link to={"/#services"}>                        
                        <li>Services</li>
                    </Link>
                    <Link to={"/#contact"}>
                        <li>Contactez nous</li>
                    </Link>
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