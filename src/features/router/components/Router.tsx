import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from 'features/router/components/PrivateRoute';

const TodosPage = lazy(() => import('../../../pages/TodosPage/TodosPage'));
const WelcomePage = lazy(
  () => import('../../../pages/WelcomePage/WelcomePage'),
);
const Layout = lazy(() => import('../../../pages/Layout/Layout'));

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route path='/todos' element={<PrivateRoute />}>
              <Route path='/todos' element={<TodosPage />} />
            </Route>
          </Route>
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
