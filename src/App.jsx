import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/experience/:slug" element={<ExperienceDetailPage />} />
    </Routes>
  );
};

export default App;
