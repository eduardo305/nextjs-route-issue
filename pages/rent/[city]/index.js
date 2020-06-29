import React from 'react';
import Modal from 'react-modal';
import Link from 'next/link';
import { useRouter } from 'next/router';

Modal.setAppElement('#__next');

const Test = () => {
	const router = useRouter();
	console.log('Test -> router', router);

	const handleModalClose = (e) => {
		e.preventDefault();
		router.push('/rent/[type]/[location]', `/rent/rent/sunnyvale`);
	};
	return (
		<div>
			Testing
			<Link
				href="/rent/[city]/?pId=1&name=nice-condo"
				as={`/rent/sunnyvale/p4342/nice-condo`}
				shallow={true}
				passHref={true}
			>
				<a>open modal</a>
			</Link>
			<Modal
				isOpen={!!router.query.pId}
				shouldCloseOnOverlayClick
				onRequestClose={handleModalClose}
			/>
		</div>
	);
};

export default Test;
