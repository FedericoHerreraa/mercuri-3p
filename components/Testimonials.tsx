

'use client'

import { Linkedin } from "lucide-react"
import { useTranslation } from "react-i18next"

export const Testimonials = () => {
    const { t } = useTranslation()
    
    return (
        <section className="py-24 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        {t('testimonials.description')}
                    </p>
                    <a 
                        href="https://www.linkedin.com/company/mercuri-3p-consulting/posts/?feedView=all" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-[#0069c0] hover:text-[#0056a3] font-semibold text-lg transition-colors duration-200"
                    >
                        <Linkedin className="w-6 h-6" />
                        {t('testimonials.linkText')}
                    </a>
                </div>
            </div>
        </section>
    )
}