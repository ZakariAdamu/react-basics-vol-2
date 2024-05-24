import React from "react";
import { useMealsListContext } from "../../providers/MealsProvider";

const Counter = () => {
	const { meals } = useMealsListContext();

	return (
		<div>
			<h3>Number of meals today: {meals.length}</h3>
		</div>
	);
};

// This meals app manages state with context api.

export default Counter;
