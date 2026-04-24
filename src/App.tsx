import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudyGlobalRelay from './pages/CaseStudyGlobalRelay';
import CaseStudyIris from './pages/CaseStudyIris';
import CaseStudyOpenreach from './pages/CaseStudyOpenreach';
import SideProjects from './pages/SideProjects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'case-studies':
        return <CaseStudies onNavigate={handleNavigate} />;
      case 'case-study-global-relay':
        return <CaseStudyGlobalRelay onNavigate={handleNavigate} />;
      case 'case-study-iris-element':
        return <CaseStudyIris onNavigate={handleNavigate} />;
      case 'case-study-openreach':
        return <CaseStudyOpenreach onNavigate={handleNavigate} />;
      case 'side-projects':
        return <SideProjects />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}

export default App;
