import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <a href='#BookCall'>
          <button className='bg-[#B7FEC7] hover:bg-[#58f499] shadow-md text-black font-semibold rounded-md px-[50px] py-[12px] transition-transform duration-300 hover:scale-105'>
            {text}
        </button>
        </a>
    </div>
  )
}

export default Button