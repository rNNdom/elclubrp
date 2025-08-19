'use client'

import { useEffect, useRef } from 'react'

export default function ClubCoins() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Particle class
        class Particle {
            x: number
            y: number
            vx: number
            vy: number
            size: number
            opacity: number
            color: string

            constructor() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.vx = (Math.random() - 0.5) * 0.5
                this.vy = (Math.random() - 0.5) * 0.5
                this.size = Math.random() * 3 + 1
                this.opacity = Math.random() * 0.5 + 0.2
                const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0080']
                this.color = colors[Math.floor(Math.random() * colors.length)]
            }

            update() {
                this.x += this.vx
                this.y += this.vy

                // Wrap around edges
                if (this.x < 0) this.x = canvas.width
                if (this.x > canvas.width) this.x = 0
                if (this.y < 0) this.y = canvas.height
                if (this.y > canvas.height) this.y = 0

                // Fade in and out
                this.opacity += (Math.random() - 0.5) * 0.02
                this.opacity = Math.max(0.1, Math.min(0.7, this.opacity))
            }

            draw() {
                ctx.save()
                ctx.globalAlpha = this.opacity
                ctx.fillStyle = this.color
                ctx.shadowBlur = 15
                ctx.shadowColor = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
                ctx.restore()
            }
        }

        // Create particles
        const particles: Particle[] = []
        for (let i = 0; i < 100; i++) {
            particles.push(new Particle())
        }

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            particles.forEach(particle => {
                particle.update()
                particle.draw()
            })

            requestAnimationFrame(animate)
        }
        animate()

        return () => {
            window.removeEventListener('resize', resizeCanvas)
        }
    }, [])

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            {/* Animated particles background */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 z-0"
            />
            
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <h1 className="text-6xl md:text-8xl font-bold text-center neon-text">
                    chabedown
                </h1>
            </div>

            {/* Neon glow styles */}
            <style jsx>{`
                .neon-text {
                    color: #00ffff;
                    text-shadow: 
                        0 0 5px #00ffff,
                        0 0 10px #00ffff,
                        0 0 15px #00ffff,
                        0 0 20px #00ffff,
                        0 0 35px #00ffff,
                        0 0 40px #00ffff;
                    animation: neon-flicker 2s ease-in-out infinite alternate;
                }

                @keyframes neon-flicker {
                    0%, 100% {
                        text-shadow: 
                            0 0 5px #00ffff,
                            0 0 10px #00ffff,
                            0 0 15px #00ffff,
                            0 0 20px #00ffff,
                            0 0 35px #00ffff,
                            0 0 40px #00ffff;
                    }
                    50% {
                        text-shadow: 
                            0 0 2px #00ffff,
                            0 0 5px #00ffff,
                            0 0 8px #00ffff,
                            0 0 12px #00ffff,
                            0 0 25px #00ffff,
                            0 0 30px #00ffff;
                    }
                }
            `}</style>
        </div>
    )
}