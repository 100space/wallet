import { useGetMode } from "@hooks/useMode"
import { CollectionOwnerWrap, CollectionSubject } from "./styled/NftStandardInformation.styled"

export const NftStandardInformationOwner = ({ image, owner }) => {
    const [modeState, setModeState] = useGetMode()
    return (
        <CollectionOwnerWrap mode={modeState.mode}>
            <CollectionSubject>
                {"이미지"}
            </CollectionSubject>
            <CollectionSubject>
                by {"소유자"}
            </CollectionSubject>
        </CollectionOwnerWrap>
    )
}