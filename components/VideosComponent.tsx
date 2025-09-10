'use client'

import { motion } from "framer-motion"

const videos = [
  {
    id: 1,
    title: "El Packaging de las Ideas",
    description: "Un análisis del packaging de las ideas y como se convierte en un producto real.",
    video: "/videos/video1.mp4"
  },
  {
    id: 2,
    title: "El Packaging de las Ideas",
    description: "Un análisis del packaging de las ideas y como se convierte en un producto real.",
    video: "/videos/video2.mp4"
  },
  {
    id: 3,
    title: "El Packaging de las Ideas",
    description: "Un análisis del packaging de las ideas y como se convierte en un producto real.",
    video: "/videos/video3.mp4"
  },
  {
    id: 4,
    title: "El Packaging de las Ideas",
    description: "Un análisis del packaging de las ideas y como se convierte en un producto real.",
    video: "/videos/video4.mp4"
  },
  {
    id: 5,
    title: "El Packaging de las Ideas",
    description: "Un análisis del packaging de las ideas y como se convierte en un producto real.",
    video: "/videos/video5.mp4"
  },
  {
    id: 6,
    title: "El Packaging de las Ideas",
    description: "Un análisis del packaging de las ideas y como se convierte en un producto real.",
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
              className={`flex justify-between items-center mb-40 ${video.id % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className="w-1/3">
                <h1 className={`text-4xl font-bold text-gray-900 ${video.id % 2 === 0 ? 'text-right' : 'text-left'}`}>{video.title}</h1>
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