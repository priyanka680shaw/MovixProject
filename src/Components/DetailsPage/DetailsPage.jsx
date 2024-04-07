import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailsPage = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>DetailsPage</div>
  )
}
