export const MARKET_ABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'TokenOnSale',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'address payable',
        name: 'seller',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'NFTaddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'metadata',
        type: 'string',
      },
      {
        internalType: 'bool',
        name: 'sold',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'creatorFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'openingPrice',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'auctionEndTime',
        type: 'uint256',
      },
      {
        internalType: 'address payable',
        name: 'highestBidder',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'highestBid',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_NFTaddress',
        type: 'address',
      },
    ],
    name: 'getAllTokensInCollection',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'NFTaddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'sold',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'creatorFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'openingPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auctionEndTime',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'highestBidder',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'highestBid',
            type: 'uint256',
          },
        ],
        internalType: 'struct Marketplace.TokenInfo[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_address',
        type: 'address',
      },
    ],
    name: 'getUserTokens',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'seller',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'NFTaddress',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'tokenId',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'metadata',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'sold',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'creatorFee',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'openingPrice',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auctionEndTime',
            type: 'uint256',
          },
          {
            internalType: 'address payable',
            name: 'highestBidder',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'highestBid',
            type: 'uint256',
          },
        ],
        internalType: 'struct Marketplace.TokenInfo[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
];
