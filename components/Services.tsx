'use client'



import Link from "next/link";
import { services } from "@/types/services";
import { motion } from "framer-motion";

export const Services = () => {
    return (
        <section id="services" className="py-24 gradient-subtle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestros Servicios
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Soluciones integrales de desarrollo de productos sustentables, desde la estrategia hasta la implementación, con foco en packaging innovador.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link key={service.id} href={`/detail/${service.id}`}>
                            <motion.div 
                                className="card p-8 cursor-pointer group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1,
                                    ease: "easeOut" 
                                }}
                                whileHover={{ 
                                    y: -8,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className="gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                                    whileHover={{ 
                                        scale: 1.2, 
                                        rotate: 10,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                                    </svg>
                                </motion.div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#0069c0] transition-colors break-words leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {service.shortDescription}
                                </p>
                                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                    {service.benefits.slice(0, 4).map((benefit, index) => (
                                        <li key={index}>• {benefit}</li>
                                    ))}
                                </ul>
                                <div className="flex items-center text-[#20f26f] font-medium group-hover:text-[#3df883] transition-colors">
                                    <span>Conocer más</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}