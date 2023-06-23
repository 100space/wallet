import { Wrapper } from "@styled/index"
import { NftBoardContentRow } from "./NftBoardContentRow"
import { NftBoardWrap } from "./styled/NftBoard.styled"
import { INftInfomation, INFTStauts } from "@utils/interFace/nft.interface"

export const NftBoardContentRows = (props: { info: INFTStauts | INftInfomation }) => {

    const rowList = (infomation: INFTStauts | INftInfomation) => {
        const infoArr = Object.values(infomation)
        return infoArr.map(v => {
            return (
                <NftBoardContentRow text={[v[0], v[1]]} isImage={ typeof v[1] === "string" ? false : true } />
            )
        })
    }

    return (
        <NftBoardWrap>
            <Wrapper>
                {rowList(props.info)}
                {/* <NftBoardContentRow isImage={true} text={["블록체인", ["https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912", "Polygon"]]} />
                <NftBoardContentRow isImage={false} text={["발행량", "100개"]} />
                <NftBoardContentRow isImage={false} text={["거래가능", "99개"]} />
                <NftBoardContentRow isImage={false} text={["판매중", "50개"]} /> */}
            </Wrapper>
        </NftBoardWrap>
    )
}