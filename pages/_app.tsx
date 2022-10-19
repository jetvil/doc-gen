import 'nextra-theme-docs/style.css'
import React from 'react'
interface nextraProps {
  Component: React.ComponentType
  pageProps: any
}

export default function Nextra({ Component, pageProps }: nextraProps) {
  return <Component {...pageProps} />
}
