'use client'

import { useState } from 'react'
import { Linkedin, Facebook, Phone, Mail, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
    const { t } = useTranslation()
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        service: "",
        message: "",
    })

    const cleanFormData = () => {
        setFormData({
            name: "",
            email: "",
            company: "",
            service: "",
            message: "",
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                toast.error(t("contact.toast.error"));
                throw new Error("Failed to send email");
            }
            const data = await response.json();
            toast.success(t("contact.toast.success"));
            console.log(data);
            cleanFormData();
        } catch (error) {
            toast.error(t("contact.toast.error"));
            console.error(error);
        } finally {
            setIsLoading(false);
            cleanFormData();
        }
    }

    return (
        <section id="contact" className="py-24 gradient-subtle mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 animate-slide-up">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {t('contact.title')}
                            <span className="block mt-2 text-xl font-normal text-gray-600">
                                {t('contact.subtitle')}
                            </span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('contact.sectionTitle')}</h3>
                                <p className="text-gray-600 mb-6">
                                    {t('contact.description')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <Mail className="w-6 h-6 text-[#0069c0]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{t('contact.writeUs')}</p>
                                        <p className="text-gray-600">{t('contact.email')}</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <Phone className="w-6 h-6 text-[#0069c0]" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">{t('contact.callUs')}</p>
                                        <p className="text-gray-600">{t('contact.phone')}</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <Linkedin className="w-6 h-6 text-[#0069c0]" />
                                    </div>
                                    <a href="https://www.linkedin.com/company/mercuri-3p-consulting/posts/?feedView=all" target="_blank">
                                        <p className="font-semibold text-gray-900 hover:text-[#0069c0] hover:underline">{t('contact.visitUs')}</p>
                                        <p className="text-gray-600">{t('contact.linkedinDesc')}</p>
                                    </a>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-[#0069c0]/10 rounded-lg flex items-center justify-center mr-4">
                                        <Facebook className="w-6 h-6 text-[#0069c0]" />
                                    </div>
                                    <a href="https://www.facebook.com/mercuri3p" target="_blank">
                                        <p className="font-semibold text-gray-900 hover:text-[#0069c0] hover:underline">{t('contact.facebook')}</p>
                                        <p className="text-gray-600">{t('contact.facebookDesc')}</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form className="p-8 bg-white rounded-lg shadow-md" onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name')}</label>
                                        <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" id="name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors" placeholder={t('contact.form.namePlaceholder')} />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                                        <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" id="email" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors" placeholder={t('contact.form.emailPlaceholder')} />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.company')}</label>
                                    <input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} type="text" id="company" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors" placeholder={t('contact.form.companyPlaceholder')} />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.service')}</label>
                                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} id="service" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors">
                                        <option>{t('contact.form.selectService')}</option>
                                        <option>{t('contact.form.service1')}</option>
                                        <option>{t('contact.form.service2')}</option>
                                        <option>{t('contact.form.service3')}</option>
                                        <option>{t('contact.form.service4')}</option>
                                        <option>{t('contact.form.service5')}</option>
                                        <option>{t('contact.form.service6')}</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
                                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} id="message" rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0069c0] focus:border-transparent transition-colors" placeholder={t('contact.form.messagePlaceholder')}></textarea>
                                </div>

                                <button type="submit" className="btn-primary w-full cursor-pointer text-center" disabled={isLoading}>{isLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : t('contact.form.send')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}