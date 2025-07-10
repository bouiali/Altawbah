import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

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
    li{
        color: white;
        font-weight: 500;
        font-size: large;
        cursor: pointer;
    }
    .sections{
        display: flex;
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
            bottom: -37px;
            background-color: white;
        }
        li:hover{
            color: green;
        }
        li:hover::before{
            background-color: green;
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
    .down{
        display: flex;
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
        li{
            padding-left: 20px;
        }
        li:hover{
            color: green;
        }
    }
    @media (max-width: 850px){
        .sections{
            display: none;
        }
        .stack{
            display: flex;
            flex-direction: column;
            gap: 7px;
        }
    }
`;

function Header(){

    let classNames = ["sections", "down"];
    let [index, setIndex] = useState(0);

    return(
        <HeaderContainer>
            <img src="images/navbarLogo.png" alt="logo"></img>
            <nav>
                <ul className={classNames[index]}>
                    <Link to={"/"}>
                        <li className='active'>acceuil</li>
                    </Link>
                    <Link to={"/#packages"}>
                        <li>Packages</li>
                    </Link>
                    <Link to={"/#services"}>                        
                        <li>Services</li>
                    </Link>
                    <Link to={"/#contact"}>
                        <li>Contactez nous</li>
                    </Link>
                </ul>
                <ul className='stack' onClick={()=>{setIndex((index+1) % 2);}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </ul>
            </nav>
        </HeaderContainer>
    );
}

export default Header;