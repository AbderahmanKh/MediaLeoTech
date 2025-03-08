import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

// Define the service type
interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
  additionalInfo: string;
}

function Servc() {
  // Sample services data
  const services: Service[] = [
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      shortDescription: "Boost your online presence with our comprehensive digital marketing strategies.",
      fullDescription: "Our digital marketing services are designed to increase your online visibility, drive traffic to your website, and convert visitors into customers. We use a data-driven approach to create customized strategies that align with your business goals and target audience.",
      image: "https://picsum.photos/id/3/800/400",
      keywords: ["SEO", "PPC", "Social Media", "Content Marketing", "Email Marketing"],
      faqs: [
        { 
          question: "How long does it take to see results from digital marketing?", 
          answer: "Results vary depending on the strategy, but typically you can expect to see initial results within 3-6 months for SEO, and much faster for paid advertising campaigns." 
        },
        { 
          question: "What digital marketing channels do you focus on?", 
          answer: "We provide comprehensive services across all major channels including search engines, social media, email, content marketing, and paid advertising." 
        },
        { 
          question: "How do you measure the success of digital marketing campaigns?", 
          answer: "We track key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics, and return on investment (ROI)." 
        }
      ],
      additionalInfo: "Our team of certified digital marketing experts stays up-to-date with the latest trends and algorithm changes to ensure your campaigns remain effective."
    },
    {
      id: "branding",
      title: "Branding & Identity",
      shortDescription: "Create a memorable brand identity that resonates with your target audience.",
      fullDescription: "Our branding services help you establish a strong, consistent identity that communicates your company's values and connects with your audience. From logo design to brand guidelines, we ensure your brand stands out in a crowded marketplace.",
      image: "https://picsum.photos/id/20/800/400",
      keywords: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines", "Rebranding"],
      faqs: [
        { 
          question: "What is included in your branding services?", 
          answer: "Our branding services typically include brand strategy development, logo design, visual identity creation, brand guidelines, messaging framework, and implementation support." 
        },
        { 
          question: "How long does the branding process take?", 
          answer: "A comprehensive branding project usually takes 6-12 weeks, depending on the scope and complexity of the project." 
        },
        { 
          question: "Do you help with rebranding existing businesses?", 
          answer: "Yes, we specialize in helping established businesses refresh their brand while maintaining brand equity and recognition." 
        }
      ],
      additionalInfo: "We conduct thorough market research and competitor analysis to ensure your brand occupies a unique position in the market."
    },
    {
      id: "content-creation",
      title: "Content Creation",
      shortDescription: "Engage your audience with compelling, high-quality content across all platforms.",
      fullDescription: "Our content creation services deliver engaging, valuable content that attracts and retains your target audience. From blog posts and articles to videos and infographics, we create content that drives engagement and conversions.",
      image: "https://picsum.photos/id/42/800/400",
      keywords: ["Copywriting", "Blog Posts", "Video Production", "Infographics", "Social Media Content"],
      faqs: [
        { 
          question: "What types of content do you create?", 
          answer: "We create a wide range of content including blog posts, articles, whitepapers, case studies, videos, infographics, social media content, email newsletters, and more." 
        },
        { 
          question: "How do you ensure content is optimized for search engines?", 
          answer: "We conduct keyword research and follow SEO best practices to ensure your content ranks well in search results while still being engaging for human readers." 
        },
        { 
          question: "Can you help develop a content strategy?", 
          answer: "Yes, we offer content strategy services to help you plan and organize your content efforts for maximum impact and efficiency." 
        }
      ],
      additionalInfo: "All content is created by professional writers, designers, and videographers with expertise in your industry."
    },
    {
      id: "social-media",
      title: "Social Media Management",
      shortDescription: "Build a strong social media presence that engages your audience and drives business results.",
      fullDescription: "Our social media management services help you build and maintain an effective presence across relevant social platforms. We handle everything from strategy development to content creation, posting, and community management.",
      image: "https://picsum.photos/id/60/800/400",
      keywords: ["Social Strategy", "Community Management", "Content Calendar", "Analytics", "Paid Social"],
      faqs: [
        { 
          question: "Which social media platforms do you work with?", 
          answer: "We work with all major platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, Pinterest, and YouTube, focusing on the ones most relevant to your audience." 
        },
        { 
          question: "How often will you post on my social media accounts?", 
          answer: "Posting frequency depends on the platform and your strategy, but typically ranges from 3-5 times per week for most platforms, with more frequent posting for Twitter." 
        },
        { 
          question: "Do you handle social media advertising?", 
          answer: "Yes, we offer social media advertising services including strategy, ad creation, targeting, and optimization to maximize your ROI." 
        }
      ],
      additionalInfo: "We provide detailed monthly reports on your social media performance, including growth, engagement, and conversion metrics."
    },
    {
      id: "seo",
      title: "Search Engine Optimization",
      shortDescription: "Improve your website's visibility in search results and drive organic traffic.",
      fullDescription: "Our SEO services are designed to improve your website's ranking in search engine results pages, driving more organic traffic to your site. We use white-hat techniques that comply with search engine guidelines for sustainable results.",
      image: "https://picsum.photos/id/48/800/400",
      keywords: ["Keyword Research", "On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO"],
      faqs: [
        { 
          question: "How long does SEO take to show results?", 
          answer: "SEO is a long-term strategy, and significant results typically take 3-6 months to appear, depending on your industry, competition, and starting point." 
        },
        { 
          question: "What does your SEO service include?", 
          answer: "Our SEO services include keyword research, on-page optimization, technical SEO, content creation, link building, local SEO (if applicable), and regular performance reporting." 
        },
        { 
          question: "Do you guarantee first-page rankings?", 
          answer: "No reputable SEO company can guarantee specific rankings as search algorithms are constantly changing. We focus on sustainable improvements and measurable business results." 
        }
      ],
      additionalInfo: "We stay up-to-date with the latest algorithm changes and SEO best practices to ensure your website maintains and improves its rankings over time."
    },
    {
      id: "web-design",
      title: "Web Design & Development",
      shortDescription: "Create a stunning, functional website that converts visitors into customers.",
      fullDescription: "Our web design and development services deliver beautiful, user-friendly websites that are optimized for conversions. We focus on creating responsive designs that provide an excellent user experience across all devices.",
      image: "https://picsum.photos/id/24/800/400",
      keywords: ["Responsive Design", "UX/UI", "E-commerce", "WordPress", "Custom Development"],
      faqs: [
        { 
          question: "How long does it take to build a website?", 
          answer: "A typical website takes 6-12 weeks to complete, depending on the complexity and number of pages. E-commerce sites and custom web applications may take longer." 
        },
        { 
          question: "What platforms do you use for website development?", 
          answer: "We work with various platforms including WordPress, Shopify, and custom solutions depending on your specific needs and requirements." 
        },
        { 
          question: "Do you provide website maintenance services?", 
          answer: "Yes, we offer ongoing maintenance packages to ensure your website remains secure, up-to-date, and performing optimally." 
        }
      ],
      additionalInfo: "All our websites are built with SEO best practices in mind and include basic on-page optimization to help improve your search engine visibility."
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [filteredServices, setFilteredServices] = useState<Service[]>(services);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setFilteredServices(services);
      setSelectedService(null);
      return;
    }
    
    // Filter services based on title, description, and keywords
    const filtered = services.filter(service => 
      service.title.toLowerCase().includes(query) || 
      service.shortDescription.toLowerCase().includes(query) || 
      service.keywords.some(keyword => keyword.toLowerCase().includes(query))
    );
    
    setFilteredServices(filtered);
    
    // If there's an exact match or only one result, select it automatically
    if (filtered.length === 1) {
      setSelectedService(filtered[0]);
      setTimeout(() => {
        document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setSelectedService(null);
    }
  };

  // Handle service selection
  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-300 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovative Marketing Solutions for Your Business</h1>
            <p className="text-xl mb-8">Elevate your brand with our comprehensive marketing services tailored to your unique needs.</p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="flex items-center border-2 border-white/20 rounded-lg bg-white/10 backdrop-blur-sm overflow-hidden">
                <div className="pl-4">
                  <Search className="h-5 w-5 text-white" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for services..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex-1 bg-transparent border-none text-white placeholder-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              {searchQuery && (
                <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg text-left text-gray-800 z-10">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service) => (
                      <div 
                        key={service.id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleServiceSelect(service)}
                      >
                        <div className="font-medium">{service.title}</div>
                        <div className="text-sm text-gray-500">{service.shortDescription.substring(0, 60)}...</div>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2">No services found</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Marketing Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.shortDescription}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.keywords.slice(0, 3).map((keyword, index) => (
                    <Badge key={index} variant="secondary">{keyword}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleServiceSelect(service)}>Learn More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Service Details Section */}
      {selectedService && (
        <section id="service-details" className="container mx-auto px-4 py-16 border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">{selectedService.title}</h2>
            
            <div className="mb-8 rounded-lg overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title} 
                className="w-full h-auto"
              />
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Overview</h3>
              <p className="text-gray-700 leading-relaxed">{selectedService.fullDescription}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="flex flex-wrap gap-2">
                {selectedService.keywords.map((keyword, index) => (
                  <Badge key={index} className="text-sm">{keyword}</Badge>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
              <p className="text-gray-700 leading-relaxed">{selectedService.additionalInfo}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {selectedService.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
           
          </div>
        </section>
      )}

      
    </div>
  );
}

export default Servc;