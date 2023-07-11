import { useRecoilValue } from "recoil"
import { ToggleWrapper } from "./styled"
import { Icon } from '@iconify/react';
import { useGetMode } from "@hooks/useMode";
import { relative } from "path";
import { useCallback, useState } from "react";
import { useTheme } from "@tanstack/react-query-devtools/build/lib/theme";


export const ThemeToggle = () => {
const [mode, setMode] = useGetMode();

const toggleTheme = useCallback(() => {
    if (mode === "light") {
    setMode("dark");
    } else {
    setMode("light");
    }
}, [mode, setMode]);

console.log(toggleTheme())

return (
    <>
    <ToggleWrapper>
        {mode === "light" ? (
        <Icon
            onClick={() => toggleTheme()}
            icon="ph:moon"
            style={{
            color: "#fff",
            fontSize: "3rem",
            position: "relative",
            top: "0.2rem",
            }}
        />
        ) : (
        <Icon
            onClick={() => toggleTheme()}
            icon="ph:sun"
            style={{
            color: "#fff",
            fontSize: "3rem",
            position: "relative",
            top: "0.2rem",
            }}
        />
        )}
    </ToggleWrapper>
    </>
);
};
