import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/booksData.json'),
        Component: Home,
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('/booksData.json'),
        Component: BookDetails,
      },
    ],
  },
]);

export default router;
