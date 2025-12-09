import React from 'react'
import { useRouteError } from 'react-router'

export default function Error() {
  const errorMessage = useRouteError();
  console.log(errorMessage)
  return (
    <div>{errorMessage.data}</div>
  )
}
