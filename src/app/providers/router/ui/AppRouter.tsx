import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
	console.log(routeConfig);
	console.log(Object.values(routeConfig));
	console.log(Object.entries(routeConfig));
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({ element, path }) => (
					<Route key={path} element={element} path={path} />
				))}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;
