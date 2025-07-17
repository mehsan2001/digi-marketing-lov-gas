import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  // Replace this URL with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field if it exists
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData object for Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('timestamp', new Date().toISOString());

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // Required for Google Apps Script
      });

      // Since we use no-cors, we can't read the response
      // We'll assume success if no error is thrown
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your interest. We'll get back to you within 24 hours.",
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at hello@leadgenpro.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
        </p>
        <Button 
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: '', email: '', message: '' });
          }}
          variant="outline"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Get Your Free Consultation</h3>
        <p className="text-muted-foreground">
          Ready to grow your business? Send us a message and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className={`mt-1 ${errors.name ? 'border-red-500' : ''}`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-medium text-foreground">
            Message *
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className={`mt-1 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
            placeholder="Tell us about your business goals and how we can help..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          variant="hero"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Sending Message...
            </>
          ) : (
            <>
              Send Message
              <Send className="w-5 h-5 ml-2" />
            </>
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;