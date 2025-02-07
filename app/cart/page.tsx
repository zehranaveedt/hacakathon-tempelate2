import React from "react";
import Image from "next/image";

export default function Cart(){
    return(
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-center text-3xl font-bold mb-8">Your Shopping Cart</h1>
            <div className="grid grid-cols-1 gap-8">
                <div className="flex justify-between items-center border p-4 rounded-lg">
                    <Image alt="Product 1" width={96} height={96} className="w-24 h-24 object-cover rounded-lg mr-4" src="/chair.png"/>
                    <div className="flex flex-col">
                        <h2 className="text-xl font-semibold mb-2">Product 1</h2>
                        <p className="text-gray-700 mb-2">$50.00</p>
                        <p className="text-gray-700 mb-2">Quantity: 1</p>
                        </div>
                        </div>
                        <div className="flex justify-between items-center border p-4 rounded-lg">
                            <Image alt="Product 2" width={96} height={96} className="w-24 h-24 object-cover rounded-lg mr-4" src="/Silky Vase.png"/>
                            <div className="flex flex-col">
                                <h2 className="text-xl font-semibold mb-2">Product 2</h2>
                                <p className="text-gray-700 mb-2">$35.00</p>
                                <p className="text-gray-700 mb-2">Quantity: 1</p>
                                </div>
                                </div>
                                </div>
                                <div className="text-right mt-8">
                                    <p className="text-2xl font-bold">Subtotal: $85.00</p>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <a href="/checkout">
                                        <button className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-800">Go to Checkout</button></a>
                                        </div>
                                        </div>
    )
};