'use client'
import { useEffect, useState } from 'react'
import { useClaimNFT, useContract } from '@thirdweb-dev/react'
import { BigNumber } from 'ethers'

interface Props {
  address: string
}
const ClaimAndMint = ({ address }: Props) => {

  const [claimedSupply, setClaimedSupply] = useState<number>(0)
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const [price, setPrice] = useState<BigNumber>()
  const [loading, setLoading] = useState<boolean>(true)

  const contractAddress = process.env.THIRDWEB_CONTRACT_ADDRESS
  const tokenId = 0;
  const { contract } = useContract(contractAddress);
  const { mutate: claimNft, isLoading, error } = useClaimNFT(contract);

  const mintNft = async () => {
    // if (!nftDrop || !address) return

    const quantity = 1

    setLoading(true)

    claimNft({
      to: address, // Use useAddress hook to get current wallet address
      quantity: 1,
      tokenId
    })
  }

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
      <button onClick={mintNft}>mint</button>
      <button
        onClick={mintNft}
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
