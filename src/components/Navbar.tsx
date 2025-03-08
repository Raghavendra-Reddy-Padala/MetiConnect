import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Search, Calendar, User, Users, HelpCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">MentorMatch</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Search className="h-5 w-5" />
              <span>Find Mentors</span>
            </Link>
            <Link to="/communities" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Users className="h-5 w-5" />
              <span>Communities</span>
            </Link>
            <Link to="/faq" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <HelpCircle className="h-5 w-5" />
              <span>FAQ</span>
            </Link>
            {/* <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600">
              <Calendar className="h-5 w-5" />
              <span></span>9669
            </Link> */}
            <Link to="/signin" className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;