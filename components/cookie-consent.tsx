"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookieConsent")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 md:p-6 z-50 shadow-lg border-t border-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="pr-8 max-w-3xl">
            <div className="flex items-start">
              <h3 className="text-lg font-semibold mb-2">Cookie Consent</h3>
              <button onClick={declineCookies} className="ml-auto md:hidden" aria-label="Close cookie consent">
                <X size={20} />
              </button>
            </div>
            <p className="text-gray-300 text-sm">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
              traffic. By clicking "Accept All", you consent to our use of cookies as described in our Cookie Policy.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
              onClick={declineCookies}
            >
              Decline
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white" onClick={acceptCookies}>
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
