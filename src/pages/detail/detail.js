import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [products, setProducts] = useState([])
    const { id } = useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/data/${id}`)
        .then(res => {
            setProducts(res.data);
        })
    },[])

    function Delete() {
        axios.delete(`http://localhost:3000/data/${id}`)
        .then(() => {
            setProducts("delete")
        })
    }

  return (
    <div className='detail'>
           <div>
            <div>
                <img src="https://ntvb.tmsimg.com/assets/p23063500_b_h8_ad.jpg?w=960&h=540" alt="safsdf"/>
            </div>
            <div>
                <p>Id: {products.id}</p>
                <p>Products: {products.product}</p>
                <p>Price: {products.price}</p>
                <p>Description: {products.description}</p>
            </div>
            <div>
                <button onClick={()=> Delete()}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Detail