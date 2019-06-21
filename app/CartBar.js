import React from "react";
import {connect} from "react-redux";


 
class CartBar extends React.Component{
	constructor(){
		super();
	}
 
	render(){
		return (
			<div className="cartBar">
				<div className="box">
					<p>
						{this.props.item.name}
					</p>
					<p>
						price：{this.props.item.price}
					</p>
					<p>
						quantity：{this.props.item.amount}
					</p>
					<p>
						total：{this.props.item.price * this.props.item.amount}
					</p>
				</div>
				<p>
					<input 
						type="button" 
						value="-" 
						onClick={(this.props.actions.minus).bind(this,this.props.index)}
						disabled = {this.props.item.amount == 0}
					/>
					<input type="button" value="+" onClick={(this.props.actions.add).bind(this,this.props.index)}/>
				</p>
				<hr/>
			</div>
		)
	}
}

export default CartBar;