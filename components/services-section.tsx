"use client"

import { motion } from "framer-motion"
import { AirVent, Flame, Sun, ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const services = [
  {
    id: "aircon",
    name: "Energy Efficient Air Conditioning",
    description:
      "Stay comfortable year-round with our premium energy-efficient air conditioning systems. Eligible for Victorian Energy Upgrades rebates.",
    icon: AirVent,
    image: "/aircon-installation.jpg",
    features: ["Up to $1,000 rebate", "Reduce cooling costs by 40%", "Professional installation", "5-year warranty"],
    color: "text-[#0d9488]",
    bgColor: "bg-[#0d9488]/10",
  },
  {
    id: "heatpump",
    name: "Heat Pump Systems",
    description:
      "Efficient heating and hot water solutions that slash your energy bills. Take advantage of generous government rebates.",
    icon: Flame,
    image: "/heatpump-installation.jpg",
    features: ["Up to $1,000 rebate", "70% more efficient", "Eco-friendly heating", "Expert installation"],
    color: "text-[#1e40af]",
    bgColor: "bg-[#1e40af]/10",
  },
  {
    id: "solar",
    name: "Solar Panel Installation",
    description:
      "Harness the power of the sun and dramatically reduce your electricity costs. Premium solar systems with maximum rebates.",
    icon: Sun,
    image: "/solar-installation.jpg",
    features: ["Up to $1,400 rebate", "25-year warranty", "Feed-in tariff eligible", "Premium panels"],
    color: "text-[#16a34a]",
    bgColor: "bg-[#16a34a]/10",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-neutral-50" id="services">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-neutral-900 mb-4 text-balance">
              Our <span className="text-[#1e40af]">Energy Solutions</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto text-pretty">
              Professional installation of energy-efficient systems with maximum Victorian government rebates
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
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
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-neutral-200 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6`}>
                        <service.icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-3">{service.name}</h3>
                      <p className="text-neutral-600 mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                            <ArrowRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.color}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full group bg-transparent">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
