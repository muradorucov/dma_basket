import React from 'react'
import { burgers } from '../../data'

function Burgers({ list, setList, val }) {

    const addToCart = (product) => {
        const foundProduct = list.find(item => item.id === product.id)
        if (!foundProduct) {
            setList([...list, { ...product, count: 1 }])
        } else {
            foundProduct.count++;
            setList([...list])
        }
    }

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]'>
            {
                burgers
                    .filter(x => x.name.toLowerCase().includes(val))
                    .map(item => <div className='shadow-lg p-[10px] border border-[violet] rounded-md'>
                        <img src={item.img} alt={item.name} className='w-[100%] mb-[10px]'
                            onError={(e) => e.target.src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"}
                        />
                        <h3>{item.name}</h3>
                        <div className='flex justify-between'>
                            <p>{item.price} RUBL</p>
                            <button className='bg-[violet] p-[2px_15px] text-[#fff] cursor-pointer text-[30px] active:bg-[#000]'
                                onClick={() => addToCart(item)}>+</button>
                        </div>
                    </div>)
            }
        </div>
    )
}

export default Burgers