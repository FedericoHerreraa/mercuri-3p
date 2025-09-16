'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslation } from 'react-i18next'

export const AboutUsComponent = () => {
    const { t } = useTranslation()
    
    return (
        <>
            <section id="cases" className="py-24 bg-[#0069c0]/10">
                <div className="max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            {t('aboutUs.title')} <span className="text-gradient">{t('aboutUs.titleHighlight')}</span>
                        </h2>
                        <p className="md:text-xl text-lg text-gray-600 max-w-3xl mx-auto">
                            {t('aboutUs.subtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section id="cases" className="pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex md:flex-row flex-col gap-10 mt-40">
                        <div className="md:w-1/2">
                            <Image src="/image-nosotros.png" alt="About Us" width={500} height={500} />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p className="text-lg">
                                    <span className="font-semibold text-[#0069c0]">{t('aboutUs.experience')}</span> {t('aboutUs.experienceDesc')}
                                </p>
                                
                                <p>
                                    {t('aboutUs.paragraph1')}
                                </p>
                                
                                <p>
                                    {t('aboutUs.paragraph2')} <span className="font-medium text-[#0069c0]">{t('aboutUs.institute')}</span>{t('aboutUs.paragraph3')}
                                </p>
                                
                                <p className="text-lg font-medium">
                                    {t('aboutUs.paragraph4')} <span className="text-[#0069c0] decoration-[#20f26f] decoration-2">{t('aboutUs.companyName')}</span>{t('aboutUs.paragraph5')}
                                </p>
                                
                                <p className="text-lg border-l-4 border-[#20f26f] pl-4 italic bg-gray-50 p-4 rounded">
                                    &quot;{t('aboutUs.quote')} <span className="font-semibold">{t('aboutUs.quoteHighlight')}</span>{t('aboutUs.quoteEnd')}&quot;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}