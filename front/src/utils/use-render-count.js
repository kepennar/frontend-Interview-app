import { useRef } from 'react'

const useRenderCount = () => {
    const count = useRef(0);    
    count.current++
    return `Render ${count.current} time${count.current === 1 ? '' : 's'}` 
}

export default useRenderCount;