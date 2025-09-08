'use client'



import Marquee from "react-fast-marquee"
import { motion } from "framer-motion"

export const StatsMarquee = () => {
    return (
        <section className="py-12 bg-gradient-to-r from-[#0069c0] to-[#137fd9] overflow-hidden">
            <Marquee 
                gradient={false} 
                speed={50}
                direction="right"
                pauseOnHover={true}
                className="text-white"
            >
                {statsItems.map((stat, index) => (
                    <motion.div 
                        key={index} 
                        className="flex items-center mx-12"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#20f26f]/90 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-white/90 font-medium uppercase tracking-wide text-sm">
                                {stat.label}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Marquee>
        </section>
    )
}

const statsItems = [
    { number: "150+", label: "Proyectos Completados" },
    { number: "98%", label: "Satisfacción del Cliente" },
    { number: "35%", label: "Reducción de Costos" },
    { number: "40%", label: "Menos Time to Market" },
    { number: "10+", label: "Años de Experiencia" },
    { number: "50+", label: "Clientes Satisfechos" },
    { number: "5", label: "Áreas de Especialización" },
    { number: "25+", label: "Industrias Atendidas" },
    { number: "100%", label: "Enfoque Sustentable" },
    { number: "24/7", label: "Soporte Especializado" }
]
