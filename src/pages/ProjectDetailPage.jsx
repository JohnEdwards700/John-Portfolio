import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import DetailLayout from '../components/DetailLayout';
import { projects } from '../data/portfolioData';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((entry) => entry.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return <DetailLayout item={project} kindLabel="Project detail" homeSection="projects" />;
};

export default ProjectDetailPage;
