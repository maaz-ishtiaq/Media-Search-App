import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearcollection } from '../redux/features/collectionSlice';
import Collectioncard from './Collectioncard';

const Collection = () => { // Removed unused 'items' prop
    const collection = useSelector((store) => store.collection.items);
    const dispatch = useDispatch();

    const clearAllCollection = () => { // Renamed for clarity
        dispatch(clearcollection());
    };

    if (collection.length === 0) {
        return (
            <div className="flex justify-center items-center h-[calc(100vh-200px)]">
                <h1 className='text-3xl text-gray-500'>
                    Collection is Empty!
                </h1>
            </div>
        );
    }

    return (
        <div className='px-4 sm:px-8 py-5'>
            <div className='flex justify-between items-center mb-4'>
                <h2 className='text-black text-xl sm:text-2xl font-bold'>Your Collection</h2>
                <button
                    onClick={clearAllCollection}
                    className='bg-red-600 hover:bg-red-700 active:scale-95 px-4 py-2 text-white rounded-md transition-all'
                >
                    Clear Collection
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
                {collection.map((item) => (
                    <Collectioncard key={item.id} items={item} />
                ))}
            </div>
        </div>
    );
};

export default Collection;
