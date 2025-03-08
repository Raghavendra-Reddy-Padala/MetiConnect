import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openQuestions, setOpenQuestions] = useState<{ [key: number]: boolean }>({});

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'technology', name: 'Technology' },
    { id: 'business', name: 'Business' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'mentorship', name: 'Mentorship' }
  ];

  // FAQ questions and answers
  const faqs = [
    {
      id: 1,
      category: 'technology',
      question: "What is the role of AI in modern mentorship programs?",
      answer: "AI is increasingly being used to match mentors with mentees based on skills, goals, and personality traits. It can also provide data-driven insights on mentor-mentee relationships, track progress, and suggest areas for growth. Some platforms use AI to recommend learning resources and facilitate more personalized mentorship experiences."
    },
    {
      id: 2,
      category: 'technology',
      question: "How is blockchain technology being applied in professional development?",
      answer: "Blockchain is being used to verify credentials, certifications, and skill validations in professional development. Some platforms use blockchain to create immutable records of mentorship sessions, feedback, and achievements. This provides transparency and trust, especially in remote or cross-organizational mentorship programs."
    },
    {
      id: 3,
      category: 'technology',
      question: "What impact has remote work had on mentorship programs?",
      answer: "Remote work has transformed mentorship by necessitating digital-first approaches. Virtual mentorship platforms have seen significant growth, and organizations are implementing structured virtual mentoring programs with video calls, digital check-ins, and online collaboration tools. This shift has expanded access to global mentors but created new challenges in building rapport and maintaining engagement."
    },
    {
      id: 4,
      category: 'business',
      question: "How do successful companies measure the ROI of mentorship programs?",
      answer: "Companies measure mentorship ROI through metrics like employee retention rates, promotion rates for mentees, skill development tracking, engagement scores, and productivity improvements. Some organizations also track mentorship participation rates and correlate them with business outcomes like innovation metrics or customer satisfaction scores."
    },
    {
      id: 5,
      category: 'business',
      question: "What are the benefits of cross-functional mentoring for organizations?",
      answer: "Cross-functional mentoring breaks down silos, fosters innovation through diverse perspectives, accelerates knowledge transfer across departments, and builds a more cohesive company culture. It helps employees develop broader business acumen and creates pathways for interdepartmental collaboration on future projects."
    },
    {
      id: 6,
      category: 'business',
      question: "How can startups implement effective mentorship programs with limited resources?",
      answer: "Startups can leverage peer-to-peer mentoring, establish partnerships with industry networks, utilize existing online mentorship platforms, implement micro-mentoring (short, focused sessions), and engage advisors or board members as mentors. Even informal mentorship structures with clear goals can yield significant benefits without major resource investments."
    },
    {
      id: 7,
      category: 'leadership',
      question: "What leadership skills are most important to develop in 2025?",
      answer: "Key leadership skills for 2025 include adaptive decision-making in uncertain environments, digital fluency and data literacy, leading remote/hybrid teams effectively, emotional intelligence and empathy, systems thinking for complex problem-solving, cross-cultural communication, and the ability to drive organizational transformation and change management."
    },
    {
      id: 8,
      category: 'leadership',
      question: "How can leaders effectively mentor across generational divides?",
      answer: "Effective cross-generational mentoring requires acknowledging different communication preferences, recognizing varied career motivations, implementing two-way (reverse) mentoring, focusing on strengths rather than stereotypes, and creating psychologically safe environments for honest exchange. Leaders should demonstrate genuine curiosity about different generational perspectives."
    },
    {
      id: 9,
      category: 'leadership',
      question: "What approaches work best for developing leadership capabilities in high-potential employees?",
      answer: "Successful approaches include stretch assignments with appropriate support, executive shadowing opportunities, action learning projects with real business challenges, formal leadership development programs with peer cohorts, regular exposure to strategic discussions, and targeted mentoring from senior leaders with structured feedback mechanisms."
    },
    {
      id: 10,
      category: 'mentorship',
      question: "What's the difference between coaching, mentoring, and sponsorship?",
      answer: "Coaching typically focuses on specific skills or performance improvements through structured guidance. Mentoring involves a longer-term relationship where an experienced person shares knowledge and provides career guidance. Sponsorship goes beyond advice—sponsors actively advocate for their protégés, using their influence to create opportunities and visibility for them within organizations."
    },
    {
      id: 11,
      category: 'mentorship',
      question: "How often should mentor-mentee pairs meet for optimal results?",
      answer: "Most successful mentoring relationships include regular meetings every 2-4 weeks, with each session lasting 45-60 minutes. However, the optimal frequency depends on goals, career stage, and availability. Some prefer frequent short check-ins, while others benefit from less frequent but deeper conversations. The consistency of meetings is generally more important than their frequency."
    },
    {
      id: 12,
      category: 'technology',
      question: "How is AR/VR technology changing professional development and mentorship?",
      answer: "AR/VR creates immersive learning environments for skills practice with mentor feedback. Some organizations use VR for simulated client interactions or presentations with mentors observing. AR applications allow remote mentors to provide real-time guidance for physical tasks. These technologies are particularly valuable for global mentorship programs where in-person interaction isn't possible."
    },
    {
      id: 13,
      category: 'business',
      question: "What strategies help organizations retain knowledge during leadership transitions?",
      answer: "Effective knowledge retention strategies include structured mentorship programs paired with documentation, creating leadership transition playbooks, implementing phased handovers with overlap periods, establishing communities of practice, using knowledge management systems, and creating video/audio recordings of departing leaders sharing insights and institutional knowledge."
    },
    {
      id: 14,
      category: 'leadership',
      question: "How can executives balance mentoring responsibilities with their other priorities?",
      answer: "Executives can integrate mentoring into their workflow by combining it with existing responsibilities (bringing mentees to meetings), establishing clear boundaries and expectations, leveraging group mentoring formats, using technology for asynchronous guidance, and focusing on quality over quantity in mentoring interactions."
    },
    {
      id: 15,
      category: 'mentorship',
      question: "What are common pitfalls that cause mentoring relationships to fail?",
      answer: "Common pitfalls include unclear expectations at the outset, insufficient structure or guidance, lack of preparation for meetings, poor matching of mentors and mentees, inadequate follow-through on commitments, mentors who dominate conversations rather than listen, and failure to assess and adjust the relationship over time."
    },
    {
      id: 16,
      category: 'technology',
      question: "How are data analytics being used to improve mentorship programs?",
      answer: "Organizations use analytics to identify skills gaps for targeted mentoring, create optimal mentor-mentee matches based on compatibility factors, track engagement metrics to predict and prevent mentorship breakdowns, measure program outcomes against organizational goals, and continuously improve program design through evidence-based iterations."
    },
    {
      id: 17,
      category: 'business',
      question: "What approaches help create inclusive mentorship programs that reach underrepresented groups?",
      answer: "Effective approaches include ensuring diverse mentor pools, establishing affinity-based mentoring circles, providing bias training for mentors, creating transparent access paths to mentorship opportunities, measuring inclusion metrics, implementing sponsorship programs specifically for underrepresented groups, and recognizing mentors who successfully support diversity initiatives."
    },
    {
      id: 18,
      category: 'leadership',
      question: "How is the concept of servant leadership applied in modern mentoring practices?",
      answer: "Servant leadership in mentoring emphasizes putting mentees' needs first, active listening over directing, asking powerful questions to promote self-discovery, removing obstacles to mentee growth, providing resources and connections without expecting reciprocation, and modeling vulnerability and continuous learning as a mentor."
    }
  ];

  // Toggle question open/closed state
  const toggleQuestion = (id: number) => {
    setOpenQuestions({
      ...openQuestions,
      [id]: !openQuestions[id]
    });
  };

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find answers to common questions about mentorship, technology, business, and leadership
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Search for questions or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  activeCategory === category.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map(faq => (
              <div 
                key={faq.id} 
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  onClick={() => toggleQuestion(faq.id)}
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  {openQuestions[faq.id] ? (
                    <ChevronUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {openQuestions[faq.id] && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No matching questions found</h3>
              <p className="text-gray-500">Try adjusting your search or category filter</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="bg-indigo-50 rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Can't find what you're looking for?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Our team is here to help. Reach out to us with your question and we'll get back to you as soon as possible.
          </p>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;