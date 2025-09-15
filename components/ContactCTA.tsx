'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const ContactCTA = () => {
    const { t } = useTranslation()
    
    const contactInfo = [
        {
            labelKey: "contactCTA.email.label",
            valueKey: "contactCTA.email.value",
            icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        },
        {
            labelKey: "contactCTA.phone.label",
            valueKey: "contactCTA.phone.value",
            icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        }
    ]
    
    return (
        <section className="py-24 gradient-subtle">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div 
                    className="max-w-3xl mx-auto"
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
                        {t('contactCTA.title')}
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {t('contactCTA.description')}
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {contactInfo.map((contact, index) => (
                            <motion.div 
                                key={index}
                                className="flex items-center"
                                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: 0.8 + (index * 0.1),
                                    ease: "easeOut"
                                }}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4"
                                    whileHover={{ 
                                        backgroundColor: "rgba(0, 105, 192, 0.2)",
                                        scale: 1.1,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <svg className="w-6 h-6 text-[#0069c0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={contact.icon} />
                                    </svg>
                                </motion.div>
                                <div className="text-left">
                                    <p className="font-semibold text-gray-900">{t(contact.labelKey)}</p>
                                    <p className="text-gray-600">{t(contact.valueKey)}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                    >
                        <Link href="/contact-us">
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
                                {t('contactCTA.button')}
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
