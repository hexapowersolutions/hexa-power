"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-16"
      >
        <div className="w-20 h-20 rounded-full bg-[#16a34a]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#16a34a]" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">Thank You!</h2>
        <p className="text-lg text-neutral-600 max-w-md mx-auto">
          Our team will get in touch with you soon to discuss your energy upgrade needs.
        </p>
      </motion.div>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto border-neutral-200">
      <CardContent className="p-8 lg:p-12">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-neutral-900">
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border-neutral-300"
                placeholder="John"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-neutral-900">
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border-neutral-300"
                placeholder="Smith"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-neutral-900">
              Phone Number *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border-neutral-300"
              placeholder="0400 000 000"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-neutral-900">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-neutral-300"
              placeholder="john.smith@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-neutral-900">
              Address *
            </Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border-neutral-300"
              placeholder="123 Main Street, Suburb, VIC 3000"
            />
          </div>

          <Button type="submit" className="w-full bg-[#1e40af] hover:bg-[#1e3a8a] text-white h-12 text-lg">
            Submit Enquiry
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
