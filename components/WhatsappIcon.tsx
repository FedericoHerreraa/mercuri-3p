'use client'

import Image from "next/image"


export const WhatsappIcon = () => {
    const handleWhatsapp = () => {
        const phone = "+5491157589961";
        const message = "Hola, me interesa tu servicio";
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    }

    return (
        <div className="fixed md:bottom-4 bottom-2 md:right-4 right-2 z-50 cursor-pointer">
            <Image src="/whatsapp.png" alt="Whatsapp" width={50} height={50} onClick={handleWhatsapp} />
        </div>
    )
}