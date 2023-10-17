import React from "react";
import Card from "./Card";
import ReactDOM from "react-dom";
import "../App.scss";

const BackDrop = (props) => {
	return <div className="backdrop" onClick={props.onClick}></div>;
};

const ErrorOverlay = (props) => {
	return (
		<Card>
			<div className="error-model">
				<header className="header">
					<h2>{props.title}</h2>
				</header>
				<div className="content">
					<p>{props.message}</p>
				</div>
				<footer className="actions">
					<button onClick={props.onClick}>Okay</button>
				</footer>
			</div>
		</Card>
	);
};

function ErrorModel(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<BackDrop onClick={props.onClick} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ErrorOverlay
					title={props.title}
					message={props.message}
					onClick={props.onClick}
				/>,
				document.getElementById("overlay-root")
			)}
		</>
	);
}

export default ErrorModel;
