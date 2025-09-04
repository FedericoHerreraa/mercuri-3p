




export const Philosophy = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestros Valores
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Principios fundamentales que guían nuestro trabajo y definen cómo transformamos ideas en productos exitosos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="card p-8 text-center">
                            <div className="w-16 h-16 bg-[#0069c0]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-[#0069c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
                            <p className="text-gray-600">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}


const cards = [
    {
        title: "Innovación",
        description: "Mantenerse siempre a la vanguardia en técnicas y tecnologías aplicadas al desarrollo de productos."
    },
    {
        title: "Excelencia en el Negocio",
        description: "Visión integral del negocio de principio a fin (E2E), asegurando resultados que impulsen el crecimiento."
    },
    {
        title: "Colaboración & Teamwork",
        description: "Promover una colaboración sólida con clientes y socios, formando equipos que impulsen la transformación tanto del negocio como de las personas."
    },
    {
        title: "Adaptabilidad",
        description: "Ser flexibles para responder a las demandas cambiantes del mercado. Los detalles son cruciales; estar preparados con planes alternativos basados en análisis de riesgos e impacto comercial."
    },
    {
        title: "Sostenibilidad",
        description: "Impulsar soluciones que respeten el medio ambiente y sean socialmente responsables, creando valor duradero."
    }
]