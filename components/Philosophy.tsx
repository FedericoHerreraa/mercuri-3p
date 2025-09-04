




export const Philosophy = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Nuestra Filosofía
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Creemos en el desarrollo de productos con propósito, fusionando innovación, sustentabilidad y eficiencia para crear valor duradero.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {cards.map((card, index) => (
                        <div key={index} className="card p-8 text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        description: "Desarrollo de soluciones creativas que transforman ideas en productos tangibles con impacto real en el mercado."
    },
    {
        title: "Sustentabilidad",
        description: "Compromiso con el medio ambiente a través de materiales y procesos que minimizan el impacto ecológico."
    },
    {
        title: "Eficiencia",
        description: "Optimización de recursos y procesos para maximizar el valor y minimizar los costos en cada proyecto."
    },
    {
        title: "Resultados Rigurosos",
        description: "Enfoque basado en datos que garantiza la entrega de valor tangible y el crecimiento sostenible del negocio."
    }
]