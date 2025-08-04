import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Calendar, 
  Users, 
  Pill, 
  MessageCircle,
  Phone,
  Gift,
  ChevronRight,
  Star,
  Play,
  CheckCircle,
  UserPlus,
  Stethoscope,
  Activity,
  Mail,
  Shield,
  FileText,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

interface Testimonial {
  id: string;
  text: string;
  author: string;
  rating: number;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
}

function App() {
  const [testimonials] = useState<Testimonial[]>([
    {
      id: '1',
      text: "The best companion ever - This brought the happiness back in my life. My health has improved and I made more friends even at this late stage.",
      author: "Margaret, 72",
      rating: 5
    },
    {
      id: '2', 
      text: "The platform has completely transformed my life from loneliness and depression to a creative and happy personality. My family started talking to me and spending time, because I have changed my attitude to a positive one now.",
      author: "Robert, 68",
      rating: 5
    },
    {
      id: '3',
      text: "AASHA understands me like no one else. The daily conversations feel so natural and caring. I look forward to each day now.",
      author: "Dorothy, 75",
      rating: 5
    }
  ]);

  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      id: '1',
      question: "How does AASHA work?",
      answer: "AASHA is an AI-powered companion that learns about you through conversations and provides personalized daily interactions, health reminders, and helps you stay connected with family and friends.",
      isOpen: false
    },
    {
      id: '2',
      question: "Is my personal information secure?",
      answer: "Yes, we follow strict HIPAA compliance and use advanced encryption to protect all your personal and health information. Your privacy is our top priority.",
      isOpen: false
    },
    {
      id: '3',
      question: "Can I use AASHA on my tablet or phone?",
      answer: "Absolutely! AASHA works on all devices - tablets, smartphones, and computers. The interface is designed to be easy to use with large buttons and clear text.",
      isOpen: false
    },
    {
      id: '4',
      question: "How much does AASHA cost?",
      answer: "We offer flexible pricing plans starting at $29/month. We also provide a 14-day free trial so you can experience the benefits before committing.",
      isOpen: false
    },
    {
      id: '5',
      question: "What if I need help getting started?",
      answer: "Our dedicated support team provides personalized onboarding and is available 24/7 to help you with any questions or technical issues.",
      isOpen: false
    }
  ]);

  const toggleFAQ = (id: string) => {
    setFaqs(prev => prev.map(faq => 
      faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  const benefits = [
    {
      icon: MessageCircle,
      title: "Daily Companion Conversation",
      description: "Engage in meaningful daily chats that adapt to your interests and mood"
    },
    {
      icon: Pill,
      title: "Health & Wellness Reminders", 
      description: "Never miss medications, doctor appointments, or exercise routines"
    },
    {
      icon: Calendar,
      title: "Celebrate Special Days",
      description: "Remember and celebrate birthdays, anniversaries, and important milestones"
    },
    {
      icon: Users,
      title: "Connect with Peers",
      description: "Meet and chat with people your age who share similar interests"
    },
    {
      icon: Heart,
      title: "Family Connections",
      description: "Stay close to family members with easy communication tools"
    },
    {
      icon: Gift,
      title: "Thoughtful Greetings",
      description: "Send personalized messages and greetings to loved ones on special occasions"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Enroll",
      description: "Sign up in minutes and tell us about yourself, your interests, and preferences"
    },
    {
      number: "02", 
      title: "Share",
      description: "Share your stories, memories, and daily experiences with your AI companion"
    },
    {
      number: "03",
      title: "Connect", 
      description: "Build meaningful relationships with family, friends, and new companions"
    },
    {
      number: "04",
      title: "Customized Companion",
      description: "Enjoy a personalized experience that grows and adapts to your unique needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-primary-400 to-primary-500 p-3 rounded-xl shadow-lg">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AASHA</h1>
                <p className="text-sm text-gray-600">Your Digital Companion</p>
              </div>
            </div>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-200 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/for website.jpeg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                The companion who turns 
                <span className="text-primary-400"> loneliness into laughter</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bring comfort, joy, and heartfelt connection to someone's graceful years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg">
                  Bring Comfort by Joining
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-primary-300 hover:border-primary-400 text-gray-700 hover:text-primary-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 flex items-center justify-center bg-white/50">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Testimonials
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/for website.jpeg" 
                alt="AASHA Companion" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-primary-200"
              />
              <div className="absolute -top-4 -right-4 bg-primary-500 text-white p-4 rounded-full">
                <Heart className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          {/* Social Proof */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg">
                <div className="text-3xl font-bold text-primary-400 mb-2">15,000+</div>
                <div className="text-gray-600">Trusted Members</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg">
                <div className="text-3xl font-bold text-primary-400 mb-2">98%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-200 shadow-lg">
                <div className="text-3xl font-bold text-primary-400 mb-2">24/7</div>
                <div className="text-gray-600">Always Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Everything you need for a fulfilling life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AASHA provides comprehensive support to help you stay healthy, connected, and joyful every day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-blue-200 hover:border-primary-300 transition-all duration-200 shadow-lg hover:shadow-xl">
                  <div className="bg-primary-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              How AASHA Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started with your digital companion is simple and rewarding
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <ChevronRight className="h-6 w-6 text-primary-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              What Our Members Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real people whose lives have been transformed
            </p>
          </div>
          
          <div className="flex space-x-8 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="flex-shrink-0 w-96 bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-blue-200 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>
                <div className="text-primary-400 font-semibold">
                  — {testimonial.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about AASHA
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white/70 backdrop-blur-sm rounded-xl border border-blue-200 shadow-lg">
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-blue-50/50 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-primary-400 transition-transform duration-200 ${faq.isOpen ? 'rotate-180' : ''}`} />
                </button>
                {faq.isOpen && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Ready to bring comfort into your life?
            </h2>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors duration-200 shadow-lg">
              Start Your Journey Today
            </button>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-primary-400 to-primary-500 p-3 rounded-xl shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">AASHA</h3>
                  <p className="text-gray-600">Your Digital Companion</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                AASHA is dedicated to bringing joy, connection, and meaningful companionship to elderly individuals. 
                Our AI-powered platform provides personalized daily interactions, health reminders, and helps maintain 
                precious connections with family and friends.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-primary-400" />
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-5 w-5 text-primary-400" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Features</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Daily Conversations</li>
                <li>Health Reminders</li>
                <li>Family Connections</li>
                <li>Special Occasions</li>
                <li>Peer Networking</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Shield className="h-4 w-4 mr-2 text-primary-400" />
                  Privacy Policy
                </li>
                <li className="flex items-center">
                  <FileText className="h-4 w-4 mr-2 text-primary-400" />
                  HIPAA Compliance
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2 text-primary-400" />
                  Terms of Service
                </li>
                <li>Cookie Policy</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-200 pt-8 text-center">
            <p className="text-gray-600">
              © 2025 AASHA. All rights reserved. Made with ❤️ for our cherished elderly community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;