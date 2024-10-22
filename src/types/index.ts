import { Account as AlgosdkAccount } from "algosdk";

export interface Account {
  address: string;
  mnemonic?: string;
}


export interface CustomAccount {
  type: 'mnemonic' | 'google'
  account: AlgosdkAccount | Account
  email?: string
}
