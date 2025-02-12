import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader';
import Product from '../components/Product';
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);

  const [items, setItems] = useState([]);
  async function fetchProducts(){
    setLoading(true);

    try{
        const result = await fetch(API_URL);
        const data = await result.json();
        setItems(data);

    }catch(err){
        console.log(err);
        setItems([]); 
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  return(
    <div className='flex justify-center items-center'>
        {
            loading ? 
            <div className='flex justify-center items-center mt-[250px]'><Loader /></div> :
            items.length > 0 ?
            (<div className='grid xs:grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 max-auto space-y-10 space-x-5 min-h-[80vh]'>
                {
                    items.map((item) => (
                        <Product key = {item.id} item={item}/>
                    ))
                }
            </div>):
            <div className='flex justify-center items-center'>
                <p>Products will be available soon</p>
            </div>
        }
    </div>
  )
}

export default Home
