import { Btn } from "@components/Button/styled/Btn.styled"
import { IBtn } from "@utils/interFace/styled.interface"

export const Button: React.FC<IBtn> = ({ width, height, margin, content, mode, onClick }) => {
    return (
        <Btn width={width} height={height} margin={margin} mode={mode} onClick={onClick}>
            {content}
        </Btn>
    )
}
