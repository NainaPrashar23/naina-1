import React from 'react'

function Home() {
    return (
        <>
           <div className='add-to-cart'>
            <img src="https://imgs.search.brave.com/_v-Ij8VdrFPp5POhHbMgoPIUuqjBJmtWnrvLPSzYjpc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzExLzY2LzAzLzkz/LzM2MF9GXzExNjYw/MzkzMjFfcDBOS1l3/aWYwTGhBOUxIRUN5/cXE2VGhZeFl1OWJH/YVcuanBn"
            />
           </div>

           <h1>Home Component</h1>
           <div className='cart-wrapper'>
            <div className='img-wrapper item'>
                <img src='https://i.pcmag.com/imagery/roundups/02CjBAJYDGG9jp5sN0OUJtC-24.fit_lim.size_1050x.jpg'/>
            </div>

            <div className='text-wrapper item'>
                <span>I-Phone</span><br/>
                <span>Price: $1000.00</span>
            </div>


            <div className='btn-wrapper item'>
                <button>Add To Cart</button>
            </div>
           </div>
        </>
    )
}
export default Home