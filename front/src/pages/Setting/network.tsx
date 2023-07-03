import { AssetsList } from "@common/List"
import { Category } from "@components/Category"
import { NFTSearch } from "@components/Search"
import { NavLink } from "react-router-dom"

const NetWorkPageList = [
    {NetWorkSub: "Ethereum"},
    {NetWorkSub: "Arbitrum"},
    {NetWorkSub: "Polygon"},
    {NetWorkSub: "BNB(Binance Smart)"},
    {NetWorkSub: "Pantom Opera"}
]

export const NetWorkPage = () => {
    return (
        <>
            <NFTSearch/>
            {NetWorkPageList.map((menu, index) => (
                <NavLink to="ethereum">
                    <Category category={menu.NetWorkSub} onClick={function (): void {
                        throw new Error("Function not implemented.")
                    } }/>
                </NavLink>
            ))}
        </>
    )
}
