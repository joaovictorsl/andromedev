import React from 'react'

export const Main: React.FC = ({ children }) => {
  const headerVh = 8
  const wholeScreen = 100

  const height = wholeScreen - headerVh + 'vh'

  return (
    <main
      style={{
        height: height,
        overflowY: 'scroll',
      }}
    >
      {children}
    </main>
  )
}
