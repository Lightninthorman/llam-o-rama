import React from 'react';
import Header from './components/Header.js'
import Main from './components/Main.js'
import Show from './components/Show.js'
import Form from './components/Form.js'
import Cart from './components/Cart.js'
//import data from './data.js'



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:[],
            view:'home',
            cartItems:[],
            formInputs:{
                id:null,
                item:"",
                image:"https://images.vexels.com/media/users/3/151100/isolated/preview/71ebcdb387e917f0976d2387fc80f9e1-llama-sitting-silhouette-by-vexels.png",
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

    fetchItems = () => {
    	fetch("https://llama-backend.herokuapp.com/llamas")
    	.then(data => data.json())
    	.then(jData=> {
            console.log(jData);
    		this.setState({items:jData})
    	}).catch(err=>console.log(err))
    }

    handleCreate = (newItem) => {
        console.log(newItem);
        fetch("https://llama-backend.herokuapp.com/llamas",{
            body:JSON.stringify(newItem),
            method: 'POST',
            headers:{
                'Accept': 'application/json, text/plain, */*',
                'Content-Type':'applicaiont/json'
            }
        })
        .then(createdItem => {
            return createdItem.json();
        })
        .then(jsonnedPost =>{
            this.handleView('home')
            this.setState({
                items:jsonnedPost
            })

        })
        .catch(err=>console.log(err))
    }

    handleView = (view,showItem) =>{

        let formInputs ={
            id:null,
            item:"",
            image:"https://images.vexels.com/media/users/3/151100/isolated/preview/71ebcdb387e917f0976d2387fc80f9e1-llama-sitting-silhouette-by-vexels.png",
            price:0,
            rating:1,
            description:"",
            onSale:false,
            subscription:false,
            category:"kitchen"
        }
        if(view === 'edit'){
            console.log(showItem.id);
            formInputs = {
                id:showItem.id,
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

    handleUpdate = (updatedItem) => {
        console.log("updatedItem=",updatedItem);
        fetch(`https://llama-backend.herokuapp.com/llamas/${updatedItem.id}`,{
            body:JSON.stringify(updatedItem),
            method:'PUT',
            headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
        }).then(updatedPost =>{
            this.handleView('home')
            this.fetchItems()
					});
    }

	handleDelete = (itemId) => {
		fetch(`https://llama-backend.herokuapp.com/llamas/${itemId}`,{
			method:'DELETE',
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			}
		}).then(json=>{
            this.handleView('home')
			this.setState({
				items: this.state.items.filter(item => item.id !== itemId)
			})
		}).catch(err=>console.log(err))
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

    checkout = () => {
        this.setState({
            view:'home',
            cartItems:[]
        })
    }

		componentDidMount(){
			this.fetchItems();
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
                    checkout={this.checkout}
                />
                :
                this.state.view === 'show'?
                <Show
                    item={this.state.showItem}
                    view={this.state.view}
                    handleView={this.handleView}
                    addToCart={this.addToCart}
										handleDelete={this.handleDelete}
                />
                :
                <Form
                    view={this.state.view}
                    showItem = {this.state.showItem}
                    formInputs={this.state.formInputs}
                    handleCreate = {this.handleCreate}
                    handleUpdate = {this.handleUpdate}
                />

                }



            </div>
        )
    }

}


export default App;
