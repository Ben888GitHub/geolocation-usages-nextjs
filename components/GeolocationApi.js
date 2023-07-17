import { useState } from 'react';

const GeolocationApi = () => {
	const [lat, setLat] = useState(null);
	const [long, setLong] = useState(null);
	const [error, setError] = useState('');
	const [showCoords, setShowCoords] = useState(false);

	const getUserLocation = () => {
		const geolocationAPI = navigator.geolocation;
		if (!geolocationAPI) {
			setError('Geolocation API is not available in your browser');
		} else {
			geolocationAPI.getCurrentPosition(
				(position) => {
					const { coords } = position;
					console.log(coords);
					setLat(coords.latitude);
					setLong(coords.longitude);
					setShowCoords(true);
				},
				(error) => {
					console.log(error);
					setError('Something went wrong getting your position');
				}
			);
		}
	};

	return (
		<div className="m-5 text-center">
			<p className="text-3xl m-3">With Geolocation API</p>
			{showCoords && (
				<p className="text-xl m-3">
					Your coordinates are: Latitude:{lat}, Longitude:{long}
				</p>
			)}
			{error && <p>{error}</p>}

			<button
				className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				onClick={getUserLocation}
			>
				Get Current Location from Geolocation API
			</button>
		</div>
	);
};

export default GeolocationApi;
