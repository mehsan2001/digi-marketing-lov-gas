import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageCircle, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'hello@leadgenpro.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Business Avenue\nSuite 100, City, ST 12345',
      description: 'Our main office location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST\nSat-Sun: Closed',
      description: 'We respond within 24 hours'
    }
  ];

  const reasons = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified digital marketing professionals'
    },
    {
      icon: MessageCircle,
      title: 'Quick Response',
      description: 'Get a response within 24 hours, guaranteed'
    },
    {
      icon: MapPin,
      title: 'Local & Global',
      description: 'Serving businesses worldwide with local expertise'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Grow Your Business Together
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with our team for a free consultation 
            and discover how we can help you achieve your business goals.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get In Touch
                </h2>
                <p className="text-muted-foreground text-lg">
                  Ready to start your digital marketing journey? We're here to help you every step of the way.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-foreground font-medium whitespace-pre-line">{info.details}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-foreground mb-4">Why Choose LeadGen Pro?</h3>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <reason.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{reason.title}</h4>
                        <p className="text-muted-foreground text-sm">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to see results?",
                answer: "Results vary by service type. SEO typically shows improvement in 3-6 months, while PPC campaigns can generate leads within days. We provide monthly reports to track progress."
              },
              {
                question: "Do you work with small businesses?",
                answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our strategies are tailored to your budget and business goals."
              },
              {
                question: "What's included in the free consultation?",
                answer: "Your free consultation includes a comprehensive review of your current digital presence, competitor analysis, and a customized strategy proposal with clear next steps."
              },
              {
                question: "Can I cancel my service anytime?",
                answer: "Yes, we offer flexible month-to-month contracts. We're confident in our results and don't believe in locking clients into long-term agreements."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;