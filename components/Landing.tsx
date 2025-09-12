'use client'


import Marquee from "react-fast-marquee"
import { motion } from "framer-motion"

export const Landing = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 gradient-subtle"></div>

            <div className="absolute top-20 right-20 w-72 h-72 bg-[#20f26f]/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-0 left-140 w-72 h-72 bg-[#20f26f]/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3df883]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1 
                        className="text-zinc-900 text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Tu Socio Estratégico en 
                        <span className="bg-gradient-to-r from-[#0069c0] to-[#2196f3] bg-clip-text text-transparent mt-2"> I + D</span>
                    </motion.h1>
                    <motion.p 
                        className="md:text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        En MERCURI 3P impulsamos el desarrollo de productos con propósito, combinando innovación, sustentabilidad y eficiencia. Nos especializamos en el desarrollo de productos E2E con un enfoque preciso en <span className="font-bold">packaging</span>, fusionando los <span className="font-bold">recursos internos</span> de tu empresa con nuestra expertise en diseño, manufactura y sustentabilidad. Desde la estrategia hasta la implementación, trabajamos con una visión integral en la gestión de proyectos, asegurando la optimización de costos y contribuyendo al crecimiento del negocio.
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#services" className="btn-primary cursor-pointer">Comenzar tu Proyecto</a>
                        <a href="#about" className="cursor-pointer">Conocer Nuestro Enfoque</a>
                    </motion.div>
                </motion.div>
            </div>
            
            <div className="absolute bottom-8 left-0 right-0 z-20">
                <Marquee 
                    gradient={false} 
                    speed={100}
                    className="bg-[#0069c0]/90 backdrop-blur-sm py-4"
                >
                    {expertiseItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-center mx-8 text-white font-medium">
                            <span className="w-2 h-2 bg-[#20f26f] rounded-full mr-3"></span>
                            {item}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

const expertiseItems = [
    "Packaging Sustentable",
    "Desarrollo E2E",
    "Manufactura Responsable", 
    "Gestión de Proyectos",
    "Innovación en Diseño",
    "Consultoría Especializada",
    "Optimización de Costos",
    "Economía Circular",
    "Capacitación de Equipos",
]