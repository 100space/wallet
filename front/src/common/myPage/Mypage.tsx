import { TotalSupply } from "@components/TotalSupply"
import { MypageWrapper, MyProfile, MyNickName, TotalSupplyWrap } from "./styled"
import { NftCard } from "@components/Nft/NftCard"
import { INFTCard } from "@utils/interFace/nft.interface"
import { Btn } from "@components/Button"
// import profile  from "@img/profile.png"
import pro from "@img/pro.png"
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
    const handleButtonClick = (e: MouseEvent) => {}
    return (
        <>
            <MypageWrapper mode={modeState.mode}>
                <MyProfile src={pro} />
                <MyNickName placeholder="NickName" />
                <TotalSupplyWrap>
                    <TotalSupply />
                </TotalSupplyWrap>
                {/* <div className="btnWrap"> */}
                <Btn
                    backgroundcolor=""
                    width="80%"
                    height="5rem"
                    margin=""
                    mode=""
                    onClick={() => handleButtonClick}
                    fontSize="1.7rem"
                    profile={"true"}
                >
                    계정 잠금
                </Btn>
                <Btn
                    backgroundcolor=""
                    width="80%"
                    height="5rem"
                    margin=""
                    mode=""
                    onClick={() => handleButtonClick}
                    fontSize="1.7rem"
                    profile={"true"}
                >
                    계정 삭제
                </Btn>
                {/* </div> */}
            </MypageWrapper>
        </>
    )
}
