import { useState } from 'react'

export default function useLocalStorageState(keyword, defaultValue='') {
   const getValue = () => JSON.parse(localStorage.getItem(keyword)) || defaultValue
   const setValue = value => localStorage.setItem(keyword, JSON.stringify(value)) 

   const [item, setItem] = useState(getValue())

   return [
      item,
      (value) => {
         setItem(value)
         setValue(value)
      }
   ]
}