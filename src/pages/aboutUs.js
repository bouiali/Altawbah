import { SectionHeading } from "../globalStyles";
import { useEffect } from "react";
import styled from "styled-components";

const AboutUsContainer = styled.div`
    .land{
        width: 100%;
        height: 35vh; 
        background-color: rgb(0 5 0 / 80%);
    }
    section{
        background-color: white;
        p{
            line-height: 2;
            font-weight: 900;
        }
        span{
            color: green;
            font-size: 30px;
        }
    }
`;

function AboutUs(){

    useEffect(()=>{
        document.querySelector("section").scrollIntoView();
    },[])

    return(
        <AboutUsContainer>
            <div className="land" ></div>
            <section>
                <SectionHeading>
                    <h2>qui sommes-nous</h2>
                </SectionHeading>
                <p>
                    <span>Altawbah Voyages</span> est une agence spécialisée dans l'organisation de voyages de Omra, fondée par un groupe d’étudiants en sciences islamiques vivant en Arabie Saoudite depuis plus de 10 ans. Forts de notre expérience sur place et de notre connaissance approfondie des rites religieux, nous avons à cœur d’accompagner nos frères et sœurs dans leur Omra avec sincérité, professionnalisme et bienveillance.
                    <br/>   
                    Nous mettons un point d’honneur à offrir un encadrement spirituel de qualité, fidèle à la Sunna et à la tradition prophétique, tout en assurant un service logistique optimal pour que chaque pèlerin puisse vivre pleinement ce moment unique, dans la sérénité et le recueillement.
                    <br/>
                    Altawbah Voyage, c’est bien plus qu’un simple voyage : c’est un retour vers Allah, un moment de réforme intérieure, encadré par des personnes qui ont à cœur votre réussite spirituelle.
                </p>
            </section>
        </AboutUsContainer>
    );
}

export default AboutUs;