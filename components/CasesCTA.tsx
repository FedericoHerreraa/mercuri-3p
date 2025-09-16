'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const CasesCTA = () => {
    const { t } = useTranslation()
    
    const statsData = [
        { 
            numberKey: "casesCTA.stat1.number", 
            descriptionKey: "casesCTA.stat1.description" 
        },
        { 
            numberKey: "casesCTA.stat2.number", 
            descriptionKey: "casesCTA.stat2.description" 
        },
        { 
            numberKey: "casesCTA.stat3.number", 
            descriptionKey: "casesCTA.stat3.description" 
        }
    ]
    
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div 
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('casesCTA.title')}
                    </motion.h2>
                    <motion.p 
                        className="md:text-xl text-lg text-gray-600 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {t('casesCTA.description')}
                    </motion.p>
                    <motion.div 
                        className="flex gap-10 justify-around mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {statsData.map((stat, index) => (
                            <motion.div 
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.8 + (index * 0.1),
                                    ease: "easeOut"
                                }}
                                whileHover={{ 
                                    scale: 1.1,
                                    y: -5,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className="md:text-3xl text-2xl font-bold text-[#0069c0] mb-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 1 + (index * 0.1) }}
                                >
                                    {t(stat.numberKey)}
                                </motion.div>
                                <p className="text-gray-600 md:text-base text-sm">{t(stat.descriptionKey)}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        <Link href="/success-cases">
                            <motion.button 
                                className="btn-primary cursor-pointer text-lg px-8 py-4"
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -3,
                                    boxShadow: "0 15px 30px rgba(0, 105, 192, 0.4)",
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('casesCTA.button')}
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
