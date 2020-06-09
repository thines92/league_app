import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SummonerForm extends React.Component {
	renderInput({ input, label, meta }) {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;

		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
			</div>
		);
	}

	onSubmit = (formValues) => {
		return this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form
				className="ui form error"
				onSubmit={this.props.handleSubmit(this.onSubmit)}
			>
				<Field
					name="summonerName"
					component={this.renderInput}
					label="Enter Summoner Name"
				/>
				<button className="ui button primary">Search</button>
			</form>
		);
	}
}

const validate = (values) => {
	console.log('values', values);
	const errors = {};

	if (!values.summonerName) {
		errors.summonerName = 'Please enter a Summoner Name';
	}

	return errors;
};

export default reduxForm({
	form: 'summonerForm',
	validate,
})(SummonerForm);
