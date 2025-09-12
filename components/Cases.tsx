


'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import image1 from '../public/success-cases/rollon.png';
import image2 from '../public/success-cases/axe.png';
import image3 from '../public/success-cases/pote.png';
import image4 from '../public/success-cases/steps.jpg';
import image5 from '../public/success-cases/rexona.png';
import image6 from '../public/success-cases/talco.png';
import image7 from '../public/success-cases/Picture1.jpg';
import image8 from '../public/success-cases/Picture7.png';

const successCases = [
    {
        id: 1,
        title: "ROLL ON",
        productImage: image1,
        challenge: "Se planteó la necesidad de rediseñar el aplicador por una morfología más háptica al consumidor durante el uso y que se destaque de la competencia.",
        result: "Se replanteó la forma de utilización a través de testeos en uso con consumidores, y a partir de ese entendimiento se cambió la morfología, dándole mejor ángulo de aplicación sobre la axila. El diseño fue adoptado globalmente y se obtuvo patentamiento de diseño global.",
        layout: "left"
    },
    {
        id: 2,
        title: "AEROSOL AXE",
        productImage: image2,
        challenge: "Replantear el packaging del aerosol Axe con una concepción más moderna, dinámica, y monolítica respecto del producto estándar anterior.",
        result: "Utilizando nuevas tecnologías de conformado de envases, se generaron grips laterales por medio de embossing de la pared de aluminio. A su vez de elimina la sobretapa del actuador generando un mecanismo on/off de accionamiento del pulsador o tapa actuadora. Diseño adoptado globalmente.",
        layout: "right"
    },
    {
        id: 3,
        title: "POTE REXONA ODORONO",
        productImage: image3,
        challenge: "Reemplazar el envase existente que constaba de pote y tapa por separado, por una versión cost effective y de impacto positivo al medio ambiente y aumento de la productividad en manufactura.",
        result: "Se diseñó un pote con tapa incluida, inspirados en una tapa tipo flip top, con bisagra tipo butterfly, logrando disminuir 20% el peso de material, por ende disminución de costo por unidad, y se aumentó la eficiencia a lo largo de la cadena de valor (moldeo, logística, inventario, manufactura).",
        layout: "left"
    },
    {
        id: 4,
        title: "SRP",
        productImage: image4,
        challenge: "Reemplazar el actual empaque secundario (cajas de cartón corrugado), por una versión más económica, que facilitara la reposición en góndola, y aumentar la exposición del producto. Además poder sinergizar opciones en el punto de venta (p.ej. Puntera de góndolas, mayoristas, etc)",
        result: "Se re diseñó el formato de la caja original, transformándola en un display (shelf ready packaging - SRP), listo para ser estructurado desde la fábrica al PDV, sin remanejos ni sobrecostos. Además se pudo optimizar el branding a través de la impresión de la caja.",
        layout: "full"
    },
    {
        id: 5,
        title: "PCR RFM",
        productImage: image5,
        challenge: "Dentro del marco de la estrategia de sustentabilidad se requirió incluir rPP al actuador del producto Rexona For Men.",
        result: "Se desarrollaron blends específicos de rPP para adecuarlo al proceso de IM y ensamblado posterior de cada componente que conforman al actuador. Finalmente se llegó a la inclusión de 80% de PCR en todo el conjunto ensamblado, logrando así cumplir las métricas estratégicas de la compañía.",
        layout: "right"
    },
    {
        id: 6,
        title: "PCR BOTELLA TALCO",
        productImage: image6,
        challenge: "Incorporar rHDPE en la botella actual la cual se fabricaba con HDPE virgen. El desafío incluye evitar on costs, nulo impacto estético o funcional, maximizar el % de inclusión de PCR.",
        result: "Se logró desarrollar una botella EBM utilizando rHDPE al 97%. Sin impacto en costos y sin interacción con el producto o el consumidor.",
        layout: "left"
    },
    {
        id: 7,
        title: "Capacitación y entrnamientos especificos",
        productImage: [image7, image8],
        challenge: "Incorporar rHDPE en la botella actual la cual se fabricaba con HDPE virgen. El desafío incluye evitar on costs, nulo impacto estético o funcional, maximizar el % de inclusión de PCR.",
        result: "Se logró desarrollar una botella EBM utilizando rHDPE al 97%. Sin impacto en costos y sin interacción con el producto o el consumidor.",
        layout: "left"
    }
];

export const Cases = () => {
    return (
        <section id="cases" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Casos de <span className="text-gradient">Éxito</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Transformaciones reales logradas a través de nuestro enfoque integral en desarrollo de productos sustentables y packaging innovador.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {successCases.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`${caseItem.layout === 'full' ? '' : 'grid lg:grid-cols-2 gap-12 items-center border-b border-gray-200 pb-12'}`}
                        >
                            {caseItem.layout === 'full' ? (
                                // Layout especial para SRP
                                <div className="text-center">
                                    <div className="mb-8">
                                        <div className="w-20 h-1 bg-[#20f26f] mx-auto mb-6"></div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                            {caseItem.title}
                                        </h3>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                                        <div className="text-left">
                                            <h4 className="text-2xl font-bold text-gray-900 mb-4">El Desafío</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {caseItem.challenge}
                                            </p>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-2xl font-bold text-gray-900 mb-4">El Resultado</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {caseItem.result}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full max-w-4xl mx-auto">
                                        {Array.isArray(caseItem.productImage) ? (
                                            caseItem.productImage.map((image, index) => (
                                                <Image
                                                    key={index}
                                                    src={image}
                                                    alt={caseItem.title}
                                                    width={800}
                                                    height={400}
                                                    className="w-full h-auto object-contain"
                                                />
                                            ))
                                        ) : (
                                            <Image
                                                src={caseItem.productImage}
                                                alt={caseItem.title}
                                                width={800}
                                                height={400}
                                                className="w-full h-auto object-contain"
                                            />
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className={`${caseItem.layout === 'right' ? 'lg:order-2' : ''}`}>
                                        <div className="w-20 h-1 bg-[#20f26f]/50 mb-6"></div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                            {caseItem.title}
                                        </h3>

                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-2xl font-bold text-gray-900 mb-4">El Desafío</h4>
                                                <p className="text-gray-700 leading-relaxed text-lg">
                                                    {caseItem.challenge}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-2xl font-bold text-gray-900 mb-4">El Resultado</h4>
                                                <p className="text-gray-700 leading-relaxed text-lg">
                                                    {caseItem.result}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${caseItem.layout === 'right' ? 'lg:order-1' : ''} flex justify-center items-center`}>
                                        {Array.isArray(caseItem.productImage) ? (
                                            caseItem.productImage.map((image, index) => (
                                                <Image
                                                    key={index}
                                                    src={image}
                                                    alt={caseItem.title}
                                                    width={400}
                                                    height={500}
                                                    className="w-full max-w-sm h-auto object-contain rounded-2xl"
                                                />
                                            ))
                                        ) : (
                                            <Image
                                                src={caseItem.productImage}
                                                alt={caseItem.title}
                                                width={400}
                                                height={500}
                                                className="w-full max-w-sm h-auto object-contain rounded-2xl"
                                            />
                                        )}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}