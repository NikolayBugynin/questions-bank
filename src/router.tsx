import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { QuestionDetailPage } from './components/QuestionDetailPage/QuestionDetailPage';
import { Main } from './pages/Main/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/questions/:id',
        element: <QuestionDetailPage />,
      },
    ],
  },
]);
