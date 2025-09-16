


'use client'

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export const ProposalCTA = () => {
    const { t } = useTranslation()
    
    return (
        <section className="md:py-24 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div 
                        className="flex justify-center mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
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
                                width={170} 
                                height={170}
                                className=""
                            />
                        </motion.div>
                    </motion.div>
                    <motion.h2 
                        className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        {t('proposalCTA.title')}
                    </motion.h2>
                    <motion.p 
                        className="md:text-xl text-lg text-gray-600 mb-8 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        {t('proposalCTA.description')}
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <Link href="/proposal">
                            <motion.button 
                                className="btn-primary cursor-pointer px-8 py-4 text-lg"
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -2,
                                    boxShadow: "0 10px 25px rgba(0, 105, 192, 0.3)",
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('proposalCTA.button1')}
                            </motion.button>
                        </Link>
                        <Link href="/contact-us">
                            <motion.button 
                                className="border-2 border-[#0069c0] box-content rounded-lg bg-white text-black px-8 py-[9] text-lg cursor-pointer"
                                whileHover={{ 
                                    scale: 1.05, 
                                    y: -2,
                                    backgroundColor: "#0069c0",
                                    color: "white",
                                    boxShadow: "0 10px 25px rgba(0, 105, 192, 0.2)",
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {t('proposalCTA.button2')}
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}