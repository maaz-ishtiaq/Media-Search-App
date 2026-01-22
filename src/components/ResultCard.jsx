import { useDispatch, useSelector } from 'react-redux'
import { setResults, setActiveTabs, setErrors, setLoading, setQuery } from '../redux/features/searchSlice'
import { fetchgifs, fetchphotos, fetchvideos } from '../api/mediaapi'
import { useEffect } from 'react'
import ResultGrid from './ResultGrid'
const ResultCard = () => {
    const { query, activeTabs, results, loading, error } = useSelector((store) => store.search)
    const dispatch = useDispatch()

    useEffect(function() {
const getData = async () => {
    try{
 let data;
        if (activeTabs == 'Photos') {
         let response = await fetchphotos(query)
            data = response.results.map((items)=>({
            id:items.id,
            type:'photo',
            title:items.alt_description,
            thumbnail:items.urls.small,
            src:items.urls.full,
            url:items.links.html
         }))

        }

        if (activeTabs == 'Videos') {
             let response =  await fetchvideos(query)
             data = response.videos.map((items)=>({     
                id:items.id,
                type:'video',
                title:items.user || 'Untitled',
                thumbnail:items.image,
                src:items.video_files[0].link,
                url:items.url
             }
             
            )
        )
       
        }

        if (activeTabs == 'GIF') {
           let response = await fetchgifs(query)
           data = response.data.results.map((items)=>({
            id:items.id,
            type:'gif',     
            title:items.title || 'Untitled',
            thumbnail:items.media_formats.tinygif.url,
            src:items.media_formats.gif.url,
            url:items.url
           }))
        } 
        console.log(data) 
        dispatch(setResults(data))
    }
    catch(err){
        dispatch(setErrors(err.message))
    }
   
    }

        getData()
    }, [query,activeTabs])


    
return (
    <>
    <div className='flex justify-between w-full flex-wrap overflow-auto px-10'>
        {results.map((items,idx)=>{
            
            return <div key={idx}>
                <ResultGrid items={items} />
            </div>
            
        })}
    </div>
    </>
    )
    }



export default ResultCard