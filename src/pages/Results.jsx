// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../hooks/useAuth';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { supabase } from '../lib/supabase';
// import { Shield, TrendingUp, Clock, Star, BookOpen, Briefcase, Users, Target, ChevronRight, Download, CheckCircle, AlertTriangle, Eye, EyeOff } from 'lucide-react';
// import Footer from '../components/Footer';

// // AI Risk Gauge Component (Animated version for results)
// const AIRiskGauge = ({ score, role, isAnimated = true }) => {
//   const [animatedScore, setAnimatedScore] = useState(0);

//   useEffect(() => {
//     if (isAnimated) {
//       const timer = setTimeout(() => {
//         const interval = setInterval(() => {
//           setAnimatedScore(prev => {
//             if (prev >= score) {
//               clearInterval(interval);
//               return score;
//             }
//             return prev + 1;
//           });
//         }, 20);
//       }, 500);
//       return () => clearTimeout(timer);
//     } else {
//       setAnimatedScore(score);
//     }
//   }, [score, isAnimated]);

//   const getColor = (score) => {
//     if (score >= 70) return 'text-red-500';
//     if (score >= 40) return 'text-yellow-500';
//     return 'text-green-500';
//   };

//   const getRiskLevel = (score) => {
//     if (score >= 70) return 'High Risk';
//     if (score >= 40) return 'Moderate Risk';
//     return 'Low Risk';
//   };

//   const getAdvice = (score) => {
//     if (score >= 70) return 'Urgent action needed - start AI-proofing immediately';
//     if (score >= 40) return 'Time to evolve - learn to lead AI in your field';
//     return 'Stay vigilant - maintain your competitive edge';
//   };

//   return (
//     <div className="text-center py-12">
//       <div className="relative w-48 h-48 mx-auto mb-6">
//         <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 36 36">
//           <path
//             d="M18 2.0845
//               a 15.9155 15.9155 0 0 1 0 31.831
//               a 15.9155 15.9155 0 0 1 0 -31.831"
//             fill="none"
//             stroke="#e5e7eb"
//             strokeWidth="3"
//           />
//           <path
//             d="M18 2.0845
//               a 15.9155 15.9155 0 0 1 0 31.831
//               a 15.9155 15.9155 0 0 1 0 -31.831"
//             fill="none"
//             stroke={score >= 70 ? '#ef4444' : score >= 40 ? '#eab308' : '#22c55e'}
//             strokeWidth="3"
//             strokeDasharray={`${animatedScore}, 100`}
//             className="transition-all duration-1000 ease-out"
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <div className={`text-4xl font-bold ${getColor(score)}`}>{animatedScore}%</div>
//             <div className="text-sm text-gray-500 mt-1">AI Risk</div>
//           </div>
//         </div>
//       </div>
      
//       <h1 className="text-3xl font-bold text-gray-900 mb-2">
//         Your AI Risk Score: <span className={getColor(score)}>{score}%</span>
//       </h1>
//       <p className={`text-xl font-semibold mb-2 ${getColor(score)}`}>
//         Risk Level: {getRiskLevel(score)}
//       </p>
//       <p className="text-gray-600 mb-4">{role} • Based on your responses</p>
//       <p className={`font-medium ${getColor(score)}`}>{getAdvice(score)}</p>
//     </div>
//   );
// };

// // Risk Breakdown Component
// const RiskBreakdown = ({ contributions, summary }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border p-8">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
//         How We Calculated Your Risk
//       </h2>
      
//       <div className="space-y-4 mb-6">
//         {contributions.map((item, index) => (
//           <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
//             <div className="flex-1">
//               <p className="font-medium text-gray-900">{item.factor}</p>
//             </div>
//             <div className="text-right">
//               <span className={`font-bold ${
//                 item.points > 15 ? 'text-red-600' : 
//                 item.points > 5 ? 'text-yellow-600' : 'text-green-600'
//               }`}>
//                 {item.points > 0 ? '+' : ''}{item.points} pts
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="p-4 bg-blue-50 rounded-lg">
//         <p className="text-sm text-blue-800">
//           <strong>Summary:</strong> {summary}
//         </p>
//       </div>
//     </div>
//   );
// };

// // Evolution Paths Component
// const EvolutionPaths = ({ paths, onViewMore }) => {
//   if (!paths || paths.length === 0) {
//     return (
//       <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
//         <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Evolution Paths</h2>
//         <p className="text-gray-600">Evolution recommendations will appear here based on your assessment.</p>
//       </div>
//     );
//   }

//   const primaryPath = paths[0];
//   const secondaryPaths = paths.slice(1, 3);

//   return (
//     <div className="space-y-8">
//       {/* Primary Recommendation */}
//       <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-200 p-8">
//         <div className="text-center mb-6">
//           <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
//             <Star className="w-4 h-4 mr-1" />
//             Top Recommendation
//           </div>
//           <h2 className="text-2xl font-bold text-gray-900 mb-2">{primaryPath.title}</h2>
//           <p className="text-lg text-blue-600 font-semibold">{primaryPath.match_score}% Perfect Fit</p>
//         </div>
        
//         <div className="text-center mb-6">
//           <p className="text-gray-700 text-lg leading-relaxed">{primaryPath.description}</p>
//         </div>

//         <div className="space-y-3 mb-8">
//           <h3 className="font-semibold text-gray-900">Key Benefits:</h3>
//           {primaryPath.benefits?.map((benefit, index) => (
//             <div key={index} className="flex items-start gap-3">
//               <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
//               <span className="text-gray-700">{benefit}</span>
//             </div>
//           ))}
//         </div>

//         <div className="flex flex-col sm:flex-row gap-3">
//           <button 
//             onClick={onViewMore}
//             className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
//           >
//             Get Full Career Plan
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>

//       {/* Secondary Paths */}
//       {secondaryPaths.length > 0 && (
//         <div className="space-y-4">
//           <h3 className="text-xl font-semibold text-gray-900 text-center">
//             Alternative Career Paths
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {secondaryPaths.map((path, index) => (
//               <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
//                 <div className="flex items-start justify-between mb-3">
//                   <h4 className="font-semibold text-gray-900 text-lg">{path.title}</h4>
//                   <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
//                     {path.match_score}% fit
//                   </span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{path.description}</p>
//                 <button 
//                   onClick={onViewMore}
//                   className="w-full border border-blue-300 text-blue-600 py-2 px-4 rounded-lg font-medium hover:bg-blue-50 transition-colors"
//                 >
//                   Learn More
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Free Blurb Component
// const FreeBlurb = ({ blurb, onUpgrade }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-sm border p-8">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
//         Your Personalized AI Career Strategy
//       </h2>
      
//       <div className="prose prose-lg max-w-none text-gray-700">
//         <div dangerouslySetInnerHTML={{ __html: blurb }} />
//       </div>

//       <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
//         <h3 className="font-semibold text-gray-900 mb-4 text-center">Want Your Complete Plan?</h3>
//         <p className="text-gray-700 text-center mb-6">
//           Get your full 90-day action plan, skills roadmap, and career transition templates for just <span className="font-bold text-indigo-600">$29</span>
//         </p>
//         <div className="text-center">
//           <button 
//             onClick={onUpgrade}
//             className="bg-indigo-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
//           >
//             Get Complete Plan - $29
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Newsletter Signup
// const NewsletterSignup = ({ role }) => {
//   const [email, setEmail] = useState('');
//   const [subscribed, setSubscribed] = useState(false);

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     // Add newsletter subscription logic here
//     setSubscribed(true);
//   };

//   return (
//     <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
//       <h3 className="text-xl font-semibold mb-2">Stay Ahead of AI Changes</h3>
//       <p className="text-gray-300 mb-6">
//         Get monthly AI threat updates and career protection strategies
//       </p>
      
//       {subscribed ? (
//         <div className="flex items-center justify-center gap-2 text-green-400">
//           <CheckCircle className="w-5 h-5" />
//           <span>Thanks! You'll receive updates soon.</span>
//         </div>
//       ) : (
//         <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
//           <input 
//             type="email" 
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//             className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-blue-300"
//           />
//           <button 
//             type="submit"
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//           >
//             Get Updates
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// // Main Results Component
// const Results = () => {
//   const { user } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [assessmentData, setAssessmentData] = useState(null);
//   const [userProfile, setUserProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user) {
//       navigate('/auth');
//       return;
//     }
//     loadAssessmentResults();
//   }, [user, navigate]);

//   const loadAssessmentResults = async () => {
//     try {
//       // First, try to get data from navigation state (when coming from assessment)
//       if (location.state?.riskResult) {
//         console.log('Loading from navigation state');
//         setAssessmentData({
//           risk_result: location.state.riskResult,
//           evolution_paths: location.state.evolutionPaths,
//           free_blurb: location.state.freeBlurb,
//           answers: location.state.answers
//         });
//         setLoading(false);
//         return;
//       }

//       // Otherwise, fetch from database
//       console.log('Loading from database');
//       const { data: assessmentData, error: assessmentError } = await supabase
//         .from('ai_risk_assessments')
//         .select('*')
//         .eq('user_id', user.id)
//         .order('created_at', { ascending: false })
//         .limit(1)
//         .single();

//       if (assessmentError || !assessmentData) {
//         console.error('No assessment data found:', assessmentError);
//         navigate('/assessment');
//         return;
//       }

//       console.log('Assessment data loaded:', assessmentData);
//       setAssessmentData(assessmentData);

//       // Get user profile for premium status
//       const { data: profileData } = await supabase
//         .from('user_profiles')
//         .select('*')
//         .eq('user_id', user.id)
//         .single();

//       setUserProfile(profileData);

//     } catch (error) {
//       console.error('Error loading results data:', error);
//       navigate('/assessment');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpgrade = () => {
//     // Redirect to checkout/payment flow
//     navigate('/checkout');
//   };

//   const isPremium = userProfile?.subscription_status === 'premium';

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading your AI risk assessment...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!assessmentData) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="text-center">
//           <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">No Assessment Data Found</h2>
//           <p className="text-gray-600 mb-6">Please take the assessment first to see your results.</p>
//           <button 
//             onClick={() => navigate('/assessment')}
//             className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
//           >
//             Take Assessment
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const riskResult = assessmentData.risk_result;
//   const evolutionPaths = assessmentData.evolution_paths;
//   const freeBlurb = assessmentData.free_blurb;

//   // Get role from answers
//   const userRole = assessmentData.answers?.profile_role_family || 'Professional';
//   const userIndustry = assessmentData.answers?.profile_industry || 'Technology';

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-4">
//               <button
//                 onClick={() => navigate('/dashboard')}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 ← Back to Dashboard
//               </button>
//               <div className="text-2xl font-bold text-blue-600">WorkShifted</div>
//             </div>
//             <div className="flex items-center space-x-3">
//               <span className="text-sm text-gray-600">Your AI Risk Assessment</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
//         {/* Hero Section - AI Risk Score */}
//         <div className="bg-white rounded-xl shadow-sm border mb-8">
//           <AIRiskGauge 
//             score={riskResult?.score || 0} 
//             role={userRole} 
//           />
//         </div>

//         {/* Risk Breakdown */}
//         {riskResult?.contributions && (
//           <div className="mb-8">
//             <RiskBreakdown 
//               contributions={riskResult.contributions} 
//               summary={riskResult.summary}
//             />
//           </div>
//         )}

//         {/* Evolution Paths */}
//         {evolutionPaths && (
//           <div className="mb-8">
//             <EvolutionPaths 
//               paths={evolutionPaths} 
//               onViewMore={handleUpgrade}
//             />
//           </div>
//         )}

//         {/* Free Blurb */}
//         {freeBlurb && (
//           <div className="mb-8">
//             <FreeBlurb 
//               blurb={freeBlurb} 
//               onUpgrade={handleUpgrade}
//             />
//           </div>
//         )}

//         {/* Newsletter Signup */}
//         <div className="mb-8">
//           <NewsletterSignup role={userRole} />
//         </div>

//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Results;