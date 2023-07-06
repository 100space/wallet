import { TotalSupply } from "@components/TotalSupply"
import { MypageWrapper, FileUpload, MyProfile, MyProfileLabel, MyNickName, UpLoadBtn, TotalSupplyWrap } from "./styled"
import { NftCard } from "@components/Nft/NftCard"
import { INFTCard } from "@utils/interFace/nft.interface"
import { Btn, Button } from "@components/Button"
import { useGetMode } from "@hooks/useMode"
import { FormEvent, useState } from "react"

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
    const ProfileUploadForm = () => {
        const [ imageFile, setImageFile ] = useState(null)

        const handleForSubmit = (e: FormEvent) => {
            e.preventDefault()

            const formData = new FormData()
            formData.append("profileImage", imageFile)
        }

        const handleFileChange = (e) => {
            const file = e.target.files[0]
            setImageFile(file)
        }
    }
    return (
        <>
            <MypageWrapper mode={modeState.mode}>
                {<MyProfile/>}
                        <form onSubmit={handleFormSubmit}>
                            <MyProfileLabel>
                                이미지 업로드
                                <FileUpload type="file" accept="image/*" onChange={handleFileChange} />
                            </MyProfileLabel>
                            <UpLoadBtn type="submit"/>
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
                    onClick={() => handleButtonClick}
                    fontSize="1.7rem"
                    profile={"true"}
                    color="black"
                >
                    계정 잠금
                </Btn>
                <Btn
                    backgroundcolor="#fff"
                    width="80%"
                    height="5rem"
                    margin=""
                    mode=""
                    onClick={() => handleButtonClick}
                    fontSize="1.7rem"
                    profile={"true"}
                    color="red"
                >
                    계정 삭제
                </Btn>
                {/* </div> */}
            </MypageWrapper>
        </>
    )
}
