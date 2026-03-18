import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import ReadList from '../pages/ReadList/ReadList';
import PagesToRead from '../pages/PagesToRead/PagesToRead';
import Spinner from '../components/Spinner/Spinner';
import { Suspense } from 'react';

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
      {
        path: '/readList',
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
            <ReadList />
          </Suspense>
        ),
      },
      {
        path: '/toRead',
        Component: PagesToRead,
      },
    ],
  },
]);

export default router;
