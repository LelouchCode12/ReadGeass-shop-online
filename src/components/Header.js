import React from 'react'

export default function Header() {
  return (
    <header>
        <div>
            <span className = 'logo'>ReadGeass</span>
            
            <ul className='nav'>
              <botton className = 'botton_categoria' >Категории</botton>
              <li className='input'><input type="search" autoComplete='off' placeholder='Поиск'></input></li>
              <li>Про нас</li>
              <li>Избранное</li>
              <li>Вход</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}
