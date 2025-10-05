"use client"
import { motion } from "framer-motion"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "Air Conditioning", href: "#" },
      { name: "Heat Pumps", href: "#" },
      { name: "Solar Panels", href: "#" },
      { name: "Energy Audits", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
    ],
    Support: [
      { name: "Contact", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Rebate Info", href: "#" },
      { name: "Warranty", href: "#" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">HEXA POWER SOLUTIONS</h3>
              <p className="text-neutral-400 mb-6 leading-relaxed">
                Your trusted partner for Victorian Energy Upgrades. Professional installation of energy-efficient
                systems with maximum rebates.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-neutral-400">
                  <Phone className="w-4 h-4 text-[#16a34a]" />
                  <span className="text-sm">1300 HEXA PWR</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  <Mail className="w-4 h-4 text-[#16a34a]" />
                  <span className="text-sm">info@hexapower.com.au</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400">
                  <MapPin className="w-4 h-4 text-[#16a34a]" />
                  <span className="text-sm">Melbourne, Victoria</span>
                </div>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#1e40af] transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-white mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-neutral-400">&copy; {currentYear} HEXA POWER SOLUTIONS. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
