'use client'
import { useEffect, useState } from "react"
import { useNFTDrop } from "@thirdweb-dev/react"
import { BigNumber } from "ethers"

interface Props {
  address: string
}
const ClaimAndMint = ({ address }: Props) => {

  const [claimedSupply, setClaimedSupply] = useState<number>(0)
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const [price, setPrice] = useState<BigNumber>()
  const [loading, setLoading] = useState<boolean>(true)

  const nftDrop = useNFTDrop(address)

  useEffect(() => {
    if (!nftDrop) return

    const fetchPrice = async () => {
      const claimConditions = await nftDrop.claimConditions.getAll()
      console.log(claimConditions)
      console.log(price)
    }
    fetchPrice()
  }, [nftDrop])

  useEffect(() => {
    if (!nftDrop) return

    const fetchNftDropData = async () => {
      setLoading(true)
      const claimed = await nftDrop.getAllClaimed()
      const total = await nftDrop.totalSupply()

      setClaimedSupply(claimed.length)
      setTotalSupply(total)
      setLoading(false)
    }
    fetchNftDropData()
  }, [nftDrop])


  return (
    <div>
      {loading ? <p className='claim animate-pulse'>Loading Supply Count...</p> :
        <p className='claim'>{claimedSupply} / {totalSupply?.toString()} NFTs claimed</p>
      }
      {
        loading && (
          <img className='h-44 w-44 bg-transparent object-contain mx-auto' src='https://i.pinimg.com/originals/49/23/29/492329d446c422b0483677d0318ab4fa.gif' />
        )
      }
      <button
        disabled={loading || claimedSupply === totalSupply?.toNumber() || !address}
        className='sign-in disabled:bg-red-100 w-full'
      >
        {loading ? (
          <>Loading</>
        ) :
          claimedSupply === totalSupply?.toNumber() ? (
            <>Sold Out</>
          ) :
            !address ? (
              <>Sign In to Mint</>
            ) :
              (
                <span>Mint NFT</span>
              )
        }
      </button>
    </div>
  )
}

export default ClaimAndMint
