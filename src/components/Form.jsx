import React, { useRef } from 'react'

const Form = ({ onSubmit }) => {


    const ref = useRef()
    const handleClick = (e) => {
        e.preventDefault()
        onSubmit(ref.current.value)
        ref.current.value = null


    }
    return (
        <div>
            <div>
                <form className='mt-3' action="">
                    <input ref={ref} className='p-2 border-gray-400 rounded-md  mr-2 border-2' type="text" />
                    <button onClick={handleClick} className='bg-green-400 py-2 px-5 text-sm text-white rounded-sm'>Add</button>
                </form>
            </div>
        </div>
    )
}

export default Form