const getState = ({ getStore, getActions, setStore }) => {

	// ?api_key=e9e1b4c5a4cfc8ede602ea995ffbfc5e

	return {
		store: {
pelis: []
		},
		actions: {
			getFilms: () => {
				const options = {
					method: 'GET',
					headers: {
						accept: 'application/json',
						Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTNlY2YxZThlMDMwYzc1N2E5MGZlZWQ0NTgwNWY2MyIsInN1YiI6IjY1NzhmODUxZTkzZTk1MjE5MTA5OWE3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.353ayqR42w_v4GqICi8fG8idllMAa4F_l06HE-RZxGA'
					}
				};

				fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
					.then(response => response.json())
					.then(response => setStore({pelis: response.results}))
					.catch(err => console.error(err));
			}
		}
	};
};

export default getState;
