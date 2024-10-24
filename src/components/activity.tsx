import React, { useEffect, useState } from 'react'

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownLeft, AlertCircle } from 'lucide-react'
import { getAccountTransactions } from '@/lib/algorand/account'
import { Transaction } from 'algosdk/dist/types/client/v2/indexer/models/types'
import { TransactionDetailsModal } from './modal/TransactionDetailsModal'
import { getExplorerUrl } from '@/lib/algorand/network'
import { formatAlgoAmount } from '@/lib/algorand/utils'
import { useAlgorandClient } from '@/contexts/AlgorandClientProvider'

type SimpleTransaction = {
  type: 'Transaction' | 'Receive' | 'Failed'
  date: string
  fee: number
  txId: string
}

const ActivityIcon = ({ type }: { type: SimpleTransaction['type'] }) => {
  switch (type) {
    case 'Transaction':
      return <ArrowUpRight className="text-blue-500" />
    case 'Receive':
      return <ArrowDownLeft className="text-green-500" />
    case 'Failed':
      return <AlertCircle className="text-red-500" />
  }
}

export const Activity = () => {
  const [simpleTransactions, setSimpleTransactions] = useState<SimpleTransaction[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState<SimpleTransaction | null>(null)
  const { currentAccount } = useAlgorandClient();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        if (!currentAccount) {
          console.error('No account selected');
          return;
        }
        const transactions = await getAccountTransactions('mainnet', currentAccount.address)
        const formattedTransactions = transactions.map((tran: Transaction): SimpleTransaction => ({
          type: tran.sender == currentAccount.address ? "Transaction" : "Receive",
          date: new Date(tran?.roundTime ?? 0 * 1000).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          }),
          fee: Number(tran.fee),
          txId: tran.id ?? '',
        }))
        console.log(formattedTransactions)
        setSimpleTransactions(formattedTransactions)
      } catch (error) {
        console.error('Error fetching transactions:', error)
      }
    }

    fetchTransactions()
  }, [])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-2xl font-bold p-4 text-center">Your Activity</h2>
      <Card className="flex-grow overflow-auto rounded-none border-none">
        <CardContent className="p-0">
          {simpleTransactions.map((item, index) => (
            <div onClick={() => {
              setSelectedTransaction(item)
              openModal()
            }} key={item.txId} className="px-4">
              <div className="py-4 flex items-center">
                <div className="w-8 h-8 flex items-center justify-center mr-3">
                  <ActivityIcon type={item.type} />
                </div>
                <div className="flex-grow">
                  <p className="font-semibold">{item.type}</p>
                  <p className="text-gray-500 text-sm">{item.date}</p>
                </div>
              </div>
              {index < simpleTransactions.length - 1 && (
                <div className="border-b border-gray-200 mx-18" />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
      {isModalOpen && selectedTransaction && (
        <TransactionDetailsModal
          date={selectedTransaction.date}
          gasFee={formatAlgoAmount(selectedTransaction.fee)}
          explorerUrl={`${getExplorerUrl('mainnet')}/tx/${selectedTransaction.txId}`}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  )
}
