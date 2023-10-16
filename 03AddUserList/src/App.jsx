import "./App.scss";
import { useState } from "react";

function App() {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState(Number(""));
	const [allUsers, setAllUsers] = useState([]);
	// console.log(allUsers);

	const handleSubmit = (e) => {
		console.log("username :", username, "age :", age);
		e.preventDefault();
		if (username !== null && age > 0) {
			setAllUsers((prevUsers) => [
				...prevUsers,
				{ username: username, age: age },
			]);
		}
		console.log(allUsers);
		setUsername("");
		setAge("");
	};

	return (
		<>
			<div className="container">
				<form action="" onSubmit={handleSubmit}>
					<div className="input-field">
						<label className="label" htmlFor="username">
							Username :
						</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder={"username"}
						/>
					</div>
					<div className="input-field">
						<label className="label" htmlFor="age">
							Age (years) :
						</label>
						<input
							type="number"
							id="age"
							value={age}
							onChange={(e) => setAge(e.target.value)}
							placeholder={"age"}
						/>
					</div>
					<button type="submit" className="submit-btn">
						Add User
					</button>
				</form>
			</div>
			{allUsers && (
				<div className="userlist">
					<ul>
						{allUsers.map((user) => (
							<li
								key={Math.ceil(
									Math.random() * 1000
								)}>{`${user.username} (${user.age} years old)`}</li>
						))}
					</ul>
				</div>
			)}

			{/* <DisplayUsers users={allUsers} /> */}
		</>
	);
}

export default App;
