"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function OurLaptops() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-70">
          <Image src="/latet.jpg" alt="Laptops background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center">Our Laptops</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
            Discover our selection of high-quality refurbished laptops, meticulously tested and certified for
            performance and reliability.
          </p>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="py-8 md:py-12 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Refurbished Laptop Brands</h2>
          <div className="w-full overflow-x-auto pb-6 hide-scrollbar">
            <div className="flex min-w-max md:min-w-0 justify-center gap-8 px-4">
              {brandLogos.map((brand, index) => (
                <div
                  key={index}
                  className="w-[120px] h-[120px] rounded-full bg-black border border-gray-600 flex items-center justify-center overflow-hidden p-3"
                >
                  <Image
                    src={brand.image || "/placeholder.svg?height=100&width=100"}
                    alt={`${brand.name} logo`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Products Grid */}
      <section className="py-10 md:py-16 bg-black">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">Our Premium Refurbished Laptops</h1>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {laptops.map((laptop, index) => (
              <div
                key={index}
                className="border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-900"
              >
                <div className="relative h-48 bg-black">
                  <Image
                    src={laptop.image || "/placeholder.svg"}
                    alt={laptop.name}
                    fill
                    className="object-contain p-4"
                  />
                  {laptop.tag && (
                    <span className="absolute top-2 right-2 bg-teal-600 text-white text-xs font-bold px-2 py-1 rounded">
                      {laptop.tag}
                    </span>
                  )}
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold mb-2">{laptop.name}</h3>
                  <div className="mb-4">
                    <div className="flex items-center mb-1">
                      <span className="text-xs md:text-sm text-gray-400 w-20 md:w-24">Processor:</span>
                      <span className="text-xs md:text-sm">{laptop.processor}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="text-xs md:text-sm text-gray-400 w-20 md:w-24">Memory:</span>
                      <span className="text-xs md:text-sm">{laptop.memory}</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <span className="text-xs md:text-sm text-gray-400 w-20 md:w-24">Storage:</span>
                      <span className="text-xs md:text-sm">{laptop.storage}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs md:text-sm text-gray-400 w-20 md:w-24">Display:</span>
                      <span className="text-xs md:text-sm">{laptop.display}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-xs md:text-sm w-full">Contact Us</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 md:py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-32 md:h-40">
                  <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Refurbished Laptops */}
      <section className="py-10 md:py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
            Why Choose Our Refurbished Laptops
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="h-7 w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 md:py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 md:mb-6 bg-gray-900 rounded-lg shadow-sm p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{faq.question}</h3>
                <p className="text-sm md:text-base text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
            Our inventory is constantly updating. Contact our team for personalized recommendations or to inquire about
            specific models.
          </p>
          <Button className="bg-white text-teal-600 hover:bg-gray-100">Contact Our Team</Button>
        </div>
      </section>
    </main>
  )
}

// Sample data
const brandLogos = [
  { name: "Dell", image: "/dell.png" },
  { name: "HP", image: "/hp1.png" },
  { name: "Lenovo", image: "/len.png" },
  { name: "Apple", image: "/apple1.jpeg" },
  { name: "Microsoft", image: "/mic1.png" },
  { name: "Asus", image: "/asus.png" },
  { name: "Acer", image: "/acer1.png" },
  { name: "Toshiba", image: "/tos.png" },
]

const laptops = [
  {
    name: "Dell Latitude 7420",
    processor: "Intel Core i7-1185G7",
    memory: "16GB DDR4",
    storage: "512GB SSD",
    display: '14" FHD (1920 x 1080)',
    price: 899,
    originalPrice: 1499,
    image: "/laptop1.jpg",
    tag: "Best Seller",
  },
  {
    name: "HP EliteBook 840 G8",
    processor: "Intel Core i5-1135G7",
    memory: "8GB DDR4",
    storage: "256GB SSD",
    display: '14" FHD (1920 x 1080)',
    price: 749,
    originalPrice: 1299,
    image: "/laptop2.webp",
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    processor: "Intel Core i7-1165G7",
    memory: "16GB LPDDR4X",
    storage: "1TB SSD",
    display: '14" WQHD (2560 x 1440)',
    price: 1099,
    originalPrice: 1899,
    image: "/laptop3.webp",
    tag: "Premium",
  },
  {
    name: "Apple MacBook Pro",
    processor: "Apple M1 Pro",
    memory: "16GB Unified",
    storage: "512GB SSD",
    display: '14" Retina (3024 x 1964)',
    price: 1499,
    originalPrice: 2499,
    image: "/laptop4.jpeg",
    tag: "Limited Stock",
  },
  {
    name: "Dell XPS 13",
    processor: "Intel Core i7-1185G7",
    memory: "16GB LPDDR4X",
    storage: "512GB SSD",
    display: '13.4" FHD+ (1920 x 1200)',
    price: 1199,
    originalPrice: 1899,
    image: "/laptop5.jpeg",
  },
  {
    name: "HP Spectre x360",
    processor: "Intel Core i5-1135G7",
    memory: "8GB DDR4",
    storage: "256GB SSD",
    display: '13.3" FHD (1920 x 1080)',
    price: 899,
    originalPrice: 1399,
    image: "/laptop6.jpeg",
  },
  {
    name: "Lenovo ThinkPad T14s",
    processor: "AMD Ryzen 7 PRO 5850U",
    memory: "16GB DDR4",
    storage: "512GB SSD",
    display: '14" FHD (1920 x 1080)',
    price: 949,
    originalPrice: 1599,
    image: "/laptop7.jpeg",
  },
  {
    name: "Microsoft Surface Laptop 4",
    processor: "AMD Ryzen 5 4680U",
    memory: "8GB LPDDR4X",
    storage: "256GB SSD",
    display: '13.5" PixelSense (2256 x 1504)',
    price: 849,
    originalPrice: 1299,
    image: "/laptop8.jpeg",
  },
]

const categories = [
  {
    name: "Business Laptops",
    description: "Reliable performance for professional environments",
    image: "/bussiness.jpg",
  },
  {
    name: "Premium Ultrabooks",
    description: "Thin, light, and powerful for professionals on the go",
    image: "/buss2.jpg",
  },
  {
    name: "Education Models",
    description: "Durable and affordable options for students and schools",
    image: "/buss1.jpg",
  },
  {
    name: "Creative Workstations",
    description: "High-performance laptops for design and content creation",
    image: "/buss3.jpg",
  },
]

const benefits = [
  {
    title: "Quality Assurance",
    description: "Every laptop undergoes a rigorous 50-point inspection and testing process.",
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Warranty Protection",
    description: "All laptops come with a standard 1-year warranty with extended options available.",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly",
    description: "Choosing refurbished reduces e-waste and your carbon footprint.",
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
    title: "Cost Savings",
    description: "Get premium performance at a fraction of the cost of new laptops.",
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
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
        <path d="M12 18V6" />
      </svg>
    ),
  },
]

const faqs = [
  {
    question: "What is the difference between refurbished and used laptops?",
    answer:
      "Refurbished laptops undergo a comprehensive restoration process, including testing, component replacement, and cleaning. Used laptops are typically sold as-is without these quality assurance steps.",
  },
  {
    question: "Do refurbished laptops come with an operating system?",
    answer:
      "Yes, all our refurbished laptops come with a genuine, licensed operating system (typically Windows 10 or 11 Professional) that is freshly installed.",
  },
  {
    question: "Can I upgrade components after purchase?",
    answer:
      "Most of our refurbished laptops support component upgrades such as RAM and storage. Our technical team can provide guidance on compatible upgrades for your specific model.",
  },
  {
    question: "What if I need a specific configuration not listed on your website?",
    answer:
      "We offer custom configurations to meet specific requirements. Contact our sales team to discuss your needs, and we'll work to find or build the right solution for you.",
  },
]
