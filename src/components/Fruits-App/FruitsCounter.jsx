import React from "react";

const FruitsCounter = (props) => {
	return (
		<div>
			<h2>Total fruits: {props.fruits.length}</h2>
		</div>
	);
};

// Using useState hook to manage data in the parent(app) component, and receiving the data via props

export default FruitsCounter;
