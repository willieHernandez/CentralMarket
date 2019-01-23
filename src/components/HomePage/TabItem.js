import React, {Component} from 'react';


class TabItem extends Component{

    itemSelected = () => {
        this.props.onClick(this.props.index)
    }

    render(){

        return(
                
                <button type="button" className="tab-item" onClick={this.itemSelected}>{this.props.name} </button>
        )
    }
}

export default TabItem;