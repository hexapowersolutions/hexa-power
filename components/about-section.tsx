"use client"

import { motion } from "framer-motion"
import { Award, MapPin, Zap, CheckCircle } from "lucide-react"
import { Reveal } from "./reveal"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Award,
    title: "Certified Installers",
    description: "All our technicians are fully certified and trained to the highest industry standards",
  },
  {
    icon: MapPin,
    title: "Based in Mulgrave",
    description: "Proudly serving Victoria from our Mulgrave location with local expertise",
  },
  {
    icon: Zap,
    title: "Fast Service",
    description: "Quick turnaround times without compromising on quality or safety",
  },
]

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white" id="about">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4 text-balance">
              About <span className="text-[#1e40af]">Hexa Power Solutions</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto text-pretty">
              Your trusted partner for energy-efficient upgrades across Victoria. We combine expertise, speed, and
              quality to deliver exceptional results.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
              <Reveal delay={index * 0.1}>
                <Card className="h-full border-neutral-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#1e40af]/10 flex items-center justify-center mx-auto mb-6">
                      <highlight.icon className="w-8 h-8 text-[#1e40af]" />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">{highlight.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </Reveal>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.3}>
          <div className="bg-neutral-50 rounded-3xl p-8 lg:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-6 text-center">
                Why Choose Hexa Power Solutions?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Fully certified and licensed installers",
                  "Fast and efficient service delivery",
                  "Maximum Victorian rebate assistance",
                  "Premium quality equipment",
                  "Comprehensive warranties included",
                  "Local Mulgrave-based team",
                  "Transparent pricing with no hidden fees",
                  "Ongoing support and maintenance",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#16a34a] flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
