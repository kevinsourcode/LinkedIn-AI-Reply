import { useEffect, useState } from "react"
import { BeatLoader } from "react-spinners"

const ChatBox = ({ message }) => {
  const [messages, setMessages] = useState([])
  const [typing, setTyping] = useState(false)
  const [showResponse, setShowResponse] = useState(false)

  useEffect(() => {
    setMessages((prevMessages) => [...prevMessages, message])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setShowResponse(true)
    }, 3000)
  }, [message])

  return (
    <>
      <div className="flex justify-end">
        <div className="text-right w-full max-w-[320px] p-4 border-gray-200 bg-[#DFE1E7] text-xl rounded-e-xl rounded-es-xl dark:bg-gray-700">
          <p className="py-2.5 text-white font-normal">
            {messages.map((msg) => (
              <div key={message.id}>{msg}</div>
            ))}
          </p>
        </div>
      </div>

      {typing && (
        <BeatLoader
          color="#3B82F6"
          size={8}
          className="my-5"
          loading={true}
          speedMultiplier={1}
        />
      )}
      {showResponse && (
        <div className="flex items-end gap-2.5">
          <div className="flex flex-col items-end w-full max-w-[320px] leading-1.5 p-4 text-gray-200 border-gray-200 text-xl bg-[#DBEAFE] rtl:rounded-e-xl rtl:rounded-es-xl my-4">
            <p className="py-2.5 font-normal text-gray-900">
              Thank you for the opportunity! If you have any more questions or
              if there's anything else I can help you with, feel free to ask.
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBox
