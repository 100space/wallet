import { TotalSupply } from "@components/TotalSupply"
import { MypageWrapper, MyProfileImg, MyProfileHeader, ProfileBtnWrap, MyProfileNickNameWrap, MyProfileNickName, MyProfileNickNameBtn, MyProfile, TotalSupplyWrap, MyProfileImageUpload } from "./styled"
import { Btn } from "@components/Button"
import { useGetMode } from "@hooks/useMode"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"
import { IsSideBar } from "@utils/localStorage"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react"

export const Mypage = () => {
    const [modeState, setChange] = useGetMode()
    const [src, setSrc] = useState("https://i.namu.wiki/i/we0ifCj6B05QzWu-gnPyyNfmIYkYa6Kw_Glzsu1cIbrmKk6YR-Q3j_iydyFhS69ZCYLDSdMtWlZeP-TmX_ww140vrg2y98O5qlf2swCIS_ZQLUKz-HwwlB6ZAMn-Da_WEfZkD2BnZI4jw3MbKKevjw.webp")
    const fileInputRef = useRef<HTMLInputElement>(null);
    const navigator = useNavigate()
    const [isMypage, setIsMypage] = useRecoilState(IsSideBar)

    const handleButtonClick = (e: MouseEvent) => {
        setChange({ ...modeState, isLoginState: !modeState.isLogin })
        navigator("/login")
        setIsMypage(false)
    }

    // const ProfileUploadForm = () => {
    //     const [imageFile, setImageFile] = useState(null)

    //     const handleForSubmit = (e: FormEvent) => {
    //         e.preventDefault()
    //     }
    // }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setSrc(fileURL)
            console.log(fileURL)
        }
    }

    const handleFileUpload = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return (
        <>
            <MypageWrapper mode={modeState.mode}>
                <MyProfile mode={modeState.mode}>
                    <MyProfileImg src={src} />
                    <Icon icon="heroicons-solid:pencil-alt" onClick={handleFileUpload} cursor={"pointer"} />
                </MyProfile>
                <MyProfileNickNameWrap>
                    <MyProfileNickName width={"70%"} mode={modeState.mode}>
                        {"자까"}
                    </MyProfileNickName>
                    <Btn
                        width={"20%"}
                        height={"60%"}
                        backgroundcolor="#fff"
                        margin=""
                        mode=""
                        onClick={(e: MouseEvent) => handleButtonClick(e)}
                        fontSize="1.7rem"
                        profile={"true"}
                        color="black"
                    >
                        {"변경"}
                    </Btn>
                </MyProfileNickNameWrap>
                <TotalSupplyWrap>
                    <TotalSupply />
                </TotalSupplyWrap>
                <ProfileBtnWrap>
                    <Btn
                        backgroundcolor="#9e8d8d"
                        width="47.5%"
                        height="5rem"
                        margin=""
                        mode=""
                        onClick={(e: MouseEvent) => handleButtonClick(e)}
                        fontSize="1.7rem"
                        profile={"true"}
                        color="white"
                    >
                        {"저장 하기"}
                    </Btn>
                    <Btn
                        backgroundcolor="#fff"
                        width="47.5%"
                        height="5rem"
                        margin=""
                        mode=""
                        onClick={(e: MouseEvent) => handleButtonClick(e)}
                        fontSize="1.7rem"
                        profile={"true"}
                        color="black"
                    >
                        {"계정 잠금"}
                    </Btn>
                </ProfileBtnWrap>
                <form encType="multipart/form-data">
                    <input name="file" type="file" style={{ display: "none" }} ref={fileInputRef} onChange={handleFileChange} />
                </form>
            </MypageWrapper>
        </>
    )
}
