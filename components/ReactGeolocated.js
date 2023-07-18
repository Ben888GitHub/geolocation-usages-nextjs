import { useGeolocated } from 'react-geolocated';

const ReactGeolocated = () => {
	const { coords, isGeolocationAvailable, isGeolocationEnabled } =
		useGeolocated({
			positionOptions: {
				enableHighAccuracy: true
			},
			userDecisionTimeout: 5000,
			isOptimisticGeolocationEnabled: true
		});
	if (!isGeolocationAvailable)
		return (
			<p className="text-2xl m-3">Your browser does not support Geolocation</p>
		);

	if (!isGeolocationEnabled)
		return (
			<p className="text-2xl m-3">Please enable location on your browser</p>
		);

	return (
		<div className="m-5 text-center">
			<p className="text-3xl m-3">With React Geolocated</p>
			{coords ? (
				<>
					<p>Latitude: {coords.latitude}</p>
					<p>Longitude: {coords.longitude}</p>
				</>
			) : (
				<p>Getting location data...</p>
			)}
		</div>
	);
};

export default ReactGeolocated;
