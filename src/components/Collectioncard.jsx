import { useDispatch } from 'react-redux';
import { removeToast, removecollection } from '../redux/features/collectionSlice';

function Collectioncard({ items }) {
    const dispatch = useDispatch();

    const removeCollection = (items) => {
        dispatch(removecollection(items));
        dispatch(removeToast());
    };

    return (
        <div className='w-full relative my-4 h-80 bg-white rounded-xl overflow-hidden shadow-md'>
            <a target='_blank' rel="noopener noreferrer" className='h-full' href={items.url}>
                {items.type === 'photo' && <img className='h-full w-full cursor-pointer object-cover object-center' src={items.src} alt={items.title || 'Photo'} />}
                {items.type === 'video' && <video className='h-full w-full object-cover object-center' autoPlay loop muted src={items.src}></video>}
                {items.type === 'gif' && <img className='h-full w-full object-cover object-center' src={items.src} alt={items.title || 'GIF'} />}
            </a>
            <div id='bottom' className='absolute top-2 right-2'>
                <button
                    onClick={() => removeCollection(items)}
                    className='bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-lg active:scale-95 transition-all'
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Collectioncard;
