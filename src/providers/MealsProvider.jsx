import React from "react";

const MealsContext = React.createContext();

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes"];

const MealsProvider = ({ children }) => {
	const [meals, setMealsList] = React.useState(todaysMeals);

	return (
		<MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
	);
};

export const useMealsListContext = () => React.useContext(MealsContext);

// This meals app manages state with context api. Here is the context provider component

export default MealsProvider;
