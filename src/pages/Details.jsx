import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { BlogContext } from '../contexts/BlogContext';
import { useFetch } from '../utils/firebaseUtils';

const Details = () => {
  //router da url e eklenen id yi almak için :
  const {id} = useParams();
  const [blogDetail, setBlogDetail] = useState();
  const { currentUser } = useContext(BlogContext);
  const { isLoading, blogList } = useFetch();
  const location = useLocation();

  useEffect(() => {
    setBlogDetail(blogList)
    console.log(location)
    console.log(blogDetail);
  }, [])

  const data = location.key
  
  return (
    <div>
      {/* <h1>{item?.id}</h1> */}
      details 
      {/* {data} */}
    </div>
  )
}

export default Details