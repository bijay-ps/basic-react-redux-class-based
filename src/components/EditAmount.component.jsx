import React from 'react';
import * as PropTypes from "prop-types";
import { connect } from 'react-redux';

class EditAmount extends React.Component {

	constructor() {
		super();
		this.state = {
			val: 0
		}
	}

	handleSubmitBtnClick() {
		if (this.props.label === 'Spend') {
			this.props.Spend(this.state.val)
		} else if (this.props.label === 'Receive') {
			this.props.Receive(this.state.val)
		}
	}

	updateInputVal(e) {
		this.setState({
			val: e.target.value
		})
	}

	render() {
		let {label} = this.props;
		return (
			<div
				className="flex flex-col justify-between bg-china-rose h-48 w-80 border-2 rounded-md p-4 underline text-white">
				<span>{label}</span>
				<input type="number" className='bg-white p-4 h-10 border-b-4 border-black text-black' min="1" max="10000"
				       value={this.state.val} onChange={this.updateInputVal.bind(this)}/>
				<div className="flex justify-center">
					<button type="button" className="bg-yellow-red border-2 p-2 h-10 w-32 text-base"
					        onClick={this.handleSubmitBtnClick.bind(this)}>Submit
					</button>
				</div>
			</div>
		);
	}
}

EditAmount.propTypes = {label: PropTypes.any}

const mapDispatchToProps = (dispatch) => {
	return {
		Spend: (val) => dispatch({ type: 'Spend', payload: val}),
		Receive: (val) => dispatch({ type: 'Receive', payload: val}),
	}
}

export default connect(null, mapDispatchToProps)(EditAmount);