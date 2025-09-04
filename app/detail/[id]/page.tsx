
import { getServiceById, getAllServiceIds } from "@/types/services";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import Link from "next/link";
import { notFound } from "next/navigation";

interface DetailPageProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    const serviceIds = getAllServiceIds();
    return serviceIds.map((id) => ({
        id: id,
    }));
}

export default async function Detail({ params }: DetailPageProps) {
    const { id } = await params;
    const service = getServiceById(id);

    if (!service) {
        notFound();
    }

    return (
        <>
            <div className="min-h-screen bg-white pt-20">
                <section className="py-16 gradient-subtle">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link href="/#services" className="inline-flex items-center hover:px-2 transition-all duration-300 text-blue-600 hover:text-blue-800 mb-4">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Volver a Servicios
                        </Link>
                        <div className="text-center mb-8">

                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                                </svg>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                {service.title}
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                {service.fullDescription}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-12">

                            <div className="lg:col-span-2 space-y-12">

                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Beneficios Clave</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {service.benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-700">{benefit}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Proceso</h2>
                                    <div className="space-y-4">
                                        {service.process.map((step, index) => (
                                            <div key={index} className="flex items-start space-x-4">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                                                </div>
                                                <p className="text-gray-700 pt-1">{step}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {service.caseStudy && (
                                    <div className="card p-8">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Caso de Éxito</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cliente:</h3>
                                                <p className="text-gray-700">{service.caseStudy.client}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Desafío:</h3>
                                                <p className="text-gray-700">{service.caseStudy.challenge}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Solución:</h3>
                                                <p className="text-gray-700">{service.caseStudy.solution}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultados:</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {service.caseStudy.results.map((result, index) => (
                                                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                                                            {result}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-8">

                                <div className="card p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Información del Servicio</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 mb-1">Duración Estimada</p>
                                            <p className="text-gray-900">{service.duration}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 mb-2">Entregables Principales</p>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                {service.deliverables.slice(0, 3).map((deliverable, index) => (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <span className="text-blue-600 mt-1">•</span>
                                                        <span>{deliverable}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <Link href="/contact-us">
                                        <button className="btn-primary w-full mt-6">
                                            Solicitar Cotización
                                        </button>
                                    </Link>
                                </div>

                                <div className="card p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Todos los Entregables</h3>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        {service.deliverables.map((deliverable, index) => (
                                            <li key={index} className="flex items-start space-x-2">
                                                <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span>{deliverable}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <ContactCTA />
            <Footer />
        </>
    );
}