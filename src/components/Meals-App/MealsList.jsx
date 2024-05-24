import React from "react";
import { useMealsListContext } from "../../providers/MealsProvider";

const MealsList = () => {
	const { meals } = useMealsListContext();

	return (
		<div>
			<hr />
      <h1>Meals List using Context API</h1>
      
			{meals.map((meal, index) => (
				<h2 className="meals" key={index}>{meal}</h2>
  ))}
		</div>
	);
};

// This meals app manages state with context api

export default MealsList;
