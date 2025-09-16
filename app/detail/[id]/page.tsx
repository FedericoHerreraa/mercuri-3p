
'use client'

import { getServiceById } from "@/types/services";
import { Footer } from "@/components/Footer";
import { ContactCTA } from "@/components/ContactCTA";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";

export default function Detail() {
    const { t } = useTranslation()
    const params = useParams()
    const id = params.id as string
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
                            {t('serviceDetail.backToServices')}
                        </Link>
                        <div className="text-center mb-8">

                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                                </svg>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                {t(`services.${service.id}.title`)}
                            </h1>
                            <p className="md:text-xl text-lg text-gray-600 max-w-3xl mx-auto">
                                {t(`services.${service.id}.fullDescription`)}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-12">

                            <div className="lg:col-span-2 space-y-12">

                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('serviceDetail.keyBenefits')}</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {Array.from({ length: 6 }, (_, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-700">{t(`benefits.${service.id}.${index + 1}`)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('serviceDetail.ourProcess')}</h2>
                                    <div className="space-y-4">
                                        {Array.from({ length: 6 }, (_, index) => (
                                            <div key={index} className="flex items-start space-x-4">
                                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                                                </div>
                                                <p className="text-gray-700 pt-1">{t(`process.${service.id}.${index + 1}`)}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8">

                                <div className="card p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('serviceDetail.serviceInfo')}</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-sm font-medium text-gray-500 mb-2">{t('serviceDetail.mainDeliverables')}</p>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                {Array.from({ length: 3 }, (_, index) => (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <span className="text-blue-600 mt-1">•</span>
                                                        <span>{t(`deliverables.${service.id}.${index + 1}`)}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <Link href="/contact-us">
                                        <button className="btn-primary w-full mt-6">
                                            {t('serviceDetail.requestQuote')}
                                        </button>
                                    </Link>
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