import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AnalyticsSection from './components/AnalyticsSection';

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-grow p-6 bg-white">
        <Header />
        <AnalyticsSection />
      </main>
    </div>
  );
}

export default App;