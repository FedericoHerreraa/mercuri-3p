'use client'

import Link from "next/link";
import { motion } from "framer-motion";

export const CasesCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div 
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Casos de Éxito Reales
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Descubre cómo hemos transformado ideas en productos sustentables exitosos, 
                        ayudando a empresas de diferentes sectores a alcanzar sus objetivos con packaging innovador.
                    </motion.p>
                    <motion.div 
                        className="grid md:grid-cols-3 gap-8 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {statsData.map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.8 + (index * 0.1),
                                    ease: "easeOut"
                                }}
                                whileHover={{ 
                                    scale: 1.1,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className="text-3xl font-bold text-[#0069c0] mb-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 1 + (index * 0.1) }}
                                >
                                    {stat.number}
                                </motion.div>
                                <p className="text-gray-600">{stat.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <Link href="/success-cases">
                            <motion.button 
                                className="btn-primary cursor-pointer text-lg px-8 py-4"
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -3,
                                    boxShadow: "0 15px 30px rgba(0, 105, 192, 0.4)",
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Ver Todos los Casos de Éxito
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

const statsData = [
    { number: "60%", description: "Reducción en impacto ambiental" },
    { number: "150%", description: "Crecimiento promedio en ventas" },
    { number: "25+", description: "Proyectos exitosos" }
]
