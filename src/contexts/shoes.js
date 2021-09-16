import React, { createContext } from 'react'

export const ShoesContext = createContext({})

function ShoesProvider({ children }) {

    const shoes = [
        {
          key: '0',
          name: 'Jordan Jumpman 2021',
          photo: {uri: 'https://images.lojanike.com.br/500x500/produto/tenis-jordan-jumpman-2021-masculino-CQ4021-102-1.jpg'},
          price: 649.99
        },
        {
          key: '1',
          name: 'Nike Kyrie 6',
          photo: {uri: 'https://images.lojanike.com.br/500x500/produto/219443_2241817_20200624160854.jpg'},
          price: 449.99
        },
        {
          key: '2',
          name: 'Nike SB Nyjah Free 2',
          photo: {uri: 'https://images.lojanike.com.br/500x500/produto/289568_2676895_20201119155647.jpg'},
          price: 549.99
        },
        {
          key: '3',
          name: 'Nike SB Chron Solarsoft Premium',
          photo: {uri: 'https://images.lojanike.com.br/500x500/produto/249814_2256341_20200702155910.jpg'},
          price: 379.99
        },
        {
          key: '4' ,
          name: 'Nike PG 5',
          photo: {uri: 'https://images.lojanike.com.br/500x500/produto/tenis-nike-pg-5-unissex-CW3143-100-1.jpg'},
          price: 649.99
        },
        {
          key: '5',
          name: 'Jordan "Why Not?" Zer0.4',
          photo: {uri: 'https://images.lojanike.com.br/500x500/produto/tenis-jordan-why-not-zer04-masculino-DD4887-007-1.jpg'},
          price: 749.99
        },
        {
          key: '6',
          name: 'Nike Shox R4',
          photo: {uri: 'https://images.lojanike.com.br/1024x1024/produto/258801_2229363_20200616135645.jpg'},
          price: 729.99
        },
        {
          key: '7',
          name: 'Air Jordan 4 Retro',
          photo: {uri: 'https://images.lojanike.com.br/1024x1024/produto/218237_2080952_20200423150425.jpg'},
          price: 449.99
        },
        
      ]

    return (
        <ShoesContext.Provider value={shoes}>
            { children }
        </ShoesContext.Provider>
    )
}