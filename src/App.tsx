import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Heart, 
  Calendar, 
  MessageCircle, 
  Phone, 
  Music, 
  Gamepad2, 
  Activity, 
  FileText, 
  BarChart3, 
  Mail, 
  User, 
  Home, 
  Shield, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Globe, 
  Sparkles,
  UserPlus,
  Settings,
  Database,
  Mic,
  Video,
  Gift,
  PartyPopper
} from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  features: string[];
  color: string;
}

function App() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules: Module[] = [
    {
      id: 1,
      title: "SignUp & Authentication",
      description: "Secure web-based registration with voice verification for enhanced security",
      icon: UserPlus,
      features: [
        "Web-based registration form",
        "Voice-to-text verification",
        "Family member enrollment",
        "Self-enrollment options"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Profile Requirements",
      description: "Comprehensive profile building with Google Sheets integration",
      icon: User,
      features: [
        "Super base integration",
        "Google Sheets connectivity",
        "Regular profile updates",
        "Data logging and tracking"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Daily Wellness",
      description: "Medicine tracking and daily wellness routines",
      icon: Activity,
      features: [
        "Medicine names and schedules",
        "Daily routine management",
        "Wellness suggestions",
        "Exercise recommendations"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Daily Conversation",
      description: "Research-based conversation prompts and natural interactions",
      icon: MessageCircle,
      features: [
        "Research areas of interest",
        "Script building prompts",
        "Natural conversation flow",
        "Interactive dialogue system"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Daily Engagements",
      description: "Scheduled calls and interactive games for daily connection",
      icon: Phone,
      features: [
        "Scheduled call times",
        "Interactive games",
        "Jokes and entertainment",
        "Select and call/message options"
      ],
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 6,
      title: "Family Connection",
      description: "Music sharing and family information management",
      icon: Music,
      features: [
        "Music sharing platform",
        "Family information hub",
        "Schedule coordination",
        "Family reminders"
      ],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 7,
      title: "Special Events",
      description: "Birthday celebrations, festivals, and special moments",
      icon: PartyPopper,
      features: [
        "Birthday celebrations",
        "Festival reminders",
        "Special day notifications",
        "Moment creation calls"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: "Activity Logs",
      description: "Comprehensive tracking of all activities and conversations"
    },
    {
      icon: CheckCircle,
      title: "Success Metrics",
      description: "Monitor progress and identify areas for improvement"
    },
    {
      icon: Mail,
      title: "Dashboard Updates",
      description: "Email updates to family members and caregivers"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure storage and management of all user data"
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-gray-800 font-lato relative overflow-hidden">
      {/* Background Mandala Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-mandala-pattern"></div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-saffron/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-saffron to-gold p-3 rounded-full shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-playfair font-bold text-maroon">VPRAGNA</h1>
                <p className="text-sm text-gray-600">Wellness & Care Platform</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#modules" className="text-gray-700 hover:text-saffron transition-colors">Modules</a>
              <a href="#dashboard" className="text-gray-700 hover:text-saffron transition-colors">Dashboard</a>
              <a href="#features" className="text-gray-700 hover:text-saffron transition-colors">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-saffron transition-colors">Contact</a>
            </nav>
            <button className="bg-saffron hover:bg-saffron/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-saffron/10 via-cream to-gold/10">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-maroon mb-6 leading-tight">
              Comprehensive Care
              <span className="text-saffron block">& Wellness Platform</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
              A holistic approach to family wellness with daily engagement, health tracking, 
              and meaningful connections through our integrated module system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-saffron hover:bg-saffron/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg transform hover:scale-105">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-saffron hover:bg-saffron hover:text-white text-saffron px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center bg-white/80">
                <Video className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-saffron/20 shadow-lg">
              <div className="text-3xl font-playfair font-bold text-saffron mb-2">7</div>
              <div className="text-gray-600">Integrated Modules</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-saffron/20 shadow-lg">
              <div className="text-3xl font-playfair font-bold text-saffron mb-2">24/7</div>
              <div className="text-gray-600">Care Monitoring</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-saffron/20 shadow-lg">
              <div className="text-3xl font-playfair font-bold text-saffron mb-2">100%</div>
              <div className="text-gray-600">Family Connected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-maroon mb-6">
              Integrated Care Modules
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven comprehensive modules working together to provide complete wellness and family connection
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <div 
                  key={module.id} 
                  className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-saffron/20 hover:border-saffron/40 transition-all duration-200 shadow-lg hover:shadow-xl group cursor-pointer"
                  onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                >
                  <div className={`bg-gradient-to-r ${module.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-maroon mb-4">{module.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{module.description}</p>
                  
                  {activeModule === module.id && (
                    <div className="mt-4 pt-4 border-t border-saffron/20">
                      <h4 className="font-semibold text-saffron mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {module.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section id="dashboard" className="py-20 bg-gradient-to-br from-cream to-saffron/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-maroon mb-6">
              Comprehensive Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monitor all activities, track progress, and stay connected with detailed analytics and reporting
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {dashboardFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-saffron/20 hover:border-saffron/40 transition-all duration-200 shadow-lg hover:shadow-xl group text-center">
                  <div className="bg-saffron/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-saffron/30 transition-colors">
                    <Icon className="h-8 w-8 text-saffron" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-maroon mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Dashboard Preview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-saffron/20 shadow-xl">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 mb-3">Daily Activities</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Medicine Taken</span>
                    <span className="text-green-600">✓ Complete</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Conversation</span>
                    <span className="text-green-600">✓ 15 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Exercise</span>
                    <span className="text-yellow-600">⏳ Pending</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 mb-3">Family Connections</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Calls Today</span>
                    <span className="font-medium">3</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Messages</span>
                    <span className="font-medium">7</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Music Shared</span>
                    <span className="font-medium">2</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h4 className="font-semibold text-purple-800 mb-3">Upcoming Events</h4>
                <div className="space-y-2">
                  <div className="text-sm">
                    <div className="font-medium">Birthday Reminder</div>
                    <div className="text-gray-600">Tomorrow</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Festival Celebration</div>
                    <div className="text-gray-600">Next Week</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-maroon to-maroon/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join families worldwide who trust our comprehensive care platform for their loved ones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-saffron hover:bg-saffron/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg transform hover:scale-105">
              Get Started Now
            </button>
            <button className="border-2 border-white/50 hover:bg-white hover:text-maroon text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Left Section */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-br from-saffron to-gold p-3 rounded-full shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold">VPRAGNA</h3>
                  <p className="text-saffron/80">Comprehensive Care & Wellness</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Connecting families through technology, ensuring wellness through comprehensive care, 
                and creating meaningful moments every day.
              </p>
            </div>
            
            {/* Center Section */}
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-6">Platform Features</h4>
              <ul className="space-y-3 text-white/80">
                <li>• 7 Integrated Care Modules</li>
                <li>• Real-time Health Monitoring</li>
                <li>• Family Connection Hub</li>
                <li>• Daily Engagement Activities</li>
                <li>• Comprehensive Dashboard</li>
                <li>• 24/7 Support System</li>
              </ul>
            </div>
            
            {/* Right Section */}
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-6">Contact & Support</h4>
              <div className="space-y-4 text-white/80">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-saffron" />
                  <span>support@vpragna.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-saffron" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-white">Support Hours:</p>
                  <p>24/7 Emergency Support</p>
                  <p>Business Hours: 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60">
              © 2025 VPRAGNA.com. All rights reserved. Caring for families through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;