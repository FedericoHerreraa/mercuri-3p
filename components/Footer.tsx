'use client'

import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { useTranslation } from 'react-i18next'


export const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <div className="font-bold text-2xl mb-4">{t('footer.company')}</div>
                        <p className="text-gray-400 mb-6 max-w-md">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/company/mercuri-3p-consulting/posts/?feedView=all" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors">
                                <Linkedin className="text-zinc-400 hover:text-white"/>
                            </a>
                            <a href="https://www.facebook.com/mercuri.property.project.partners.llc/" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors">
                                <Facebook className="text-zinc-400 hover:text-white"/>
                            </a>
                            <a href="https://www.instagram.com/mercuri3p/" target="_blank" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-colors">
                                <Instagram className="text-zinc-400 hover:text-white"/>
                            </a>    
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">{t('footer.servicesTitle')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><Link href="/detail/optimizacion-costos" className="hover:text-white transition-colors">{t('footer.costOptimization')}</Link></li>
                            <li><Link href="/detail/sustentabilidad" className="hover:text-white transition-colors">{t('footer.sustentability')}</Link></li>
                            <li><Link href="/detail/gestion-proyectos" className="hover:text-white transition-colors">{t('footer.projectManagement')}</Link></li>
                            <li><Link href="/detail/capacitacion-gestion-talento" className="hover:text-white transition-colors">{t('footer.trainingTalent')}</Link></li>
                            <li><Link href="/detail/diseno-producto-packaging" className="hover:text-white transition-colors">{t('footer.designProductPackaging')}</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-lg mb-4">{t('footer.companyTitle')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.aboutUs')}</a></li>
                            <li><Link href="/#about" className="hover:text-white transition-colors">{t('footer.ourApproach')}</Link></li>
                            <li><a href="/success-cases" className="hover:text-white transition-colors">{t('footer.successCases')}</a></li>
                            <li><a href="/contact-us" className="hover:text-white transition-colors">{t('footer.contact')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    )
}