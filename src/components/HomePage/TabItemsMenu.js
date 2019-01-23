import React, {Component} from 'react';
import TabItem from './TabItem';

class TabItemsMenu extends Component{
    
    render(){
        return(
            <div className="tab-items-menu">
                {Object.keys(this.props.itemsToShow).map(key=>(
                    
                    <TabItem name={this.props.itemsToShow[key].name} key={key} onClick={this.props.onClick} index={key} />
                ))}
                {/* <TabItem itemsToShow={this.props.itemsToShow} /> */}
            </div>
            
        )
    }
}


export default TabItemsMenu;