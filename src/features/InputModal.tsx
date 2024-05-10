import React from "react"
import ChatBox from "./ChatBox";
import type { RefObject } from 'react';

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
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Your prompt"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="flex justify-end mt-4">
          {!showButton && <button onClick={handleGenerate} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Generate</button>}
          {showButton && <button onClick={handleFocusedElement} className="rounded-md bg-indigo-600 mr-2 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Insert</button>}
          {showButton && <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Regenerate</button>}
        </div>
      </div>
    </div>
  )
}

export default InputModal
