import { useState } from 'react'
import './Popup.css'
import { WalletInterface } from '@/components/wallet-interface'

export const Popup = () => {
  const [currentAccount, setCurrentAccount] = useState({
    email: 'lekhacthanhtung.it@gm...',
    address: '0xb4b2...915d'
  })

  return (
    <WalletInterface />
  )
}

export default Popup
