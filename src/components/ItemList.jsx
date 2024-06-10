import axios from "axios";
import {useState } from "react";
import {Link} from 'react-router-dom';
import useProduct from "../hooks/useProduct";


// Skeleton Component
const SkeletonProduct = () => (
  <div className="sm:w-1/2 md:w-1/2 lg:w-1/3 p-2 ">
    <div className="border-8 border-gray-200 w-96 h-96">
      <div className="w-64 bg-gray-200"></div>
      <div className="text-sm font-bold bg-gray-200 h-8 mt-2"></div> 
      <div className="text-sm bg-gray-200 h-16">
        <div className="h-4 bg-gray-300 mt-2"></div>
        <div className="h-4 bg-gray-300 mt-2"></div>
      </div>
    </div>
  </div>
);

const ItemList=() =>{
    const [expand, setExpand] = useState(false);

  const { records, loading, error }
   = useProduct(`https://frontend-assessment-server.onrender.com/api/products`);

     

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }
  const handleExpand = (id) => {
    const newExpandedItems = { ...expand };
    newExpandedItems[id] = !newExpandedItems[id];
    setExpand(newExpandedItems);
  };

  const handleAddProduct = async (productId) => {
    try {
     
      await axios.post('https://frontend-assessment-server.onrender.com/api/products', { productId });
    console.log("success")
    } catch (error) {
      console.error('Error adding product:', error);
      
    }}


  return (
    <>
    <div className="p-4 bg-slate-100 text-center font-medium font-sans"><h1>Products </h1></div>
    <div className="flex flex-wrap">
      {records.map((item, index) => (
    <div key={index} className="sm:w-1/2 md:w-1/2 lg:w-1/3 p-2">

          <div className="border-2 border-slate-100 ">
            <div>
              {item.productImage && (
                <div className="w-full h-52 flex justify-center items-center border-2 border-gray-200">
                  <img src={item.productImage} alt={item.name} className=" object-contain h-full " />
                </div>
              )}
              <div className="flex justify-between">
              <Link to={`/products/${item.id}`}>
              <h2 className="text-sm font-bold">{item.name}</h2>
              </Link>
              <button className="bg-slate-100 text-xs font-semibold  p-1 border-2 border-slate-200" onClick={() => handleExpand(item.id)}>
             ADD Product button
             </button></div>
             {expand[item.id] && (
               <div>
                 <p className="text-sm">         
                   <p >Description: {item.description}</p>
                   <p >Allergen Info: {item.allergen_info}</p>
                   <p >Cooking Instruction: {item.cooking_instruction}</p>
                   <p >Price: ${item.selling_price}</p>
                   <button className="bg-slate-100 text-xs font-semibold  p-1 border-2 border-slate-200" 
                   onClick={() => handleAddProduct(item.id)}
                   >
             ADD 
             </button>
                 </p>
               </div>
             )}
             
     </div>
          </div>
        </div>
      ))}
    </div></>
  );
}

 export default ItemList;