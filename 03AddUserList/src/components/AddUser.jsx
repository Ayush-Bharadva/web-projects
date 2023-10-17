import React, { useState, useRef } from "react";
import "../App.scss";
import Card from "./Card";
import ErrorModel from "./ErrorModel";

function AddUser(props) {
	// const [username, setUsername] = useState("");
	// const [age, setAge] = useState("");

	const userInput = useRef();
	const ageInput = useRef();

	const [error, setError] = useState();

	const handleAddUser = (e) => {
		e.preventDefault();
		const usetInputValue = userInput.current.value;
		const ageInputValue = ageInput.current.value;

		if (
			usetInputValue.trim().length === 0 ||
			ageInputValue.trim().length === 0
		) {
			setError({
				title: "Empty Fields Error",
				message: "Username and Age cannot be empty!!",
			});
			return;
		}
		if (+ageInputValue < 1) {
			setError({
				title: "Invalid Age Error",
				message: "Age Must be Greater than 1 (age > 1)!!",
			});
			return;
		}
		props.onAddUser(usetInputValue, ageInputValue);
		userInput.current.value = "";
		ageInput.current.value = "";
	};

	const handleErrorModel = () => {
		setError(null);
	};

	return (
		<>
			{error && (
				<ErrorModel
					title={error.title}
					message={error.message}
					onClick={handleErrorModel}
				/>
			)}

			<Card>
				<form action="" onSubmit={handleAddUser}>
					<div className="input-field">
						<label htmlFor="username">Username</label>
						<input id="username" type="text" ref={userInput} />
					</div>
					<div className="input-field">
						<label htmlFor="age">Age (Years)</label>
						<input id="age" type="number" ref={ageInput} />
					</div>
					<button className="submit-btn" type="submit">
						Add User
					</button>
				</form>
			</Card>
		</>
	);
}

export default AddUser;
