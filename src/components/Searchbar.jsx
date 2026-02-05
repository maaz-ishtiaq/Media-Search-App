import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

function Searchbar() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(setQuery(text));
            setText('');
        }
    };

    return (
        <div className="bg-gray-900">
            <form
                onSubmit={submitHandler}
                className='flex items-center py-10 px-4 sm:px-8 md:px-16 lg:px-24 gap-2 sm:gap-4'
            >
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    placeholder='Search for photos, videos, gifs...'
                    className='px-4 py-3 text-white rounded outline-none border-2 border-gray-600 focus:border-indigo-500 w-full bg-gray-800 transition-colors'
                />
                <button
                    type="submit"
                    className='px-4 sm:px-6 py-3 text-white active:scale-95 rounded outline-none border-2 border-gray-600 hover:bg-gray-700 transition-all'
                >
                    Search
                </button>
            </form>
        </div>
    );
}

export default Searchbar;
