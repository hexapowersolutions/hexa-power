"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 lg:py-32 bg-neutral-50">
        <div className="container-custom">
          <Reveal>
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4 text-balance">
                Get in <span className="text-[#1e40af]">Touch</span>
              </h1>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-pretty">
                Ready to upgrade your home with energy-efficient solutions? Fill out the form below and our team will
                contact you shortly.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Reveal delay={0.1}>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-[#1e40af]/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-[#1e40af]" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Phone</h3>
                <p className="text-neutral-600">Call us anytime</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-[#1e40af]/10 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-[#1e40af]" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Email</h3>
                <p className="text-neutral-600">We'll respond quickly</p>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-[#1e40af]/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#1e40af]" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">Location</h3>
                <p className="text-neutral-600">Mulgrave, Victoria</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  )
}
