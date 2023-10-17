import "./App.scss";
import { useState } from "react";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);
	// console.log(allUsers);

	const handleAddUser = (username, userAge) => {
		setUsersList((prevUsers) => {
			return [
				...prevUsers,
				{ name: username, age: userAge, id: Math.random().toString() },
			];
		});
	};

	return (
		<>
			<AddUser onAddUser={handleAddUser} />

			{handleAddUser && <UsersList users={usersList} />}
		</>
	);
}

export default App;
