import { useWeb3 } from 'hooks'
import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import { fetchBalances } from './functions'
import { TokenBalance, tokenList } from './types'

const defaultValue: TokenBalance[] = tokenList.map((t) => ({
  tokenId: t.id,
  name: t.name,
  balance: BigNumber.from(0)
}))

const useBalance = (address?: string) => {
  const [balance, setBalance] = useState<TokenBalance[]>(defaultValue)
  const { account, library } = useWeb3()

  let userId = address
  if (account && !address) {
    userId = account
  }

  const refetchBalance = async () => {
    const bal = await fetchBalances(userId as string, library)
    setBalance(bal)
  }

  useEffect(() => {
    if (!userId) return
    refetchBalance()
  }, [account, address])

  return {
    balance,
    refetchBalance
  }
}

export default useBalance
