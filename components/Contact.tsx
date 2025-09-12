

import { Linkedin, Facebook, Phone, Mail } from 'lucide-react'

export const Contact = () => {
    return (
        <section id="contact" className="py-24 gradient-subtle mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            ¿Listo para integrar Mercuri 3P en tu negocio? 
                            <span className="block mt-2 text-xl font-normal text-gray-600">
                                Hablemos y construyamos un futuro de triple Impacto juntos!!
                            </span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contáctanos</h3>
                                <p className="text-gray-600 mb-6">
                                    Creemos que cada proyecto exitoso comienza con la comprensión. Exploremos cómo nuestro enfoque puede adaptarse a tus desafíos únicos y aspiraciones.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <Mail className="w-6 h-6 text-[#0069c0]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Escríbenos</p>
                                        <p className="text-gray-600">hola@mercuri3p.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <Phone className="w-6 h-6 text-[#0069c0]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Llámanos</p>
                                        <p className="text-gray-600">+54 (11) 1234-5678</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <Linkedin className="w-6 h-6 text-[#0069c0]" />
                                    </div>
                                    <a href="https://www.linkedin.com/company/mercuri-3p-consulting/posts/?feedView=all" target="_blank">
                                        <p className="font-semibold text-gray-900 hover:text-[#0069c0] hover:underline">Visítanos</p>
                                        <p className="text-gray-600">Consultoría especializada con presencia global</p>
                                    </a>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <Facebook className="w-6 h-6 text-[#0069c0]" />
                                    </div>
                                    <a href="https://www.facebook.com/mercuri3p" target="_blank">
                                        <p className="font-semibold text-gray-900 hover:text-[#0069c0] hover:underline">Facebook</p>
                                        <p className="text-gray-600">Consultoría especializada con presencia global</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form className="p-8 bg-white rounded-lg shadow-md">
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                        <input type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors" placeholder="Tu nombre" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors" placeholder="tu@email.com" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                                    <input type="text" id="company" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors" placeholder="Tu empresa" />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                                    <select id="service" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors">
                                        <option>Selecciona un servicio</option>
                                        <option>Desarrollo de Packaging Sustentable</option>
                                        <option>Estrategia de Producto End to End</option>
                                        <option>Manufactura y Sustentabilidad</option>
                                        <option>Gestión Integral de Proyectos</option>
                                        <option>Innovación en Diseño</option>
                                        <option>Consultoría Especializada</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors" placeholder="Cuéntanos sobre tu desafío o visión..."></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full">Enviar Mensaje</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}