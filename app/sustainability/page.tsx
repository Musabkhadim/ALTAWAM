import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, BookOpen, Users } from "lucide-react"

export default function Sustainability() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/sust.jpg"
            alt="Sustainability background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Sustainability Education</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Empowering the next generation with knowledge and tools for a sustainable future through technology.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach to Sustainability Education</h2>
              <p className="text-gray-300 mb-4">
                At TechRenew, we believe that education is the foundation of sustainable change. Our comprehensive
                sustainability education programs are designed to inspire, inform, and empower individuals and
                organizations to make environmentally responsible technology choices.
              </p>
              <p className="text-gray-300 mb-4">
                Through workshops, resources, and hands-on learning experiences, we help students, educators, and
                professionals understand the environmental impact of technology and the importance of sustainable
                practices in the digital age.
              </p>
              <p className="text-gray-300">
                Our curriculum is developed in collaboration with environmental experts, educators, and industry leaders
                to ensure it's both scientifically accurate and practically applicable.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/sust1.jpg"
                alt="Students learning about sustainability"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Educational Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationalPrograms.map((program, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">{program.title}</h3>
                <p className="text-gray-300 text-center">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-teal-900">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-teal-800 p-6 rounded-lg">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-teal-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Sustainability Curriculum */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Sustainability Curriculum</h2>
          <div className="max-w-4xl mx-auto">
            {curriculumModules.map((module, index) => (
              <div key={index} className="mb-8 bg-gray-800 rounded-lg p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-teal-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                    <p className="text-gray-300">{module.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      

      {/* CTA Section */}
      <section className="py-16 bg-teal-800 text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Equip Your School or Business with Certified Premium Refurbished Laptops?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
          As the only company in the world with Premium Certification for both remanufactured and refurbished devices, we deliver performance, sustainability, and unbeatable value..
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           
            <Button variant="outline" className="border-white text-white hover:bg-teal-700"><a href="/contact-us">

        
              contact us</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

// Sample data
const educationalPrograms = [
  {
    title: "School Laptop Supply Program",
    description:
      "Delivering world-class refurbished laptops to schools and students, combining quality, affordability, and environmental responsibility.",
    icon: BookOpen,
  },
  {
    title: "Educator Tech Access",
    description:
      "Professional development programs for educators to integrate sustainability concepts into STEM curriculum.",
    icon: Users,
  },
  {
    title: "Global Refurbished Laptops",
    description:
      "Providing top-quality refurbished laptops to teachers and trainers, enabling affordable access to reliable technology while supporting eco-friendly and sustainable teaching practices.",
    icon: Award,
  },
]

const impactStats = [
  {
    value: "50,000+",
    label: "Students Reached",
  },
  {
    value: "500+",
    label: "Schools Partnered",
  },
  {
    value: "1,200+",
    label: "Educators Trained",
  },
  {
    value: "30%",
    label: "Average E-Waste Reduction",
  },
]



const curriculumModules = [
  {
    title: "Understanding Technology Lifecycles",
    description:
      "Explore the environmental impact of technology from production to disposal, and learn about circular economy principles.",
  },
  {
    title: "E-Waste Management",
    description:
      "Learn about responsible disposal methods, recycling processes, and the importance of extending device lifespans.",
  },
  {
    title: "Green Computing Practices",
    description:
      "Discover energy-efficient computing habits, power management, and how to reduce the carbon footprint of digital activities.",
  },
  {
    title: "Sustainable Innovation",
    description:
      "Explore how technology can be used to solve environmental challenges and create sustainable solutions.",
  },
  {
    title: "Digital Minimalism",
    description:
      "Learn about mindful technology use, reducing digital clutter, and the environmental benefits of digital minimalism.",
  },
]

const testimonials = [
  {
    name: "Dr. Emily Rodriguez",
    position: "Science Department Chair, Greenfield Academy",
    text: "TechRenew's sustainability curriculum has transformed how our students think about technology. They're now actively leading e-waste initiatives in our community.",
  },
  {
    name: "Mark Johnson",
    position: "Technology Director, Westlake School District",
    text: "The teacher training program gave our educators the confidence and resources to integrate sustainability concepts across all subject areas.",
  },
  {
    name: "Sarah Chen",
    position: "Environmental Science Teacher, Oakridge High",
    text: "The hands-on activities and real-world applications make complex sustainability concepts accessible and engaging for students of all learning styles.",
  },
]
