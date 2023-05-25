import React from 'react'

const Home = ({ name, age, isDone }) => {


    return (
        <div>
            <div className={`border-black p-5  flex  space-x-5 items-center  rounded-md border-2 ${isDone && "bg-gray-500 text-white "}`}>
                <p>{name}</p>
                {/* <input type="checkbox" checked={isDone} /> */}
            </div>


        </div>
    )
}

export default Home