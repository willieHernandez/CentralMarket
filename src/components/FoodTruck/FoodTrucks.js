import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PictureWithDescription from '../PictureWithDescription';
import FoodTruckOverview from './FoodTruckOverview';
import OptionContainer from '../OptionContainer';


class FoodTruck extends Component{
    constructor(props){
        super(props)

        this.state = {
            foodTruckList:{
                truck1:{
                    foodTruckName:"Sloppy Pizza",
                    foodTruckPic:"/images/foodTruckPictures/pizza.jpg",
                },
                truck2:{
                    foodTruckName:"Dumbo's Ears",
                    foodTruckPic:"/images/foodTruckPictures/elephantEar.jpg",
                },
                truck3:{
                    foodTruckName:"Crabby Patties",
                    foodTruckPic:"/images/foodTruckPictures/krabbyPatty.jpg",
                },
                truck4:{
                    foodTruckName:"Ohh Me So Hungy",
                    foodTruckPic:"/images/foodTruckPictures/asianFood.jpg",
                },
                truck5:{
                    foodTruckName:"Get Some Before I am Sent Back",
                    foodTruckPic:"/images/foodTruckPictures/burrito.jpg",
                },
            },
            options:{
                option1:{
                    linkTo:"/foodTruck-apply",
                    linkText:"Food Truck Apply",
                    optionText:"If you would like the opportunity to setup your Food Truck at Central Market. Then click the button below so reserve your spot at one of our upcoming Central Market events.",
                }
            }
        }
    }

    render(){
        return(
            <div className="container">
                <Header />
                <div className="body-portion">
                    <PictureWithDescription 
                        containerClass="picture-with-description" pictureClass="picture-with-description-img" source="/images/foodTrucks.jpg" 
                        altText="Food Trucks setup at Central Market" captionClass="picture-with-description-caption" 
                        caption="At Central Market we welcome food trucks from all over Northwest Indiana to come and share their delicious food with some hungry people. We have 20 slots available for Food Trucks to fill. Our Food Trucks sell a multitude of things ranging from elephant ears, burgers, pizza, etc..."
                    />
                    <FoodTruckOverview foodTruckList={this.state.foodTruckList} numVendorsToShow={4} allowNavigate={true}/>
                    <OptionContainer optionsArray={this.state.options}/>
                </div>
                <Footer />
            </div>
        )
    }
}


export default FoodTruck;