import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
// import { library } from "webpack";

export const Home = () => {
	const { store, actions } = useContext(Context);
	let array = []

	useEffect(() => {
		actions.getFilms()
	}, [])

	console.log(store.pelis)
	console.log(array)

	return (
		<div className="text-center mt-5">
			<h1>Pelis</h1>
			{store.pelis.map((item) => (

				<p key={item.id}>
					{item.id}: {item.original_title}

					<ul>
						Género:
						{item.genre_ids.map((item) => (
							<li style={{ listStyle: "none" }}>
								{item}
							</li>
						)
						)}
					</ul>
				</p>
			))}
			
		</div>
	);
};
