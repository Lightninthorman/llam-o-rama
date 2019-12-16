import React from 'react';


class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            total:0
        }
    }

    getTotal = () => {
        //this function runs through the cartItems array and adds all the prices together
        let newTotal = 0
        for(let i = 0; i<this.props.cartItems.length;i++){
            let price = 0
            if (this.props.cartItems[i].onSale) {
                price = this.props.cartItems[i].price *.4
            }else{
                price = this.props.cartItems[i].price
            }

            newTotal += price
        }
        this.setState({
            total:newTotal
        })
    }

    removeItem = (key) => {
        this.props.removeFromCart(key);
        this.getTotal();
    }

    

    componentDidMount(){
        this.getTotal();
    }

    componentDidUpdate(prevProps){
        if(prevProps.cartItems.length !== this.props.cartItems.length){
            this.getTotal();
        }
    }



    render(){
        return(
            <div className='cart'>
                <h3>Cart</h3>
                {this.props.cartItems.map((item,key)=>(
                    <div className='cartItem' key={key}>
                        <input type="button" value="Remove Item" onClick={()=>this.removeItem(key,item)}/>
                        <img src={item.image} alt={item.item} />
                        <h4>{item.item}</h4>
                        {item.onSale ? <h4>${(item.price*.4).toFixed(2)}</h4> : <h4>${(item.price).toFixed(2)}</h4>}

                    </div>

                ))}
                <div className="total">
                    <h4>Total: {this.state.total.toFixed(2)}</h4>
                    {this.props.cartItems.length > 0 ?
                        <input type="button" value="Checkout" onClick={this.checkout}
                    }
                </div>
            </div>
        )
    }

}


export default Cart;
