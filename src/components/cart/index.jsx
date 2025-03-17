import React from 'react'

function Cart({ list, setList }) {
    const increase = (id) => {
        const foundProduct = list.find(item => item.id === id);
        foundProduct.count++;
        setList([...list])
    }

    const decrease = (id) => {
        const foundProduct = list.find(item => item.id === id);
        foundProduct.count--;
        setList([...list])
    }

    return (
        <div className=' overflow-y-auto p-[100px_40px] w-[450px] bg-[#ffffff]  flex flex-col gap-[10px] h-full'>
            {list.length ?
                list.map((item, index) => {
                    return (
                        <div key={index} className='border rounded p-[10px]'>
                            <div className='flex gap-[10px]'>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className='w-[50px] h-[50px]'
                                    onError={(e) => e.target.src = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500"}
                                />
                                <div className='w-[100%]'>
                                    <h1>{item.name}</h1>
                                    <div className='flex justify-between'>
                                        <p>Price: {item.price} RUBL</p>
                                        <div className='flex gap-[15px] items-center'>
                                            <button
                                                className='p-[5px_13px] bg-[#c8c2c2] cursor-pointer disabled:bg-[#545252]'
                                                onClick={() => decrease(item.id)}
                                                disabled={item.count === 1}
                                            >-</button>
                                            <span>{item.count}</span>
                                            <button
                                                className='p-[5px_13px] bg-[#aba0a0] cursor-pointer'
                                                onClick={() => increase(item.id)}
                                            >+</button>
                                        </div>
                                    </div>
                                    <p>Qunatity price :{item.price * item.count} RUBL</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                : <h3>No found Product</h3>
            }
            <p>Total price :{list.reduce((acc, item) => acc += item.count * item.price, 0)} RUBl</p>
        </div>
    )
}

export default Cart