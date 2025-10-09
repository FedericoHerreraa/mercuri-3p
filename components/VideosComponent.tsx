'use client'

import { motion } from "framer-motion"

const videos = [
  {
    id: 1,
    title: "Tu Visión, nuestro liderazgo.",
    title_en: "Your vision, our leadership.",
    description: "Enfócate en la estrategia de tu negocio, nosotros nos ocupamos del resto 🙌 Bienvenidos a MERCURI 3P.",
    description_en: "Focus on your business strategy, we'll handle the rest 🙌 Welcome to MERCURI 3P.",
    video: "/videos/video1.mp4"
  },
  {
    id: 2,
    title: "En MERCURI 3P, somo apasionados por el Packaging!",
    title_en: "At MERCURI 3P, we're passionate about packaging!",
    description: "Estamos convencidos que es un elemento diferenciador, que potencia la elección del consumidor y acelerador de las ventas. Todo esto y más , sin descuidar el impacto al medio ambiente. ♻️",
    description_en: "We believe packaging is a differentiator, that enhances consumer choice and boosts sales. Everything in addition, without neglecting the impact on the environment. ♻️",
    video: "/videos/video2.mp4"
  },
  {
    id: 3,
    title: "¡Sumate a MERCURI 3P y trabajemos juntos por una economía circular! ♻️ 🚀",
    title_en: "Join MERCURI 3P and work together for a circular economy! ♻️ 🚀",
    description: "¿Listo para alinear tu estrategia con la economía circular? Estamos para ayudarte. 🚀",
    description_en: "Ready to align your strategy with the circular economy? We're here to help. 🚀",
    video: "/videos/video3.mp4"
  },
  {
    id: 4,
    title: "Las fragancias mejoradas con Packaging Digital! 🚀",
    title_en: "Enhanced Fragrances with Digital Packaging! 🚀",
    description: "La tecnología del aerosol permite una dosificación exacta de producto , otorgando y aumentando la sensorialidad del mismo, amplificando las credenciales propias de las fragancias y sobre todo generando una aplicación cómoda y efectiva en el usuario. ",
    description_en: "The aerosol technology allows precise product dosing, enhancing the sensory experience and amplifying the fragrance credentials. This leads to a more effective, comfortable application for the consumer.",
    video: "/videos/video4.mp4"
  },
  {
    id: 5,
    title: "¿Listo para transformar tu estrategia de desarrollo de producto?",
    title_en: "Are you ready to transform your product development strategy?",
    description: "Somos Mercuri 3P, bienvenidos!!",
    description_en: "We're Mercuri 3P, welcome!!",
    video: "/videos/video5.mp4"
  },
  {
    id: 6,
    title: "Todo gran crecimiento comienza con un equipo que cree en lo que hace.",
    title_en: "Great growth starts with a team that believes in what they do.",
    description: "En Mercuri 3P, acompañamos a las empresas que entienden que el verdadero salto no está solo en la estrategia, sino en las personas que la hacen posible. Sabemos que formar equipos comprometidos y fortalecer la gestión interna es el camino para alcanzar nuevos niveles de eficiencia y propósito.",
    description_en: "In Mercuri 3P, we partner with companies that understand that true growth isn’t just about strategy; it’s about the people who make it happen. We know that building strong, aligned teams and strengthening internal management is the path to achieving higher efficiency and purpose.",
    video: "/videos/video6.mp4"
  }
]

export const VideosComponent = () => {
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
            Videos <span className="text-gradient">Relevantes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conocenos a través de nuestros videos.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {videos.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex justify-between items-center gap-10 mb-40 ${video.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className="w-1/3">
                <h1 className={`text-3xl font-bold text-gray-900 mb-4 ${video.id % 2 === 0 ? 'text-right' : 'text-left'}`}>{video.title}</h1>
                <p className={`text-gray-600 ${video.id % 2 === 0 ? 'text-right' : 'text-left'}`}>{video.description}</p>
              </div>
              <div className="w-2/3">
                <video
                  src={video.video}
                  className="w-full h-auto object-cover rounded-2xl shadow-2xl"
                  controls
                  preload="metadata"
                >
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}