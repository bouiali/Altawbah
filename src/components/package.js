import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

const PackageContainer = styled.div`
    position: relative;
    background-color: white;
    box-shadow: 0 2px 10px #777;
    border-radius: 5px;
    margin: 20px 0;
    padding: 10px;
    transition: 500ms;
    max-width: 380px;
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
        margin-bottom: 40px;
    }
    &:hover::before{
        width: 100%;
    }
    >h3{
        text-align: center;
        color: green;
        font-size: 30px;
        font-weight: normal;
        text-transform: uppercase;
        margin: 20px;
    }
    >p{
        text-align: center;
    }
    .images{
        display: flex;
        justify-content: space-between;
        background-color: white;
        gap: 5px;
        >div{
            text-align: center;
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 20px;
            img{
                width: 100%;
                border-radius: 3px;
                transition: 500ms;
            }
            img:hover{
                overflow: hidden;
                transform: scale(110%);
            }
        }
        
    }
    .hotels_names{
        display: flex;
        justify-content: center;
    }
    .features{
        padding: 10px 0 10px 10px;
    }
    .feature{
        padding: 15px 0;
        border-bottom: 1px solid #cecece;
        font-weight: 400;
        font-size: large;
        text-transform: capitalize;
        i{
            padding-right: 10px;
            font-size: 20px;
            color: green;
        }
        select{
            margin-left: 10px;
            font-size: large;
        }
    }
    .stars{
        display: flex;
        justify-content: center;
    }
    .more{
        display: flex;
        justify-content: center;
        padding: 20px;
        button{
            position: relative;
            color: green;
            background-color: white;
            transition: 500ms;
            z-index: 0;
            &::before{
                content: '';
                position: absolute;
                width: 0;
                height: 100%;
                left: 0;
                top: 0;
                background-color: green;
                transition: 500ms;
                z-index: -1;
                
            }
            &:hover{
                color: white;
            }
        }
        button:hover::before{
            width: 100%;
        }
    }
    @media (max-width: 500px){
        .feature{
            font-size: medium;
        }
    }
`;

function Package ({el}){
    //parse trip index
    let [selectValue, setSelectValue] = useState(0);
    
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

    return(
        <PackageContainer>
            <h3>{el.package_type}</h3>
            <p>start from :</p>
            <h3 style={{fontSize:"45px"}}>{el.start_from_price} $</h3>
            <div className='images'>
                <div>
                    <img alt="makkah-hotel" src={el.makkah_hotel.images_paths[0]}/>
                    <h3>{el.makkah_hotel.name}</h3>
                    <div>
                        {
                            [""].map(()=>starsMaker(el.makkah_hotel.stars))
                        }
                    </div>
                </div>
                <div>
                    <img alt="madinah-hotel" src={el.madinah_hotel.images_paths[0]}/>
                    <h3>{el.madinah_hotel.name}</h3>
                    <div>
                        {
                            [""].map(()=>starsMaker(el.madinah_hotel.stars))
                        }
                    </div>
                </div>
            </div>
            <div className='features'>
                <div className='feature'>
                    <i class="fa-solid fa-person-walking" />
                    {el.makkah_hotel.distance} to haram in makkah
                </div>
                <div className='feature'>
                    <i class="fa-solid fa-person-walking" />
                    {el.madinah_hotel.distance} to haram in madinah
                </div>
                <div className='feature'>
                    <i class="fa-solid fa-utensils" />
                    meals : {el.meals}
                </div>
                <div className='feature'>
                    <i class="fa-solid fa-bed" />
                    nights : {el.naights}
                </div>
                <div className='feature'>
                    <i class="fa-solid fa-plane-departure"></i>
                    trips :
                    <select onChange={(e)=>setSelectValue(+e.target.value)}>
                        {
                            el.trips.map((trip, index)=>{
                                return(
                                    <option value={index}>{trip.from} , {trip.date}</option>
                                );
                            })
                        }
                    </select>
                </div>
            </div>
            <div className='more'>
                <Link to="/PackageDetails" state={{ currentPackage: el, tripIndex: selectValue}}>
                    <button>more details</button>
                </Link>
            </div>
        </PackageContainer>
    );
}

export default Package;