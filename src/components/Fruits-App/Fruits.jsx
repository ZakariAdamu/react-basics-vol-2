import React from "react";

const Fruits = (props) => {
	return (
        <div>
            <hr />
			<h2>Where should the fruits state go?</h2>

			{props.fruits.map((fruit) => (
				<p key={fruit.id}>{fruit.fruitName}</p>
			))}
		</div>
	);
};

// Using useState hook to manage data in the parent(app) component, and receiving the data via props

export default Fruits;
