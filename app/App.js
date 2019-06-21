import React from "react";
import {connect} from "react-redux";
import CartBar from "./CartBar.js";
import * as actions from "./actions.js";
import {bindActionCreators} from "redux";

class App extends React.Component{
	constructor(){
		super();	

	}

	getTotal(){
		var sum = 0;
		this.props.cart.forEach(function(item){
			sum += item.price * item.amount;
		});
		return sum;
	}

	render(){
		return (
			<div>
				<h1>Shopping Cart</h1>
				<p>{JSON.stringify(this.props.cart)}</p>

				{
					this.props.cart.map((item,index)=>{
	 					return <CartBar key={index} item={item} index={index} actions={this.props.actions} />
	 				})
				}

				<hr/>
				<p>Total Cost: {this.getTotal()}</p>
			</div>
		)
	}
}

export default connect(
	(state) => {
		return {
			"cart" : state.cart
		}
	},
	(dispatch) => {
		return {
			"actions" : bindActionCreators(actions , dispatch)
		}
	}
)(App);