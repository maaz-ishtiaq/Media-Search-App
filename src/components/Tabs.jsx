import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setActiveTabs} from '../redux/features/searchSlice'

function Tabs() {
    const tabs = ['Photos', 'Videos', 'GIF'];
    const dispatch = useDispatch()
    const activetab = useSelector((state) => state.search.activeTabs)
    return (
        <>
            <div className='flex justify-center'>
                {tabs.map(function (ele, idx) {
                    return (
                        <button
                        onClick={()=>{
                            dispatch(setActiveTabs(ele))
                        }}
                        className={`${activetab==ele?'bg-blue-800':'bg-gray-600'} px-4  cursor-pointer py-2 rounded  active:scale-90 m-3`}
                        key={idx}>{ele} </button>
                    )
                })}
            </div>
        </>
    )

}

export default Tabs