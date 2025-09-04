



export const Contact = () => {
    return (
        <section id="contact" className="py-24 gradient-subtle mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ¿Listo para Innovar?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Iniciemos una conversación sobre cómo podemos desarrollar productos sustentables que impulsen tu negocio hacia el futuro.
                        </p>
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
                                        <svg className="w-6 h-6 text-[#0069c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Escríbenos</p>
                                        <p className="text-gray-600">hola@mercuri3p.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-[#0069c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Llámanos</p>
                                        <p className="text-gray-600">+54 (11) 1234-5678</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-[#0069c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Visítanos</p>
                                        <p className="text-gray-600">Consultoría especializada con presencia global</p>
                                    </div>
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