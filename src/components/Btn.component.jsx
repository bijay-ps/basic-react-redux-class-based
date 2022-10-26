import React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from "prop-types";

class BtnComponent extends React.Component {
	handleSubmitBtnClick() {
		if (this.props.label === 'EMI') {
			this.props.Spend(this.props.amount);
		} else if (this.props.label === 'Salary') {
			this.props.Receive(this.props.amount);
		}
	}
	render() {
		let {label, amount} = this.props;

		return (
			<div className="flex flex-col justify-between bg-china-rose h-36 w-80 border-2 rounded-md p-4 text-white">
				<div className="flex justify-between">
					<span className="underline">{label}</span>
					<span> {amount} </span>
				</div>
				<div className="flex justify-center">
					<button type="button" className="bg-yellow-red border-2 p-2 h-10 w-32 underline text-base"
					        onClick={this.handleSubmitBtnClick.bind(this)}>Submit
					</button>
				</div>
			</div>
		);
	}
}

BtnComponent.propTypes = {
	label: PropTypes.any,
	amount: PropTypes.any
}

const mapDispatchToProps = (dispatch) => {
	return {
		Spend: (val) => dispatch({ type: 'Spend', payload: val}),
		Receive: (val) => dispatch({ type: 'Receive', payload: val}),
	}
}

export default connect(null, mapDispatchToProps)(BtnComponent);