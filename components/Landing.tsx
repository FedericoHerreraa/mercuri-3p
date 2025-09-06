



export const Landing = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 gradient-subtle"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-[#20f26f]/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3df883]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in">
                    <h1 className="text-zinc-900 text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Desarrollamos 
                        <span className="bg-gradient-to-r from-[#0069c0] to-[#2196f3] bg-clip-text text-transparent block mt-2"> Productos con Propósito</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                        En <strong>MERCURI 3P</strong> combinamos innovación, sustentabilidad y eficiencia para transformar ideas en productos exitosos. Nos especializamos en el desarrollo de productos E2E con un enfoque preciso en <strong>packaging</strong>, fusionando los recursos internos de tu empresa con nuestra expertise en diseño, manufactura y sustentabilidad.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <a href="#services" className="btn-primary cursor-pointer">Comenzar tu Proyecto</a>
                        <a href="#about" className="cursor-pointer">Conocer Nuestro Enfoque</a>
                    </div>
                </div>
            </div>
        </section>
    )
}