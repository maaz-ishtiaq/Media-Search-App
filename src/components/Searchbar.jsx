import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice'

function Searchbar() {
    const [text, settext] = useState('')

    const dispatch = useDispatch();

    const submithandler = (e) => {
        e.preventDefault();
        dispatch(setQuery(text))
        settext('')
    }

    return (
        <>
            <div>
                <form
                    onClick={(e) => {
                        submithandler(e)
                    }}
                    className='flex py-10 px-24 gap-5 bg-gray-900'
                >
                    <input type="text"
                        value={text}
                        onChange={(e) => {
                            settext(e.target.value)
                        }}
                        required
                        placeholder='Search Anything....'
                        className='px-4 py-3 text-white rounded outline-none border-2 w-full bg-gray-900 border-5 '
                    />

                    <button
                        className='px-4 py-3 text-white active:scale-95 rounded outline-none border-2 border-white-900  '>
                        Search
                    </button>
                </form>
            </div>
        </>
    )
}

export default Searchbar