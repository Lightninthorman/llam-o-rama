import React from 'react';

class ItemList extends React.Component{


    render(){
        return(
            <div className='listItem'>
                <h3>{this.props.item.item}</h3>
                <img src={this.props.item.image} />
            </div>
        )
    }

}


export default ItemList
