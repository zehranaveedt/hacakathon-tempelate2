import React from "react";
import Image from 'next/image';


 function Allproducts(){
    return(
        <div>
        {/* <div className=" w-full ">
        <Image alt="All products" src="/productbanner.jpg" width={800} height={8}/>
        </div> */}

        <div className="container mx-auto py-8 px-4">
            <h1 className="text-center text-3xl font-bold mb-8">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            <div className="border p-4 rounded-lg">
            <Image alt="Product 1"  width={500} 
  height={320}  className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 1.jpg"/>
        <h2 className="text-xl font-semibold mb-2">Product 1</h2>
        <p className="text-gray-700 mb-4">$50.00</p>
        <a className="text-blue-500" href="/product1"> View Details </a> 
        </div>
        <div className="border p-4 rounded-lg">
            <Image alt="Product 2"  width={500} 
  height={320} className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 2.jpg"/>
        <h2 className="text-xl font-semibold mb-2">Product 2</h2>
        <p className="text-gray-700 mb-4">$35.00</p>
     <a className="text-blue-500" href="/product2"> View Details </a> 
        </div>


        <div className="border p-4 rounded-lg">
            <Image alt="Product 3"  width={500} height={320}  className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 3.jpg"/>
        <h2 className="text-xl font-semibold mb-2">Product 3</h2>
        <p className="text-gray-700 mb-4">$20.00</p>
        <a className="text-blue-500" href="/product3"> View Details </a>
        </div>
        
        
        <div className="border p-4 rounded-lg">
            <Image alt="Product 4"  width={500} 
  height={320}  className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 4.jpg"/>
        <h2 className="text-xl font-semibold mb-2">Product 4</h2>
        <p className="text-gray-700 mb-4">$25.00</p>
        <a className="text-blue-500" href="/product4"> View Details </a>
        </div>
        
        <div className="border p-4 rounded-lg">
            <Image alt="Product 5"  width={500} 
  height={320}  className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 5.png"/>
        <h2 className="text-xl font-semibold mb-2">Product 5</h2>
        <p className="text-gray-700 mb-4">$45.00</p>
        <a className="text-blue-500" href="/product5"> View Details </a>
        </div>


        <div className="border p-4 rounded-lg">
            <Image alt="Product 6"   width={500}  
  height={320} className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 6.jpg"/>
        <h2 className="text-xl font-semibold mb-2">Product 6</h2>
        <p className="text-gray-700 mb-4">$30.00</p>
        <a className="text-blue-500" href="/product6"> View Details </a>
        </div>
        <div className="border p-4 rounded-lg">
            <Image alt="Product 7"  width={500}  
  height={320}  className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 7.jpg"/>
        <h2 className="text-xl font-semibold mb-2">Product 7</h2>
        <p className="text-gray-700 mb-4">$22.00</p>
        <a className="text-blue-500" href="/product7"> View Details </a>
        </div>
        <div className="border p-4 rounded-lg">
            <Image alt="Product 8"  width={500} 
  height={320} className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 8.jpg"/>
        <h2 className="text-xl font-semibold mb-2">Product 8</h2>
        <p className="text-gray-700 mb-4">$40.00</p>
        <a className="text-blue-500" href="/product8"> View Details </a>
        
        </div>
        <div className="border p-4 rounded-lg">
            <Image alt="Product 9"  width={500}  
  height={320}  className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 9.png"/>
        <h2 className="text-xl font-semibold mb-2">Product 9</h2>
        <p className="text-gray-700 mb-4">$38.00</p>
        <a className="text-blue-500" href="/product9"> View Details </a>
        </div>
        <div className="border p-4 rounded-lg">
            <Image alt="Product 10"  width={500}  
  height={320} className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 10.png"/>
        <h2 className="text-xl font-semibold mb-2">Product 10</h2>
        <p className="text-gray-700 mb-4">$28.00</p>
        <a className="text-blue-500" href="/product10"> View Details </a>
        </div>
        <div className="border p-4 rounded-lg">
            <Image alt="Product 11"  width={500}  
  height={320}  className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 11.png"/>
            <h2 className="text-xl font-semibold mb-2">Product 11</h2>
        <p className="text-gray-700 mb-4">$32.00</p>
        <a className="text-blue-500" href="/product11"> View Details </a>
        </div>
        <div className="border p-4 rounded-lg">
            <Image alt="Product 12"  width={500}  
  height={320} className="w-full h-80 object-cover mb-4 rounded-lg" src="/product 12.png"/>
        <h2 className="text-xl font-semibold mb-2">Product 12</h2>
        <p className="text-gray-700 mb-4">$36.00</p>
        <a className="text-blue-500" href="/product12"> View Details </a>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Allproducts;