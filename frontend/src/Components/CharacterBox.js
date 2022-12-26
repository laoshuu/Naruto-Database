import styled from "styled-components"
import CharacterCard from "./CharacterCard"

const CharacterWrapper = styled.div`
    height: '100%';
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-evenly;
    overflow: auto;
`

const CharacterBox = ({ character }) => {
    return (
        <CharacterWrapper>
            {character.length == 0 ?
                (<p style={{ color: '#ccc' }}> No character... </p>) :
                (character.map((character, index) => {
                    return (
                        <CharacterCard character={character} key={index} />
                    )
                }))
            }
        </CharacterWrapper >
    )
}

export default CharacterBox;