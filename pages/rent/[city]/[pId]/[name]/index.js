import { useRouter } from 'next/router';
const Details = () => {
	const router = useRouter();
	console.log('Test -> router', router);
	return <div>This is the Details page</div>;
};

export default Details;
