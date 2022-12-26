import styled from "styled-components"
import TailMonsterCard from "./TailMonsterCard"

const Wrapper = styled.div`
    height: '100%';
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-evenly;
    overflow: auto;
`

const TailMonsterBox = ({ tail_monster }) => {
    return (
            <Wrapper>
                {tail_monster.length == 0 ?
                    (<p style={{ color: '#ccc' }}> No tail monster... </p>) :
                    (tail_monster.map((tail_monster, index) => {
                        return (
                            <TailMonsterCard tail_monster={tail_monster} key={index} />
                        )
                    }))
                }
            </Wrapper >
    )
}

export default TailMonsterBox;