


'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import image1 from '../public/success-cases/rollon.png';
import image2 from '../public/success-cases/axe.png';
import image3 from '../public/success-cases/pote.png';
import image4 from '../public/success-cases/steps.jpg';
import image5 from '../public/success-cases/rexona.png';
import image6 from '../public/success-cases/talco.png';
import image7 from '../public/success-cases/Picture1.jpg';
import image8 from '../public/success-cases/Picture7.png';

const successCasesData = [
    {
        id: 1,
        titleKey: "cases.rollOn.title",
        productImage: image1,
        challengeKey: "cases.rollOn.challenge",
        resultKey: "cases.rollOn.result",
        layout: "left"
    },
    {
        id: 2,
        titleKey: "cases.aerosolAxe.title",
        productImage: image2,
        challengeKey: "cases.aerosolAxe.challenge",
        resultKey: "cases.aerosolAxe.result",
        layout: "right"
    },
    {
        id: 3,
        titleKey: "cases.poteRexona.title",
        productImage: image3,
        challengeKey: "cases.poteRexona.challenge",
        resultKey: "cases.poteRexona.result",
        layout: "left"
    },
    {
        id: 4,
        titleKey: "cases.srp.title",
        productImage: image4,
        challengeKey: "cases.srp.challenge",
        resultKey: "cases.srp.result",
        layout: "full"
    },
    {
        id: 5,
        titleKey: "cases.pcrRfm.title",
        productImage: image5,
        challengeKey: "cases.pcrRfm.challenge",
        resultKey: "cases.pcrRfm.result",
        layout: "right"
    },
    {
        id: 6,
        titleKey: "cases.pcrBottle.title",
        productImage: image6,
        challengeKey: "cases.pcrBottle.challenge",
        resultKey: "cases.pcrBottle.result",
        layout: "left"
    },
    {
        id: 7,
        titleKey: "cases.training.title",
        productImage: [image7, image8],
        challengeKey: "cases.training.challenge",
        resultKey: "cases.training.result",
        layout: "left"
    }
];

export const Cases = () => {
    const { t } = useTranslation()
    
    return (
        <section id="cases" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 mt-20 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        {t('cases.title')} <span className="text-gradient">{t('cases.titleHighlight')}</span>
                    </h2>
                    <p className="md:text-xl text-lg text-gray-600 max-w-3xl mx-auto">
                        {t('cases.subtitle')}
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {successCasesData.map((caseItem, index) => (
                        <motion.div
                            key={caseItem.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`${caseItem.layout === 'full' ? '' : 'grid lg:grid-cols-2 gap-12 items-center border-b border-gray-200 pb-12'}`}
                        >
                            {caseItem.layout === 'full' ? (
                                // Layout especial para SRP
                                <div className="text-center">
                                    <div className="mb-8">
                                        <div className="w-20 h-1 bg-[#20f26f] mx-auto mb-6"></div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                                            {t(caseItem.titleKey)}
                                        </h3>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-12 mb-12">
                                        <div className="text-left">
                                            <h4 className="md:text-2xl text-xl font-bold text-gray-900 mb-4">{t('cases.challenge')}</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {t(caseItem.challengeKey)}
                                            </p>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="md:text-2xl text-xl font-bold text-gray-900 mb-4">{t('cases.result')}</h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {t(caseItem.resultKey)}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="w-full max-w-4xl mx-auto">
                                        {Array.isArray(caseItem.productImage) ? (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {caseItem.productImage.map((image, index) => (
                                                    <Image
                                                        key={index}
                                                        src={image}
                                                        alt={t(caseItem.titleKey)}
                                                        width={800}
                                                        height={400}
                                                        className="w-full h-auto object-contain rounded-lg"
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            <Image
                                                src={caseItem.productImage}
                                                alt={t(caseItem.titleKey)}
                                                width={800}
                                                height={400}
                                                className="w-full h-auto object-contain"
                                            />
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div className={`${caseItem.layout === 'right' ? 'lg:order-2' : ''}`}>
                                        <div className="w-20 h-1 bg-[#20f26f]/50 mb-6"></div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                                            {t(caseItem.titleKey)}
                                        </h3>

                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('cases.challenge')}</h4>
                                                <p className="text-gray-700 leading-relaxed text-lg">
                                                    {t(caseItem.challengeKey)}
                                                </p>
                                            </div>

                                            <div>
                                                <h4 className="text-2xl font-bold text-gray-900 mb-4">{t('cases.result')}</h4>
                                                <p className="text-gray-700 leading-relaxed text-lg">
                                                    {t(caseItem.resultKey)}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`${caseItem.layout === 'right' ? 'lg:order-1' : ''} flex justify-center items-center`}>
                                        {Array.isArray(caseItem.productImage) ? (
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
                                                {caseItem.productImage.map((image, index) => (
                                                    <Image
                                                        key={index}
                                                        src={image}
                                                        alt={t(caseItem.titleKey)}
                                                        width={400}
                                                        height={500}
                                                        className="w-full h-auto object-contain rounded-2xl"
                                                    />
                                                ))}
                                            </div>
                                        ) : (
                                            <Image
                                                src={caseItem.productImage}
                                                alt={t(caseItem.titleKey)}
                                                width={400}
                                                height={500}
                                                className="w-full max-w-sm h-auto object-contain rounded-2xl"
                                            />
                                        )}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}