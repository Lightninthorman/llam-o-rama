import React from 'react';
import Banner from './Banner.js'
import ItemList from './ItemList.js'


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={

            bannerClicked:false
        }
    }



    render(){
        return(
            <div className='main'>
                <h3>Main</h3>
                <Banner />
                <div className='itemListContainer'>
                    {this.props.items.map((item,i)=>(
                        <ItemList
                            item={item} key={i}
                            addToCart={this.props.addToCart}
                            handleView={this.props.handleView}
                        />
                    ))}
                </div>
            </div>
        )
    }

}


export default Main;
