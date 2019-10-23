import React, { Component } from 'react';

                //React.component
class Button extends Component{
    state = {
        count: 0,
    }

    handleClick = () =>{
        //actualizar estado
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        const { count } = this.state;
        return(
            <div>
                <h1>Manzanas: {count}</h1>
                <button type="button" onClick={this.handleClick}>
                    Agregar
                </button>
            </div>
        );
    };
};


export default Button;