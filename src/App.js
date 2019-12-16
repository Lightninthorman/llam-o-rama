import React from 'react';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Show from './components/Show.js'
import Form from './components/Form.js'
import Cart from './components/Cart.js'
import data from './data.js'

let baseUrl = "https://llama-backend.herokuapp.com/llamas"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:data,
            view:'home',
            cartItems:[],
            formInputs:{
                item:"",
                image:"",
                price:0,
                rating:1,
                description:"",
                onSale:false,
                subscription:false,
                category:""
            },
            showItem:{}
        }
    }

    handleCreate = (createData) => {
        fetch(`${baseUrl}`,{
            body:JSON.stringify(createData),
            method: 'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*', 'Content-Type':'applicaiont/json'
            }
        })
        .then(createdItem => {
            return createdItem.json()
        })
        .then(jsonnedPost =>{
            this.state.handleView('home')

        })
        .catch(err=>console.log(err))
    }

    handleView = (view,showItem) =>{

        let formInputs ={
            item:"",
            image:"",
            price:0,
            rating:1,
            description:"",
            onSale:false,
            subscription:false,
            category:"kitchen"
        }
        if(view === 'edit'){
            console.log(showItem);
            formInputs = {
                item:showItem.item,
                image:showItem.image,
                price:showItem.price,
                rating:showItem.rating,
                description:showItem.description,
                onSale:showItem.onSale,
                subscription:showItem.subscription,
                category:showItem.category
            }
        }

        this.setState({
            view:view,
            showItem: showItem,
            formInputs:formInputs

        })
    }

    addToCart = (item) => {
        this.setState({
            cartItems: [item, ...this.state.cartItems]
        })
    }

    removeFromCart = (index) =>{
        let cart = this.state.cartItems
        let newCart = cart.splice(index,1)
        this.setState({
            cartItems:cart
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
                    items={this.state.items}
                    view={this.state.view}
                    handleView={this.handleView}
                />
                :
                this.state.view === 'cart'?
                <Cart
                    view={this.state.view}
                    cartItems={this.state.cartItems}
                    handleView={this.handleView}
                    removeFromCart={this.removeFromCart}
                />
                :
                this.state.view === 'show'?
                <Show
                    item={this.state.showItem}
                    view={this.state.view}
                    handleView={this.handleView}
                    addToCart={this.addToCart}
                />
                :
                <Form
                    view={this.state.view}
                    formInputs={this.state.formInputs}
                    handleCreate = {this.handleCreate}
                />

                }



            </div>
        )
    }

}


export default App;
