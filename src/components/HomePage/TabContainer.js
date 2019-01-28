import React, {Component} from 'react';
import TabItemsMenu from "./TabItemsMenu";
import PictureWithDescription from '../PictureWithDescription';


class TabContainer extends Component{
    constructor(props){
        super(props)
        this.itemsToShow = {
            vendors: {
                name:"Vendors",
                imageSource:"/images/vendors.jpg",
                imageAlt:"Artist Vendors",
                imageId:"vendors-image",
                cpationId:"vendors-image-caption",
            },
            foodTrucks: {
                name:"Food Trucks",
                imageSource:"",
                imageAlt:"Food Trucks",
                imageId:"foodTrucks-image",
                cpationId:"foodTrucks-image-caption", 
            },
            liveMusic: {
                name:"Live Music",
                imageSource:"",
                imageAlt:"Live Music",
                imageId:"liveMuisc-image",
                cpationId:"liveMusic-image-caption", 
            },
            beerGarden: {
                name:"Beer Garden",
                imageSource:"",
                imageAlt:"Beer Garden",
                imageId:"beerGarden-image",
                cpationId:"beerGarden-image-caption", 
            }
        }
        this.state = {
            itemDisplayed:"vendors",
        }
    }

    selectedAnItem = (itemSelected)=> {
        this.setState({
            itemDisplayed: itemSelected
        })
    }
    
    render(){
        let picture;
        if (this.state.itemDisplayed === "vendors"){

            picture = <PictureWithDescription containerClass="tab-img-container" pictureClass="tab-item-img" source="/images/vendors.jpg" altText="Picture of some of the vendors that come to Central Market" captionClass="tab-item-img-caption" caption="Vendors from all around the Region come to Central Market to display their wares and create items for others to buy."/>  
        } else if (this.state.itemDisplayed === "foodTrucks"){
            picture = <PictureWithDescription containerClass="tab-img-container" pictureClass="tab-item-img" source="/images/foodTrucks.jpg" altText="Picture of some of the food trucks that come to Central Market" captionClass="tab-item-img-caption" caption="Local food trucks are setup around the park in case you get hungry. Most food trucks will switch out each week, however some food trucks have become regualars at Central Market."/>  
        } else if (this.state.itemDisplayed === "liveMusic"){
            picture = <PictureWithDescription containerClass="tab-img-container" pictureClass="tab-item-img" source="/images/liveMusic.jpg" altText="Picture of a live band playing at Central Market" captionClass="tab-item-img-caption" caption="Each week Central Market has a new opening and a main band as live music. Central market has become one of the hottest venues for local bands to perform at."/>  
        } else {
            picture =  <PictureWithDescription containerClass="tab-img-container" pictureClass="tab-item-img" source="/images/beerGarden.jpg" altText="Picture of a live band playing at Central Market" captionClass="tab-item-img-caption" caption="Come pop a couple cold ones with the boys while you listen to some live rock and roll. We have a wide assortment of beers from local breweries, as well as your classics like Budweiser and Heineken."/>  
        }        

        return(
            <div id="tab-section">
                <div className="tab-section-title">
                    <h2>Things to do at Central Market</h2>
                </div>
                <TabItemsMenu itemsToShow={this.itemsToShow} onClick={this.selectedAnItem} />
                {picture}
                
                {/* <PictureWithDescription pictureId="tab-item-img" source="/images/vendors.jpg" altText="Picture of some of the vendors that come to Central Market" captionId="tab-item-img-caption" caption="Vendors from all around the Region come to Central Market to display their wares and create items for others to buy."/> */}
                {/* <div>
                    <h1>Tab Container Section</h1>
                    <p>There needs to a parent component that houses the clicked state for each of the four things to do. <br/> The four things to do are Vendors, Food Trucks, Live Music, and Beer Garden <br/> When you click on them then a div will appear on the right with a picture and a description will popup. <br/> By default the first one that will be displayed will be the Vendors. </p>
                </div> */}
            </div>
        )
    }
}

export default TabContainer;