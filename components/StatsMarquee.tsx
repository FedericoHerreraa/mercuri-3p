'use client'

import Marquee from "react-fast-marquee"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export const StatsMarquee = () => {
    const { t } = useTranslation()
    
    const statsItems = [
        { numberKey: "stats.item1.number", labelKey: "stats.item1.label" },
        { numberKey: "stats.item2.number", labelKey: "stats.item2.label" },
        { numberKey: "stats.item3.number", labelKey: "stats.item3.label" },
        { numberKey: "stats.item4.number", labelKey: "stats.item4.label" },
        { numberKey: "stats.item5.number", labelKey: "stats.item5.label" },
        { numberKey: "stats.item6.number", labelKey: "stats.item6.label" },
        { numberKey: "stats.item7.number", labelKey: "stats.item7.label" },
        { numberKey: "stats.item8.number", labelKey: "stats.item8.label" },
        { numberKey: "stats.item9.number", labelKey: "stats.item9.label" },
        { numberKey: "stats.item10.number", labelKey: "stats.item10.label" }
    ]
    
    return (
        <section className="py-12 bg-gradient-to-r from-[#0069c0] to-[#137fd9] overflow-hidden">
            <Marquee 
                gradient={false} 
                speed={50}
                direction="right"
                pauseOnHover={true}
                className="text-white"
            >
                {statsItems.map((stat, index) => (
                    <motion.div 
                        key={index} 
                        className="flex items-center mx-12"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold text-[#20f26f]/90 mb-2">
                                {t(stat.numberKey)}
                            </div>
                            <div className="text-white/90 font-medium uppercase tracking-wide text-sm">
                                {t(stat.labelKey)}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Marquee>
        </section>
    )
}
