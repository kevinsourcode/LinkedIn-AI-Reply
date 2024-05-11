import React from "react"
import ChatBox from "./ChatBox";
import { IoMdSend } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { PiRepeatFill } from "react-icons/pi";

interface InputModalProps {
  handleFocusedElement?: () => void
}


const InputModal: React.FC<InputModalProps> = ({handleFocusedElement}) => {

  const [showChatBox, setShowChatBox] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("");
  const [messageSent, setMessageSent] = React.useState("");
  const [showButton, setShowButton] = React.useState(false);
  

  const handleGenerate = () => {

    setInputValue("")
    setShowChatBox(true)
    setMessageSent(inputValue)
    setShowButton(true)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 bg-opacity-50">
      <div className="min-w-[500px] min-h-[100px] p-10 bg-gray-200 rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        {showChatBox && <ChatBox message={messageSent}/>}
        <input
          type="text"
          className="block w-full h-[40px] text-lg rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6"
          placeholder="Your prompt"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="flex justify-end mt-4">
          {!showButton && <button onClick={inputValue && handleGenerate} className="rounded-md bg-[#3B82F6] px-3 py-2 text-xl font-semibold text-white shadow hover:bg-[#2165d3] focus-visible:outline focus-visible:outline-2 flex items-center justify-center focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><IoMdSend className="mr-2"/>Generate</button>}
          {showButton && <button onClick={handleFocusedElement} className="rounded-md bg-white text-[#666D80] mr-2 px-3 py-2 text-xl font-semibold shadow hover:bg-gray-500 hover:text-white focus-visible:outline flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grey-600"><IoAddSharp className="mr-2"/>Insert</button>}
          {showButton && <button className="rounded-md bg-[#3B82F6] px-3 py-2 text-xl font-semibold flex items-center justify-center text-white shadow hover:bg-[#2165d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><PiRepeatFill className="mr-2"/>Regenerate</button>}
        </div>
      </div>
    </div>
  )
}

export default InputModal
