import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import DetailLayout from '../components/DetailLayout';
import { experiences } from '../data/portfolioData';

const ExperienceDetailPage = () => {
  const { slug } = useParams();
  const experience = experiences.find((entry) => entry.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!experience) {
    return <Navigate to="/" replace />;
  }

  return <DetailLayout item={experience} kindLabel="Experience detail" homeSection="experience" />;
};

export default ExperienceDetailPage;
