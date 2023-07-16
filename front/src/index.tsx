import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ThemeProvider } from "styled-components"
import { theme } from "./colorTheme"
import { RecoilRoot } from "recoil"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter } from "react-router-dom"

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <RecoilRoot>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </RecoilRoot>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
