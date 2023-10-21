import React from 'react'
import TempNavbar from '../components/tempNavbar'
import Tops from '../components/welcomeComponents/Tops'

export default function Layout({children}) {
  return (
    <html>
        <div>{children}</div>
    </html>
  )
}
