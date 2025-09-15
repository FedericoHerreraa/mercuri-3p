'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [currentLang, setCurrentLang] = useState(i18n.language)

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLang(lng)
      console.log('Language changed to:', lng)
    }

    i18n.on('languageChanged', handleLanguageChange)
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [i18n])

  const toggleLanguage = async () => {
    const newLang = currentLang === 'es' ? 'en' : 'es'
    console.log('Changing language from', currentLang, 'to', newLang)
    await i18n.changeLanguage(newLang)
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-[#0069c0] transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="text-sm font-medium">
        {currentLang === 'es' ? '🇦🇷 ES' : '🇺🇸 EN'}
      </span>
    </motion.button>
  )
}
