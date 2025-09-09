import React from 'react'
type MortageContainerProps = {children: React.ReactNode}

const MortageContainer = ({children}:MortageContainerProps ) => {
  return (
    <div>{children}</div>
  )
}

export default MortageContainer