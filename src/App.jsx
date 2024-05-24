import React from "react";
import "./App.css";
import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/Meals-App/MealsList";
import Counter from "./components/Meals-App/Counter";
import BoltRider from "./components/Bolt-Rider-App/BoltRider";
import Fruits from "./components/Fruits-App/Fruits";
import FruitsCounter from "./components/Fruits-App/FruitsCounter";
import { Routes, Route, Link } from "react-router-dom";
import NavLinks from "./components/NavLinks";
import Homepage from "./components/LittleLemon/Homepage";
import About from "./components/LittleLemon/About";
import ContactUs from "./components/LittleLemon/ContactUs";
import MyIntroVideo from "./components/MyIntroVideo";

function App() {
	const [fruits] = React.useState([
		{ fruitName: "apple", id: 1 },
		{ fruitName: "pears", id: 2 },
		{ fruitName: "mango", id: 3 },
	]);

	return (
		<div>
			<NavLinks />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<ContactUs />} />
			</Routes>

			<MyIntroVideo />
			<MealsProvider>
				<MealsList />
				<Counter />
			</MealsProvider>
			<BoltRider />
			<Fruits fruits={fruits} />
			<FruitsCounter fruits={fruits} />
		</div>
	);
}

export default App;
