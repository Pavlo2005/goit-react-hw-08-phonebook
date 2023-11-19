import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const ContactsPage = lazy(() => import('pages/ContactsPage'));
// const MoviesPage = lazy(() => import('pages/MoviesPage'));
// const SearchPage = lazy(() => import('pages/SearchPage'));
// const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ContactsPage />} />
        {/* <Route path="login" element={<SearchPage />} />
        <Route path="contacts" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
};
