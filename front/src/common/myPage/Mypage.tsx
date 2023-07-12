import { TotalSupply } from "@components/TotalSupply"
import { MypageWrapper, MyProfileImg, MyProfileHeader, ProfileBtnWrap, MyProfileNickNameWrap, MyProfileNickName, MyProfileNickNameBtn, MyProfile, TotalSupplyWrap, MyProfileImageUpload, MyProfileNickNameInput } from "./styled"
import { Btn } from "@components/Button"
import { useGetMode } from "@hooks/useMode"
import { useNavigate } from "react-router"
import { useRecoilState } from "recoil"
import { IsSideBar, MyAccounts } from "@utils/localStorage"
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react"

export const Mypage = () => {
    const [myAccounts, setMyAccounts] = useRecoilState(MyAccounts)
    const [isMypage, setIsMypage] = useRecoilState(IsSideBar)
    const [modeState, setChange] = useGetMode()
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUpdate, setIsUpdate] = useState(false)
    const [value, setValue] = useState(myAccounts.alias);
    const [src, setSrc] = useState("https://i.namu.wiki/i/we0ifCj6B05QzWu-gnPyyNfmIYkYa6Kw_Glzsu1cIbrmKk6YR-Q3j_iydyFhS69ZCYLDSdMtWlZeP-TmX_ww140vrg2y98O5qlf2swCIS_ZQLUKz-HwwlB6ZAMn-Da_WEfZkD2BnZI4jw3MbKKevjw.webp")
    const navigator = useNavigate()


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handlePostClick = (e: MouseEvent) => {
        console.log("클릭")
    }

    const handleUpdateClick = (e: MouseEvent) => {
        setIsUpdate(!isUpdate)
    }

    const handleButtonClick = (e: MouseEvent) => {
        setChange({ ...modeState, isLoginState: !modeState.isLogin })
        navigator("/login")
        setIsMypage(false)
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setSrc(fileURL)
            console.log(fileURL)
        }
    }

    const handleFileUploadClick = (e: MouseEvent) => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    return (
        <>
            <MypageWrapper mode={modeState.mode}>
                <MyProfile mode={modeState.mode}>
                    <MyProfileImg src={src} />
                    <Icon icon="heroicons-solid:pencil-alt" onClick={handleFileUploadClick} cursor={"pointer"} />
                </MyProfile>
                <MyProfileNickNameWrap>
                    {isUpdate
                        ? <MyProfileNickNameInput value={value} height={"60%"} width={"70%"} onChange={handleInputChange} />
                        : <MyProfileNickName width={"70%"} mode={modeState.mode} height={"60%"}>
                            {myAccounts.alias}
                        </MyProfileNickName>
                    }
                    <Btn
                        width={"20%"}
                        height={"60%"}
                        backgroundcolor="#fff"
                        mode=""
                        onClick={(e: MouseEvent) => handleUpdateClick(e)}
                        fontSize="1.7rem"
                        profile={"true"}
                        color="black"
                    >
                        {isUpdate ? "취소" : "변경"}
                    </Btn>
                </MyProfileNickNameWrap>
                <TotalSupplyWrap>
                    <TotalSupply />
                </TotalSupplyWrap>
                <ProfileBtnWrap>
                    <Btn
                        backgroundcolor={isUpdate ? "#5484c8" : "#fff"}
                        width="47.5%"
                        height="5rem"
                        margin=""
                        mode={modeState.mode}
                        onClick={(e: MouseEvent) => handlePostClick(e)}
                        fontSize="1.7rem"
                        profile={"true"}
                        color={isUpdate ? "white" : "black"}
                        disabled={!isUpdate}
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
