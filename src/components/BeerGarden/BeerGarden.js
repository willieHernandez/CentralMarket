import React, {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PictureWithDescription from '../PictureWithDescription';
import ListOfBeers from './ListOfBeers';
import OptionContainer from '../OptionContainer';


class BeerGarden extends Component{
    constructor(props){
        super(props)
        this.options={
            option1:{
                linkTo:"/recommend-beer",
                linkText:"Recommend a Beer", 
                optionText:"Would you like to see your favorite beer at the Beer Garden? You can recommend a beer and we will try our best to get it.",
            },
            option2:{
                linkTo:"/brewery-apply",
                linkText:"Brewery Apply",
                optionText:"Are you a local brewery and want to see your beer sold at the Beer Garden? You can apply and we will see if we can come to an agreement.",
            }
        }
    }
    render(){
        return(
            <div>
                <Header />
                <PictureWithDescription 
                    containerClass="picture-with-description" pictureClass="picture-with-description-img" source="/images/beerGarden.jpg" altText="Beer Garden at Central Market" captionClass="picture-with-description-caption" caption="The Beer Garden at Central Market has national beers on tap like Budweiser and Heineken. We also support local breweries like WildRose and 3 Floyd's. The Beer Garden uses a ticket system that you get outside the Beer Garden. Each ticket is worth 1 dollar and you can buy up to five tickets at a time."
                />
                <h2 className='list-of-beers-title'>Beers currently offered</h2>
                <ListOfBeers />
                <OptionContainer optionsArray={this.options}/>
                <Footer />
            </div>
        )
    }
}


export default BeerGarden;