import React from 'react';

class Show extends React.Component{


    render(){
        return(
            <div className='showContainer'>
                <div className='itemImgContainer'>
                    <img src={this.props.item.image} alt={this.props.item.item} />
                    <div>
                        <input type="button" value="Update Item" onClick={()=>{this.props.handleView('edit',this.props.item)}}/>
                        <input
							type="button"
							value="Delete Item"
							onClick={()=>{
							this.props.handleDelete(this.props.item.id)}}
						/>
                    </div>
                </div>
                <div className='itemDetailsContainer'>
                    <h3>{this.props.item.item}</h3>
                    {/*Determine if item is on sale. If so, show original price and the new price*/}
                    {this.props.item.onSale? <><h4 className='onSaleOrigPrice'>${this.props.item.price}</h4> <h4 className='onSaleNewPrice'>${(this.props.item.price*.4).toFixed(2)}</h4></> : <h4>${this.props.item.price}</h4>}


                    <h5>Rating: {this.props.item.rating}</h5>
                    <article>
                        <h4>Description:</h4>
                        <p>{this.props.item.description}</p>
                        <input type="button" value="Add to Cart" onClick={()=>this.props.addToCart(this.props.item)}/>
                    </article>
                </div>
            </div>
        )
    }

}


export default Show;
