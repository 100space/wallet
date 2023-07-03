import { Category } from "@components/Category"

const MenuList = [
    {MenuSub: "Wallet", content: "Current Wallet", content2: "Network"},
    {MenuSub: "Market", content: "NFT market"},
    {MenuSub: "Help", content: "FAQ"}
] 

export const MenuListComp = () => {

    return(
        <>
            <h1>Wallet</h1>
            <Category category={"Current Wallet"} onClick={function (): void {
                throw new Error("Function not implemented.")
            } }/>
            <Category category={"Network"} onClick={function (): void {
                throw new Error("Function not implemented.")
            } }/>
            <h1>Market</h1>
            <Category category={"NFT market"} onClick={function (): void {
                throw new Error("Function not implemented.")
            } }/>
            <h1>Help</h1>
            <Category category={"FAQ"} onClick={function (): void {
                throw new Error("Function not implemented.")
            } }/>
        </>
    )
}