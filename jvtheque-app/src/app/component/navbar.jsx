"use client"
import React from 'react'
import Link from 'next/link'

function navbar() {
  return (
    <div>
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/profil">Mon Profil</Link>
        <Link href="/collection">Collection</Link>
      </nav>
    </div>
    
  )
}

export default navbar