import { LoginHeader } from "@components/LoginHeader/LoginHeader"
import { HeaderWrap } from "@components/MainHeader"
import { useLocation, useNavigate } from "react-router"
import styled from "styled-components"

const Div = styled.div`
    width: 100%;
    height: 7rem;
    background-color: pink;
`

export const Header: React.FC<{}> = () => {
    const location = useLocation().pathname
    const check = (location: string): JSX.Element | null => {
        if (location.indexOf("/login/") >= 0) {
            return <LoginHeader />
        } else if (location.indexOf("/login") >= 0) {
            return null
        }
        return <HeaderWrap />
    }

    return check(location)
}
