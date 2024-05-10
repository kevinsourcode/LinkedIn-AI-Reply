import { useEffect,useState } from 'react'

const ChatBox = ({message}) => {
    const [messages, setMessages] = useState([])
    const [typing, setTyping] = useState(false)
    const [showResponse, setShowResponse] = useState(false)

    useEffect(()=>{
        setMessages(prevMessages => [...prevMessages, message])
        setTyping(true)
        setTimeout(()=>{
            setTyping(false);
            setShowResponse(true);

        },3000)
    },[message])

  return (
    <>
      <div className='text-right bg-green-600 p-10'>{messages.map(msg => <div key={message.id}>{msg}</div>)}</div>
      {typing && <div className='text-left bg-gray-600 p-10'>...</div>}
      {showResponse && <div className='text-left bg-red-600 p-10'>Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.</div>}</>
  )
}

export default ChatBox