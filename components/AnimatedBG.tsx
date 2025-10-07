'use client'



export default function AnimatedBackground() {
    const lines = [
        { top: '15%', delay: '0s', duration: '7s' },
        { top: '30%', delay: '2s', duration: '9s' },
        { top: '45%', delay: '1s', duration: '6s' },
        { top: '60%', delay: '3s', duration: '8s' },
        { top: '75%', delay: '1.5s', duration: '10s' },
        { top: '90%', delay: '2.5s', duration: '7.5s' },
    ]

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
            {lines.map((line, i) => (
                <div
                    key={i}
                    className="absolute h-[2px] w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{
                        top: line.top,
                        animation: `slide ${line.duration} linear infinite ${line.delay}`,
                    }}
                />
            ))}
        </div>
    )
}