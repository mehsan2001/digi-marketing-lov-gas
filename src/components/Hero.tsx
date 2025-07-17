import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const stats = [
    { icon: TrendingUp, value: '300%', label: 'Average ROI Increase' },
    { icon: Users, value: '2,500+', label: 'Leads Generated Monthly' },
    { icon: Target, value: '98%', label: 'Client Satisfaction Rate' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-primary min-h-[90vh] flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary opacity-90"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fill-rule=evenodd%3E%3Cg fill=%23ffffff fill-opacity=0.05%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Generate <span className="text-yellow-300">Quality Leads</span> That Convert
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Transform your business with data-driven digital marketing strategies that deliver measurable results and sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                  Start Growing Today
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="glass" size="lg" className="text-lg px-8 py-4">
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start mb-2">
                    <stat.icon className="w-6 h-6 text-yellow-300 mr-2" />
                    <span className="text-2xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-blue-100 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Floating cards animation */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-40 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 animate-pulse">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="text-white font-semibold">Lead Generation</div>
                    <div className="text-blue-200 text-sm">+245% this month</div>
                  </div>
                </div>
                <div className="h-2 bg-white/20 rounded-full">
                  <div className="h-2 bg-gradient-secondary rounded-full w-3/4"></div>
                </div>
              </div>

              <div className="relative z-10 w-80 h-48 bg-white/15 backdrop-blur-sm rounded-xl border border-white/30 p-8 ml-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">2,847</div>
                  <div className="text-blue-200 mb-4">New Leads This Month</div>
                  <div className="w-full bg-white/20 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full animate-pulse" style={{ width: '78%' }}></div>
                  </div>
                  <div className="text-white/80 text-sm mt-2">78% of monthly goal</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-64 h-32 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-4">
                <div className="text-white font-semibold mb-2">Conversion Rate</div>
                <div className="text-3xl font-bold text-yellow-300">24.6%</div>
                <div className="text-blue-200 text-sm">↗ +12% from last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;