import { ImMagicWand } from "react-icons/im";

interface CountButtonProps {
  handleShowModal?: () => void
}


export const IconButton: React.FC<CountButtonProps> = ({handleShowModal}) => {

  return (
    <button
      onMouseDown={handleShowModal}
      type="button"
      className="flex flex-row items-center px-4 py-2 text-sm rounded-full transition-all border-none
      shadow-lg hover:shadow-md
      active:scale-105 bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-900">
        <ImMagicWand color="#3B82F6"/>
    </button>
  )
}
