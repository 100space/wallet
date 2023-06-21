import JSConfetti from "js-confetti"
import { useEffect } from "react"

export const Welcome = () => {
    const jsConfetti = new JSConfetti()
    const welcomeComp = () =>
        jsConfetti.addConfetti({
            confettiColors: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd", "#f9bec7"],
            confettiRadius: 5,
            confettiNumber: 400,
            // emojis: ["❄️", "💜", "💛", "💚", "💙", "🧡", "❤️", "🖤", "🤍", "🤎", "💗", "💓"],
            // emojiSize: 50,
        })
    useEffect(() => {
        setTimeout(welcomeComp, 500)
        setTimeout(welcomeComp, 3000)
        return () => {
            jsConfetti.clearCanvas()
        }
    }, [])
    return <></>
}
