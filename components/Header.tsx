
'use client'

import Link from "next/link"
import Image from "next/image"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useTranslation } from "react-i18next"

export const Header = () => {
    const { t } = useTranslation()
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-26">
                    <Link href="/">
                        <Image src="/logo-sin-bg.png" alt="Mercuri3P" width={120} height={120} />
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-[#0069c0] transition-colors">{t('nav.home')}</Link>
                        <Link href="/#services" className="text-gray-600 hover:text-[#0069c0] transition-colors">{t('nav.services')}</Link>
                        <Link href="/proposal" className="text-gray-600 hover:text-[#0069c0] transition-colors">{t('nav.proposal')}</Link>
                        <Link href="/about-us" className="text-gray-600 hover:text-[#0069c0] transition-colors">{t('nav.about')}</Link>
                        <Link href="/success-cases" className="text-gray-600 hover:text-[#0069c0] transition-colors">{t('nav.cases')}</Link>
                        <Link href="/contact-us" className="text-gray-600 hover:text-[#0069c0] transition-colors">{t('nav.contact')}</Link>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    )
}