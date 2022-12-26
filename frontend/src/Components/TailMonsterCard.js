// Import 
import React, { useState } from 'react';

import { Card, Modal } from 'antd';

const { Meta } = Card;

const TailMonsterCard = ({ tail_monster }) => {
    const [descriptionOpen, setDescriptionOpen] = useState(false);
    const openDescription = () => {
        Modal.info({
            title: `${tail_monster.name} 的說明`,
            content: (
                <p>{tail_monster.description}</p>
            ),
            onOk() { },
        });
    };
    return (
        <>
            <Card
                bordered={true}
                style={{
                    width: '280px'
                }}
                cover={
                    <img
                        alt="tail monster's photo"
                        height={'150px'}
                        object-fit={'cover'}
                        src={tail_monster.src}
                    />
                }
                actions={[<p onClick={() => { openDescription(tail_monster.description) }} >查看{tail_monster.name}的說明</p>]}
            >
                <Meta
                    title={tail_monster.name}
                    description={
                        <>
                            <p> 別稱：{tail_monster.nickname} </p>
                            <p> 人柱力：{tail_monster.man_force} </p>
                            <p> 所屬忍村：{tail_monster.village} </p>
                        </>
                    }
                />
            </Card>
        </>
    )
};
export default TailMonsterCard;