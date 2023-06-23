import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ThemeProvider } from "styled-components"
import { theme } from "./colorTheme"
import { RecoilRoot } from "recoil"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { BrowserRouter } from "react-router-dom"
import { BottomSheet } from "@common/popup/Popup"

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
console.log(screenHeight, screenWidth)
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    {/* <App /> */}
                    <BottomSheet/>
                    {screenHeight > 600 && screenWidth > 800 && screenWidth > screenHeight ? (
                        <ReactQueryDevtools initialIsOpen={true} />
                    ) : (
                        <></>
                    )}
                </ThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </RecoilRoot>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
