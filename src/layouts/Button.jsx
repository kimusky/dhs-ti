import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className=' text-white px-6 py-1 border-white bg-[#E10001] hover:text-[AB6B2E] transition-all rounded-full'>
                {props.title}
            </button>
        </div>
    )
}

export default Button;