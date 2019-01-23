import {BrowserRouter, Route, Switch } from 'react-router-dom';
import BeerGarden from './BeerGarden/BeerGarden';
import Vendors from './Vendors/Vendors';
import Home from './HomePage/Home';
import FoodTrucks from './FoodTruck/FoodTrucks';
import LiveMusic from "./LiveMusic/LiveMusic";
import BreweryApply from "./FormComponents/BreweryApply";
import RecommendBeer from "./FormComponents/RecommendBeer";
import VendorApply from "./FormComponents/VendorApply";
import FoodTruckApply from "./FormComponents/FoodTruckApply";
import UserProfile from './UserProfile/UserProfile';
import React from 'react';
import FormikBandApply from './FormComponents/BandApply';


function Router(props){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}>  </Route>
                <Route path ="/beer-garden" component={BeerGarden}> </Route>
                {/* Form */}
                <Route path ="/recommend-beer" component={RecommendBeer}></Route>
                {/* Form */}
                <Route path ="/brewery-apply" component={BreweryApply}></Route>
                <Route path="/vendors" component={Vendors}></Route>
                {/* Form */}
                <Route path="/vendor-apply" component={VendorApply}></Route>
                <Route path="/live-music" component={LiveMusic}></Route>    
                {/* Form */}
                <Route path="/band-apply" component={FormikBandApply}></Route>       
                <Route path="/food-trucks" component={FoodTrucks}></Route>
                {/* Form */}
                <Route path="/foodtruck-apply" component={FoodTruckApply}></Route>
                {/* User Profile Section */}
                <Route path="/user-profile/:userName" component={UserProfile}></Route>
            </Switch>   
        </BrowserRouter>
    )
}


export default Router;