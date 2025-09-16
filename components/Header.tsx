
'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useTranslation } from "react-i18next"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"

export const Header = () => {
    const { t } = useTranslation()
    const [open, setOpen] = useState(false)

    const handleClose = () => setOpen(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center md:h-26 h-22">
                    <Link href="/">
                        <Image src="/logo-sin-bg.png" alt="Mercuri3P" width={120} height={120} className="md:w-30 md:h-30 w-25 h-25" />
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
                    <div className="md:hidden block">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger>
                                <MenuIcon className="w-6 h-6 text-[#0069c0]" />
                            </SheetTrigger>
                            <SheetContent className="w-2/4" side="right" onInteractOutside={handleClose}>
                                <SheetHeader>
                                    <SheetTitle>Mercuri3P</SheetTitle>
                                    <SheetDescription className="flex flex-col gap-4 w-fit mt-7">
                                        <Link href="/" onClick={handleClose} className="text-gray-800 hover:text-[#0069c0] transition-colors">{t('nav.home')}</Link>
                                        <Link href="/#services" onClick={handleClose} className="text-gray-800 hover:text-[#0069c0] transition-colors">{t('nav.services')}</Link>
                                        <Link href="/proposal" onClick={handleClose} className="text-gray-800 hover:text-[#0069c0] transition-colors">{t('nav.proposal')}</Link>
                                        <Link href="/about-us" onClick={handleClose} className="text-gray-800 hover:text-[#0069c0] transition-colors">{t('nav.about')}</Link>
                                        <Link href="/success-cases" onClick={handleClose} className="text-gray-800 hover:text-[#0069c0] transition-colors">{t('nav.cases')}</Link>
                                        <Link href="/contact-us" onClick={handleClose} className="text-gray-800 hover:text-[#0069c0] transition-colors">{t('nav.contact')}</Link>
                                        <div className="w-fit">
                                            <LanguageSwitcher />
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    )
}