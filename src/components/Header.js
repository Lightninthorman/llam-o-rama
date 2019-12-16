import React from 'react';

class Header extends React.Component{


    render(){
        return(
            <header>
                <img src="https://pbs.twimg.com/profile_images/3011444974/2c236fda57195b9317dff722b60ac591_400x400.jpeg" alt="llamart" onClick={()=>{this.props.handleView('home')}}/>
                <input type="button" value="my cart" onClick={()=>{this.props.handleView('cart')}} />
                <input type="button" value="+ add item" onClick={()=>{this.props.handleView('new')}} />

            </header>
        )
    }

}

export default Header;
