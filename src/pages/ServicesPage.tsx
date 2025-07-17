import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Search, 
  MousePointer, 
  Users, 
  Palette, 
  BarChart3, 
  Mail, 
  CheckCircle, 
  ArrowRight,
  TrendingUp,
  Target,
  Globe,
  Smartphone
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate search results with comprehensive SEO strategies that drive organic traffic and increase visibility.',
      features: [
        'Comprehensive keyword research and analysis',
        'On-page and technical SEO optimization',
        'High-quality content creation and optimization',
        'Local SEO for location-based businesses',
        'SEO audits and competitor analysis',
        'Link building and authority development'
      ],
      price: 'Starting at $2,500/month',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: MousePointer,
      title: 'Pay-Per-Click (PPC) Advertising',
      description: 'Maximize ROI with targeted advertising campaigns across Google, Facebook, and other premium platforms.',
      features: [
        'Google Ads campaign management',
        'Facebook and Instagram advertising',
        'LinkedIn and Twitter campaigns',
        'Display and remarketing campaigns',
        'Landing page optimization',
        'Conversion tracking and analytics'
      ],
      price: 'Starting at $1,500/month + ad spend',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience with strategic social media campaigns that convert.',
      features: [
        'Content strategy and creation',
        'Community management',
        'Influencer partnership programs',
        'Social commerce implementation',
        'Paid social advertising',
        'Analytics and performance reporting'
      ],
      price: 'Starting at $1,200/month',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Palette,
      title: 'Web Design & Development',
      description: 'Create stunning, conversion-optimized websites that turn visitors into customers.',
      features: [
        'Responsive web design',
        'Conversion rate optimization',
        'E-commerce development',
        'Performance optimization',
        'User experience (UX) design',
        'Ongoing maintenance and support'
      ],
      price: 'Starting at $5,000 project',
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and custom reporting solutions.',
      features: [
        'Google Analytics setup and optimization',
        'Custom dashboard creation',
        'Conversion tracking implementation',
        'Performance monitoring',
        'Monthly strategy reports',
        'ROI analysis and optimization'
      ],
      price: 'Starting at $800/month',
      color: 'from-orange-500 to-amber-600'
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Nurture leads and drive conversions with strategic email marketing campaigns.',
      features: [
        'Email automation sequences',
        'Newsletter design and management',
        'Segmentation and personalization',
        'A/B testing and optimization',
        'Integration with CRM systems',
        'Performance tracking and reporting'
      ],
      price: 'Starting at $600/month',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const additionalServices = [
    { icon: TrendingUp, title: 'Conversion Rate Optimization', description: 'Increase website conversions with data-driven testing' },
    { icon: Target, title: 'Marketing Strategy Consulting', description: 'Strategic planning and marketing roadmap development' },
    { icon: Globe, title: 'Content Marketing', description: 'Engaging content that drives traffic and builds authority' },
    { icon: Smartphone, title: 'Mobile Marketing', description: 'App store optimization and mobile advertising campaigns' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Digital Marketing Services That Drive Results
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive digital marketing solutions designed to accelerate your growth, 
            increase conversions, and build lasting customer relationships.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="lg" className="text-lg px-8 py-4">
              Get Your Free Strategy Session
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our comprehensive suite of digital marketing services, 
              each designed to deliver measurable results and sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-xl border border-gray-200 overflow-hidden h-full transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="text-white/80 text-sm font-medium">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-white/90">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Link to="/contact">
                        <Button variant="outline" className="w-full group">
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Additional Specialties
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services to complement your digital marketing strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-6 border border-gray-200 h-full text-center transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our digital marketing expertise can help you achieve your business goals. 
            Get your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button variant="glass" size="lg" className="text-lg px-8 py-4">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;