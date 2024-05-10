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
      focusedElementRef.current = focusedElement
      setFocused(isMessageInput)
    

      // Get position of focused element
      if (isMessageInput) {
        const rect = focusedElement.getBoundingClientRect()
        setButtonPosition({ x: rect.right - 36, y: rect.bottom - 28 }) //need to find values instead of digits
      }
    }

    document.addEventListener("focus", handleFocusChange, true)
    // document.addEventListener("blur", handleFocusChange, true)

    return () => {
      document.removeEventListener("focus", handleFocusChange, true)
      document.removeEventListener("blur", handleFocusChange, true)
    }
  }, [])

  const handleFocusedElement = () => {
    console.log('inserting text...')
    console.log(focusedElementRef)
    focusedElementRef.current.value = 'Thank you for the opportunity! If you have any more questions or if there\'s anything else I can help you with, feel free to ask.'
    setShowModal(false);
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <div className={`relative top-[${buttonPosition.x}] left-[${buttonPosition.y}]`}>
        <IconButton handleShowModal={handleShowModal}/>
        {showModal && <InputModal handleFocusedElement={handleFocusedElement}/>}
      </div>
    </>

  )
}

export default PlasmoOverlay
