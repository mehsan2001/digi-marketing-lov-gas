import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Search, MousePointer, Users, Palette, ArrowRight } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Dominate search results with data-driven SEO strategies that increase organic traffic and drive qualified leads.',
      features: ['Keyword Research', 'On-Page Optimization', 'Technical SEO', 'Content Strategy']
    },
    {
      icon: MousePointer,
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns across Google, Facebook, and other premium platforms.',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'Conversion Tracking']
    },
    {
      icon: Users,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience with strategic social media campaigns that convert.',
      features: ['Content Creation', 'Community Management', 'Influencer Partnerships', 'Social Commerce']
    },
    {
      icon: Palette,
      title: 'Web Design & Development',
      description: 'Create stunning, conversion-optimized websites that turn visitors into customers and drive business growth.',
      features: ['Responsive Design', 'CRO Optimization', 'E-commerce Solutions', 'Performance Optimization']
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Digital Marketing Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions designed to drive growth, increase conversions, and build lasting customer relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-xl p-6 border border-gray-200 h-full transition-all duration-300 hover:shadow-card hover:-translate-y-2">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="hero" size="lg">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;