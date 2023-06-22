import { INFTCard } from "@utils/interFace/nft.interface";
import { NftCardImg } from "./NftCardImg";
import { NftContents } from "./NftContents";
import { NftCardWrap } from "./styled";


export const NftCard = (props : {nftInfo: INFTCard}) => {

    // 데이터 Fetch 할때 color를 넣어주면 고정됌
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <NftCardWrap color={getRandomColor()} width={"17.5rem"} height={"24.4rem"}>
            <NftCardImg width={"16rem"} height={"16rem"} image={props.nftInfo.image} />
            <NftContents name={props.nftInfo.name} owner={props.nftInfo.owner} prices={props.nftInfo.prices} />
        </NftCardWrap>
    )
}