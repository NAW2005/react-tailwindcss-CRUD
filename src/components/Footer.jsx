import React, { useRef, useState } from 'react'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid';
import { BsTrash } from 'react-icons/bs'
import { MdOutlineEdit } from "react-icons/md"


const Footer = () => {
    const [first, setFirst] = useState([])

    const handleClick = (text) => {
        const data = {}
        data.text = text
        data.isDone = false
        data.id = uuidv4()
        setFirst([...first, data])
    }

    const handleChange = (id) => {
        setFirst(first.map((i) => i.id === id ? { text: i.text, isDone: !i.isDone, id: i.id } : i))
    }

    const handleDelete = (id) => {
        setFirst(first.filter((i) => i.id !== id))
    }
    const handleEdit = (id) => {
        const oldData = first.find(i => i.id === id)
        const value = prompt("Enter new value", oldData.text)
        if (value) {
            setFirst(first.map((i) => i.id === id ? { text: value, isDone: false, id: i.id } : i))
        }
    }

    return (
        <div>
            {first.map((i) => <div key={i.id} className={`flex items-center justify-between p-3  rounded-md mt-3 border-2 ${i.isDone && 'bg-gray-400 border-black text-white font-semibold'}`}>
                <div className='flex items-center space-x-3 '>
                    <input checked={i.isDone} onChange={() => handleChange(i.id)} type="checkbox" />
                    <p>{i.text}</p>
                </div>

                <div className='flex space-x-3 items-center'>
                    <button onClick={() => handleEdit(i.id)} className='border-green-400 text-sm py-[0.5rem] px-5 bg-green-500 font-normal rounded-sm'>
                        <MdOutlineEdit />
                    </button>
                    <button onClick={() => handleDelete(i.id)} className='border-green-400 text-sm py-[0.5rem] px-4 bg-rose-500 font-normal rounded-sm'>
                        <BsTrash />
                    </button>
                </div>
            </div>)}
            <Form onSubmit={handleClick} />
        </div>
    )
}

export default Footer