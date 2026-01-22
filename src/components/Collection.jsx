import React, { use } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {clearcollection} from '../redux/features/collectionSlice'
import Collectioncard from './Collectioncard' 
const Collection = ({items}) => {
  const  collection = useSelector((store) => store.collection.items)
      const dispatch = useDispatch()

  const removefromcollection = (items)=>{
    dispatch(clearcollection(items))
  }

  return (
    <div className='px-20 py-5'>
       {collection.length > 0 ? <div className='flex justify-between items-center'>
        <h2 className='text-black text-lg p-4'>Your Collection</h2>
        <button onClick={()=>{
          removefromcollection(items)
        }} className='bg-red-600 active:scale-95 px-4 py-2 text-white rounded-md'>Clear Collection</button>
      </div>:
      <h1 className=' text-[30px] text-black text-center absolute top-[40%] left-[40%] '>Collection is 
        Empty!
      </h1>
      }
    <div className='flex gap-9 py-6 px-8'>
      {collection.map((items, idx) => {
        return <div key={idx}>
          <Collectioncard items={items} />
        </div>
        
      })}
      </div>
     
    </div>
  )
}
export default Collection
