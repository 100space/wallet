import { useGetMode } from "@hooks/useMode"
import { Icon } from "@iconify/react"
import { CollectionSubjectWrap, CollectionSubject } from "./styled/NftStandardInformation.styled"

export const NftStandardInformationSubject = ({ nftName, nftId, like }: string, number, number ) => {
    const [modeState, setModeState ] = useGetMode()
    return (
        <CollectionSubjectWrap mode={modeState.mode}>
            <CollectionSubject>
                {"Gdori"}  {`#${204}`}
            </CollectionSubject>
            <CollectionSubject>
                {true ? <Icon icon={"mdi:heart"} color="#ff0000"></Icon> : <Icon icon={"ph:heart"} color="#ff0000"></Icon>}
                {90}
            </CollectionSubject>
        </CollectionSubjectWrap>
    )
}