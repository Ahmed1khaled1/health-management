import { ArrowUp } from 'lucide-react'
import React from 'react'

const ScrollToTopButton = () => {

  const ScrollToTopButton = ()=>{
    window.scrollTo(
      {
        top:0,
        behavior:"smooth"
      }
    )
  }

  return (
    <button
      onClick={ScrollToTopButton}
      className="z-50 w-10 h-10 fixed bottom-5 right-5 bg-primary text-white flex justify-center items-center rounded-full cursor-pointer"
    >
      <ArrowUp className="animate-bounce" />
    </button>
  );
}

export default ScrollToTopButton
