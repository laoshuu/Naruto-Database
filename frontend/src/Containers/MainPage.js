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

const { Title, Paragraph, Text, Link } = Typography;

const CardWrapper = styled.div`
    display: flex;
    overflow: auto;
    flex-direction: column;
    width: 100%;
    margin-bottom: 100px;
    margin-top: 10px;
    align-items: center;
`;

const StyledCard = styled(Card)`
    width: 95%;
    margin: 10px
`;

const StyledBotton = styled(Button)`
    width: 40%;
    height: 5%;
    margin: 10px
`;

const StyledMenu = styled.div`
    display: flex;
    flex-direction: row;
`;

const MainPage = () => {



    const navigate = useNavigate()
    const { fetchData } = useChat()

    const bodyRef = useRef(null);

    const [form] = Form.useForm()

    // const [current, setCurrent] = useState('main');
    // const onClick = (e) => {
    //     console.log('click ', e);
    //     setCurrent(e.key);
    // };
    const [test, setTest] = useState("")
    return (
        <>
            <Title> All Bets Page </Title>
            {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /> */}
            {/* <StyledMenu> */}
            {/* </StyledMenu> */}
            <Input.Search
                // ref={bodyRef}
                // Save and store the textBody
                value={test}
                onChange={(e) => setTest(e.target.value)}
                // enterButton=""
                placeholder="Enter your bet money..."
                onSearch={() => {
                    fetchData()
                }}
            ></Input.Search>

        </>
    );
}

export default MainPage;