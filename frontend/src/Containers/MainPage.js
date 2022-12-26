import React, { useState, useRef, useEffect } from 'react';
import FormItem from "antd/es/form/FormItem"

import { Divider, Typography } from 'antd';

import { UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Space, Modal, Card, Menu, Tabs, Radio } from 'antd';
// import { SmileOutlined, User } from '@ant-design/icons';
// import UserPage from './UserPage';
import type { RadioChangeEvent } from 'antd';
import type { SpaceSize } from 'antd/es/space';
import { useChat } from '../Hooks/api';
import { useNavigate } from "react-router-dom";

import styled from 'styled-components';
import CompoundedSpace from 'antd/es/space';

// import query result 
import CharacterBox from '../Components/CharacterBox';
import JitsuTable from '../Components/JitsuTable';
import TailMonsterBox from '../Components/TailMonsterBox';
import VillageTable from '../Components/VillageTable';
import CountryTable from '../Components/CountryTable';

const { Title, Paragraph, Text, Link } = Typography;

const CardWrapper = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    width: 160%;
    height: 100%
    margin-bottom: 100px;
    margin-top: 10px;
    align-items: center;
`;

const StyledCard = styled(Card)`
    width: 95%;
    margin: 10px
`;

const MainPage = () => {
    const navigate = useNavigate()
    const { character, jitsu, tail_monster, village, country, queryType, queryString, result, fetchData, setQueryType, setQueryString } = useChat()

    const [form] = Form.useForm()

    const [search, setSearch] = useState('')

    const QueryChange = (e) => {
        console.log('radio checked', e.target.value);
        setQueryType(e.target.value);
    };

    return (
        <CardWrapper>
            <Title> NARUTO DATABASE </Title>
            <Radio.Group name="radiogroup" onChange={QueryChange} defaultValue={'character'} value={queryType}>
                <Radio value={'character'}> 搜尋人物 </Radio>
                <Radio value={'jitsu'}> 搜尋忍術 </Radio>
                <Radio value={'village'}> 搜尋忍村 </Radio>
                <Radio value={'tail_monster'}> 搜尋尾獸 </Radio>
                <Radio value={'country'}> 搜尋國家 </Radio>
            </Radio.Group>
            <br />
            <Input.Search
                value={queryString}
                onChange={(e) => setQueryString(e.target.value)}
                // enterButton=""
                style={{ width: '80%' }}
                placeholder="Enter what you want to find..."
                onSearch={() => {
                    fetchData()
                    setSearch(queryType)
                }}
            ></Input.Search>
            <br />
            <Card
                style={{
                    width: '100%',
                    height: '70%',
                    // display: 'flex',
                    // flexDirection: 'row',
                    // flexWrap: 'wrap',
                    // justifyContent: 'space-evenly',
                    overflow: 'auto',
                }}
            >
                {search === 'character' ?
                    (<CharacterBox character={result} />) :
                    (search === 'jitsu' ?
                        (<JitsuTable jitsu={result} />) :
                        (search === 'village' ?
                            (<VillageTable village={village} />) :
                            (search === 'tail_monster' ?
                                (<TailMonsterBox tail_monster={tail_monster} />) :
                                (search === 'country' ?
                                    (<CountryTable country={country} />) :
                                    (<p style={{ color: '#ccc', textAlign: 'center', height: '100%' }} >Please search what you want to know for NARUTO</p>)
                                    // Text before search
                                )
                            )
                        )
                    )
                }
            </Card>
        </CardWrapper >
    );
}

export default MainPage;