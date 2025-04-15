import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="./about.jpg" alt="About Us background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">AL TAWAM ELECTRONIC EQUIPMENT REPAIRING</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Leading the way in sustainable technology solutions with premium refurbished laptops.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-16 bg-black border-t border-gray-800 relative"
        style={{ backgroundImage: "url(/story.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-gray-300 mb-4">
                Founded in 2015, "AL TAWAM ELECTRONIC EQUIPMENT REPAIRING" began with a simple mission: to reduce
                electronic waste while providing high-quality, affordable technology solutions. What started as a small
                operation has grown into a leading provider of premium refurbished laptops.
              </p>
              <p className="text-gray-300 mb-4">
                Our team of certified technicians meticulously inspects, tests, and refurbishes each laptop to ensure it
                meets our rigorous quality standards. We believe that refurbished technology doesn't mean compromised
                performance or reliability.
              </p>
              <p className="text-gray-300">
                Today, we serve thousands of customers across businesses, educational institutions, and individual
                consumers, all while maintaining our commitment to sustainability and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="h-8 w-8 text-white"
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
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Our Services</h3>
              <p className="text-gray-300 text-center">
              We sell used business and Glocy series laptops in bulk, refurbish them, offer all kinds of repairs, and also sell laptop parts, SSDs, RAM, and hard drives..
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="h-8 w-8 text-white"
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
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Quality Excellence</h3>
              <p className="text-gray-300 text-center">
                Every laptop undergoes a rigorous 50-point inspection and testing process to ensure it meets our premium
                quality standards.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  className="h-8 w-8 text-white"
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Customer Focus</h3>
              <p className="text-gray-300 text-center">
                We prioritize customer satisfaction through personalized service, comprehensive warranties, and
                responsive technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image || "/placeholder-logo.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-teal-600 mb-2">{member.position}</p>
                <p className="text-gray-300 text-xs sm:text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {/* <section className="py-16 bg-black text-white border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Certifications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                  <Image src={cert.image || "/placeholder.svg"} alt={cert.name} width={60} height={60} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-400 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience the AL TAWAM ELECTRONIC EQUIPMENT REPAIRING Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have chosen our premium refurbished laptops for their technology
            needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" className="border-white text-white hover:bg-teal-700">
              {" "}
              <a href="/contact-us">Contact Our Team </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data
const teamMembers = [
  {
    name: "Ahmad Mauz",
    position: "CEO & Founder",
    bio: "With over 17 years in the tech industry, David founded AL TAWAM ELECTRONIC EQUIPMENT REPAIRING with a vision for sustainable technology.",
    image: "/mahaiz1.png",
  },
  {
    name: "Muhammad Muaz",
    position: "Chief Operations Officer",
    bio: " Muaz oversees our refurbishment process, ensuring every laptop meets our rigorous quality standards.",
    image: "/mohoiz3.png",
  },
  {
    name: "Ehsan Ghafoor",
    position: "Lab technician",
    bio: "Ehsan Ghafoor leads our lab team, ensuring the accurate execution of tests and maintaining high standards for quality assurance in all laboratory procedures.",
    image: "/mahouz.jpg",
  },
  {
    name: "Maviya Tahir",
    position: "Lab technician",
    bio: " Maviya Tahir manages our lab operations, ensuring precision in testing and maintaining high standards for safety and quality assurance in all procedures.",
    image: "/mouz.jpg",
  },
  {
    name: "Muhammad Arslan",
    position: "Manager",
    bio: " Muhammad Arslan manages our lab operations at AL TAWAM ELECTRONIC EQUIPMENT REPAIRING, ensuring precise testing and high standards of safety and quality in every procedure.",
    image: "/arslan.jpg",
  },
  {
    name: "Salar Abbasi",
    position: "Lab Supervisor",
    bio: " Salar Abbasi, Lab Supervisor at AL TAWAM ELECTRONIC EQUIPMENT REPAIRING, ensures all repair processes meet top quality and safety standards..",
    image: "/salar.jpg",
  },
]

