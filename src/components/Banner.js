import React from 'react';



class Banner extends React.Component{


    render(){
        return(
            <div className='banner'>
                <h2>Holiday Special!</h2>
                <h3>40% Off Selected Items</h3>
                <input type="button" value="Save 40%!"/>
            </div>
        )
    }

}


export default Banner;
