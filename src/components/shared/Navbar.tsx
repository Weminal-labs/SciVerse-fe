import React from "react"
import Link from "next/link"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-4 border-b">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-xl font-bold">
          SciVerse
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/read" className="hover:text-primary">
            Read Contract
          </Link>
          <Link href="/write" className="hover:text-primary">
            Write Contract
          </Link>
          <Link href="/dao" className="hover:text-primary">
            DAO
          </Link>
          <Link href="/research" className="hover:text-primary">
            Research
          </Link>
          <Link href="/profile" className="hover:text-primary">
            Profile
          </Link>
        </div>
      </div>
      <ConnectButton />
    </nav>
  )
}

export default Navbar
