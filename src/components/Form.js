import React from 'react';


class Form extends React.Component{
    constructor() {
    super()
    this.state = {
      item: '',
      image: '',
      price: '',
      rating: 1,
      description:'',
      onSale:false,
      subscription:false,
      category:'kitchen'
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  checkboxChange = ()=>{
      this.setState((prevState)=>{
        return  {onSale:!prevState.onSale}
      })
  }
  handleSubmit = (e) => {
      e.preventDefault()
      if (this.props.view === 'new'){
          const newItem = {
              item: this.state.item,
              image: this.state.image,
              price: this.state.price,
              description:this.state.description,
              category:this.state.category
          }
          this.props.handleCreate(this.state)
      }else if(this.props.view === 'edit'){
          this.props.handleUpdate(this.state)
      }
    }
  // testFunction = (e) => {
  //     e.preventDefault()
  //     this.setState({
  //         category:this.state.category
  //     })
  //     console.log(this.state.category);
  // }

  componentDidMount(){

        this.setState({
            item: this.props.formInputs.item,
            image: this.props.formInputs.image,
            price: this.props.formInputs.price,
            rating: this.props.formInputs.rating,
            description:this.props.formInputs.description,
            onSale:this.props.formInputs.onSale,
            subscription:this.props.formInputs.subscription,
            category:this.props.formInputs.category
        })
  }

    render(){
        return(
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="item">Item: </label>
                    <input type="text" placeholder="Item Name" id ="item" value={this.state.item} onChange={this.handleChange}/>

                    <label htmlFor="category">Category: </label>
                    <select id="category" onChange={this.handleChange} value={this.state.category}>
                        <option value='home decor'>Home Decor </option>
                        <option value='kitchen'>Kitchen</option>
                        <option value='clothing'>Clothing</option>
                        <option value='outdoors'>Outdoors</option>
                        <option value='intimates'>Intimates</option>
                        <option value='jewelry'>Jewelry</option>
                    </select>

                    <label htmlFor="price">Price: </label>
                    <input type="text" placeholder="Price" id ="price" value={this.state.price} onChange={this.handleChange}/>

                    <label htmlFor="image">Image URL: </label>
                    <input type="text" placeholder="Image URL" id ="image" value={this.state.image} onChange={this.handleChange}/>

                    <label htmlFor="description">Description: </label>
                    <textarea value={this.state.description} id="description" onChange={this.handleChange} />

                    {this.props.view === 'edit' ? <> <label htmlFor='rating'>Rating: </label>
                    <input type="number" placeholder="Rating 1-5" max="5" min="1" id ="rating" value={this.state.rating} onChange={this.handleChange}/>

                    <label htmlFor="onSale">On Sale?: </label>
                    <input type="checkbox" id ="onSale" value={this.state.onSale} onChange={this.checkboxChange}
                    checked={this.state.onSale ? 'checked': ""}
                    /> </> : null}
                    <input type="submit" value='Submit'/>
                </form>
                <img src={this.state.image}/>
                <h4>On sale is set to: {this.state.onSale ? "True" : "False"}</h4>
            </div>
        )
    }

}


export default Form;
