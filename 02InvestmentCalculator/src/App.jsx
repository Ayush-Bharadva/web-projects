import React, { useState } from "react";

import UserInput from "./components/UserInput";
import InvestmentInfo from "./components/InvestmentInfo";
import Header from "./components/Header";

function App() {
	const [userInput, setUserInput] = useState(null);

	const calculateHandler = (userInput) => {
		setUserInput(userInput);
		console.log(userInput);
	};

	let yearlyData = []; // per-year results

	if (userInput) {
		let currentSavings = +userInput["current-savings"];
		const yearlyContribution = +userInput["yearly-contribution"];
		const expectedReturn = +userInput["expected-return"];
		const duration = +userInput["duration"];

		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}
	}

	return (
		<div>
			<Header />
			<UserInput onCalculate={calculateHandler} />
			{!userInput && (
				<p className="no-user">
					Press Calculate to show Calculated Investments
				</p>
			)}
			{userInput && (
				<InvestmentInfo
					data={yearlyData}
					initialInvestment={+userInput["current-savings"]}
				/>
			)}
		</div>
	);
}

export default App;
