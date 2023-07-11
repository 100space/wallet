import { useRecoilState, useRecoilValue } from "recoil"
import { ToggleWrapper } from "./styled"
import { Icon } from '@iconify/react';
import { useGetMode } from "@hooks/useMode";
import { relative } from "path";
import { useCallback, useState } from "react";
import styled, { ThemeProvider } from "styled-components"
import { ModeState } from "@utils/localStorage";
import { MouseEvent } from "react";

export const ThemeToggle = () => {
const [mode, setMode] = useRecoilState(ModeState);

const toggleTheme = (e:MouseEvent) => {
    if (mode.mode === "lightMode") {
    setMode({...mode, mode:"darkMode"});
    } else {
    setMode({...mode, mode:"lightMode"});
    }
};


return (
    <>
    <ToggleWrapper>
        {mode.mode === "lightMode"? (
        <Icon
            onClick={toggleTheme}
            icon="ph:moon"
            style={{
            color: "black",
            fontSize: "3rem",
            position: "relative",
            top: "0.2rem",
            }}
        />
        ) : (
        <Icon
            onClick={toggleTheme}
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
