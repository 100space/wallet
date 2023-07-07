import { useGetMode } from "@hooks/useMode"
import { Error404Wrap, ErrorNumber, ErrorContent } from "./styled"
import { useNavigate } from "react-router"
import { TokenListBtn } from "@components/Button"
import logo from "@img/logo.png"

interface ErrorProps {
    code: number
    message: string
}

export const ErrorPage = ({ code, message }: ErrorProps) => {
    const [modeState, setModeState] = useGetMode()
    const navigate = useNavigate()
    return (
        <Error404Wrap>
            <ErrorNumber data-h1={code}>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="281" height="285" viewBox="0 0 281 285" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M86 0C74.9543 0 66 8.9543 66 20V37C66 48.0457 74.9543 57 86 57H140V256C140 267.046 148.954 276 160 276H177C188.046 276 197 267.046 197 256V57H260C271.046 57 280 48.0457 280 37V20C280 8.95431 271.046 0 260 0H86Z" fill="url(#paint0_linear_134_2)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M86 0C74.9543 0 66 8.9543 66 20V37C66 48.0457 74.9543 57 86 57H140V256C140 267.046 148.954 276 160 276H177C188.046 276 197 267.046 197 256V57H260C271.046 57 280 48.0457 280 37V20C280 8.95431 271.046 0 260 0H86Z" fill="url(#paint1_linear_134_2)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52 118.396V252.672C52 266.479 40.8071 277.672 27 277.672H25C11.1929 277.672 0 266.479 0 252.672V28.6719C0 27.1495 0.136071 25.6589 0.396714 24.2116C0.974801 16.4152 5.19067 9.00633 12.3886 4.65052L14.0997 3.61506C25.9123 -3.53327 41.2832 0.247866 48.4316 12.0605L106.673 108.304L151.2 75.5003C162.316 67.3108 177.966 69.6833 186.156 80.7994L187.342 82.4096C195.532 93.5257 193.159 109.176 182.043 117.366L133.706 152.977L173.992 219.548L239.21 171.5C250.326 163.311 265.977 165.683 274.166 176.799L275.352 178.41C283.542 189.526 281.169 205.176 270.053 213.366L186.971 274.575C186.752 274.736 186.531 274.893 186.308 275.046C184.774 276.689 182.99 278.15 180.972 279.371L179.261 280.407C167.448 287.555 152.077 283.774 144.929 271.961L52 118.396Z" fill="url(#paint2_linear_134_2)" />
                    <defs>
                        <linearGradient id="paint0_linear_134_2" x1="173" y1="0" x2="173" y2="276" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF1E1E" />
                            <stop offset="0.953125" stop-color="#FFCCCC" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_134_2" x1="173" y1="0" x2="173" y2="276" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF1E1E" />
                            <stop offset="0.953125" stop-color="#FFCCCC" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_134_2" x1="140.113" y1="0" x2="140.113" y2="284.022" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FE1D1D" />
                            <stop offset="1" stop-color="#FFB1B1" />
                        </linearGradient>
                    </defs>
                </svg> */}
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="281" height="285" viewBox="0 0 281 285" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M86 0C74.9543 0 66 8.9543 66 20V37C66 48.0457 74.9543 57 86 57H140V256C140 267.046 148.954 276 160 276H177C188.046 276 197 267.046 197 256V57H260C271.046 57 280 48.0457 280 37V20C280 8.95431 271.046 0 260 0H86Z" fill="url(#paint0_linear_134_2)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M86 0C74.9543 0 66 8.9543 66 20V37C66 48.0457 74.9543 57 86 57H140V256C140 267.046 148.954 276 160 276H177C188.046 276 197 267.046 197 256V57H260C271.046 57 280 48.0457 280 37V20C280 8.95431 271.046 0 260 0H86Z" fill="url(#paint1_linear_134_2)" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M52 118.396V252.672C52 266.479 40.8071 277.672 27 277.672H25C11.1929 277.672 0 266.479 0 252.672V28.6719C0 27.1495 0.136071 25.6589 0.396714 24.2116C0.974801 16.4152 5.19067 9.00633 12.3886 4.65052L14.0997 3.61506C25.9123 -3.53327 41.2832 0.247866 48.4316 12.0605L106.673 108.304L151.2 75.5003C162.316 67.3108 177.966 69.6833 186.156 80.7994L187.342 82.4096C195.532 93.5257 193.159 109.176 182.043 117.366L133.706 152.977L173.992 219.548L239.21 171.5C250.326 163.311 265.977 165.683 274.166 176.799L275.352 178.41C283.542 189.526 281.169 205.176 270.053 213.366L186.971 274.575C186.752 274.736 186.531 274.893 186.308 275.046C184.774 276.689 182.99 278.15 180.972 279.371L179.261 280.407C167.448 287.555 152.077 283.774 144.929 271.961L52 118.396Z" fill="url(#paint2_linear_134_2)" />
                    <defs>
                        <linearGradient id="paint0_linear_134_2" x1="173" y1="0" x2="173" y2="276" gradientUnits="userSpaceOnUse">
                            <stop id="animatedStop0" offset="0%" stop-color="#ad6767">
                                <animate animation-direction="alternate" attributeName="stop-color" values="#71b7e6, #5f6265, #b436e6, #cf2512, #864e9c, #69a6ce, #71b7e6" dur="2s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="95.3125%" stop-color="#FFCCCC" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_134_2" x1="173" y1="0" x2="173" y2="276" gradientUnits="userSpaceOnUse">
                            <stop id="animatedStop1" offset="0%" stop-color="#FF1E1E">
                                <animate animation-direction="alternate" attributeName="stop-color" values="#cd38a5; #FFCCCC; #cd38a5" dur="2s" repeatCount="indefinite" />
                            </stop>
                            <stop offset="95.3125%" stop-color="#FFCCCC" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_134_2" x1="140.113" y1="0" x2="140.113" y2="284.022" gradientUnits="userSpaceOnUse">
                            <stop id="animatedStop2" offset="0%" stop-color="#FE1D1D">
                                <animate animation-direction="alternate" attributeName="stop-color" values="#fe1df6; #FFB1B1; #fe1df6" dur="2s" repeatCount="indefinite" from='100%' to="0%"/>
                            </stop>
                            <stop offset="100%" stop-color="#FFB1B1" />
                        </linearGradient>
                    </defs>
                </svg> */}

            </ErrorNumber>
            <ErrorContent mode={modeState.mode}>{message}</ErrorContent>
            <TokenListBtn onClick={() => { navigate('/') }} children={"뒤로가기"} width={"50%"} />
        </Error404Wrap>
    )
}