'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import AnimatedBackground from "./AnimatedBG"

export const ProposalComponent = () => {
    const { t, i18n } = useTranslation()
    const currentLanguage = i18n.language

    return (
        <>
            <section className="py-32 text-white bg-[#0069c0]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div 
                            className="flex justify-center mb-8"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <motion.div
                                whileHover={{ 
                                    scale: 1.1, 
                                    rotate: 5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <Image 
                                    src="/logo-sin-bg.png" 
                                    alt="Mercuri3P" 
                                    width={200} 
                                    height={200}
                                    className=""
                                />
                            </motion.div>
                        </motion.div>
                        <motion.h1 
                            className="text-4xl md:text-7xl text-gray-700 font-bold mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {t('proposal.title')}
                        </motion.h1>
                        <motion.p 
                            className="md:text-xl text-lg max-w-4xl mx-auto mb-12 text-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            {t('proposal.description')}
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {t('proposal.methodology.title')}
                        </motion.h2>
                        <motion.p 
                            className="md:text-xl text-lg text-gray-600 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {t('proposal.methodology.description')}
                        </motion.p>
                    </motion.div>

                    <div className="relative max-w-7xl mx-auto">
                        <div className="flex md:flex-row flex-col">
                            {[1,2,3,4,5].map((phaseNum, index) => {
                                const phase = {
                                    title: t(`proposal.methodology.phase${phaseNum}.title`),
                                    description: t(`proposal.methodology.phase${phaseNum}.description`),
                                    activities: [
                                        t(`proposal.methodology.phase${phaseNum}.activity1`),
                                        t(`proposal.methodology.phase${phaseNum}.activity2`),
                                        t(`proposal.methodology.phase${phaseNum}.activity3`),
                                        t(`proposal.methodology.phase${phaseNum}.activity4`)
                                    ]
                                }
                                const colors = [
                                    { bg: 'from-[#0069c0]/70 to-[#0056a3]', text: 'text-white', bullet: 'bg-white' },
                                    { bg: 'from-[#20f26f]/50 to-[#3df883]', text: 'text-gray-900', bullet: 'bg-gray-900' },
                                    { bg: 'from-[#0069c0]/80 to-[#0056a3]/80', text: 'text-white', bullet: 'bg-white' },
                                    { bg: 'from-[#20f26f]/80 to-[#3df883]/80', text: 'text-gray-900', bullet: 'bg-gray-900' },
                                    { bg: 'from-[#0069c0]/30 to-[#20f26f]/40', text: 'text-gray-800', bullet: 'bg-gray-800' }
                                ];
                                const currentColor = colors[index];
                                
                                return (
                                    <motion.div
                                        key={index}
                                        className="relative md:flex-1 md:basis-1/5"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.6, 
                                            delay: index * 0.1,
                                            ease: "easeOut" 
                                        }}
                                        whileHover={{ 
                                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <div className={`bg-gradient-to-br ${currentColor.bg} p-6 rounded-md shadow-2xl relative z-10 min-h-[420px] flex flex-col justify-between`}>
                                            <div className="absolute top-4 right-4 text-[7rem] font-bold text-white/50">
                                                {index + 1}
                                            </div>
                                            
                                            <div className="mt-auto">
                                                <h3 className={`text-xl font-semibold ${currentColor.text} mb-3 leading-tight`}>
                                                    {phase.title}
                                                </h3>
                                                <p className={`${currentColor.text.includes('white') ? 'text-white/90' : 'text-gray-700'} text-sm mb-4 leading-relaxed`}>
                                                    {phase.description}
                                                </p>
                                            </div>
                                            
                                            {/* <ul className="text-xs space-y-2">
                                                {phase.activities.map((activity, actIndex) => (
                                                    <motion.li 
                                                        key={actIndex} 
                                                        className="flex items-start"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ 
                                                            duration: 0.4, 
                                                            delay: 0.6 + (index * 0.1) + (actIndex * 0.05)
                                                        }}
                                                    >
                                                        <span className={`w-1.5 h-1.5 ${currentColor.bullet} rounded-full mt-1.5 mr-2 flex-shrink-0`}></span>
                                                        <span className={`${currentColor.text.includes('white') ? 'text-white/80' : 'text-gray-600'}`}>
                                                            {activity}
                                                        </span>
                                                    </motion.li>
                                                ))}
                                            </ul> */}
                                        </div>
                                        
                                        {index < 4 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                                                <div className={`w-6 h-6 bg-gradient-to-r ${currentColor.bg} rotate-45 border-r-2 border-b-2 border-white/50`}></div>
                                            </div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-r from-[#20f26f]/10 to-[#3df883]/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold text-[#0069c0] mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {t('proposal.whyConvenient.title')}
                        </motion.h2>
                        <motion.p 
                            className="text-xl text-black max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {t('proposal.whyConvenient.description')}
                        </motion.p>
                    </motion.div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {[1,2,3].map((itemNum, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white/90 backdrop-blur-sm rounded-2xl border-l-6 border-[#0069c0] p-8 shadow-xl"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.1,
                                    ease: "easeOut" 
                                }}
                                whileHover={{ 
                                    y: -5,
                                    boxShadow: "0 25px 50px -12px rgba(0, 105, 192, 0.3)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className="flex items-center mb-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                                >
                                    <h3 className="text-2xl font-bold text-[#0069c0]">{t(`proposal.convenience.${itemNum}.title`)}</h3>
                                </motion.div>
                                <motion.p 
                                    className="text-black leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.8 + (index * 0.1) }}
                                >
                                    {t(`proposal.convenience.${itemNum}.description`)}
                                </motion.p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 gradient-subtle">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {t('proposal.whyChooseUs.title')}
                        </motion.h2>
                        <motion.p 
                            className="text-xl text-gray-600 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {t('proposal.whyChooseUs.description')}
                        </motion.p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <div className="space-y-8">
                                {[1,2,3,4].map((benefitNum, index) => {
                                    const icons = [
                                        "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                                        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z",
                                        "M13 10V3L4 14h7v7l9-11h-7z",
                                        "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    ]
                                    return (
                                    <motion.div 
                                        key={index} 
                                        className="flex items-start space-x-4"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ 
                                            duration: 0.4, 
                                            delay: 0.8 + (index * 0.1)
                                        }}
                                        whileHover={{ 
                                            x: 10,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <motion.div 
                                            className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center flex-shrink-0"
                                            whileHover={{ 
                                                scale: 1.1,
                                                backgroundColor: "rgba(0, 105, 192, 0.2)",
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <svg className="w-6 h-6 text-[#0069c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icons[index]} />
                                            </svg>
                                        </motion.div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{t(`proposal.benefits.${benefitNum}.title`)}</h3>
                                            <p className="text-gray-600">{t(`proposal.benefits.${benefitNum}.description`)}</p>
                                        </div>
                                    </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                        <motion.div 
                            className="relative"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.div 
                                className="bg-white p-8 rounded-2xl shadow-xl"
                                whileHover={{ 
                                    y: -5,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.h3 
                                    className="text-2xl font-bold text-gray-900 mb-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                >
                                    {t('proposal.guaranteedResults.title')}
                                </motion.h3>
                                <div className="space-y-4">
                                    {[1,2,3,4].map((statNum, index) => (
                                        <motion.div 
                                            key={index} 
                                            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: 1 + (index * 0.1)
                                            }}
                                            whileHover={{ 
                                                scale: 1.02,
                                                backgroundColor: "rgba(32, 242, 111, 0.1)",
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <span className="text-gray-600">{t(`proposal.stats.${statNum}.label`)}</span>
                                            <motion.span 
                                                className="text-2xl font-bold text-[#20f26f]"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                                            >
                                                {t(`proposal.stats.${statNum}.value`)}
                                            </motion.span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Cliente Objetivo */}
            <section className="py-24 bg-gradient-to-r from-[#0069c0]/90 to-[#137fd9]/90 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2 
                            className="text-4xl md:text-5xl font-bold mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {t('proposal.targetClient.title')}
                        </motion.h2>
                        <motion.p 
                            className="text-xl text-white/90 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {t('proposal.targetClient.description')}
                        </motion.p>
                    </motion.div>

                    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        {[1,2,3,4,5,6].map((clientNum, index) => (
                            <motion.div 
                                key={index} 
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: 0.6 + (index * 0.1),
                                    ease: "easeOut" 
                                }}
                                whileHover={{ 
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className="flex items-center mb-4"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                                >
                                    <h3 className="text-xl font-semibold text-white">{t(`proposal.targetClients.${clientNum}`)}</h3>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proceso de Trabajo */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {t('proposal.howWeWork.title')}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('proposal.howWeWork.description')}
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
                        <div className="space-y-12">
                            {[1,2,3,4,5].map((timelineNum, index) => (
                                <div key={index} className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                        <div className="card p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="w-10 h-10 bg-[#0069c0] rounded-full flex items-center justify-center mr-4">
                                                    <span className="text-white font-bold">{index + 1}</span>
                                                </div>
                                                <h3 className="text-xl font-semibold text-gray-900">{t(`proposal.timeline.${timelineNum}.title`)}</h3>
                                            </div>
                                            <p className="text-gray-600 mb-4">{t(`proposal.timeline.${timelineNum}.description`)}</p>
                                            <div className="text-sm text-[#0069c0] font-medium">
                                                {currentLanguage === 'es' ? 'Duración: ' : 'Duration: '} {t(`proposal.timeline.${timelineNum}.duration`)}
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
                <motion.div 
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2 
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('proposal.finalCTA.title')}
                    </motion.h2>
                    <motion.p 
                        className="text-xl mb-8 text-white/90"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {t('proposal.finalCTA.description')}
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <Link href="/contact-us">
                            <motion.button 
                                className="bg-white text-[#0069c0] px-8 py-4 rounded-lg font-semibold text-lg"
                                whileHover={{ 
                                    scale: 1.05,
                                    y: -2,
                                    boxShadow: "0 15px 30px rgba(255, 255, 255, 0.3)",
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('proposal.finalCTA.button1')}
                            </motion.button>
                        </Link>
                        <Link href="/success-cases">
                            <motion.button 
                                className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg"
                                whileHover={{ 
                                    backgroundColor: "white",
                                    color: "#0069c0",
                                    scale: 1.05,
                                    y: -2,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('proposal.finalCTA.button2')}
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}
