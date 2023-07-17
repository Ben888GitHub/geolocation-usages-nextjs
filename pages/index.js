import { Inter } from 'next/font/google';
import GeolocationApi from '@/components/GeolocationApi';
import AbstractApi from '@/components/AbstractApi';
import IpApiCo from '@/components/IpApiCo';
import ReactGeolocated from '@/components/ReactGeolocated';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ apiKey }) {
	return (
		<main
			className={`flex  flex-col items-center justify-between p-16 ${inter.className}`}
		>
			<p className="text-4xl">Geolocation in NextJs</p>

			<GeolocationApi />
			<AbstractApi apiKey={apiKey} />
			<IpApiCo />
			<ReactGeolocated />
		</main>
	);
}

export const getStaticProps = async () => {
	return {
		props: {
			apiKey: process.env.NEXT_ABSTRACT_KEY
		}
	};
};
