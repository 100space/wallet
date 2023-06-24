import { Board } from "@components/Board"
import { NftBoardWrap } from "@components/Board/styled/NftBoard.styled"
import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { Wrapper } from "@styled/index"
import { NftStandardInformationCollection } from "./NftStandardInformationCollection"

export const NftStandardInformation = (props: { }) => {
    return (
        <Board>
            <NftStandardInformationCollection collectionName={""} />
            <Wrapper>
                <NftStandardInformationSubject />
                <NftStandardInformationOwner />
            </Wrapper>
        </Board>
    )
}