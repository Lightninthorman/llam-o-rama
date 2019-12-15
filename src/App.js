import React from 'react';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Show from './components/Show.js'
import Form from './components/Form.js'
import Cart from './components/Cart.js'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view:'home',
            cartItems:[],
            formInputs:{
                item:"",
                image:"",
                price:0,
                rating:0,
                description:"",
                onSale:false,
                subscription:false,
                category:""
            }
        }
    }

    handleView = (view,updatedData) =>{
        let formInputs = this.state.formInputs
        if(this.state.view === 'update'){
            formInputs = {
                item:updatedData.item,
                image:updatedData.image,
                price:updatedData.price,
                rating:updatedData.rating,
                description:updatedData.description,
                onSale:updatedData.onSale,
                subscription:updatedData.subscription,
                category:updatedData.category
            }
        }
        this.setState({
            view:view,
            formInputs:formInputs
        })
    }

    addToCart = (item) => {
        this.setState({
            cartItems: [item, ...this.state.cartItems]
        })
    }

    removeFromCart = (item,index) =>{

        this.setState({

        })
    }



    render(){
        return(
            <div className='container'>
                <Header
                    view={this.state.view}
                    handleView={this.handleView}
                />

                {/*Begin If statements to establish what page is shown based on what this.state.view is*/}
                {this.state.view === 'home' ?
                <Main
                    view={this.state.view}
                    handleView={this.handleView}
                />
                :
                this.state.view === 'cart'?
                <Cart
                    view={this.state.view}
                    cartItems={this.state.cartItems}
                    handleView={this.handleView}
                />
                :
                this.state.view === 'show'?
                <Show
                    view={this.state.view}
                    handleView={this.handleView}
                    addToCart={this.addToCart}
                />
                :
                <Form
                    view={this.state.view}
                    formInputs={this.state.formInputs}
                />

                }



            </div>
        )
    }

}


export default App;
