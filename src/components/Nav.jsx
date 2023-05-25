import React from 'react'

const navbarItems = ["h o m e", "s e r v i c e s", "c o n t a c t", "s o c i a l"]

const Nav = (h) => {

    console.log(h.name)
    return (
        <div className='flex justify-between items-center '>
            <div>
                <h1 className='font-bold text-blue-600 text-lg'>H o m e</h1>
            </div>
            <div className='flex space-x-5 uppercase   text-gray-400'>
                {
                    navbarItems.map((item) => (
                        <p className='cursor-pointer hover:text-blue-600 duration-200' key={item}>{item}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default Nav