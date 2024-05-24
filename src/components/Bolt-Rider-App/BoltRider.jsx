import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
	if (action.type === "ride") return { money: state.money + 20 };
	if (action.type === "fuel") return { money: state.money - 50 };
};

const BoltRider = () => {
	const initialState = { money: 100 };
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<span>
			<hr /><hr />
			</span>
			<span className="text">
			<h2>Bolt Rider App below using useReducer hook to manage the state</h2>
			</span>
			<h1>My Bolt Wallet: {state.money}</h1>
			<div>
				<button className="btn" onClick={() => dispatch({ type: "ride" })}>
					A new customer
				</button>
			</div>
			<div>
				<button className="btn" onClick={() => dispatch({ type: "fuel" })}>
					Refill the tank
				</button>
			</div>
		</div>
	);
};

export default BoltRider;
