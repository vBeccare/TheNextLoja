import { useRef, useState } from 'react'

const useModal = () => {
  const [isEditOpen, setIsEditOpen] = useState(false)
  const initialChangeRef = useRef(null)
  const finalChangeRef = useRef(null)


	const onClose = () => {
		setIsEditOpen(false)
	}

	const openModal = () => {
		setIsEditOpen(true)
	}

  return {
    initialChangeRef,
    finalChangeRef,
    isEditOpen,
		openModal,
		onClose
  }
}

export default useModal
