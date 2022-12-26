import React from 'react';
import { Table, Modal } from 'antd';

const JitsuTable = ({ jitsu }) => {
    // open the modal of jitsu's user
    const openJitsuUser = (name, user) => {
        Modal.info({
            title: `${name} 的使用者`,
            content: (
                <ul>
                    {user.map((user, index) => {
                        return (
                            <li>{user}</li>
                        )
                    })}
                </ul>
            ),
            onOk() { },
        });
    };
    // open the modal of jitsu's description
    const openJitsuDescription = (name, description) => {
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
            title: '忍術名稱',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <b>{text}</b>,
        },
        {
            title: '忍術等級',
            dataIndex: 'rating',
            key: 'rating',
        },
        {
            title: '忍術術種',
            dataIndex: 'class',
            key: 'class',
        },
        {
            title: '使用者',
            dataIndex: 'user',
            key: 'user',
            render: (_, record) => (
                    <a onClick={() => {openJitsuUser(record.name, record.character)}}> 查看 {record.name} 的使用者</a>
            ),
        },
        {
            title: '說明',
            dataIndex: 'description',
            key: 'description',
            render: (_, record) => (
                    <a onClick={() => {openJitsuDescription(record.name, record.description)}}> 查看 {record.name} 的說明</a>
            ),
        },
    ];
    return (
        <Table columns={columns} dataSource={jitsu} />
    )
}

export default JitsuTable;