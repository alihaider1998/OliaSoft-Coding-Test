import React from 'react'
import { Loader, Spinner } from '~gui-library';


export const ProgressBar = () => {
  return (
    <div style={{ marginTop: "200px" }}>
      <Loader
        height="100%"
        text="Loading..."
        theme="white"
        width="100%"
      >
        <Spinner dark />
      </Loader>
    </div>
    
    )
}
