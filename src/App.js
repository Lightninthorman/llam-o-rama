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
                item:null,
                image:null,
                price:null,
                rating:null,
                description:null,
                onSale:false,
                subscription:false,
                category:null
            }
        }
    }

    render(){
        return(
            <div className='container'>
                <Header view={this.state.view}/>
                <Main view={this.state.view}/>


            </div>
        )
    }

}


export default App;
