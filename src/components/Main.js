import React from 'react';
import Banner from './Banner.js'
import ItemList from './ItemList.js'
import data from '../data.js'

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:data
        }
    }

    render(){
        return(
            <div className='main'>
                <h3>Main</h3>
                <div className='itemListContainer'>
                    {this.state.items.map((item)=>(
                        <ItemList item={item} />
                    ))}
                </div>
            </div>
        )
    }

}


export default Main;
