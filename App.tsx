import React, { useState, useEffect, useMemo } from 'react';
import { Guide, User } from './types';
import { GUIDES_DATA, MOCK_USERS } from './constants';
import { authService } from './services/authService';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import GuideList from './components/GuideList';
import GuideProfile from './components/GuideProfile';
import AIChatbot from './components/AIChatbot';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import GuideDashboard from './components/GuideDashboard';

type Page = 'landing' | 'login' | 'travellerHome' | 'guideList' | 'guideProfile' | 'guideDashboard';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [guides, setGuides] = useState<Guide[]>(GUIDES_DATA);
  const [page, setPage] = useState<Page>('landing');
  
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      handleLogin(user);
    }
  }, []);

  const handleLogin = (user: User) => {
    authService.login(user);
    setCurrentUser(user);
    if (user.type === 'guide') {
      setPage('guideDashboard');
    } else {
      setPage('travellerHome');
    }
  };

  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    setPage('landing');
    setSelectedCity(null);
    setSelectedGuide(null);
  };

  const handleProfileUpdate = (updatedGuide: Guide) => {
    setGuides(prevGuides => prevGuides.map(g => g.id === updatedGuide.id ? updatedGuide : g));
    // In a real app, you'd also save this to a database.
  };

  const guidesInCity = useMemo(() => {
    if (!selectedCity) return [];
    return guides.filter(guide => guide.city.toLowerCase() === selectedCity.toLowerCase());
  }, [selectedCity, guides]);
  
  const allGuidesForChatbot = useMemo(() => {
      return selectedCity ? guidesInCity : guides;
  }, [selectedCity, guidesInCity, guides]);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setPage('guideList');
  };

  const handleGuideSelect = (guide: Guide) => {
    setSelectedGuide(guide);
    setPage('guideProfile');
  };

  const handleBackToGuides = () => {
    setSelectedGuide(null);
    setPage('guideList');
  };
  
  const handleClearCity = () => {
    setSelectedCity(null);
    setPage('travellerHome');
  };

  const goToHome = () => {
    setSelectedCity(null);
    setSelectedGuide(null);
    if (!currentUser) {
        setPage('landing');
        return;
    }
    setPage(currentUser.type === 'guide' ? 'guideDashboard' : 'travellerHome');
  }

  const renderContent = () => {
    if (!currentUser) {
      if (page === 'login') {
        return <LoginPage onLogin={handleLogin} onBack={() => setPage('landing')} />;
      }
      return <LandingPage onLoginClick={() => setPage('login')} />;
    }

    switch (page) {
      case 'guideDashboard':
        const currentGuide = guides.find(g => g.id === currentUser.id);
        return currentGuide ? <GuideDashboard guide={currentGuide} onProfileUpdate={handleProfileUpdate} /> : <div>Error: Guide profile not found.</div>;
      
      case 'guideProfile':
        return selectedGuide ? <GuideProfile guide={selectedGuide} onBack={handleBackToGuides} /> : <GuideList city={selectedCity || ''} guides={guidesInCity} onSelectGuide={handleGuideSelect} onClearCity={handleClearCity} />;
      
      case 'guideList':
        return <GuideList city={selectedCity || ''} guides={guidesInCity} onSelectGuide={handleGuideSelect} onClearCity={handleClearCity} />;
      
      case 'travellerHome':
      default:
        return <Home onCitySelect={handleCitySelect} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50 text-gray-800">
      <Header user={currentUser} onLogoClick={goToHome} onLogout={handleLogout} />
      <main className="flex-grow w-full">
        {renderContent()}
      </main>
      <Footer />
      {currentUser?.type === 'traveller' && (
        <AIChatbot guides={allGuidesForChatbot} onSelectGuide={handleGuideSelect} />
      )}
    </div>
  );
};

export default App;
