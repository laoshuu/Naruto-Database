import React from 'react';
import { Table, Modal } from 'antd';

const VillageTable = ({ village }) => {
    // open the modal of character
    const openCharacter = (name, character) => {
        Modal.info({
            title: `${name} 的居民`,
            content: (
                <ul>
                    {character.map((character, index) => {
                        return (
                            <li>{character}</li>
                        )
                    })}
                </ul>
            ),
            onOk() { },
        });
    };
    // open the modal of man force
    const openManForce = (name, man_force) => {
        Modal.info({
            title: `${name} 擁有的人柱力`,
            content: (
                <ul>
                    {man_force.map((man_force, index) => {
                        return (
                            <li>{man_force}</li>
                        )
                    })}
                </ul>
            ),
            onOk() { },
        });
    };
    // open the modal of jitsu's description
    const openDescription = (name, description) => {
        Modal.info({
            title: `${name} 的說明`,
            content: (
                <p>{description}</p>
            ),
            onOk() { },
        });
    };
    const columns = [
        {
            title: '忍村名稱',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <b>{text}</b>,
        },
        {
            title: '忍村所在國家',
            dataIndex: 'country',
            key: 'country',
            render: (_, record) => (
                <div>
                    {record.country == null ?
                        (<p style={{ color: '#ccc', textAlign: 'start' }}> Unknown Country </p>) :
                        (<p> {record.country} </p>)
                    }
                </div>
            ),
        },
        {
            title: '忍村居民',
            dataIndex: 'character',
            key: 'character',
            render: (_, record) => (
                    <a onClick={() => {openCharacter(record.name, record.character)}}> 查看 {record.name} 的居民 </a>
            ),
        },
        {
            title: '擁有的人柱力',
            dataIndex: 'man_force',
            key: 'man_force',
            render: (_, record) => (
                    <a onClick={() => {openManForce(record.name, record.man_force)}}> 查看 {record.name} 擁有的人柱力 </a>
            ),
        },
        {
            title: '說明',
            dataIndex: 'description',
            key: 'description',
            render: (_, record) => (
                    <a onClick={() => {openDescription(record.name, record.description)}}> 查看 {record.name} 的說明</a>
            ),
        },
    ];
    return (
        <Table columns={columns} dataSource={village} />
    )
}

export default VillageTable;