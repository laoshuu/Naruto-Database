import React from 'react';
import { Table, Modal } from 'antd';

const CountryTable = ({ country }) => {
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
            title: '國家名稱',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <b>{text}</b>,
        },
        {
            title: '屬於這個國家的忍村',
            dataIndex: 'village',
            key: 'village',
            render: (_, record) => (
                <div>
                    {record.village == null ?
                        (<p style={{ color: '#ccc', textAlign: 'center' }}> No village. </p>) :
                        (<ul>
                            {record.village.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                            }
                        </ul>)
                    }
                </div>
            ),
        },
        {
            title: '擁有的人柱力',
            dataIndex: 'man_force',
            key: 'man_force',
            render: (_, record) => (
                <div>
                    {record.man_force == null ?
                        (<p style={{ color: '#ccc', textAlign: 'center' }}> No manforce. </p>) :
                        (<ul>
                            {record.man_force.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                            }
                        </ul>)
                    }
                </div>
            ),
        },
        {
            title: '說明',
            dataIndex: 'description',
            key: 'description',
            render: (_, record) => (
                <a onClick={() => { openDescription(record.name, record.description) }}> 查看 {record.name} 的說明</a>
            ),
        },
    ];
    return (
        <Table columns={columns} dataSource={country} />
    )
}

export default CountryTable;