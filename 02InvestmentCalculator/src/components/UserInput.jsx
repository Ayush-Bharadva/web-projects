import React from "react";
import { useState } from "react";

const initialValue = {
	"current-savings": "100",
	"yearly-contribution": "120",
	"expected-return": "5",
	duration: "3",
};

function UserInput(props) {
	const [userInput, setUserInput] = useState(initialValue);

	const handleSubmit = (e) => {
		console.log("submit clicked");
		e.preventDefault();
		props.onCalculate(userInput);
	};

	const handleReset = () => {
		setUserInput(initialValue);
	};

	const handleInputChange = (input, value) => {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[input]: +value,
			};
		});
	};

	return (
		<form className="form">
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						type="text"
						id="current-savings"
						value={userInput["current-savings"]}
						onChange={(e) =>
							handleInputChange("current-savings", e.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">
						Yearly Savings ($)
					</label>
					<input
						type="text"
						id="yearly-contribution"
						value={userInput["yearly-contribution"]}
						onChange={(e) =>
							handleInputChange(
								"yearly-contribution",
								e.target.value
							)
						}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						type="text"
						id="expected-return"
						value={userInput["expected-return"]}
						onChange={(e) =>
							handleInputChange("expected-return", e.target.value)
						}
					/>
				</p>
				<p>
					<label htmlFor="duration">
						Investment Duration (years)
					</label>
					<input
						type="text"
						id="duration"
						value={userInput["duration"]}
						onChange={(e) =>
							handleInputChange("duration", e.target.value)
						}
					/>
				</p>
			</div>
			<p className="actions">
				<button
					onClick={handleReset}
					type="reset"
					className="buttonAlt">
					Reset
				</button>
				<button
					type="submit"
					className="button"
					onClick={(e) => handleSubmit(e)}>
					Calculate
				</button>
			</p>
		</form>
	);
}

export default UserInput;
