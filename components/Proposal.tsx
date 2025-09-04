

import Image from "next/image"
import Link from "next/link"

export const ProposalComponent = () => {
    return (
        <>
            <section className="py-32 text-white gradient-subtle">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center animate-slide-up">
                        <div className="flex justify-center mb-8">
                            <Image 
                                src="/logo-sin-bg.png" 
                                alt="Mercuri3P" 
                                width={200} 
                                height={200}
                                className=""
                            />
                        </div>
                        <h1 className="text-5xl md:text-7xl text-gray-700 font-bold mb-8">
                            Nuestra Propuesta
                        </h1>
                        <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 text-gray-700">
                            Transformamos tu visión en productos sustentables que generan impacto real. 
                            Descubre cómo podemos impulsar tu negocio hacia el futuro.
                        </p>
                        {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact-us">
                                <button className="bg-white text-[#0069c0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                                    Solicitar Cotización
                                </button>
                            </Link>
                            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0069c0] transition-colors">
                                Descargar PDF
                            </button>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Nuestra Metodología
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Un proceso estructurado de 5 fases que garantiza resultados excepcionales 
                            y la entrega de productos que superan las expectativas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {methodology.map((phase, index) => (
                            <div key={index} className="card p-8 text-center group hover:shadow-xl transition-all duration-300">
                                <div className="w-20 h-20 bg-gradient-to-r from-[#0069c0] to-[#20f26f] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{phase.title}</h3>
                                <p className="text-gray-600 mb-6">{phase.description}</p>
                                <ul className="text-sm text-gray-500 space-y-2">
                                    {phase.activities.map((activity, actIndex) => (
                                        <li key={actIndex} className="flex items-center">
                                            <svg className="w-4 h-4 text-[#20f26f] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            {activity}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-[#20f26f]/50 to-[#3df883]/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0069c0] mb-6">
                            ¿Por qué es conveniente?
                        </h2>
                        <p className="text-xl text-[#0069c0] max-w-3xl mx-auto">
                            MERCURI 3P es tu socio estratégico para acelerar el crecimiento y la innovación en tu empresa.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {convenience.map((item, index) => (
                            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                                <div className="flex items-center mb-4">
                                    <div className="w-3 h-3 bg-[#0069c0] rounded-full mr-3"></div>
                                    <h3 className="text-xl font-bold text-[#0069c0]">{item.title}</h3>
                                </div>
                                <p className="text-[#0069c0] leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 gradient-subtle">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            ¿Por qué elegirnos?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Nuestro enfoque integral y experiencia comprobada nos convierte en el socio ideal 
                            para el desarrollo de tus productos sustentables.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="space-y-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-[#0069c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Resultados Garantizados</h3>
                                <div className="space-y-4">
                                    {stats.map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                                            <span className="text-gray-600">{stat.label}</span>
                                            <span className="text-2xl font-bold text-[#20f26f]">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cliente Objetivo */}
            <section className="py-24 bg-gradient-to-r from-[#0069c0] to-[#137fd9] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Cliente Objetivo
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto">
                            Nuestros servicios están diseñados específicamente para diferentes tipos de organizaciones con necesidades de crecimiento y innovación.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {targetClients.map((client, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <div className="w-4 h-4 bg-[#20f26f] rounded-full mr-3"></div>
                                    <h3 className="text-lg font-semibold text-white">{client}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proceso de Trabajo */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Cómo Trabajamos
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Un proceso colaborativo y transparente que te mantiene informado en cada etapa del desarrollo.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                        <div className="card p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-10 h-10 bg-[#0069c0] rounded-full flex items-center justify-center mr-4">
                                                    <span className="text-white font-bold">{index + 1}</span>
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                                            </div>
                                            <p className="text-gray-600 mb-4">{item.description}</p>
                                            <div className="text-sm text-[#0069c0] font-medium">
                                                Duración: {item.duration}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#0069c0] rounded-full border-4 border-white"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 gradient-primary text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        ¿Listo para comenzar?
                    </h2>
                    <p className="text-xl mb-8 text-white/90">
                        Contacta con nosotros para una consulta gratuita y descubre cómo podemos 
                        transformar tu idea en un producto exitoso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link href="/contact-us">
                            <button className="bg-white text-[#0069c0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                                Contactar Ahora
                            </button>
                        </Link>
                        <Link href="/success-cases">
                            <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0069c0] transition-colors">
                                Ver Casos de Éxito
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

const methodology = [
    {
        title: "Identificar Oportunidades",
        description: "Detectamos y evaluamos oportunidades de mejora y crecimiento en tu negocio.",
        activities: [
            "Entrevistas con stakeholders",
            "Visitas a instalaciones",
            "Análisis de inducciones",
            "Generación de reporte inicial"
        ]
    },
    {
        title: "Diagnóstico Situación Actual",
        description: "Evaluamos el estado actual de tus procesos y productos para identificar áreas de mejora.",
        activities: [
            "Análisis de datos existentes",
            "Desarrollo de propuestas",
            "Análisis con equipo interno",
            "Priorización de iniciativas"
        ]
    },
    {
        title: "Loop de Soluciones & Plan de Acción",
        description: "Diseñamos e implementamos soluciones específicas con un plan de acción claro.",
        activities: [
            "Definición de entregables",
            "Acuerdo con stakeholders",
            "Test piloto",
            "Launch y escalamiento"
        ]
    },
    {
        title: "Monitoreo & Control",
        description: "Seguimiento continuo de los resultados para asegurar el éxito del proyecto.",
        activities: [
            "Definición de KPI's",
            "Cascade al equipo",
            "Coaching específico",
            "Evaluación de resultados"
        ]
    },
    {
        title: "Follow Up (FUP)",
        description: "Soporte posterior y mejora continua para maximizar el valor del proyecto.",
        activities: [
            "Reuniones de seguimiento",
            "Coaching especializado",
            "Capacitaciones adicionales",
            "Optimización continua"
        ]
    }
]

const benefits = [
    {
        title: "Experiencia Comprobada",
        description: "Más de 10 años desarrollando productos sustentables para empresas líderes.",
        icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
        title: "Enfoque Sustentable",
        description: "Compromiso genuino con el medio ambiente en cada decisión de diseño y producción.",
        icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
    },
    {
        title: "Innovación Constante",
        description: "Utilizamos las últimas tecnologías y metodologías para crear productos únicos.",
        icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
        title: "Resultados Medibles",
        description: "Enfoque basado en datos que garantiza ROI positivo y crecimiento sostenible.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }
]

const stats = [
    { label: "Proyectos Completados", value: "150+" },
    { label: "Satisfacción del Cliente", value: "98%" },
    { label: "Reducción de Costos", value: "35%" },
    { label: "Time to Market", value: "-40%" }
]

const timeline = [
    {
        title: "Consulta Inicial",
        description: "Reunión para entender tus necesidades, objetivos y visión del proyecto.",
        duration: "1-2 días"
    },
    {
        title: "Propuesta Detallada",
        description: "Elaboramos una propuesta completa con cronograma, costos y entregables.",
        duration: "3-5 días"
    },
    {
        title: "Kick-off y Planning",
        description: "Iniciamos el proyecto con la definición detallada del alcance y metodología.",
        duration: "1 semana"
    },
    {
        title: "Desarrollo Iterativo",
        description: "Trabajo colaborativo con entregas regulares y feedback continuo.",
        duration: "4-12 semanas"
    },
    {
        title: "Entrega y Soporte",
        description: "Entrega final del producto con documentación completa y soporte inicial.",
        duration: "1-2 semanas"
    }
]

const convenience = [
    {
        title: "Operación Diaria vs Desarrollo Estratégico",
        description: "Muchas veces la operatoria del día a día, no deja espacio para la estrategia. MERCURI 3P es un agente catalizador para ejecutarla."
    },
    {
        title: "Planes de Acción claros y Eficientes",
        description: "Incorporamos técnicas metodológicas probadas para mejorar la efectividad en la gestión de proyectos. (Costos vs Tiempo vs Calidad)"
    },
    {
        title: "Contexto Competitivo",
        description: "El crecimiento competitivo empieza con equipos energizados y comprometidos. La Responsabilidad Social Sustentable es una barrera competitiva que debe estar en la ecuación de crecimiento."
    }
]

const targetClients = [
    "PYMES con potencial de crecimiento",
    "Empresas Multinacionales con necesidades específicas",
    "Terceros & Copackers con restricción de recursos I+D & know how puntuales",
    "Industrias de Cuidado del Hogar y Personal, Farma, Cosmética y Perfumería",
    "Industrias convertidoras de materiales de packaging",
    "Cámaras, Asociaciones Industriales, Universidades"
]   