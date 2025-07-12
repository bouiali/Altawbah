import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterSection = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: fit-content;
    padding-top: 50px;
    overflow: hidden;
    background-color: rgb(0 5 0 / 80%);
    img{
        width: 200px;
        cursor: pointer;
    }
    h3{
        color: white;
        font-size: 25px;
        font-weight: 400;
        text-transform: capitalize;
        padding: 50px 0 20px 0;
        border-bottom: 2px solid white;
        z-index: 2;
    }
    .social{
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding: 30px 0;
        z-index: 2;
        .fa-brands{
            color: white;
            font-size: 25px;
            transition: 300ms;
            cursor: pointer;
        }
        .fa-square-facebook:hover{
            color: blue;
        }
        .fa-snapchat:hover{
            color: yellow;
        }
        .fa-instagram:hover{
            color: violet;
        }
        .fa-whatsapp:hover{
            color: green;
        }
    }
    >p{
        padding: 50px 0 30px 0;
        z-index: 2;
        color: white;
        margin: 0;
        span{
            color: green;
            text-transform: capitalize;
            font-size: larger;
            font-weight: bold;
        }
    }
`;

function Footer(){
    return (
        <FooterSection>
            <Link to={"/"}>
                <img src='images/logo.png' alt='logo'></img>
            </Link>
            <h3>Nos reseaux</h3>
            <div className='social'>
                <i class='fa-brands fa-square-facebook' onClick={()=> window.open("https://www.facebook.com/profile.php?id=61578053849145","_blank")}></i>
                <i class='fa-brands fa-snapchat' onClick={()=> window.open("https://www.snapchat.com/add/altawbahvoyages?share_id=whY_CWdrYYY&locale=ar-EG","_blank")}/>
                <i class='fa-brands fa-instagram' onClick={()=> window.open("https://www.instagram.com/altawbah.voyages","_blank")}/>
                <i class='fa-brands fa-whatsapp' onClick={()=> window.open("https://wa.me/+33774822082","_blank")}/>
            </div>
            <p>@2025 <span>Altawbah</span> All right reserved</p>
        </FooterSection>
    );
}
export default Footer;