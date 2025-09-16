'use client'


import { 
    Lightbulb, 
    Target, 
    Users, 
    Zap, 
    Leaf 
} from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"



export const Philosophy = () => {
    const { t } = useTranslation()
    
    const cards = [
        {
            titleKey: "philosophy.innovation.title",
            descriptionKey: "philosophy.innovation.description",
            icon: <Lightbulb className="w-6 h-6 text-[#20f26f]" />
        },
        {
            titleKey: "philosophy.excellence.title",
            descriptionKey: "philosophy.excellence.description",
            icon: <Target className="w-6 h-6 text-[#20f26f]" />
        },
        {
            titleKey: "philosophy.collaboration.title",
            descriptionKey: "philosophy.collaboration.description",
            icon: <Users className="w-6 h-6 text-[#20f26f]" />
        },
        {
            titleKey: "philosophy.adaptability.title",
            descriptionKey: "philosophy.adaptability.description",
            icon: <Zap className="w-6 h-6 text-[#20f26f]" />
        },
        {
            titleKey: "philosophy.sustainability.title",
            descriptionKey: "philosophy.sustainability.description",
            icon: <Leaf className="w-6 h-6 text-[#20f26f]" />
        }
    ]
    
    return (
        <section id="about" className="py-24 bg-gradient-to-r from-[#0069c0] to-[#137fd9]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-slide-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-zinc-200 mb-6">
                        {t('philosophy.title')}
                    </h2>
                    <p className="md:text-xl text-lg text-zinc-200 max-w-3xl mx-auto">
                        {t('philosophy.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {cards.map((card, index) => (
                        <motion.div 
                            key={index} 
                            className="border border-zinc-200/50 rounded-xl p-8 text-center bg-white/10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: "easeOut" 
                            }}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <motion.div 
                                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {card.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold text-zinc-200 mb-4">{t(card.titleKey)}</h3>
                            <p className="text-zinc-200">{t(card.descriptionKey)}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}