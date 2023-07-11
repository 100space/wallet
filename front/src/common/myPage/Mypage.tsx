import { TotalSupply } from "@components/TotalSupply"
import { MypageWrapper, FileUpload, MyProfile, MyProfileLabel, MyNickName, UpLoadBtn, TotalSupplyWrap } from "./styled"
import { NftCard } from "@components/Nft/NftCard"
import { INFTCard } from "@utils/interFace/nft.interface"
import { Btn, Button } from "@components/Button"
import { useGetMode } from "@hooks/useMode"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"
import { IsSideBar } from "@utils/localStorage"
import { setSelectionRange } from "@testing-library/user-event/dist/utils"

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
    const navigator = useNavigate()
    const [isMypage, setIsMypage] = useRecoilState(IsSideBar)
    console.log(modeState)
    const handleButtonClick = (e: MouseEvent) => {
        setChange({ ...modeState, isLoginState: !modeState.isLogin })
        navigator("/login")
        setIsMypage(false)
    }
    const ProfileUploadForm = () => {
        const [imageFile, setImageFile] = useState(null)

        const handleForSubmit = (e: FormEvent) => {
            e.preventDefault()
        }
    }

    return (
        <>
            <MypageWrapper mode={modeState.mode}>
                {<MyProfile />}
                <form>
                    <MyProfileLabel>
                        <FileUpload type="file" accept="image/*" />
                    </MyProfileLabel>
                    <UpLoadBtn type="submit" />
                </form>
                <MyNickName placeholder="NickName" />
                <TotalSupplyWrap>
                    <TotalSupply />
                </TotalSupplyWrap>
                {/* <div className="btnWrap"> */}
                <Btn
                    backgroundcolor="#fff"
                    width="80%"
                    height="5rem"
                    margin=""
                    mode=""
                    onClick={(e: MouseEvent) => handleButtonClick(e)}
                    fontSize="1.7rem"
                    profile={"true"}
                    color="black"
                >
                    계정 잠금
                </Btn>
                {/* </div> */}
            </MypageWrapper>
        </>
    )
}
