import React from 'react'

export const Main: React.FC = ({ children }) => {
  return (
    <main
      style={{
        height: 'calc(100vh - 64px)',
        overflowY: 'scroll',
      }}
    >
      {children}
    </main>
  )
}
