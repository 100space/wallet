import { TotalSupply } from "@components/TotalSupply"
import { A, B, WR, TotalSupplyWrap, NftCardWrap } from "./styled"
import { NftCard } from "@components/Nft/NftCard"
import { INFTCard } from "@utils/interFace/nft.interface"
import { Btn } from "@components/Button"
import  profile  from "@img/profile.jpeg"
import { useGetMode } from "@hooks/useMode"

const data: INFTCard = {
    name: "NONGDAMGOM",
    image: "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
    owner: "Char1ey",
    prices: [
        { currency: "KRW", price: 4500 },
        { currency: "ETH", price: 0.0005 },
    ],
}

export const Mypage = () => {
    const [modeState, setChange] = useGetMode()
    const handleButtonClick = (e: MouseEvent) => {
    }
    return(
        <>
            <WR>
                <A src={profile}/>
                <B placeholder="NickName"/>
                <TotalSupplyWrap>
                    <TotalSupply/>
                </TotalSupplyWrap>
                <Btn backgroundcolor="" width="80%" height="6rem" margin="2rem" mode="" onClick={() => handleButtonClick} fontSize=""> 계정 잠금 </Btn>
                <Btn backgroundcolor="" width="80%" height="6rem" margin="2rem" mode="" onClick={() => handleButtonClick} fontSize=""> 계정 삭제 </Btn>
            </WR>
        </>
    )
}