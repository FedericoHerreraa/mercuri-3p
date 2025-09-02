import Link from "next/link";

export const CasesCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Casos de Éxito Reales
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Descubre cómo hemos transformado ideas en productos sustentables exitosos, 
                        ayudando a empresas de diferentes sectores a alcanzar sus objetivos con packaging innovador.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
                            <p className="text-gray-600">Reducción en impacto ambiental</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">150%</div>
                            <p className="text-gray-600">Crecimiento promedio en ventas</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                            <p className="text-gray-600">Proyectos exitosos</p>
                        </div>
                    </div>
                    <Link href="/success-cases">
                        <button className="btn-primary text-lg px-8 py-4">
                            Ver Todos los Casos de Éxito
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
