import JSConfetti from "js-confetti"
import { useEffect } from "react"

export const Welcome = () => {
    const jsConfetti = new JSConfetti()

    useEffect(() => {
        const interval = setInterval(() => {
            jsConfetti.addConfetti({
                // confettiColors: ["#ff1100", "#ff9500", "#f6ff00", "#00ff3c", "#1500ff", "#14286e", "#aa00fff"],
                emojis: ["❄️", "💜", "💛", "💚", "💙", "🧡", "❤️", "🖤", "🤍", "🤎", "💗", "💓"],
                emojiSize: 50,
                // confettiRadius: 5,
                confettiNumber: 100,
            })
        }, 1500)
        return () => {
            clearInterval(interval)
            jsConfetti.clearCanvas()
        }
    }, [])
    return <></>
}
