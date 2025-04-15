import type React from "react"
import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <>
      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/971509885732"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon size={28} color="white" />
      </a>

      <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <p>AL TAWAM ELECTRONIC EQUIPMENT REPAIRING</p>
              <p className="text-gray-400 mb-4">
                Providing premium quality refurbished laptops with a commitment to sustainability and excellence.
              </p>
              <div className="flex space-x-4">
                <SocialIcon icon={<Facebook size={18} />} href="https://www.facebook.com/share/1BpfW6kQFD/" />
                <SocialIcon icon={<WhatsAppIcon size={18} />} href="https://wa.me/971522024799" />
                <SocialIcon
                  icon={<TikTokIcon size={18} />}
                  href="https://www.tiktok.com/@mahoozabbasi27?_t=ZS-8vPrN4iL6Cl&_r=1"
                />
                <SocialIcon
                  icon={<Instagram size={18} />}
                  href="https://www.instagram.com/mahoozabbasi?igsh=MTg1eXkzdHRyc2lkNA=="
                />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <FooterLink href="/about-us">About Us</FooterLink>
                <FooterLink href="/our-laptops">Our Laptops</FooterLink>
                <FooterLink href="/sustainability">Sustainability</FooterLink>
                <FooterLink href="/contact-us">Contact Us</FooterLink>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <FooterLink href="/contact-us">Business Solutions</FooterLink>
                <FooterLink href="/contact-us">Individual Customers</FooterLink>
                <FooterLink href="/contact-us">Technical Support</FooterLink>
                <FooterLink href="/contact-us">Warranty Information</FooterLink>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Industrial area 5 new j&p market warehouse # 60 sharjah</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-teal-400" />
                  <span className="text-gray-400">+971-52-2024799</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 text-teal-400" />
                  <span className="text-gray-400"> Altawamelectronics@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
            <p className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} musabkhadim363@gmail.com. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <Link href="/sustainability" className="text-gray-500 hover:text-teal-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/contact-us" className="text-gray-500 hover:text-teal-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/education" className="text-gray-500 hover:text-teal-400 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
        {children}
      </Link>
    </li>
  )
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-800 hover:bg-teal-600 h-8 w-8 rounded-full flex items-center justify-center transition-colors duration-200"
    >
      {icon}
    </a>
  )
}

// WhatsApp Icon Component
function WhatsAppIcon({
  size = 24,
  color = "currentColor",
}: {
  size?: number
  color?: string
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color}>
      <path
        d="M17.6 6.31999C16.8 5.49999 15.8 4.84999 14.7 4.39999C13.6 3.94999 12.5 3.69999 11.3 3.69999C10 3.69999 8.8 3.94999 7.7 4.39999C6.6 4.84999 5.6 5.49999 4.8 6.31999C4 7.13999 3.3 8.09999 2.9 9.19999C2.5 10.3 2.2 11.5 2.2 12.8C2.2 14.4 2.6 15.9 3.4 17.3L2 22L6.7 20.6C8.1 21.4 9.6 21.8 11.2 21.8C12.5 21.8 13.7 21.5 14.8 21.1C15.9 20.7 16.9 20 17.7 19.2C18.5 18.4 19.1 17.4 19.6 16.3C20.1 15.2 20.3 14 20.3 12.7C20.3 11.4 20.1 10.2 19.6 9.09999C19.2 8.09999 18.5 7.13999 17.6 6.31999ZM11.3 20.3C9.9 20.3 8.5 19.9 7.3 19.1L6.7 18.8L4 19.7L4.9 17L4.6 16.4C3.8 15.2 3.4 13.8 3.4 12.3C3.4 11.2 3.6 10.1 4 9.19999C4.4 8.29999 5 7.49999 5.7 6.79999C6.4 6.09999 7.2 5.49999 8.1 5.09999C9 4.69999 10.1 4.49999 11.2 4.49999C12.3 4.49999 13.4 4.69999 14.3 5.09999C15.2 5.49999 16 6.09999 16.7 6.79999C17.4 7.49999 18 8.29999 18.4 9.19999C18.8 10.1 19 11.2 19 12.3C19 13.4 18.8 14.5 18.4 15.4C18 16.3 17.4 17.1 16.7 17.8C16 18.5 15.2 19.1 14.3 19.5C13.4 19.9 12.4 20.3 11.3 20.3ZM15.1 14.5C15 14.4 14.8 14.3 14.5 14.2C14.2 14.1 13.7 13.8 13.4 13.7C13.1 13.6 12.9 13.6 12.8 13.7C12.7 13.8 12.5 14 12.4 14.1C12.3 14.2 12.1 14.3 12 14.3C11.6 14.1 11.3 13.9 11 13.6C10.7 13.3 10.5 13 10.3 12.6C10.4 12.5 10.5 12.3 10.6 12.2C10.7 12.1 10.8 11.9 10.8 11.8C10.8 11.7 10.9 11.5 10.9 11.4C10.9 11.3 10.9 11.1 10.8 11C10.7 10.9 10.3 10 10.1 9.49999C10 9.29999 9.9 9.19999 9.8 9.09999C9.7 8.99999 9.6 8.99999 9.5 8.99999C9.4 8.99999 9.2 8.99999 9.1 8.99999C9 8.99999 8.8 9.09999 8.7 9.09999C8.6 9.19999 8.4 9.29999 8.3 9.49999C8.2 9.69999 7.9 9.99999 7.9 10.6C7.9 11.2 8.3 11.8 8.4 11.9C8.5 12 9.4 13.5 10.9 14.2C12.4 14.9 12.4 14.7 12.8 14.7C13.2 14.7 13.7 14.4 13.9 14.1C14.1 13.8 14.1 13.5 14.1 13.4C14 13.4 14.1 13.5 15.1 14.5Z"
        fill={color}
        stroke="none"
      />
    </svg>
  )
}

// TikTok Icon Component
function TikTokIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color}>
      <path
        d="M16.6 5.82C16.6 5.82 16.6 5.82 16.6 5.82C15.8 4.99 15.4 3.78 15.4 2.5H12.2V16.2C12.2 17.3 11.3 18.2 10.2 18.2C9.1 18.2 8.2 17.3 8.2 16.2C8.2 15.1 9.1 14.2 10.2 14.2C10.5 14.2 10.7 14.3 11 14.4V11.2C10.7 11.1 10.5 11.1 10.2 11.1C7.4 11.1 5.1 13.4 5.1 16.2C5.1 19 7.4 21.3 10.2 21.3C13 21.3 15.3 19 15.3 16.2V9.3C16.4 10.1 17.7 10.5 19 10.5V7.4C19 7.4 17.6 7.5 16.6 5.82Z"
        fill={color}
        stroke="none"
      />
    </svg>
  )
}
