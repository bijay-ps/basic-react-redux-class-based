import React from 'react';
import EditAmount from "./EditAmount.component";
import BtnComponent from "./Btn.component";
import { connect } from 'react-redux';

class Expenditure extends React.Component {
	render() {
		return (
			<div className="flex flex-col items-center min-h-screen text-2xl font-bold">
				<span
					className="text-white h-20 w-96 border-2 rounded-md p-4 bg-deep-ruby my-20 ">Current Balance: {this.props.amount}</span>
				<div className="flex w-2/4 justify-between">
					<EditAmount label="Spend"/>
					<EditAmount label="Receive"/>
				</div>
				<div className="flex w-2/4 justify-between my-20">
					<BtnComponent label="EMI" amount="10000"/>
					<BtnComponent label="Salary" amount="50000"/>
				</div>
			</div>
		);
	}
}

const mapStatesToProps = (state) => {
	return {
		amount: state.amount
	}
};


export default connect(mapStatesToProps, null)(Expenditure);