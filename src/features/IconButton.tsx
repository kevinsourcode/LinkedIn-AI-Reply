import { useReducer } from "react"

interface CountButtonProps {
  handleShowModal?: () => void
}


export const IconButton: React.FC<CountButtonProps> = ({handleShowModal}) => {

  return (
    <button
      onMouseDown={handleShowModal}
      type="button"
      className="flex flex-row items-center px-4 py-2 text-sm rounded-lg transition-all border-none
      shadow-lg hover:shadow-md
      active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900">
        kasjhdkasjhdsajh
    </button>
  )
}
