import { useEffect,useState } from 'react'

const ChatBox = ({message}) => {
    const [messages, setMessages] = useState([])
    const [typing, setTyping] = useState(false)

    useEffect(()=>{
        setMessages(prevMessages => [...prevMessages, message])
    },[message])

  return (
    <div className='text-right bg-green-600 p-10'>{messages.map(msg => <div key={message.id}>{msg}</div>)}</div>
    {typing && }
  )
}

export default ChatBox