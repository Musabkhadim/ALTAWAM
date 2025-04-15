"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Autour_One } from "next/font/google"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false)
    }

    // Close menu when route changes
    setIsMenuOpen(false)

    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [pathname])

  return (
    <nav className="bg-black text-white py-1 px-4 fixed w-full z-50 border-b border-gray-800">
      <div className="container mx-auto flex justify-between items-center h-12">
      <Link href="/" className="flex items-center">
      <Image
  src="/logo.png"
  alt="masabkhadim logo"
  width={900}
  height={470}
  style={{ height: '4.15rem', width: '9.25rem' }}  // custom size using inline styles
/>
</Link>




        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" isActive={pathname === "/"}>
            Home
          </NavLink>
          <NavLink href="/about-us" isActive={pathname === "/about-us"}>
            About Us
          </NavLink>
          <NavLink href="/our-laptops" isActive={pathname === "/our-laptops"}>
            Our Laptops
          </NavLink>
          <NavLink href="/sustainability" isActive={pathname === "/sustainability"}>
            Sustainability
          </NavLink>
          
          <NavLink href="/contact-us" isActive={pathname === "/contact-us"}>
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={(e) => {
            e.stopPropagation()
            setIsMenuOpen(!isMenuOpen)
          }}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-[calc(100%)] left-0 right-0 bg-black border-t border-gray-800 shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="container mx-auto flex flex-col space-y-1 py-3 px-4">
          <MobileNavLink href="/" isActive={pathname === "/"} onClick={() => setIsMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/about-us" isActive={pathname === "/about-us"} onClick={() => setIsMenuOpen(false)}>
            About Us
          </MobileNavLink>
          <MobileNavLink
            href="/our-laptops"
            isActive={pathname === "/our-laptops"}
            onClick={() => setIsMenuOpen(false)}
          >
            Our Laptops
          </MobileNavLink>
          <MobileNavLink
            href="/sustainability"
            isActive={pathname === "/sustainability"}
            onClick={() => setIsMenuOpen(false)}
          >
            Sustainability
          </MobileNavLink>
         
          <MobileNavLink href="/contact-us" isActive={pathname === "/contact-us"} onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </MobileNavLink>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`transition-colors duration-200 font-medium ${
        isActive
          ? "text-teal-400 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-teal-400 after:rounded-full"
          : "text-white hover:text-teal-400"
      }`}
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
  isActive,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      className={`block py-2.5 px-3 rounded-md transition-all duration-200 ${
        isActive ? "bg-gray-800 text-teal-400 border-l-2 border-teal-400" : "hover:bg-gray-800 hover:text-teal-400"
      }`}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      {children}
    </Link>
  )
}
