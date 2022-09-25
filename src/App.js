import React from 'react';
import TopBanner from './components/TopBanner/TopBanner';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Services from './components/Services/Services';
import Analysis from './components/Analysis/Analysis';
import Summary from './components/Summary/Summary';
import RecentProject from './components/RecentProject/RecentProject';
import Courses from './components/Courses/Courses';
import Video from './components/Video/Video';
import ClientReview from './components/ClientReview/ClientReview';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <RecentProject />
      <Courses />
      <Video />
      <ClientReview />
      <AboutMe />
      <Services />
      
    </div>
  );
}

export default App;
