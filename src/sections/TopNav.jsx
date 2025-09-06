import { useState } from 'react'
import MobileMenu from "../components/Nav/MobileMenu";
import Navbar from "../components/Nav/Navbar"

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu open={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  )
}
