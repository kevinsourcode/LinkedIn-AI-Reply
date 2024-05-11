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
      <div className="flex gap-2.5 text-right">
        <div className="flex flex-col items-end w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-[#DFE1E7] text-xl rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{messages.map(msg => <div key={message.id}>{msg}</div>)}</p>
        </div>
      </div>
      {typing && <div className='text-left p-10'>...</div>}
      {showResponse && <div className="flex items-end gap-2.5">
        <div className="flex flex-col items-end w-full max-w-[320px] leading-1.5 p-4 border-gray-200 text-xl bg-[#DBEAFE] rounded-e-xl rounded-es-xl">
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.</p>
        </div>
      </div>}
    </>
  )
}

export default ChatBox