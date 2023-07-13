import { Wrapper } from "@styled/index"
import { NftBoardContentRow } from "./NftBoardContentRow"
import { NftBoardWrap } from "./styled/NftBoard.styled"
import { INftInfomation, INFTStauts } from "@utils/interFace/nft.interface"
import { LoadingBar } from "@components/loading"

export const NftBoardContentRows = (props: { info: INFTStauts | INftInfomation; open: string }) => {

    const rowList = (infomation: INFTStauts | INftInfomation) => {
        const infoArr = Object.values(infomation)
        return infoArr.map((v, i) => {
            return (
                <NftBoardContentRow
                    text={[v.subject, v.value]}
                    isImage={typeof v.value !== "string" && v.value}
                    open={props.open}
                    key={i}

                />
            )
        })
    }

    if (!props.info) return <LoadingBar />
    return (
        <NftBoardWrap>
            <Wrapper>
                {rowList(props.info)}
            </Wrapper>
        </NftBoardWrap>
    )
}
