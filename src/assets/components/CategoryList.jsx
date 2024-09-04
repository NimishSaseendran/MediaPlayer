import React, {useState, useEffect} from 'react'
import { getCategories, deleteCategories, updateCategory } from '../../services/allApis'
import { toast } from 'react-toastify'
import VideoCard from './VideoCard'

function CategoryList({response}) {

    const [categoryList, setCategoryList] = useState([])

    useEffect(()=>{
        getData()
    },[response])

    const getData = async() =>{
        const result = await getCategories()
        console.log(result);
        if(result.status == 200){            
            setCategoryList(result.data)
        }
        
    }

    const handleDeleteCategory = async(id) =>{
        // deleteCategories(id)
        // toast.success("Category Deleted !!!")
        const res = await deleteCategories(id)
        // console.log(res);
        if(res.status == 200){
            getData()
            toast.success("Category Deleted !!!")

        }
        
    }

    const dropHandler =async (e, category) => {
        console.log('dropped');
        const vid = JSON.parse(e.dataTransfer.getData("video"));
        category.videos.push(vid)
        const result = await updateCategory(category.id, category)
        console.log(result);
        if(result.status== 200){
            toast.success(`${vid.title} added to ${category.title}`)
            getData()
        } else {
            toast.error("Video Adding Failed !!!")
        }
        
        
    }

    const dragOverHandler = (e) => {
        console.log('dragging over');
        e.preventDefault()
        
    }

  return (
    <>
    <div className="container-fluid border border-3 border-light p-2 mt-3">
        <div>
            {
                categoryList.map(item=>(
                    <div className='mb-2 border border-light'>
                        <div className="m-2 p-3  d-flex justify-content-between" onDragOver={(e)=>{dragOverHandler(e)}} onDrop={(e)=>{dropHandler(e, item)}}>
                            <h3>{item.title}</h3>
                            <button className='btn' onClick={()=>{handleDeleteCategory(item.id)}}>
                                <i className="fa-solid fa-trash-can" style={{ color: "#ff0000", }} />
                            </button>
                        </div>
                        <div className='border border-light'>
                            {
                                item?.videos?.length > 0 &&
                                <>
                                {item?.videos?.map(vid=>(
                                    <VideoCard video={vid} cat = {true}/>
                                ))}
                                </>
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default CategoryList