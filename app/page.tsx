import Image from "next/image"
import { Button } from "@/components/ui/button"
import CertificationBadges from "@/components/certification-badges"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[370px] bg-black text-white">
      <div className="absolute inset-0 z-0 overflow-hidden">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
            <source src="/video.mp4" type="video/mp4" />
            
          </video>
        </div>

       
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-4xl mb-8">
          We are the global leader in supplying the highest quality refurbished laptops <span className="text-teal-400">laptops, proudly holding the exclusive </span>  Premium Certification 
           <span className="text-teal-400">Certification for both remanufactured</span> and{" "}
            <span className="text-teal-400"> and refurbished laptops worldwide.</span>
          </h2>
          <CertificationBadges />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-teal-300 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="italic text-gray-300">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-900"
              >
                <div className="h-48 relative">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-teal-600 text-sm mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.excerpt}</p>
                  <Button variant="outline" className="text-teal-600 border-teal-600 hover:bg-gray-800"> <a href="/contact-us">
                  Contact Us </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-black text-white border-t border-white-800">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Ready to upgrade your technology?</h2>
            <p className="text-teal-100">Contact us today for a personalized quote.</p>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white inline-block px-4 py-2 rounded">
          <a href="/contact-us" >
  Contact Us
</a> </Button>
        </div>
      </section>
    </main>
  )
}

// Sample data
const services = [
  {
    title: "Refurbished Laptops",
    description: "Premium quality refurbished laptops with warranty and support.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="12" x="3" y="4" rx="2" ry="2" />
        <line x1="2" x2="22" y1="20" y2="20" />
      </svg>
    ),
  },
  {
    title: "Corporate Solutions",
    description: "Bulk orders for businesses with customized configurations.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    title: "Educational Packages",
    description: "Special pricing and solutions for schools and educational institutions.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    title: "Sustainable IT",
    description: "Environmentally responsible technology solutions with carbon offset programs.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
        <path d="M12 2v20" />
        <path d="M2 7h20" />
        <path d="M2 17h20" />
      </svg>
    ),
  },
  {
    title: "Technical Support",
    description: "Comprehensive technical support and maintenance services.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10H12V2Z" />
        <path d="M21.2 8A10 10 0 0 0 17 3.5" />
        <path d="M12 2a10 10 0 0 1 0 20 10 10 0 0 1-10-10" />
        
      </svg>
    ),
  },
  {
    title: "Custom Configurations",
    description: "Tailored hardware and software configurations to meet specific needs.",
    icon: ({ className }: { className?: string }) => (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Greenfield Academy",
    text: "The refurbished laptops we purchased for our school have been exceptional. The quality is indistinguishable from new, and the cost savings allowed us to equip more classrooms.",
  },
  {
    name: "Michael Chen",
    company: "Innovative Solutions Inc.",
    text: "As a startup, budget was a concern, but we didn't want to compromise on quality. AL TAWAM ELECTRONIC EQUIPMENT REPAIRING provided the perfect solution with their certified refurbished laptops.",
  },
  {
    name: "Emma Rodriguez",
    company: "Global Sustainability Foundation",
    text: "Not only are the laptops high-quality, but the company's commitment to sustainability aligns perfectly with our organization's values. A win-win partnership.",
  },
]

const news = [
  {
    title: "AL TAWAM ELECTRONIC EQUIPMENT REPAIRING Achieves Carbon Neutral Certification",
    date: "April 5, 2025",
    excerpt:
      "Our commitment to sustainability reaches a new milestone as we achieve carbon neutral certification for our operations.",
    image: "/latest1.jpg",
  },
  {
    title: "New Line of Enterprise-Grade Refurbished Laptops",
    date: "March 22, 2025",
    excerpt:
      "Introducing our latest collection of premium refurbished laptops specifically designed for enterprise environments.",
    image: "/latest2.jpg",
  },
  {
    title: "Partnership with Educational Institutions Expands",
    date: "March 10, 2025",
    excerpt: "AL TAWAM ELECTRONIC EQUIPMENT REPAIRING announces expanded partnerships with schools and universities across the country.",
    image: "/latest3.jpg",
  },
]
