import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Globe, 
  Video, 
  Clock, 
  Heart,
  Play,
  Star,
  MapPin,
  Laptop,
  Cloud,
  UserCheck,
  Phone,
  Mail,
  MessageCircle,
  Instagram,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Calendar,
  Award
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  image: string;
  rating: number;
}

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Priya Mehta',
      location: 'Toronto, Canada',
      text: 'Even though I live in Canada, I feel as if I\'m sitting in the Gurukul hall. The teachers\' warmth and the daily chanting sessions have brought so much peace to my life.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: '2',
      name: 'David Thompson',
      location: 'London, UK',
      text: 'Learning Sanskrit online seemed impossible until I found this Gurukul. The Acharyas make ancient wisdom accessible and relevant to modern life.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: '3',
      name: 'Ananya Sharma',
      location: 'Sydney, Australia',
      text: 'The flexibility to join live classes or watch recordings has been perfect for my schedule. The community feels like a global family united by ancient wisdom.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    },
    {
      id: '4',
      name: 'Michael Rodriguez',
      location: 'New York, USA',
      text: 'The depth of knowledge and the authentic teaching methods have transformed my understanding of Vedic philosophy. Truly grateful for this opportunity.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5
    }
  ];

  const features = [
    {
      icon: Video,
      title: 'Live, Interactive Classes',
      description: 'Directly learn from experienced Acharyas in real-time sessions with Q&A and discussions.'
    },
    {
      icon: Globe,
      title: 'Global Community',
      description: 'Students from all continents share the journey, creating a diverse learning environment.'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Join live classes or access recordings at your own pace, fitting learning into your schedule.'
    },
    {
      icon: BookOpen,
      title: 'Complete Vedic Curriculum',
      description: 'Comprehensive courses in Sanskrit, shlokas, yoga, philosophy, and traditional rituals.'
    },
    {
      icon: Calendar,
      title: 'Cultural Events Online',
      description: 'Participate in virtual festival celebrations, group chanting, and spiritual gatherings.'
    },
    {
      icon: UserCheck,
      title: 'Personal Mentor Support',
      description: 'Receive personalized guidance tailored to your unique learning path and spiritual goals.'
    }
  ];

  const steps = [
    {
      icon: Laptop,
      title: 'Enroll Online',
      description: 'Sign up for your desired course and receive your digital welcome kit with all learning materials.'
    },
    {
      icon: Video,
      title: 'Join Live Classes',
      description: 'Attend interactive sessions with Acharyas and connect with classmates from around the world.'
    },
    {
      icon: Cloud,
      title: 'Access Recordings',
      description: 'Revisit lessons anytime through our secure learning portal with lifetime access to content.'
    },
    {
      icon: Users,
      title: 'Community Connect',
      description: 'Participate in online satsangs, group chanting sessions, and celebrate festivals together.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-cream text-gray-800 font-lato">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-saffron/20 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-br from-saffron to-gold p-3 rounded-full shadow-lg">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-playfair font-bold text-maroon">VRPGNA</h1>
                <p className="text-sm text-gray-600">Online Learning</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#courses" className="text-gray-700 hover:text-saffron transition-colors">Courses</a>
              <a href="#about" className="text-gray-700 hover:text-saffron transition-colors">About Us</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-saffron transition-colors">How It Works</a>
              <a href="#testimonials" className="text-gray-700 hover:text-saffron transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-saffron transition-colors">Contact</a>
            </nav>
            <button className="bg-saffron hover:bg-saffron/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg">
              Start Learning
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-saffron/10 via-cream to-gold/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-mandala-pattern"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold text-maroon mb-6 leading-tight">
                Ancient Wisdom,
                <span className="text-saffron block"> Anywhere You Are</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Learn Sanskrit, scriptures, yoga, and Vedic philosophy from revered Acharyas — 
                live, interactive, and online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-saffron hover:bg-saffron/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center shadow-lg transform hover:scale-105">
                  Start Your Learning Journey
                  <BookOpen className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-saffron hover:bg-saffron hover:text-white text-saffron px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center bg-white/80">
                  <Play className="mr-2 h-5 w-5" />
                  Try a Free Intro Class
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-saffron/20 p-6">
                <div className="aspect-video bg-gradient-to-br from-maroon/10 to-saffron/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Video className="h-16 w-16 text-saffron mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Live Class in Progress</p>
                    <p className="text-sm text-gray-500">Acharya teaching Sanskrit fundamentals</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Live</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>24 students online</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gold text-white p-4 rounded-full shadow-lg">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-saffron/20 shadow-lg">
              <div className="text-3xl font-playfair font-bold text-saffron mb-2">2,500+</div>
              <div className="text-gray-600">Global Students</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-saffron/20 shadow-lg">
              <div className="text-3xl font-playfair font-bold text-saffron mb-2">15+</div>
              <div className="text-gray-600">Expert Acharyas</div>
            </div>
            <div className="text-center bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-saffron/20 shadow-lg">
              <div className="text-3xl font-playfair font-bold text-saffron mb-2">50+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-maroon mb-6">
              Your Gurukul Journey — From Home
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience authentic Vedic education through our carefully designed online learning process
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  <div className="bg-gradient-to-br from-saffron to-gold text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-maroon mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full">
                      <div className="w-full h-0.5 bg-gradient-to-r from-saffron/50 to-gold/50"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-cream to-saffron/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-maroon mb-6">
              What Makes Our Online Gurukul Special
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combining traditional wisdom with modern technology for an unparalleled learning experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-saffron/20 hover:border-saffron/40 transition-all duration-200 shadow-lg hover:shadow-xl group">
                  <div className="bg-saffron/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-saffron/30 transition-colors">
                    <Icon className="h-8 w-8 text-saffron" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-maroon mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-maroon mb-6">
              Our Students Speak
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our global community of learners
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-saffron/20 shadow-xl max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-saffron/20 hover:bg-saffron/30 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6 text-saffron" />
                </button>
                
                <div className="text-center flex-1">
                  <div className="flex items-center justify-center mb-6">
                    <img 
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 rounded-full border-4 border-saffron/30 shadow-lg"
                    />
                  </div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div className="text-saffron font-semibold text-lg">
                    — {testimonials[currentTestimonial].name}
                  </div>
                  <div className="flex items-center justify-center text-gray-500 mt-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-saffron/20 hover:bg-saffron/30 transition-colors"
                >
                  <ChevronRight className="h-6 w-6 text-saffron" />
                </button>
              </div>
              
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-saffron' : 'bg-saffron/30'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Global reach visualization */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-sm rounded-full px-6 py-3 border border-saffron/20">
                <Globe className="h-6 w-6 text-saffron" />
                <span className="text-gray-700 font-medium">Students learning from 50+ countries worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-maroon to-maroon/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Begin Your Sacred Learning Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students worldwide in experiencing authentic Vedic wisdom through our online Gurukul
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-saffron hover:bg-saffron/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg transform hover:scale-105">
              Enroll Now
            </button>
            <button className="border-2 border-white/50 hover:bg-white hover:text-maroon text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
              Schedule a Consultation
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
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold">VRPGNA</h3>
                  <p className="text-saffron/80">Ancient Wisdom, Anywhere You Are</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                VRPGNA.com - Experience the timeless tradition of Vedic learning through our authentic online platform. 
                Connect with revered Acharyas and a global community of spiritual seekers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Center Section */}
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-white/80">
                <li><a href="#courses" className="hover:text-saffron transition-colors">Courses</a></li>
                <li><a href="#about" className="hover:text-saffron transition-colors">About Us</a></li>
                <li><a href="#how-it-works" className="hover:text-saffron transition-colors">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-saffron transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-saffron transition-colors">Contact</a></li>
              </ul>
              <div className="mt-6">
                <a 
                  href="#" 
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join Our WhatsApp Community
                </a>
              </div>
            </div>
            
            {/* Right Section */}
            <div>
              <h4 className="text-lg font-playfair font-semibold mb-6">Contact & Support</h4>
              <div className="space-y-4 text-white/80">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-saffron" />
                  <span>info@vrpgna.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-saffron" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-white">Live Chat Hours:</p>
                  <p>Monday - Friday: 9 AM - 6 PM EST</p>
                  <p>Saturday: 10 AM - 4 PM EST</p>
                </div>
              </div>
              
              <div className="mt-6">
                <h5 className="font-medium text-white mb-3">Newsletter</h5>
                <p className="text-sm text-white/80 mb-3">Receive Vedic wisdom and course updates weekly</p>
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-l-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-saffron"
                  />
                  <button className="bg-saffron hover:bg-saffron/90 px-4 py-2 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60">
              © 2025 VRPGNA.com. All rights reserved. Preserving ancient wisdom for the modern world.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;