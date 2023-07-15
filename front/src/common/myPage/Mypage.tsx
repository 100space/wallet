import { TotalSupply } from "@components/TotalSupply"
import { MypageWrapper, MyProfileImg, MyProfileHeader, ProfileBtnWrap, MyProfileNickNameWrap, MyProfileNickName, MyProfileNickNameBtn, MyProfile, TotalSupplyWrap, MyProfileImageUpload, MyProfileNickNameInput } from "./styled"
import { Btn } from "@components/Button"
import { useGetMode } from "@hooks/useMode"
import { useNavigate } from "react-router"
import { useRecoilState, useResetRecoilState } from "recoil"
import { IsPopUp, IsSideBar, MyAccounts } from "@utils/localStorage"
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react"
import { Icon } from "@iconify/react"
import requestServer from "@utils/axios/requestServer"

export const Mypage = () => {
    const [myAccounts, setMyAccounts] = useRecoilState(MyAccounts)
    const [isMypage, setIsMypage] = useRecoilState(IsSideBar)
    const popUpReset = useResetRecoilState(IsSideBar)
    const [modeState, setChange] = useGetMode()
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null | undefined>()
    const [isChange, setIsChange] = useState(false)
    const [isUpdate, setIsUpdate] = useState(false)
    const [value, setValue] = useState(myAccounts.alias);
    const [src, setSrc] = useState(myAccounts.image)
    const navigator = useNavigate()


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handlePostClick = async (e: MouseEvent) => {
        try {
            const formData = new FormData();
            if (selectedFile) formData.append('file', selectedFile)
            const responseNickname = await requestServer.post("/account", { address: myAccounts.address, nickname: value })
            const responseUpload = await requestServer.post(`/account/profile?address=${myAccounts.address}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            if (!responseNickname.data || !responseUpload.data) throw new Error("내용 변경에 실패했습니다.")
            setMyAccounts({ ...myAccounts, alias: value, image: responseUpload.data.image })
            popUpReset()
            setIsChange(false)
        } catch (e) {
            if (e instanceof Error) alert(e.message)
        }
    }

    const handleUpdateClick = (e: MouseEvent) => {
        setIsUpdate(!isUpdate)
        setIsChange(!isChange)
    }

    const handleButtonClick = (e: MouseEvent) => {
        setChange({ ...modeState, isLoginState: !modeState.isLogin })
        navigator("/login")
        setIsMypage(false)
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0]
        setSelectedFile(file)
        setIsChange(true)
        if (file) {
            const fileURL = URL.createObjectURL(file);
            setSrc(fileURL)
        }
    }

    const handleFileUploadClick = (e: MouseEvent) => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    }

    useEffect(() => {

    }, [myAccounts.alias])

    return (
        <>
            <MypageWrapper mode={modeState.mode}>
                <MyProfile mode={modeState.mode}>
                    <MyProfileImg src={src} />
                    <Icon icon="iconoir:add-media-image" onClick={handleFileUploadClick} cursor={"pointer"} />
                </MyProfile>
                <MyProfileNickNameWrap>
                    {isChange
                        ? <MyProfileNickNameInput mode={modeState.mode} value={value} height={"60%"} width={"70%"} onChange={handleInputChange} />
                        : <MyProfileNickName width={"70%"} mode={modeState.mode} height={"60%"}>
                            {myAccounts.alias}
                        </MyProfileNickName>
                    }
                    <Btn
                        width={"20%"}
                        height={"60%"}
                        backgroundcolor="#707070c3"
                        mode=""
                        fontSize="1.7rem"
                        profile={"true"}
                        color="white"
                        onClick={(e: MouseEvent) => handleUpdateClick(e)}
                    >
                        {isChange ? "취소" : "변경"}
                    </Btn>
                </MyProfileNickNameWrap>
                <TotalSupplyWrap>
                    <TotalSupply />
                </TotalSupplyWrap>
                <ProfileBtnWrap>
                    <Btn
                        backgroundcolor={isChange ? "#3a6fcb" : "#484848"}
                        width="47.5%"
                        height="5rem"
                        margin=""
                        mode={modeState.mode}
                        onClick={(e: MouseEvent) => handlePostClick(e)}
                        fontSize="1.7rem"
                        profile={"true"}
                        color="white"
                        disabled={!isChange}
                    >
                        {"저장 하기"}
                    </Btn>
                    <Btn
                        backgroundcolor="#959595"
                        width="47.5%"
                        height="5rem"
                        margin=""
                        mode=""
                        onClick={(e: MouseEvent) => handleButtonClick(e)}
                        fontSize="1.7rem"
                        profile={"true"}
                        color="white"

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
