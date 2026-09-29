import React from 'react'
import { menuApi } from '../Api/menu'

const Menu = () => {
    return (
        <div className='menu w bg' id='menu'>
            <h2 className='center'>OUR MENU</h2>
            <div className="menuContainer">
                {
                  menuApi.map((cur) => (
                    <div key={cur.id} className='card'>
                         <img src={cur.image} alt="" />
                         <h5>{cur.title}</h5>
                         <p>{cur.body}</p>
                    </div>
                  ))  
                }
            </div>
        </div>
    )
}

export default Menu