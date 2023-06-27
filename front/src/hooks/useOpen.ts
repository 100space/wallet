import { useState } from "react"

export const useOpenHandler = () => {
    const [isOpen, setIsOpen] = useState("on")

    const handleClose = () => {
        setIsOpen(isOpen === "off" ? "on" : "off")
    }
    return [isOpen, handleClose] as const
}
