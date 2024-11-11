import { createRoot } from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Catalog from './components/screens/Catalog/Catalog.jsx';
import Home from './components/screens/Home/Home.jsx';
import Layout from './components/screens/Layout.jsx';
import ParkDetail from './components/screens/ParkDetail/ParkDetail.jsx';
import './index.scss';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: (
			<>
				<div>error page 404</div>
			</>
		),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/catalog',
				element: <Catalog />,
				children: [],
			},
			{
				path: '/catalog/park/:id',
				element: <ParkDetail />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
);
