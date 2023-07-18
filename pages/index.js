import { Inter } from 'next/font/google';
import GeolocationApi from '@/components/GeolocationApi';
import AbstractApi from '@/components/AbstractApi';
import IpApiCo from '@/components/IpApiCo';
import WithUseEffect from '@/components/WithUseEffect';
import dynamic from 'next/dynamic';
// import ReactGeolocated from '@/components/ReactGeolocated';
const ReactGeolocated = dynamic(() => import('@/components/ReactGeolocated'), {
	ssr: false // This will prevent server-side rendering
});

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
			<WithUseEffect />
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
