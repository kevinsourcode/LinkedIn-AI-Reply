import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useRef, useState } from "react"

import { IconButton } from "~features/IconButton"
import InputModal from "~features/InputModal"


export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}


const PlasmoOverlay = () => {
  const [focused, setFocused] = useState(false)
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const [showModal, setShowModal] = useState(false)
  const focusedElementRef = useRef(null);

  useEffect(() => {
    const handleFocusChange = () => {
      const focusedElement = document.activeElement
      const isMessageInput =
        focusedElement &&
        focusedElement.ariaLabel &&
        focusedElement.ariaLabel.toLowerCase().includes("message")
      setFocused(isMessageInput)

      if (isMessageInput) {
        const rect = focusedElement.getBoundingClientRect()
        focusedElementRef.current = focusedElement
        setButtonPosition({ x: rect.right - 36, y: rect.bottom - 28 }) //need to find values instead of digits
        console.log(focusedElementRef.current) 
      }
    }

    document.addEventListener("focus", handleFocusChange, true)

    return () => {
      document.removeEventListener("focus", handleFocusChange, true)
      document.removeEventListener("blur", handleFocusChange, true)
    }
  }, [])

  const handleFocusedElement = () => {
    console.log('inserting text...')
    console.log(focusedElementRef.current)
    const ptag = focusedElementRef.current.querySelector('p')
    const element = document.querySelector('.msg-form__placeholder[data-placeholder="Write a message…"]');
    element.setAttribute('data-placeholder','')
    ptag.textContent = 'Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.'
    setShowModal(false);
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <div style={{ position: 'absolute', top: `${buttonPosition.y}px`, left: `${buttonPosition.x}px` }}>
        {focused && <IconButton handleShowModal={handleShowModal} />}
      </div>


      {showModal && <InputModal handleFocusedElement={handleFocusedElement}/>}
    </>

  )
}

export default PlasmoOverlay
