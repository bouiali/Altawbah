import styled from "styled-components";

const ServiceContainer = styled.div`
    position: relative;
    background-color: white;
    box-shadow: 0 2px 10px #777;
    border-radius: 5px;
    padding: 20px 0 0 0;
    margin: 10px;
    width: 300px;
    transition: 500ms;
    text-align: center;
    .icon_con{
        display: flex;
        justify-content: center;
        i{
            color: #cecece;
            font-size: 70px;
        }
    }
    h3{
        padding: 10px;
        margin: 0;
        font-size: 25px;
        font-weight: bolder;
        color: green;
    }
    .details{
        display: none;
    }
    .details_button{
        display: flex;
        justify-content: end;
        background-color: #cecece;
        padding: 15px;
        button{
            border: none;
            background-color: #cecece;
            color: green;
            font-size: large;
            font-weight: normal;
            padding: 0;
            cursor: pointer;
        }
    }
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: green;
        transition: 500ms;
    }
    &:hover{
        margin-top: 0;
        margin-bottom: 20px;
    }
    &:hover::before{
        width: 100%;
    }
`;

function Service({el}){
    return(
        <ServiceContainer>
            <div className='front'>
                <div className='icon_con'>
                    <i class={el.icon} />
                </div>
                <h3>{el.name}</h3>
                <div className='details_button'>
                    <button>Details</button>
                </div>
            </div>

            {/* need fix */}

            <div className='details'>
                <i class={el.icon}/>
                <p>{el.description}</p>
                <div className='price'>
                    <p>start from<span>{el.price}</span></p>
                </div>
                <button>Buy</button>
            </div>
        </ServiceContainer>
    );
}

export default Service