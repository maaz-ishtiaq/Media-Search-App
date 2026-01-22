import { useDispatch } from 'react-redux'
import { removeToast, removecollection } from '../redux/features/collectionSlice'

function Collectioncard({items}) {

    const dispatch = useDispatch()

    const removecolection = (items) => { 
    dispatch(removecollection(items))
    dispatch(removeToast())
  
}
  return (
        <div className='w-[15vw] relative my-4  h-80 bg-white rounded-xl overflow-hidden'>
            <a target='_blank' className='h-full' href={items.url}>
                {items.type == 'photo' ? <img className='h-full w-full cursor-pointer object-cover object-center' src={items.src} alt="" /> : ''}
                {items.type == 'video' ? <video className='h-full w-full object-cover object-center' autoPlay loop muted src={items.src}></video> : ''}
                {items.type == 'gif' ? <img className='h-full w-full object-cover object-center' src={items.src} alt="" /> : ''}
            </a>
            <div id='bottom' className=' w-full  absolute top-0 right-0'>

                <button
                    onClick={() => {
                removecolection(items)
                    }}
                    className='bg-red-600 bold text-xl bold active:scale-95 text-white rounded px-3 py-1 cursor-pointer font-medium'
                >
                    Delete
                </button>
            </div>
        </div>  )
}

export default Collectioncard