import React from 'react';
import BeerItem from './BeerItem';


function ListOfBeers(props){
    const beerInformation ={
        budLight :{
            beerName:"Bud Light",
            beerPicture:"/images/beerPictures/budLight.jpg",
            numTickets:2,
        },blueMoon :{
            beerName:"Blue Moon",
            beerPicture:"/images/beerPictures/blueMoon.jpg",
            numTickets:3,
        },
        budweiser :{
            beerName:"Budweiser",
            beerPicture:"/images/beerPictures/budweiser.jpg",
            numTickets:2,
        },
        coorsLight :{
            beerName:"Coors Light",
            beerPicture:"/images/beerPictures/coorsLight.jpg",
            numTickets:2,
        },
        corona :{
            beerName:"Corona",
            beerPicture:"/images/beerPictures/corona.jpg",
            numTickets:3,
        }, 
        dosEquis:{
            beerName:"Dos Equis",
            beerPicture:"/images/beerPictures/dosEquis.jpg",
            numTickets:3,
        },
        heineken :{
            beerName:"Heineken",
            beerPicture:"/images/beerPictures/heineken.jpg",
            numTickets:4,
        },
        michelobUltra:{
            beerName:"Michelob Ultra",
            beerPicture:"/images/beerPictures/michelobUltra.jpg",
            numTickets:3,
        },
        modelo :{
            beerName:"Modelo",
            beerPicture:"/images/beerPictures/modelo.jpg",
            numTickets:3,
        },
        yumYum :{
            beerName:"Yum Yum",
            beerPicture:"/images/beerPictures/3floyds.jpg",
            numTickets:4,
        }, 
        deesko:{
            beerName:"Deesko",
            beerPicture:"/images/beerPictures/3floyds.jpg",
            numTickets:4,
        },
        armyOfHops :{
            beerName:"Army of Hops",
            beerPicture:"/images/beerPictures/3floyds.jpg",
            numTickets:4,
        },
        bigDipa :{
            beerName:"Big Dipa",
            beerPicture:"/images/beerPictures/wildRose.jpg",
            numTickets:4,
        }, 
        madCow:{
            beerName:"Mad Cow",
            beerPicture:"/images/beerPictures/wildRose.jpg",
            numTickets:4,
        },
        theezeNuts :{
            beerName:"Theeze Nuts",
            beerPicture:"/images/beerPictures/wildRose.jpg",
            numTickets:4,
        }
    }
    return(
        <div className="list-of-beers">
            {Object.keys(beerInformation).map(key =>(
            <BeerItem key={key} beerName={beerInformation[key].beerName} beerPicture={beerInformation[key].beerPicture} numberOfTickets={beerInformation[key].numTickets}/>
            ))}
        </div>
    )
}


export default ListOfBeers;