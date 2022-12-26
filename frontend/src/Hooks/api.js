import axios from "../utils/axios"
import { useContext, createContext } from "react";
import { message as antdmsg } from "antd";

const ChatContext = createContext({
    character: [],
    jitsu: [],
    tail_monster: [],
    village: [],
    country: [],

    fetchData: () => { }
})

const ChatProvider = (props) => {
    // Test Data
    // 角色： 角色名, 性別, 家族, 等級, 忍村, 組織, 召喚獸, 人柱力, 擁有屬性, 術
    const character = [
        { name: '漩渦鳴人', family: '漩渦一族', gender: '男', grade:'下忍', village: '木葉忍者村', jitsu:['j1', 'j2', 'j3'], src: 'https://www.newton.com.tw/img/d/216/cGcq5SZhdjZ1kDZxYDMlZDOwIDNjRTY5UDOyYDNykTZwMjZxgzM4IDOwYDMv0WZ0l2LjlGcvU2apFmYv02bj5SdklWYi5yYyN3Ztl2LvoDc0RHa.jpg' },
        { name: '漩渦鳴人', family: '漩渦一族', gender: '男', grade:'下忍', village: '木葉忍者村', jitsu:['j1', 'j2', 'j3'], src: 'https://www.newton.com.tw/img/d/216/cGcq5SZhdjZ1kDZxYDMlZDOwIDNjRTY5UDOyYDNykTZwMjZxgzM4IDOwYDMv0WZ0l2LjlGcvU2apFmYv02bj5SdklWYi5yYyN3Ztl2LvoDc0RHa.jpg' },
        { name: '漩渦鳴人', family: '漩渦一族', gender: '男', grade:'下忍', village: '木葉忍者村', jitsu:['j1', 'j2', 'j3'], src: 'https://www.newton.com.tw/img/d/216/cGcq5SZhdjZ1kDZxYDMlZDOwIDNjRTY5UDOyYDNykTZwMjZxgzM4IDOwYDMv0WZ0l2LjlGcvU2apFmYv02bj5SdklWYi5yYyN3Ztl2LvoDc0RHa.jpg' },
        { name: '宇智波佐助', family: '宇智波一族', gender: '男', grade: '下忍', village: '木葉忍者村', jitsu:['j1', 'j2', 'j3'], src: 'https://cdn-origin.cool-style.com.tw/cool/2022/10/1e221f9b9c664fadbd70e6c72c439c8b.jpeg' },
        { name: '春野櫻', family: null, gender: '女', grade: '下忍', village: '木葉忍者村', jitsu:['j1', 'j2', 'j3'], src: 'https://www.newton.com.tw/img/6/396/cGcq5CZjNmZ0IDOlBzMmFDOzYjM2QzM4UTOhFjZ3cjM2Q2N4IGOxEWMwYDOv0WZ0l2LjlGcvU2apFmYv02bj5SdklWYi5yYyN3Ztl2LvoDc0RHa.jpg' }
    ]

    // 忍術： 忍術名, 等級, 術種, 使用者, 說明
    const jitsu = [
        { name: '螺旋丸', rating: 'A', class: '忍術', character: ['漩渦鳴人', '自來也', '波風水門'], description:'第四代火影自創的忍術，先將查克拉集中在手上，這時查克拉要以不規則的方向不停流動，加以壓縮，維持成手掌般大小的球狀，再襲向對方，是參考尾獸玉研發而成。此術無帶有任何查克拉屬性。' },
        { name: '雷切', rating: 'A', class: '忍術', character: ['宇智波佐助'], description: '卡卡西獨創忍術。由於卡卡西曾以千鳥斬斷過真正的雷電，因此又稱為雷切。' }
    ]

    // 忍村： 忍村名, 國家名, 角色, 擁有人柱力, 說明
    const village = [
        { name: '木葉村', country: '火之國', character: ['漩渦鳴人', '宇智波佐助', '春野櫻', '旗木卡卡西'], man_force: ['漩渦鳴人'], description: '木葉村是火之國的忍者村，代表着火之國的軍事實力。火之國強大的的經濟力量註定了木葉將會凌駕於其他各忍者村之上，成為最強盛的忍村。' },
        { name: '木葉村', country: null, character: null, man_force: ['漩渦鳴人'], description: '木葉村是火之國的忍者村，代表着火之國的軍事實力。火之國強大的的經濟力量註定了木葉將會凌駕於其他各忍者村之上，成為最強盛的忍村。' },
        { name: '砂隱村', country: '風之國', character: ['我愛羅', '手鞠', '蠍'], man_force: ['我愛羅'], description: '風之國的忍者村。該處荒漠、乾旱少雨、沙塵飛舞的嚴苛環境，化為培育忍者的絕佳糧食。' }
    ]

    // 尾獸： 尾獸名, 別稱, 人柱力, 說明, 所屬忍村
    const tail_monster = [
        { name: '守鶴', nickname: '一尾', man_force: '我愛羅', village: '砂隱村', description: 'I am 守鶴', src: 'http://5b0988e595225.cdn.sohucs.com/images/20181103/af7b29949b1e4729ae16c73c2374063e.jpeg' },
        { name: '守鶴', nickname: '一尾', man_force: '我愛羅', village: null, description: 'I am 守鶴', src: 'http://5b0988e595225.cdn.sohucs.com/images/20181103/af7b29949b1e4729ae16c73c2374063e.jpeg' },
        { name: '守鶴', nickname: '一尾', man_force: '我愛羅', village: '砂隱村', description: 'I am 守鶴', src: 'http://5b0988e595225.cdn.sohucs.com/images/20181103/af7b29949b1e4729ae16c73c2374063e.jpeg' },
        { name: '守鶴', nickname: '一尾', man_force: '我愛羅', village: '砂隱村', description: 'I am 守鶴', src: 'http://5b0988e595225.cdn.sohucs.com/images/20181103/af7b29949b1e4729ae16c73c2374063e.jpeg' },
        { name: '又旅', nickname: '二尾', man_force: '二位由木人', village: '雲隱村', description: 'I am 又旅', src: 'http://5b0988e595225.cdn.sohucs.com/images/20181103/0b4835e136814e01b36a5818223ad196.jpeg' }
    ]

    // 國家： 國家名, 忍村名, 擁有人柱力, 說明
    const country = [
        { name: '火之國', village: ['木葉村', '湯忍村'], man_force: ['九喇嘛'], description: '火之國地處丘陵地帶，氣候温和，陽光充足。該國耕地充足，經濟發達，人口眾多。由於地處大陸的中心部分，是各國交流的交通要道。同時火之國擁有最強大的忍者村——木葉隱村，因此一直以來是五大國中最有影響力的國家。雖然這一地位在大蛇丸策劃的木葉毀滅計劃下有所削弱。' },
        { name: '火之國', village: null, man_force: ['九喇嘛'], description: '火之國地處丘陵地帶，氣候温和，陽光充足。該國耕地充足，經濟發達，人口眾多。由於地處大陸的中心部分，是各國交流的交通要道。同時火之國擁有最強大的忍者村——木葉隱村，因此一直以來是五大國中最有影響力的國家。雖然這一地位在大蛇丸策劃的木葉毀滅計劃下有所削弱。' },
        { name: '風之國', village: ['砂隱村'], man_force: ['守鶴'], description: '風之國是火影忍者世界中疆土最大的國家。該國地處荒漠，乾旱少雨，國民居住在砂子構建的特殊建築物內。風之國人口稀少，且和火之國關係密切。風之國的忍者村是砂隱村，該村以傀儡術聞名火影世界。' },
        { name: '風之國', village: ['砂隱村'], man_force: null, description: '風之國是火影忍者世界中疆土最大的國家。該國地處荒漠，乾旱少雨，國民居住在砂子構建的特殊建築物內。風之國人口稀少，且和火之國關係密切。風之國的忍者村是砂隱村，該村以傀儡術聞名火影世界。' }
    ]

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
            character,
            jitsu,
            tail_monster,
            village,
            country,
            fetchData,
        }}
        {...props}
    />
};

function useChat() {
    return useContext(ChatContext)
}

export { ChatProvider, useChat };