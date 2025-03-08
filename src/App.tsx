import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MentorSearch from './pages/MentorSearch';
import MentorProfile from './pages/MentorProfile';
import Dashboard from './pages/Dashboard';
import MentorDashboard from './pages/MentorDashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Communities from './pages/Communities';
import FAQPage from './pages/faqpage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<MentorSearch />} />
            <Route path="/mentor/:id" element={<MentorProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mentor-dashboard" element={<MentorDashboard />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/faq' element={<FAQPage/>}/>
            <Route path="/communities" element={<Communities />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;