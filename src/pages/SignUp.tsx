import axios from "axios";
import { AngryIcon, ArrowRight, Book, Briefcase, DollarSign, Link, Mail, User } from "lucide-react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key, useState } from "react";
import { useNavigate } from "react-router-dom";


interface FormData {
  name: string;
  email: string;
  password: string;
  role: 'mentor' | 'mentee';
  bio: string;
  profileImage: string;
  title: string;
  yearsOfExperience: number;
  teachingTopics: string[];
  hourlyRate: number;
  availability: { day: string; startTime: string; endTime: string }[];
  learningGoals: string[];
}

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    role: 'mentee',
    bio: '',
    profileImage: '',
    title: '',
    yearsOfExperience: 0,
    teachingTopics: [],
    hourlyRate: 0,
    availability: [],
    learningGoals: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes for text fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle adding items to array fields (e.g., teachingTopics, learningGoals)
  const handleArrayChange = (field: keyof FormData, value: string) => {
    if (value.trim() === '') return;

    // Check if the field exists in the form data
    if (field in formData) {
      const newArray = Array.isArray(formData[field]) ? [...formData[field]] as string[] : [];
      if (!newArray.includes(value)) {
        newArray.push(value);
        setFormData({ ...formData, [field]: newArray });
      }
    }
  };

  // Handle removing items from array fields
  const handleRemoveItem = (field: keyof FormData, index: number) => {
    const newArray = Array.isArray(formData[field]) ? [...formData[field]] as string[] : [];
    newArray.splice(index, 1);
    setFormData({ ...formData, [field]: newArray });
  };

  // Handle multi-input fields (e.g., pressing Enter to add a topic or goal)
  const handleMultiInput = (e: React.KeyboardEvent<HTMLInputElement>, field: keyof FormData) => {
    if (e.key === 'Enter' && e.currentTarget.value.trim() !== '') {
      e.preventDefault();
      handleArrayChange(field, e.currentTarget.value.trim());
      e.currentTarget.value = '';
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Register the user
      const response = await axios.post('/api/auth/register', formData);

      // Store the token in localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect based on role
      if (formData.role === 'mentor') {
        navigate('/mentor/dashboard');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError((err as any).response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Move to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Move to the previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Basic validation for the first step
  const isStepOneValid = () => {
    return formData.name && formData.email && formData.password && formData.password.length >= 6;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-indigo-600 text-white' : 'bg-indigo-200'}`}>1</div>
            <div className="w-10 h-1 bg-indigo-200"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 2 ? 'bg-indigo-600 text-white' : 'bg-indigo-200'}`}>2</div>
            <div className="w-10 h-1 bg-indigo-200"></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 3 ? 'bg-indigo-600 text-white' : 'bg-indigo-200'}`}>3</div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AngryIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password (min 6 characters)"
                    value={formData.password}
                    onChange={handleChange}
                    minLength={6}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  I want to...
                </label>
                <select
                  id="role"
                  name="role"
                  className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="mentee">Find a mentor</option>
                  <option value="mentor">Become a mentor</option>
                </select>
              </div>
              <div>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepOneValid()}
                  className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white ${isStepOneValid() ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-300'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  Continue
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  rows={3}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Tell us a bit about yourself"
                  value={formData.bio}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image URL (optional)
                </label>
                <input
                  id="profileImage"
                  name="profileImage"
                  type="text"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="https://example.com/your-image.jpg"
                  value={formData.profileImage}
                  onChange={handleChange}
                />
              </div>

              {formData.role === 'mentor' && (
                <>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Professional Title
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="e.g. Senior Software Engineer"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience
                    </label>
                    <input
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      type="number"
                      min="0"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      value={formData.yearsOfExperience}
                      onChange={handleChange}
                    />
                  </div>
                </>
              )}

              {formData.role === 'mentee' && (
                <div>
                  <label htmlFor="learningGoalsInput" className="block text-sm font-medium text-gray-700 mb-1">
                    Learning Goals (press Enter after each goal)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Book className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="learningGoalsInput"
                      type="text"
                      className="appearance-none relative block w-full px-3 py-2 pl-10 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="e.g. Machine Learning"
                      onKeyDown={(e) => handleMultiInput(e, 'learningGoals')}
                    />
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formData.learningGoals.map((goal: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                      <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {goal}
                        <button
                          type="button"
                          className="ml-1 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                          onClick={() => handleRemoveItem('learningGoals', index as number)}
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="group relative flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="rounded-md shadow-sm space-y-4">
              {formData.role === 'mentor' && (
                <>
                  <div>
                    <label htmlFor="teachingTopicsInput" className="block text-sm font-medium text-gray-700 mb-1">
                      Teaching Topics (press Enter after each topic)
                    </label>
                    <input
                      id="teachingTopicsInput"
                      type="text"
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      placeholder="e.g. React, JavaScript, System Design"
                      onKeyDown={(e) => handleMultiInput(e, 'teachingTopics')}
                    />
                    <div className="mt-2 flex flex-wrap gap-2">
                      {formData.teachingTopics.map((topic: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, index: Key | null | undefined) => (
                        <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          {topic}
                          <button
                            type="button"
                            className="ml-1 flex-shrink-0 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white"
                            onClick={() => handleRemoveItem('teachingTopics', index as number)}
                          >
                            &times;
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-1">
                      Hourly Rate (USD)
                    </label>
                    <div className="relative mt-1 rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        name="hourlyRate"
                        id="hourlyRate"
                        min="0"
                        className="appearance-none block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="0.00"
                        value={formData.hourlyRate}
                        onChange={handleChange}
                        />
                        </div>
                      </div>
    
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Availability
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          You can set your detailed availability after registration in your profile settings.
                        </p>
                      </div>
                    </>
                  )}
    
                  <div className="text-sm text-gray-600">
                    <p className="mb-2 font-medium">Account Summary:</p>
                    <ul className="space-y-1 list-disc list-inside pl-2">
                      <li>Name: {formData.name}</li>
                      <li>Email: {formData.email}</li>
                      <li>Role: {formData.role === 'mentor' ? 'Mentor' : 'Mentee'}</li>
                      {formData.bio && <li>Bio: {formData.bio.substring(0, 50)}...</li>}
                      
                      {formData.role === 'mentor' && (
                        <>
                          {formData.title && <li>Title: {formData.title}</li>}
                          <li>Experience: {formData.yearsOfExperience} years</li>
                          <li>Topics: {formData.teachingTopics.join(', ') || 'None specified'}</li>
                          <li>Rate: ${formData.hourlyRate}/hour</li>
                        </>
                      )}
                      
                      {formData.role === 'mentee' && (
                        <li>Goals: {formData.learningGoals.join(', ') || 'None specified'}</li>
                      )}
                    </ul>
                  </div>
    
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="group relative flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Create account
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}
    
              {step === 1 && (
                <div className="text-sm text-center text-gray-600">
                  By signing up, you agree to our{' '}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Privacy Policy
                  </a>
                </div>
              )}
            </form>
          </div>
        </div>
      );
    };
    
    export default SignUp;
