// Import 
import React, { useState } from 'react';

import styled from "styled-components"
import { Card, Modal } from 'antd';

const { Meta } = Card;

const CharacterCard = ({ character }) => {
    const [jitsuOpen, setJitsuOpen] = useState(false);
    const openJitsu = (jitsus) => {
        Modal.info({
            title: `${character.name} 擁有的忍術`,
            content: (
                <ul>
                    {jitsus.map((jitsu, index) => {
                        return (
                            <li>{jitsu}</li>
                        )
                    })}
                </ul>
            ),
            onOk() { },
        });
    };
    // const generateSummon = () => {
    //     let temp = `${character.summon.map((item, index) => {
    //         // console.log("index", index)
    //         if (index === 0) {
    //             return (item)
    //         }
    //         else {
    //             console.log("hhhh")
    //             return ("and", item)
    //         }
    //     })}`
    //     console.log(temp)
    //     return (
    //         <p> {temp} </p>
    //     )
    // }

    return (
        <>
            <Card
                bordered={true}
                style={{
                    width: '270px'
                }}
                cover={
                    <img
                        alt="character's photo"
                        height={'150px'}
                        object-fit={'cover'}
                        src={character.src}
                    />
                }
                actions={[<p onClick={() => { openJitsu(character.jitsu) }} >查看{character.name}的忍術</p>]}
            >
                <Meta
                    title={character.name}
                    description={
                        <>
                            <p> 性別：{character.gender} </p>
                            <p> 家族：{character.family} </p>
                            <p> 等級：{character.grade} </p>
                            <p> 忍村：{character.village} </p>
                            <p> 召喚獸：{character.summon}</p>
                        </>
                    }
                />
            </Card>
        </>
    )
};
export default CharacterCard;