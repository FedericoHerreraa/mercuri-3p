



export const Landing = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 gradient-subtle"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#20f26f]/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#20f26f]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in">
                    <h1 className="text-zinc-900 text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Desarrollamos Productos
                        <span className="bg-gradient-to-r from-[#2196f3] to-[#0096ff] bg-clip-text text-transparent block mt-2"> Sustentables con Propósito</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        En MERCURI 3P impulsamos el desarrollo de productos con propósito, combinando innovación, sustentabilidad y eficiencia. Nos especializamos en packaging como herramienta de diferenciación.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <button className="btn-primary">Comenzar tu Proyecto</button>
                        <button className="">Conocer Nuestro Enfoque</button>
                    </div>
                </div>
            </div>
        </section>
    )
}