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

    showDiscounts= () => {
        this.setState({
            bannerClicked:!this.state.bannerClicked
        })
    }



    render(){
        return(
            <div className='main'>
                
                <div className='itemListContainer'>
                    {this.props.items.map((item,i)=>(
                        this.state.bannerClicked === false ? <ItemList
                            item={item} key={i}
                            addToCart={this.props.addToCart}
                            handleView={this.props.handleView}
                        />
                        :
                        (item.onSale ? <ItemList
                            item={item} key={i}
                            addToCart={this.props.addToCart}
                            handleView={this.props.handleView}
                        />
                        :
                        null
                        )
                    ))}
                </div>
            </div>
        )
    }

}


export default Main;
