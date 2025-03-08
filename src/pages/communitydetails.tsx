// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { 
//   MessageSquare, 
//   Calendar, 
//   Users, 
//   PlusCircle, 
//   Send, 
//   Bell, 
//   FileText,
//   Tag,
//   Video
// } from 'lucide-react';

// import { communities } from '../data/mockData';

// const CommunityDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const [activeTab, setActiveTab] = useState('discussions');
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState<{ id: number; user: string; message: string; timestamp: string; avatar: string; isSystem?: boolean; isCurrentUser?: boolean }[]>([]);
//   const [events, setEvents] = useState([
//     {
//       id: 1,
//       title: 'Weekly Knowledge Sharing',
//       date: '2025-03-15T18:00:00',
//       type: 'Virtual',
//       description: 'Join us for our weekly knowledge sharing session where members present their projects and learnings.',
//       attendees: 18
//     },
//     {
//       id: 2,
//       title: 'Community Hackathon',
//       date: '2025-03-22T09:00:00',
//       type: 'In-Person',
//       description: 'A weekend-long hackathon where members collaborate on interesting projects.',
//       attendees: 24
//     }
//   ]);
//   const [newEvent, setNewEvent] = useState({
//     title: '',
//     date: '',
//     type: 'Virtual',
//     description: ''
//   });
//   const [showEventForm, setShowEventForm] = useState(false);
  
//   // Find current community
//   const community = communities.find(c => c.id === parseInt(id, 10)) || {
//     name: 'Community not found',
//     members: 0,
//     description: '',
//     topics: [],
//     icon: MessageSquare
//   };

//   // Mock data for discussions
//   const discussions = [
//     {
//       id: 1,
//       title: 'Best practices for learning System Design?',
//       author: 'Alex Chen',
//       date: '2025-03-07T14:30:00',
//       content: 'Looking for advice on how to effectively learn and practice system design concepts...',
//       replies: 24
//     },
//     {
//       id: 2,
//       title: 'Resources for cloud certification',
//       author: 'Maya Johnson',
//       date: '2025-03-06T10:15:00',
//       content: 'Can anyone recommend good resources for preparing for AWS certification exams?',
//       replies: 15
//     },
//     {
//       id: 3,
//       title: 'Seeking code review partners',
//       author: 'Jordan Smith',
//       date: '2025-03-05T16:45:00',
//       content: 'Looking for partners to do regular code reviews and peer programming sessions.',
//       replies: 8
//     }
//   ];

//   // Mock members data
//   const members = [
//     { id: 1, name: 'Alex Chen', role: 'Admin', avatar: '/api/placeholder/40/40' },
//     { id: 2, name: 'Maya Johnson', role: 'Moderator', avatar: '/api/placeholder/40/40' },
//     { id: 3, name: 'Jordan Smith', role: 'Member', avatar: '/api/placeholder/40/40' },
//     { id: 4, name: 'Taylor Williams', role: 'Member', avatar: '/api/placeholder/40/40' },
//     { id: 5, name: 'Sam Rodriguez', role: 'Member', avatar: '/api/placeholder/40/40' },
//   ];

//   // Initial chat messages
//   useEffect(() => {
//     setMessages([
//       { id: 1, user: 'Alex Chen', message: 'Welcome to the community chat!', timestamp: '2025-03-08T09:30:00', avatar: '/api/placeholder/40/40' },
//       { id: 2, user: 'Maya Johnson', message: 'Hey everyone! Excited to connect with you all.', timestamp: '2025-03-08T09:32:00', avatar: '/api/placeholder/40/40' },
//       { id: 3, user: 'System', message: 'A new member has joined the community!', timestamp: '2025-03-08T09:35:00', isSystem: true ,avatar:""}
//     ]);
//   }, []);

//   const handleSendMessage = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     if (!message.trim()) return;
    
//     const newMessage = {
//       id: messages.length + 1,
//       user: 'You',
//       message: message,
//       timestamp: new Date().toISOString(),
//       avatar: '/api/placeholder/40/40',
//       isCurrentUser: true
//     };
    
//     setMessages([...messages, newMessage]);
//     setMessage('');
//   };

//   const handleCreateEvent = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     const event = {
//       id: events.length + 1,
//       ...newEvent,
//       attendees: 1
//     };
    
//     setEvents([...events, event]);
//     setNewEvent({
//       title: '',
//       date: '',
//       type: 'Virtual',
//       description: ''
//     });
//     setShowEventForm(false);
//   };

//   const formatDate = (dateString: string | number | Date) => {
//     const options = { month: 'short' as 'short', day: 'numeric' as 'numeric', hour: '2-digit' as '2-digit', minute: '2-digit' as '2-digit' };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   return (
//     <div className="max-w-7xl mx-auto">
//       {/* Community Header */}
//       <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
//         <div className="flex items-start justify-between">
//           <div className="flex items-center gap-4">
//             <div className="p-4 bg-indigo-100 rounded-lg">
//               <community.icon className="h-8 w-8 text-indigo-600" />
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold">{community.name}</h1>
//               <p className="text-gray-600">{community.members} members</p>
//             </div>
//           </div>
//           <button className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors">
//             <Bell className="h-4 w-4" />
//             Notifications
//           </button>
//         </div>
//         <div className="flex flex-wrap gap-2 mt-4">
//           {community.topics.map((topic, index) => (
//             <span key={index} className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm">
//               {topic}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Tabs */}
//       <div className="flex border-b mb-6">
//         <button 
//           onClick={() => setActiveTab('discussions')}
//           className={`px-4 py-3 flex items-center gap-2 ${activeTab === 'discussions' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
//         >
//           <MessageSquare className="h-4 w-4" />
//           Discussions
//         </button>
//         <button 
//           onClick={() => setActiveTab('chat')}
//           className={`px-4 py-3 flex items-center gap-2 ${activeTab === 'chat' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
//         >
//           <MessageSquare className="h-4 w-4" />
//           Live Chat
//         </button>
//         <button 
//           onClick={() => setActiveTab('events')}
//           className={`px-4 py-3 flex items-center gap-2 ${activeTab === 'events' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
//         >
//           <Calendar className="h-4 w-4" />
//           Events
//         </button>
//         <button 
//           onClick={() => setActiveTab('resources')}
//           className={`px-4 py-3 flex items-center gap-2 ${activeTab === 'resources' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
//         >
//           <FileText className="h-4 w-4" />
//           Resources
//         </button>
//         <button 
//           onClick={() => setActiveTab('members')}
//           className={`px-4 py-3 flex items-center gap-2 ${activeTab === 'members' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-gray-600'}`}
//         >
//           <Users className="h-4 w-4" />
//           Members
//         </button>
//       </div>

//       {/* Dynamic Content based on active tab */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Main Content Area */}
//         <div className="lg:col-span-2">
//           {activeTab === 'discussions' && (
//             <div>
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold">Discussions</h2>
//                 <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
//                   <PlusCircle className="h-4 w-4" />
//                   New Topic
//                 </button>
//               </div>
//               <div className="bg-white rounded-xl shadow-sm divide-y">
//                 {discussions.map(discussion => (
//                   <div key={discussion.id} className="p-6 hover:bg-gray-50 transition-colors">
//                     <div className="flex-1">
//                       <h3 className="font-semibold mb-2">{discussion.title}</h3>
//                       <p className="text-gray-600 text-sm mb-3">{discussion.content}</p>
//                       <div className="flex items-center gap-4 text-sm text-gray-500">
//                         <span>By {discussion.author}</span>
//                         <span>•</span>
//                         <span>{formatDate(discussion.date)}</span>
//                         <span>•</span>
//                         <span>{discussion.replies} replies</span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'chat' && (
//             <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-[600px]">
//               <div className="p-4 border-b bg-gray-50">
//                 <h2 className="font-bold">Community Chat</h2>
//               </div>
//               <div className="flex-1 overflow-y-auto p-4 space-y-4">
//                 {messages.map(msg => (
//                   <div key={msg.id} className={`flex ${msg.isCurrentUser ? 'justify-end' : 'justify-start'}`}>
//                     <div className={`max-w-3/4 ${msg.isSystem ? 'w-full text-center text-gray-500 text-sm italic my-2' : ''}`}>
//                       {!msg.isSystem && (
//                         <div className={`flex items-start gap-3 ${msg.isCurrentUser ? 'flex-row-reverse' : ''}`}>
//                           <img src={msg.avatar} alt={msg.user} className="w-8 h-8 rounded-full" />
//                           <div>
//                             <div className={`rounded-lg p-3 ${msg.isCurrentUser ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}>
//                               <p>{msg.message}</p>
//                             </div>
//                             <div className={`text-xs text-gray-500 mt-1 ${msg.isCurrentUser ? 'text-right' : ''}`}>
//                               {msg.user} • {formatDate(msg.timestamp)}
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                       {msg.isSystem && (
//                         <div className="py-2">{msg.message}</div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <form onSubmit={handleSendMessage} className="p-4 border-t flex gap-2">
//                 <input
//                   type="text"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   placeholder="Type your message..."
//                   className="flex-1 rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//                 <button 
//                   type="submit"
//                   className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
//                 >
//                   <Send className="h-4 w-4" />
//                   Send
//                 </button>
//               </form>
//             </div>
//           )}

//           {activeTab === 'events' && (
//             <div>
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold">Upcoming Events</h2>
//                 <button 
//                   onClick={() => setShowEventForm(!showEventForm)}
//                   className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//                 >
//                   <PlusCircle className="h-4 w-4" />
//                   {showEventForm ? 'Cancel' : 'Create Event'}
//                 </button>
//               </div>

//               {showEventForm && (
//                 <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
//                   <h3 className="font-bold text-lg mb-4">Create New Event</h3>
//                   <form onSubmit={handleCreateEvent} className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Event Title</label>
//                       <input
//                         type="text"
//                         value={newEvent.title}
//                         onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
//                         className="w-full rounded-lg border px-4 py-2"
//                         required
//                       />
//                     </div>
//                     <div className="grid grid-cols-2 gap-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Date & Time</label>
//                         <input
//                           type="datetime-local"
//                           value={newEvent.date}
//                           onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
//                           className="w-full rounded-lg border px-4 py-2"
//                           required
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
//                         <select
//                           value={newEvent.type}
//                           onChange={(e) => setNewEvent({...newEvent, type: e.target.value})}
//                           className="w-full rounded-lg border px-4 py-2"
//                         >
//                           <option value="Virtual">Virtual</option>
//                           <option value="In-Person">In-Person</option>
//                           <option value="Hybrid">Hybrid</option>
//                         </select>
//                       </div>
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                       <textarea
//                         value={newEvent.description}
//                         onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
//                         className="w-full rounded-lg border px-4 py-2"
//                         rows={3}
//                         required
//                       ></textarea>
//                     </div>
//                     <button
//                       type="submit"
//                       className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
//                     >
//                       Create Event
//                     </button>
//                   </form>
//                 </div>
//               )}

//               <div className="space-y-4">
//                 {events.map(event => (
//                   <div key={event.id} className="bg-white rounded-xl shadow-sm p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="font-bold text-lg">{event.title}</h3>
//                       <span className={`px-3 py-1 rounded-full text-sm ${
//                         event.type === 'Virtual' ? 'bg-green-100 text-green-800' : 
//                         event.type === 'In-Person' ? 'bg-blue-100 text-blue-800' : 
//                         'bg-purple-100 text-purple-800'
//                       }`}>
//                         {event.type}
//                       </span>
//                     </div>
//                     <p className="text-gray-600 mb-4">{event.description}</p>
//                     <div className="flex justify-between items-center">
//                       <div className="flex items-center gap-4">
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <Calendar className="h-4 w-4" />
//                           <span>{formatDate(event.date)}</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                           <Users className="h-4 w-4" />
//                           <span>{event.attendees} attending</span>
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         {event.type === 'Virtual' && (
//                           <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
//                             <Video className="h-4 w-4" />
//                             Join
//                           </button>
//                         )}
//                         <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
//                           RSVP
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'resources' && (
//             <div>
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold">Learning Resources</h2>
//                 <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
//                   <PlusCircle className="h-4 w-4" />
//                   Add Resource
//                 </button>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {[1, 2, 3, 4].map(resource => (
//                   <div key={resource} className="bg-white rounded-xl shadow-sm p-6">
//                     <div className="flex items-start gap-4">
//                       <div className="p-3 bg-indigo-100 rounded-lg">
//                         <FileText className="h-6 w-6 text-indigo-600" />
//                       </div>
//                       <div>
//                         <h3 className="font-semibold mb-1">System Design Interview Guide</h3>
//                         <p className="text-gray-600 text-sm mb-2">Comprehensive guide for system design interviews with examples</p>
//                         <div className="flex items-center gap-2 text-xs text-gray-500">
//                           <span>Shared by: Alex Chen</span>
//                           <span>•</span>
//                           <span>Mar 4, 2025</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === 'members' && (
//             <div>
//               <div className="flex justify-between items-center mb-6">
//                 <h2 className="text-xl font-bold">Community Members</h2>
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     placeholder="Search members..."
//                     className="px-4 py-2 border rounded-lg"
//                   />
//                   <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
//                     <Tag className="h-4 w-4" />
//                     Filter
//                   </button>
//                 </div>
//               </div>
//               <div className="bg-white rounded-xl shadow-sm">
//                 <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x">
//                   {members.map(member => (
//                     <div key={member.id} className="p-6 flex items-center gap-4">
//                       <img src={member.avatar} alt={member.name} className="w-12 h-12 rounded-full" />
//                       <div className="flex-1">
//                         <h3 className="font-semibold">{member.name}</h3>
//                         <p className="text-sm text-gray-600">{member.role}</p>
//                       </div>
//                       <button className="px-3 py-1 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
//                         Message
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Sidebar */}
//         <div className="lg:col-span-1 space-y-6">
//           {/* About Community */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h3 className="font-bold mb-4">About this Community</h3>
//             <p className="text-gray-600 mb-4">{community.description || 'A community of like-minded learners focused on technology and personal growth.'}</p>
//             <div className="space-y-3 text-sm">
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Created</span>
//                 <span>January 15, 2025</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Members</span>
//                 <span>{community.members}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Posts per week</span>
//                 <span>~35</span>
//               </div>
//             </div>
//           </div>

//           {/* Upcoming Events Preview */}
//           {activeTab !== 'events' && (
//             <div className="bg-white rounded-xl shadow-sm p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="font-bold">Upcoming Events</h3>
//                 <button 
//                   onClick={() => setActiveTab('events')}
//                   className="text-sm text-indigo-600 hover:underline"
//                 >
//                   View all
//                 </button>
//               </div>
//               <div className="space-y-4">
//                 {events.slice(0, 2).map(event => (
//                   <div key={event.id} className="border-b pb-4 last:border-0 last:pb-0">
//                     <h4 className="font-semibold">{event.title}</h4>
//                     <div className="flex items-center gap-2 text-sm text-gray-600 my-1">
//                       <Calendar className="h-4 w-4" />
//                       <span>{formatDate(event.date)}</span>
//                     </div>
//                     <span className={`inline-block px-2 py-1 rounded-full text-xs ${
//                       event.type === 'Virtual' ? 'bg-green-100 text-green-800' : 
//                       event.type === 'In-Person' ? 'bg-blue-100 text-blue-800' : 
//                       'bg-purple-100 text-purple-800'
//                     }`}>
//                       {event.type}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Community Rules */}
//           <div className="bg-white rounded-xl shadow-sm p-6">
//             <h3 className="font-bold mb-4">Community Guidelines</h3>
//             <ul className="space-y-2 text-gray-600">
//               <li className="flex items-start gap-2">
//                 <span className="font-bold text-indigo-600">1.</span>
//                 <span>Be respectful and kind to other members</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="font-bold text-indigo-600">2.</span>
//                 <span>Share knowledge freely and help others learn</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="font-bold text-indigo-600">3.</span>
//                 <span>Provide constructive feedback</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="font-bold text-indigo-600">4.</span>
//                 <span>Stay on topic and avoid spam</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <span className="font-bold text-indigo-600">5.</span>
//                 <span>Respect intellectual property and give credit</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityDetail;\
