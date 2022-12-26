import axios from "../utils/axios"
import { useContext, createContext } from "react";
import { message as antdmsg } from "antd";

const ChatContext = createContext({
    name: '',
    result: '',
    login: false,
    register: false,
    mail: [],
    allBets: [],
    madeBets: [],



    setName: () => { },
    registerToBE: () => { },
    loginToBE: () => { },
    createBet: () => { },
    makeBet: () => { },
    endBet: () => { },
    setResult: () => { },
    fetchData: () => { }
})

const ChatProvider = (props) => {

    const fetchData = async () => {
        const {
            data: { msg },
        } = await axios.get('/api/get-data');
        console.log(msg)
    };


    const displayStatus = (input_status) => {
        if (input_status.msg) {
            const { type, msg } = input_status;
            const content = {
                content: msg, duration: 1
            }
            switch (type) {
                case 'success':
                    antdmsg.success(content)
                    break
                case 'error':
                    antdmsg.error(content)
                    break
                case 'info':
                    antdmsg.info(content)
                    break
                default:
                    break
            }
        }
    }

    const sendData = (data) => {
        // client.send(JSON.stringify(data));
    }



    return <ChatContext.Provider
        value={{
            fetchData,
        }}
        {...props}
    />
};

function useChat() {
    return useContext(ChatContext)
}

export { ChatProvider, useChat };