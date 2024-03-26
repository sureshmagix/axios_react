import React, { useEffect,useState } from "react";
import axios from "axios";
import { instance } from "../axios";

export default function ListOfProducts(){
    const [state,setState] = useState([])

    // //promise handle using then
    // useEffect(()=>{

    //     axios.get('https://dummyjson.com/products')
    //     .then((response => setState(response.data.products)))
    //     .catch(error => console.log(error));
    // },[])

    const token = ' auth_token';
    useEffect(()=>{
        const getProducts = async () => {
            try {
                const response = await instance.get('/products',{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                if(response.status == 200){
                setState(response.data.products);
                }
                else if(response.status===404){
                    console.log("Products not found")
                }

                            
            } catch (error) {
                console.log(error)    
            }
        
        };
        getProducts();
    },[])

    return(
        <>
        <div>ListOfProducts</div>
        {
            state.map((product)=>(
            < >
            <div>{product.title}</div>
            <div>{product.price}</div>

            </>    


            )
            
            ) 
        }

        
        
        </>
    )
}