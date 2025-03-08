import { Link } from 'react-router-dom';
import { Search, Star, Clock, IndianRupee, Filter, CheckCircle } from 'lucide-react';
import { mentors } from '../data/mockData';
import { useState, useEffect } from 'react';

const MentorSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [rating, setRating] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredMentors, setFilteredMentors] = useState(mentors);
  
  // Extract all unique expertise categories from mentors data
  const allCategories = [...new Set(mentors.flatMap(mentor => mentor.expertise))];

  useEffect(() => {
    // Apply all filters together
    const result = mentors.filter(mentor => {
      // Search filter
      const matchesSearch = 
        searchTerm === '' || 
        mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())) ||
        mentor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mentor.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = 
        selectedCategory === 'all' || 
        mentor.expertise.some(skill => skill.toLowerCase().includes(selectedCategory.toLowerCase()));
      
      // Price filter
      let matchesPrice = true;
      if (priceRange === '0-50') {
        matchesPrice = mentor.hourlyRate <= 50;
      } else if (priceRange === '51-100') {
        matchesPrice = mentor.hourlyRate > 50 && mentor.hourlyRate <= 100;
      } else if (priceRange === '101+') {
        matchesPrice = mentor.hourlyRate > 100;
      }
      
      // Rating filter
      let matchesRating = true;
      if (rating === '4+') {
        matchesRating = mentor.rating >= 4;
      } else if (rating === '4.5+') {
        matchesRating = mentor.rating >= 4.5;
      }
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
    
    setFilteredMentors(result);
  }, [searchTerm, selectedCategory, priceRange, rating]);
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Mentor</h1>
        <p className="text-lg text-gray-600">Connect with industry experts who can guide your career journey</p>
      </div>
      
      {/* Search Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by name, expertise, or keywords..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-indigo-600 font-medium"
            >
              <Filter className="h-5 w-5" />
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            
            <div className="text-gray-500">
              Showing {filteredMentors.length} mentors
            </div>
          </div>
          
          {/* Expanded Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 pt-4 border-t border-gray-100">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expertise</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {allCategories.map((category, index) => (
                    <option key={index} value={category.toLowerCase()}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                >
                  <option value="all">Any Price</option>
                  <option value="0-50">₹0 - ₹50</option>
                  <option value="51-100">₹51 - ₹100</option>
                  <option value="101+">₹101+</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-colors"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="all">Any Rating</option>
                  <option value="4+">4+ Stars</option>
                  <option value="4.5+">4.5+ Stars</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* No Results Message */}
      {filteredMentors.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl mb-8">
          <div className="text-gray-500 text-lg">No mentors found matching your criteria</div>
          <button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setPriceRange('all');
              setRating('all');
            }}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredMentors.map((mentor) => (
          <Link
            key={mentor.id}
            to={`/mentor/${mentor.id}`}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1"
          >
            <div className="relative h-64">
              <img
                src={mentor.imageUrl}
                alt={mentor.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold">{mentor.name}</h3>
                <p className="text-sm opacity-90">{mentor.title} at {mentor.company}</p>
              </div>
              {mentor && (
                <div className="absolute top-4 right-4 bg-white rounded-full p-1">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              )}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className={`h-5 w-5 ${star <= Math.floor(mentor.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="font-semibold">{mentor.rating}</span>
                <span className="text-gray-500">({mentor.reviews})</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {mentor.expertise.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {mentor.expertise.length > 3 && (
                  <span className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm">
                    +{mentor.expertise.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {mentor.availability}
                </div>
                <div className="flex items-center font-bold text-indigo-600">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  {mentor.hourlyRate}/hr
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MentorSearch;