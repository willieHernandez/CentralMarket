import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PictureWithDescription from '../PictureWithDescription';
import VendorOverview from './VendorOverview';
import OptionContainer from '../OptionContainer';


class Vendors extends Component{
    constructor(props){
        super(props)

        this.state = {
            vendorList:{
                vendor1:{
                    vendorName:"Bobs stuff",
                    vendorPic:"/images/vendorPictures/DIY-Decorated-Magazine-Holders.jpg",
                },
                vendor2:{
                    vendorName:"My shit",
                    vendorPic:"/images/vendorPictures/Geometric-Heart-DIY-Wall-Art.jpg",
                },
                vendor3:{
                    vendorName:"Why am I here",
                    vendorPic:"/images/vendorPictures/Marbled-Coasters.jpg",
                },
                vendor4:{
                    vendorName:"Iron Man's the Best",
                    vendorPic:"/images/vendorPictures/Stenciled-Burlap-Candle-Holders.jpg",
                },
                vendor5:{
                    vendorName:"Tina's Trinkets",
                    vendorPic:"/images/vendorPictures/Wooden-Tassel-Bracelet.jpg",
                },
            },
            options:{
                option1:{
                    linkTo:"/vendor-apply",
                    linkText:"Vendor Apply",
                    optionText:"If you would like the opportunity to share your creations with other people from Northwest Indiana. Then click the button below so reserve your spot at one of our upcoming Central Market events.",
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
                        containerClass="picture-with-description" pictureClass="picture-with-description-img" source="/images/vendorsBig.jpg" 
                        altText="Vendors setup at Central Market" captionClass="picture-with-description-caption" 
                        caption="At Central Market we welcome people from all over Northwest Indiana to come and share the things they created. We have 20 slots available for vendors to fill. Our vendors sell a multitude of things ranging from food work, clothes, pictures, etc..."
                    />
                    <VendorOverview vendorList={this.state.vendorList} numVendorsToShow={4} allowNavigate={true}/>
                    <OptionContainer optionsArray={this.state.options}/>
                </div>
                <Footer />
            </div>
        )
    }
}


export default Vendors;