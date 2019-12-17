import React from 'react';

class Header extends React.Component{


    render(){
        return(
            <header>
                <img src="https://images.vexels.com/media/users/3/151102/isolated/preview/6020bc730f07d2359fb5b72427e674e7-llama-standing-illustration-by-vexels.png" onClick={()=>{this.props.handleView('home')}}/>
					<div className='title'>
						<h1>Llam-o-rama</h1>
						<h3>For all your llama needs</h3>
					</div>
                    <div className='headerBtns'>
                        <input type="button" value="my cart" onClick={()=>{this.props.handleView('cart')}} />
                        <input type="button" value="+ add item" onClick={()=>{this.props.handleView('new')}} />
                    </div>

            </header>
        )
    }

}

export default Header;
