'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone } from "lucide-react";

export const ContactCTA = () => {
    const { t } = useTranslation()
    
    const contactInfo = [
        {
            labelKey: "contactCTA.email.label",
            valueKey: "mercuri3p@outlook.com",
            href: "mailto:mercuri3p@outlook.com",
            icon: Mail
        },
        {
            labelKey: "contactCTA.phone.label",
            valueKey: "+54 9 11 7370 4513 (Whatsapp)",
            href: "tel:+5491173704513",
            icon: Phone
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
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t('contactCTA.title')}
                    </motion.h2>
                    <motion.p 
                        className="md:text-xl text-lg text-gray-600 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {t('contactCTA.description')}
                    </motion.p>
                    <motion.div 
                        className="flex flex-col md:flex-row gap-4 justify-center md:items-center mb-8"
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
                                <a href={contact.href}>
                                    <motion.div 
                                        className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4"
                                        whileHover={{ 
                                            backgroundColor: "rgba(0, 105, 192, 0.2)",
                                            scale: 1.1,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        
                                            <div className="w-6 h-6 text-[#0069c0]">
                                                <contact.icon />
                                            </div>
                                    
                                    </motion.div>
                                </a>
                                <div className="text-left">
                                    <a href={contact.href}>
                                        <p className="font-semibold text-gray-900">{t(contact.labelKey)}</p>
                                    </a>
                                    <a href={contact.href}>
                                        <p className="text-gray-600">{t(contact.valueKey)}</p>
                                    </a>
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
