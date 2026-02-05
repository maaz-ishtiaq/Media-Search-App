

import { useDispatch } from 'react-redux'
import { addtocollection, addedToast } from '../redux/features/collectionSlice'

const ResultGrid = ({ items }) => {
    const dispatch = useDispatch()
    const addCollection = (items) => {
        dispatch(addtocollection(items))
        dispatch(addedToast())
    }


    return (
        <div className='w-full relative my-4  h-80 bg-white rounded-xl overflow-hidden'>
            <a target='_blank' className='h-full' href={items.url}>
                {items.type == 'photo' ? <img className='h-full w-full cursor-pointer object-cover object-center' src={items.src} alt="" /> : ''}
                {items.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={items.src}></video> : ''}
                {items.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={items.src} alt="" /> : ''}
            </a>
            <div id='bottom' className=' w-full  absolute top-0 right-0'>

                <button
                    onClick={() => {
                        addCollection(items)
                    }}
                    className='bg-indigo-600 text-xl font-bold active:scale-95 text-white rounded px-3 py-1 cursor-pointer'
                >
                    ↓
                </button>
            </div>
        </div>
    )
}

export default ResultGrid
