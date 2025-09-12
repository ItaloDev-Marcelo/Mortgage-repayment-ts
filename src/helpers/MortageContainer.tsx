import React from 'react'
type MortageContainerProps = {children: React.ReactNode}

const MortageContainer = ({children}:MortageContainerProps ) => {
  return (
    <div className='flex flex-col justify-center items-center'>{children}</div>
  )
}

export default MortageContainer