import { useEffect, useState } from 'react';

const WithUseEffect = () => {
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

	useEffect(() => {
		getUserLocation();
	}, []);

	return (
		<div className="m-5 text-center">
			<p className="text-3xl m-3">With UseEffect Geolocation</p>
			{showCoords ? (
				<>
					<p>Latitude: {lat}</p>
					<p>Longitude: {long}</p>
				</>
			) : (
				<p>Getting location data...</p>
			)}
			{error && <p>{error}</p>}
		</div>
	);
};

export default WithUseEffect;
