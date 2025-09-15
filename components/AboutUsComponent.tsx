'use client'


import { motion } from "framer-motion"
import Image from "next/image"




export const AboutUsComponent = () => {
    return (
        <>
            <section id="cases" className="py-24 bg-[#0069c0]/10">
                <div className="max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Sobre <span className="text-gradient">Nosotros</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transformaciones reales logradas a través de nuestro enfoque integral en desarrollo de productos sustentables y packaging innovador.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section id="cases" className="pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-10 mt-40">
                        <div className="w-1/2">
                            <Image src="/image-nosotros.png" alt="About Us" width={500} height={500} />
                        </div>
                        <div className="w-1/2 space-y-6">
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    <span className="font-semibold text-[#0069c0]">Profesional con más de 30 años de experiencia</span> en desarrollo de productos, 
                                    ingeniería de envases, gestión de proyectos y liderazgo de equipos.
                                </p>
                                
                                <p>
                                    A lo largo de mi carrera he dirigido proyectos de innovación, sostenibilidad y 
                                    transformación organizacional en Unilever, generando impacto real en 
                                    eficiencia, cultura y resultados.
                                </p>
                                
                                <p>
                                    Además cuento con larga trayectoria institucional en diversas organizaciones 
                                    afines a la industria, en especial el <span className="font-medium text-[#0069c0]">Instituto Argentino del Envase</span>, donde formo 
                                    parte del Comité Ejecutivo. A su vez, lidero la Comisión de Medio Ambiente del 
                                    mismo instituto. En simultáneo, he dado cursos de capacitación a diversas 
                                    universidades y empresas del rubro.
                                </p>
                                
                                <p className="text-lg font-medium">
                                    Hoy, desde <span className="text-[#0069c0] decoration-[#20f26f] decoration-2">Mercuri 3P Consulting</span>, acompaño a organizaciones que buscan 
                                    evolucionar sus procesos, fortalecer sus marcas y alinear sus estrategias con 
                                    valores de Triple Impacto (Ambiental, Social, Governance).
                                </p>
                                
                                <p className="text-lg border-l-4 border-[#20f26f] pl-4 italic bg-gray-50 p-4 rounded">
                                    &quot;Me especializo en convertir <span className="font-semibold">desafíos complejos en soluciones prácticas</span>, 
                                    combinando visión técnica, enfoque humano y pensamiento estratégico.&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}