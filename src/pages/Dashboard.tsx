import { Calendar, Clock, Video, MessageCircle, BookOpen, Trophy, TrendingUp } from 'lucide-react';
import { mentors, upcomingSessions } from '../data/mockData';
import { format } from 'date-fns';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <Clock className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Hours Learned</p>
                  <p className="text-2xl font-bold">24.5</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Sessions</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Skills Gained</p>
                  <p className="text-2xl font-bold">8</p>
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
                        <p className="text-gray-600">with {session.mentorName}</p>
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
                      <Calendar className="h-4 w-4" />
                      Add to Calendar
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      Message Mentor
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Learning Progress</h2>
              <select className="px-3 py-2 border rounded-lg">
                <option>This Month</option>
                <option>Last 3 Months</option>
                <option>This Year</option>
              </select>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Machine Learning</span>
                  <span className="text-sm text-gray-600">75%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">System Design</span>
                  <span className="text-sm text-gray-600">60%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '60%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Data Structures</span>
                  <span className="text-sm text-gray-600">90%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '90%' }} />
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
              <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
              <p className="opacity-90">Software Engineer</p>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Alex Johnson</h3>
                  <p className="text-gray-600">Joined March 2024</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  <span className="text-gray-600">Learning Goals</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                    Machine Learning
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                    System Design
                  </span>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
                    Data Structures
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Mentors */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">Recommended Mentors</h2>
            <div className="space-y-4">
              {mentors.slice(0, 3).map((mentor) => (
                <div key={mentor.id} className="flex items-center gap-4">
                  <img
                    src={mentor.imageUrl}
                    alt={mentor.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.title}</p>
                  </div>
                  <button className="px-3 py-1 text-sm text-indigo-600 border border-indigo-200 rounded-lg hover:bg-indigo-50">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;