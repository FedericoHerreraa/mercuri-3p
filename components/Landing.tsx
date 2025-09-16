'use client'


import Marquee from "react-fast-marquee"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export const Landing = () => {
    const { t } = useTranslation()

    const expertiseItems = [
        "hero.expertise1",
        "hero.expertise2",
        "hero.expertise3", 
        "hero.expertise4",
        "hero.expertise5",
        "hero.expertise6",
        "hero.expertise7",
        "hero.expertise8",
        "hero.expertise9",
    ]

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 gradient-subtle"></div>

            <div className="absolute top-20 right-20 w-72 h-72 bg-[#20f26f]/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-0 left-140 w-72 h-72 bg-[#20f26f]/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#3df883]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.h1 
                        className="text-zinc-900 text-4xl md:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {t('hero.title')}
                        <span className="bg-gradient-to-r from-[#0069c0] to-[#2196f3] bg-clip-text text-transparent mt-2"> {t('hero.title2')}</span>
                    </motion.h1>
                    <motion.p 
                        className="md:text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {t('hero.description1')} <span className="font-bold">{t('hero.descriptionBold1')}</span>, {t('hero.description2')} <span className="font-bold">{t('hero.descriptionBold2')}</span> {t('hero.description3')}
                    </motion.p>
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#services" className="btn-primary cursor-pointer">{t('hero.button1')}</a>
                        <a href="#about" className="cursor-pointer">{t('hero.button2')}</a>
                    </motion.div>
                </motion.div>
            </div>
            
            <div className="absolute bottom-8 left-0 right-0 z-20">
                <Marquee 
                    gradient={false} 
                    speed={100}
                    className="bg-[#0069c0]/90 backdrop-blur-sm md:py-4 py-2"
                >
                    {expertiseItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-center mx-8 text-white font-medium">
                            <span className="w-2 h-2 bg-[#20f26f] rounded-full md:mr-3 mr-2"></span>
                            {t(item)}
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    )
}

