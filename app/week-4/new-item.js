"use client"

import { useState } from "react"

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity((prev) => (prev < 20 ? prev + 1 : prev));
    };

    const decrement = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
    };

    return (
        <main className="flex justify-center items-center h-screen">
            <div className="bg-cyan-200 p-4 rounded-lg shadow-md w-64 text-center">
                <h2 className="text-lg font-bold mb-2">Quantity</h2>
                <div className="flex items-center justify-center space-x-4">
                    <button onClick={decrement} disabled={quantity === 1} className={'${quantity === 1 ?}'}> - </button>
                    <span className="text-x1 font-semibold">{quantity}</span>
                    <button onClick={increment} disabled={quantity === 20} className={'${quantity === 20 ?}'}> + </button>
                </div>
            </div>
        </main>              
    );
}
    
    