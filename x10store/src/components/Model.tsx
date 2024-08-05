import React from 'react'
import GLBViewer from './GLBViewer'

const Model = () => {
  return (
    <div className='flex h-full w-full justify-center'>
      <GLBViewer
        modelPath="/360-base.glb"
        scale={[4, 4, 4]}
      />
    </div>
  )
}

export default Model