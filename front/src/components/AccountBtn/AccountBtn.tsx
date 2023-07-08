import { useState } from "react";
import { useGetMode } from "@hooks/useMode"
import { AccountBtnWrap, AccountBtnWrapper, AccountGetBtn } from "./styled/AccountBtn.styled";
import { render } from "@testing-library/react";
import { GetWallet } from "@components/getWallet";

const WalletCreatePage = () => {
    return <div> 지갑 생성하기 페이지입니다.</div>
}

const WalletRetrievePage = () => {
    return <div> 지갑 가져오기 페이지입니다.</div>
}


export const AccountBtn = () => {
    const [modeState, setChange] = useGetMode()
    const [currentPage, setCurrentPage] = useState<string | null>(null);
    
    const AccountBtnList = [
        { content: "지갑 생성하기", page: "wallet-create"},
        { content: "지갑 가져오기", page: "getWallet"},
    ];

    const handlePageChange = (page:string) => {
        setCurrentPage(page)
    }

    const renderComp = () => {
        switch(currentPage){
            case "wallet-create":
                return <WalletCreatePage />;
            case "getWallet":
                return <GetWallet />;
            default:
                return null;
        }
    }

    return(
        <>
            <AccountBtnWrapper >
                <AccountBtnWrap>
                    {AccountBtnList.map((btn, index) => (
                        <AccountGetBtn key={index} mode={modeState.mode} onClick={() => handlePageChange(btn.page)}>{btn.content}</AccountGetBtn>
                    ))}
                </AccountBtnWrap>
            </AccountBtnWrapper>
            {renderComp()}
        </>
    )
}
