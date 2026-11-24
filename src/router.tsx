import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Main } from './pages/Main/Main';
import { PublicQuizPage } from './pages/PublicQuizPage/PublicQuizPage';
import { QuestionDetailPage } from './pages/QuestionDetailPage/QuestionDetailPage';
import { QuizQuestionsPage } from './pages/QuizQuestionsPage/QuizQuestionsPage';
import { QuizSummaryPage } from './pages/QuizSummaryPage/QuizSummaryPage';

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
      {
        path: '/trainer',
        element: <PublicQuizPage />,
      },
      {
        path: '/trainer/:id',
        element: <QuizQuestionsPage />,
      },
      {
        path: '/trainer/stats',
        element: <QuizSummaryPage />,
      },
    ],
  },
]);
