import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, Shield, Truck, Clock, Phone, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import heroImage from '@/assets/hero-medical-hands.jpg';
import scaleImage from '@/assets/medical-scale-lifestyle.jpg';
import iconsImage from '@/assets/medical-icons-set.jpg';

const WeightLossLanding = () => {
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isAnimated = (id: string) => animatedElements.has(id);

  const testimonials = [
    {
      text: "I lost 6 lbs in the first week — life changing!",
      author: "Mary",
      rating: 5,
      background: "bg-gradient-to-br from-medical-blue-light/20 to-trust-green-light/20"
    },
    {
      text: "Finally found something that works. Down 15 lbs!",
      author: "Jennifer",
      rating: 5,
      background: "bg-gradient-to-br from-trust-green-light/20 to-medical-blue-light/20"
    },
    {
      text: "The convenience and results are amazing. Highly recommend!",
      author: "Lisa",
      rating: 5,
      background: "bg-gradient-to-br from-accent-orange-light/20 to-medical-blue-light/20"
    }
  ];

  const benefits = [
    { text: "Lose up to 1.5% body weight per week*", icon: <CheckCircle className="w-5 h-5" /> },
    { text: "Boost confidence & energy", icon: <CheckCircle className="w-5 h-5" /> },
    { text: "Telemed visits & prescriptions included", icon: <CheckCircle className="w-5 h-5" /> },
    { text: "Fast, discreet delivery", icon: <CheckCircle className="w-5 h-5" /> },
    { text: "No hidden fees or commitments", icon: <CheckCircle className="w-5 h-5" /> }
  ];

  const faqItems = [
    {
      question: "Are GLP-1 medications safe?",
      answer: "GLP-1 medications like Semaglutide and Tirzepatide are FDA-approved and have been extensively studied. Our licensed healthcare providers ensure they're right for you through a comprehensive evaluation."
    },
    {
      question: "Does insurance cover these medications?",
      answer: "Coverage varies by insurance plan. We work with most major insurance providers and offer competitive cash pricing when insurance doesn't cover the medication."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most patients begin seeing weight loss within the first 1-2 weeks, with significant results typically visible within 4-6 weeks of consistent use."
    },
    {
      question: "What's included in my treatment plan?",
      answer: "Your plan includes telemedicine consultations, prescription medications, ongoing support, and discreet home delivery. No hidden fees."
    },
    {
      question: "How fast is shipping?",
      answer: "Once prescribed, medications are shipped within 24-48 hours via secure, temperature-controlled delivery to ensure quality and effectiveness."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-hero relative min-h-screen flex items-center justify-center px-4 py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-medical-blue/95 to-trust-green/95" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div 
            id="hero-content" 
            data-animate
            className={`fade-in-up ${isAnimated('hero-content') ? 'animate' : ''}`}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Lose Weight from Home —<br />
              <span className="text-accent-orange">No Diets, No Gym Required</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Prescription weight loss meds delivered to your door
            </p>
            <Button 
              className="btn-medical-primary text-lg px-10 py-6 rounded-2xl"
              onClick={() => window.open('[INSERT OFFER LINK]', '_blank')}
            >
              Get Qualified Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 section-trust">
        <div className="max-w-6xl mx-auto">
          <div 
            id="how-it-works-title"
            data-animate
            className={`text-center mb-16 fade-in-up ${isAnimated('how-it-works-title') ? 'animate' : ''}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, safe, and effective weight loss in 3 easy steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Take Questionnaire",
                description: "Complete our secure medical questionnaire from the comfort of your home",
                icon: <MessageCircle className="w-8 h-8" />
              },
              {
                step: "2", 
                title: "Get Prescribed",
                description: "Licensed healthcare providers review and prescribe the right medication for you",
                icon: <Phone className="w-8 h-8" />
              },
              {
                step: "3",
                title: "Receive Your Meds",
                description: "Fast, discreet delivery straight to your door with ongoing support",
                icon: <Truck className="w-8 h-8" />
              }
            ].map((item, index) => (
              <Card 
                key={index}
                id={`step-${index}`}
                data-animate
                className={`card-medical text-center p-8 fade-in-up ${isAnimated(`step-${index}`) ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="icon-medical mx-auto mb-6">
                  {item.icon}
                </div>
                <div className="text-6xl font-bold text-medical-blue mb-4">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-medical-blue/5 to-trust-green/5">
        <div className="max-w-6xl mx-auto">
          <div 
            id="benefits-title"
            data-animate
            className={`text-center mb-16 fade-in-up ${isAnimated('benefits-title') ? 'animate' : ''}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Our Program?
            </h2>
            <p className="text-xl text-muted-foreground">
              Proven results with professional medical support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              id="benefits-image"
              data-animate
              className={`fade-in-left ${isAnimated('benefits-image') ? 'animate' : ''}`}
            >
              <img 
                src={scaleImage} 
                alt="Medical scale and healthy lifestyle"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>

            <div 
              id="benefits-list"
              data-animate
              className={`space-y-6 fade-in-right ${isAnimated('benefits-list') ? 'animate' : ''}`}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="icon-trust flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <p className="text-lg text-foreground font-medium">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 section-trust">
        <div className="max-w-6xl mx-auto">
          <div 
            id="testimonials-title"
            data-animate
            className={`text-center mb-16 fade-in-up ${isAnimated('testimonials-title') ? 'animate' : ''}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent-orange text-accent-orange" />
                ))}
              </div>
              <span className="text-xl font-semibold text-foreground ml-2">4.8/5.0</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                id={`testimonial-${index}`}
                data-animate
                className={`card-testimonial ${testimonial.background} fade-in-up ${isAnimated(`testimonial-${index}`) ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-orange text-accent-orange" />
                  ))}
                </div>
                <p className="text-foreground text-lg mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-muted-foreground font-medium">
                  — {testimonial.author}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-medical-blue/5 via-trust-green/5 to-accent-orange/5">
        <div className="max-w-4xl mx-auto">
          <div 
            id="pricing-title"
            data-animate
            className={`text-center mb-16 fade-in-up ${isAnimated('pricing-title') ? 'animate' : ''}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              No hidden fees. No long-term commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Injectable Medications",
                subtitle: "Semaglutide & Tirzepatide",
                price: "$197",
                features: ["Weekly injections", "Telemedicine consultations", "Ongoing support", "Free shipping"]
              },
              {
                title: "Oral Medications", 
                subtitle: "Convenient daily drops",
                price: "$199",
                features: ["Daily oral drops", "Telemedicine consultations", "Ongoing support", "Free shipping"]
              }
            ].map((plan, index) => (
              <Card 
                key={index}
                id={`pricing-${index}`}
                data-animate
                className={`card-medical text-center p-8 relative overflow-hidden fade-in-up ${isAnimated(`pricing-${index}`) ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.subtitle}
                </p>
                <div className="text-5xl font-bold text-medical-blue mb-6">
                  {plan.price}
                  <span className="text-lg text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-trust-green" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="btn-medical-primary w-full"
                  onClick={() => window.open('[INSERT OFFER LINK]', '_blank')}
                >
                  Get Started Today
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 section-trust">
        <div className="max-w-4xl mx-auto">
          <div 
            id="faq-title"
            data-animate
            className={`text-center mb-16 fade-in-up ${isAnimated('faq-title') ? 'animate' : ''}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our weight loss program
            </p>
          </div>

          <div 
            id="faq-accordion"
            data-animate
            className={`fade-in-up ${isAnimated('faq-accordion') ? 'animate' : ''}`}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="card-medical border-none"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 section-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${iconsImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-medical-blue/95 to-trust-green/95" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div 
            id="final-cta"
            data-animate
            className={`fade-in-up ${isAnimated('final-cta') ? 'animate' : ''}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands who have successfully lost weight with our medically-supervised program
            </p>
            <Button 
              className="btn-medical-primary text-lg px-10 py-6 rounded-2xl mb-12"
              onClick={() => window.open('[INSERT OFFER LINK]', '_blank')}
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { icon: <Shield className="w-8 h-8" />, text: "HIPAA Compliant" },
                { icon: <Truck className="w-8 h-8" />, text: "Fast Shipping" },
                { icon: <CheckCircle className="w-8 h-8" />, text: "No Hidden Fees" },
                { icon: <Clock className="w-8 h-8" />, text: "24/7 Support" }
              ].map((badge, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="text-white/80">
                    {badge.icon}
                  </div>
                  <p className="text-white/80 text-sm font-medium">
                    {badge.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeightLossLanding;