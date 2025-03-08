import React from 'react';
import { Calendar, Clock, Users, DollarSign, Star, MessageCircle, Video, TrendingUp, BookOpen } from 'lucide-react';
import { format } from 'date-fns';

const MentorDashboard = () => {
  const upcomingSessions = [
    {
      id: 1,
      menteeName: "John Smith",
      topic: "Advanced React Patterns",
      date: "2024-03-25T15:00:00",
      duration: 60
    },
    {
      id: 2,
      menteeName: "Sarah Wilson",
      topic: "System Design Interview",
      date: "2024-03-26T11:00:00",
      duration: 90
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Active Mentees</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Hours Taught</p>
                  <p className="text-2xl font-bold">156</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <DollarSign className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Earnings</p>
                  <p className="text-2xl font-bold">₹3.2k</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="text-2xl font-bold">4.9</p>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Sessions */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Upcoming Sessions</h2>
            </div>
            <div className="divide-y">
              {upcomingSessions.map((session) => (
                <div key={session.id} className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-indigo-100 rounded-lg">
                        <Video className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{session.topic}</h3>
                        <p className="text-gray-600">with {session.menteeName}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        {format(new Date(session.date), 'MMM d, yyyy')}
                      </p>
                      <p className="text-gray-600">
                        {format(new Date(session.date), 'h:mm a')}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <Video className="h-4 w-4" />
                      Join Meeting
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      Message Mentee
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reviews */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Recent Reviews</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Mentee"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">John Smith</h3>
                    <div className="flex items-center text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Excellent mentor! Really helped me understand complex React patterns and best practices."
                  </p>
                  <p className="text-sm text-gray-500 mt-1">2 days ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Mentee"
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">Sarah Wilson</h3>
                    <div className="flex items-center text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">
                    "Great session on system design. The examples were very practical and helpful."
                  </p>
                  <p className="text-sm text-gray-500 mt-1">1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <h2 className="text-xl font-semibold mb-2">Mentor Profile</h2>
              <p className="opacity-90">Senior Software Engineer</p>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">David Chen</h3>
                  <p className="text-gray-600">10+ years experience</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-600" />
                  <span className="text-gray-600">Teaching Topics</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                    System Design
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                    JavaScript
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Schedule */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Your Schedule</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Today's Availability</span>
                <button className="text-sm text-indigo-600 hover:text-indigo-500">
                  Edit Schedule
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg text-center">
                  <span className="text-sm font-medium">9:00 AM - 12:00 PM</span>
                </div>
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg text-center">
                  <span className="text-sm font-medium">2:00 PM - 5:00 PM</span>
                </div>
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                View Full Calendar
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <Video className="h-5 w-5 text-indigo-600" />
                <span className="font-medium">Create Session Link</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <MessageCircle className="h-5 w-5 text-indigo-600" />
                <span className="font-medium">Message All Mentees</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                <TrendingUp className="h-5 w-5 text-indigo-600" />
                <span className="font-medium">View Analytics</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDashboard;