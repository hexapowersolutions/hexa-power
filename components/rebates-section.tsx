"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Calculator } from "lucide-react"
import { Reveal } from "./reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function RebatesSection() {
  const rebateSteps = [
    {
      step: "1",
      title: "Check Eligibility",
      description: "See if you qualify for Victorian Energy Upgrades rebates in under 2 minutes",
    },
    {
      step: "2",
      title: "Get Free Quote",
      description: "Our experts assess your property and provide a detailed quote with rebate calculations",
    },
    {
      step: "3",
      title: "Professional Install",
      description: "Licensed technicians install your system with minimal disruption",
    },
    {
      step: "4",
      title: "Claim Your Rebate",
      description: "We handle all the paperwork and ensure you receive maximum rebates",
    },
  ]

  const benefits = [
    "No upfront payment for rebate amount",
    "Government-backed program",
    "Reduce energy bills immediately",
    "Increase property value",
    "Lower carbon footprint",
    "Professional installation included",
  ]

  return (
    <section className="py-20 lg:py-32 bg-white" id="rebates">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <Reveal>
              <h2 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 text-balance">
                Save Thousands with <span className="text-[#16a34a]">Victorian Energy Upgrades</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                The Victorian Energy Upgrades program helps households and businesses reduce energy costs by providing
                rebates for energy-efficient products and services.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <Button size="lg" className="bg-[#1e40af] hover:bg-[#1e3a8a] text-white">
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Your Savings
              </Button>
            </Reveal>
          </div>

          {/* Right Column - Process Steps */}
          <div>
            <Reveal delay={0.2}>
              <Card className="border-neutral-200 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">How It Works</h3>
                  <div className="space-y-6">
                    {rebateSteps.map((item, index) => (
                      <motion.div
                        key={item.step}
                        className="flex gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1e40af] text-white flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-neutral-600">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
