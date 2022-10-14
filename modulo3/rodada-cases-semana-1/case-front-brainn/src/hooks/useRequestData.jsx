import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/constants'

export const useRequestData = (initialData, endpoint) => {
  const [data, setData] = useState(initialData)
  useEffect(() => {
    axios.get(`${BASE_URL}/${endpoint}`)
      .then((response) => {
        setData(response.data)
      })
      
  }, [endpoint])

  return (data)
}
