import axios from 'axios';
import { useState } from 'react';

const apiURL = `https://ipapi.co/json/`;

const IpApiCo = () => {
	const [error, setError] = useState('');
	const [showCoords, setShowCoords] = useState(null);
	const [loading, setLoading] = useState(false);

	const getUserLocationApi = async () => {
		try {
			setLoading(true);
			const { data } = await axios.get(apiURL);

			setLoading(false);
			console.log(data);
			setShowCoords(data);
		} catch (err) {
			setError('Something went wrong getting your position');
		}
	};

	return (
		<div className="m-5 text-center">
			<p className="text-3xl m-3">
				With{' '}
				<a href="https://ipapi.co/" target="_blank" rel="noreferrer noopener">
					IP API Co
				</a>
			</p>
			{loading && <p>Loading...</p>}
			{showCoords && (
				<div className=" m-3">
					<p>
						City: {showCoords.city}, {showCoords.region}
					</p>
					<p>Latitude: {showCoords.latitude}</p>
					<p>Longitude: {showCoords.longitude}</p>
					<p>
						Country: {showCoords.country_name}, {showCoords.country_code}
					</p>
					<p>IP: {showCoords.ip}</p>
					<p>ISP: {showCoords.org}</p>
				</div>
			)}
			{error && <p>{error}</p>}
			<button
				className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				onClick={getUserLocationApi}
			>
				Get Current Location from IP API Co
			</button>
		</div>
	);
};

export default IpApiCo;
