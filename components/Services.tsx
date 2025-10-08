'use client'

import Link from "next/link";
import { services } from "@/types/services";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const Services = () => {
    const { t } = useTranslation()
    
    return (
        <section id="services" className="py-24 gradient-subtle w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="absolute hidden md:block -top-32 -right-32 w-80 h-80 bg-[#20f26f]/15 rounded-full blur-3xl animate-float"></div>
                <div className="absolute hidden md:block top-1/4 -left-40 w-64 h-64 bg-[#3df883]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute hidden md:block bottom-1/4 right-1/6 w-72 h-72 bg-[#20f26f]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute hidden md:block -bottom-20 -left-20 w-96 h-96 bg-[#3df883]/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t('services.titleServices')}
                    </h2>
                    <p className="md:text-xl text-lg text-gray-600 max-w-3xl mx-auto">
                        {t('services.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link key={service.id} href={`/detail/${service.id}`}>
                            <motion.div
                                className="card cursor-pointer group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    y: -8,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <Image src={service.image ?? ""} alt={service.title} width={450} height={100} className="rounded-t-lg" />
                                <div className="p-8">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#0069c0] transition-colors break-words leading-tight">
                                        {t(`services.${service.id}.title`)}
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        {t(`services.${service.id}.shortDescription`)}
                                    </p>
                                    <ul className="text-sm text-gray-500 space-y-2 mb-6">
                                        {Array.from({ length: 4 }, (_, index) => (
                                            <li key={index}>• {t(`benefits.${service.id}.${index + 1}`)}</li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center text-[#20f26f] font-medium group-hover:text-[#3df883] transition-colors">
                                        <span>{t('services.knowMore')}</span>
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}