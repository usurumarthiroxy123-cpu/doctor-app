import React from 'react'

function ProtectedRoute({user, children}) {
    if (user){
        return children
    }
  return (
    <div>please login first</div>
  )
}

export default ProtectedRoute