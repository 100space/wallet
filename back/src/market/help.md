```js
Result(12) [
    2n, => marketId
    '0x01B428d2EcAA1b270e274642a908Ed18f5b2207a', => seller => owner (소유주가 바뀌면 바뀜)
    '0x299EA2050a99271aB608526aA83DdCFcA69A0fCB', => NFTaddress
    2n, => tokenId
    8000000000000000n, => price / 10 ** 18
    'ipfs://QmVXbeGajzbAAVk5rw9CQmysAbBUz6SHBiT2RLj4HbmsBt', => metadata
    true, => sold (true일때 soldOut)
    50n, => creatorFee
    0n, => openingPrice
    0n, => auctionEndTime
    '0x0000000000000000000000000000000000000000', => highestBidder
    0n => highestBid
  ],
```

```js
// const provider = new ethers.JsonRpcProvider(
//   'https://polygon-mumbai.infura.io/v3/930d888f405045c2b8262d4250484ac7',
// );
// const contract = new Contract(
//   '0xFf421A31eca1ce052FC416da0Db5986D743Da351',
//   MARKETABI,
//   provider,
// );
// const cas = await this.marketRepository.findAll();
// const result = await contract.getAllTokensInCollection(
//   cas[0].toJSON().address,
// );
// const [
//   marketId,
//   owner,
//   nftAddress,
//   tokenId,
//   price,
//   metadata,
//   sold,
//   creatorFee,
//   openingPrice,
//   auctionEndTime,
//   highestBidder,
//   highestBid,
// ] = result[0];
// const { data } = await axios.get(
//   `https://ipfs.io/ipfs/${metadata.replace('ipfs://', '')}`,
// );
// console.log(data);
// console.log(data.ipfs.replace('ipfs://', 'https://ipfs.io/ipfs/'));
```

```js
// name : data.name
// image: data.ipfs.replace('ipfs://', 'https://ipfs.io/ipfs/')
// owner: owner(seller)
// prices: {currency: "MATIC", price: price}
//

// const result = cas.map(async(v, i) => {
//   return await contract.getAllTokensInCollection(v.address)
// })

// ca를 인자로 받음 (db에서 가져와야 함)
// 컬렉션에 있는 모든 토큰을 배열로 가져옴
// contract
//   .getAllTokensInCollection('0x427ae169Ae317a1855d8254C7C4460c2522D5D52')
//   .then((data) => console.log(data));

// marketId를 인자로 받음
// 마켓에 등록된 NFT 가져오기
// contract.TokenOnSale(12).then((data) => {
// console.log('marketId :', Number(data[0]));
// console.log('seller :', data[1]);
// console.log('NFTaddress :', data[2]);
// console.log('tokenId :', Number(data[3]));
// console.log('price :', Number(data[4]) / 10 ** 18);
// console.log('metadata :', data[5]);
// console.log('sold :', data[6]);
// });

// const metadata = 'QmT1K2KyFYYRdJ1T7guJWienVf34e8y69xYfk1n6cWFsCu';
// const { data } = await axios.get(`https://ipfs.io/ipfs/${metadata}`);
// const ipfsUrl = data.ipfs.replace('ipfs://', 'https://ipfs.io/ipfs/');
// console.log('data', ipfsUrl);
```

# token

```
Approval:event
ApprovalForAll:event
OwnershipTransferred:event
Transfer:event
MAX_TOKEN_COUNT:function
approve:function
balanceOf:function
getApproved:function
isApprovedForAll:function
mint_price:function
name:function
owner:function
ownerOf:function
renounceOwnership:function
result:function
safeTransferFrom:function
safeTransferFrom:function
setApprovalForAll:function
supportsInterface:function
symbol:function
tokenByIndex:function
tokenOfOwnerByIndex:function
totalSupply:function
transferFrom:function
transferOwnership:function
getCreator:function
_minting:function
tokenURI:function
getLatestTokenId:function
```

# market

```
Add:event
AuctionCancelled:event
AuctionCreated:event
AuctionEnded:event
BidderChanged:event
Buy:event
OwnershipTransferred:event
TokenOnSale:function
lowestPriceByCollection:function
owner:function
renounceOwnership:function
totalSalesByCollection:function
transferOwnership:function
getLatestId:function
addNftToMarket:function
buyNfts:function
buyNft:function
reAddNftToMarket:function
startAuction:function
bidInAuction:function
endAuction:function
cancelAuction:function
getAllTokensInCollection:function
getUserTokens:function
```

```
export const ERC721_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  => 토큰의 총 공급량 조회
  input : x
  retrun : uint256 타입의 총 공급량

  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  => 특정 EOA가 소유한 토큰 수 조회
  input : EOA
  return : uint256 타입의 해당 주소가 소유한 토큰 수

  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  => 특정 토큰의 승인된 운영자 주소 조회
  input : tokenId
  return : 해당 토큰의 승인된 운영자의 EOA

  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  => operator에게 owner의 모든 자산을 관리할 수 있는지 여부
  input : owner : 토큰의 소유자 EOA
          operator : 마켓 운영자 EOA
  return : boolean

  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  => 토큰 컨트랙트의 이름을 조회
  input : x
  return : string 타입의 토큰 컨트랙트 이름

  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  => 특정 토큰의 소유자 주소를 조회
  input : tokenId
  return : 해당 토큰의 소유자 EOA

  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  => 지정된 인터페이스 ID가 이 컨트랙트에서 지원되는지 확인
  input : 인터페이스 ID
  return : boolean

  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  => 토큰 컨트랙트의 심볼을 조회
  input : x
  return string 타입의 토큰 컨트랙트의 심볼

  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  => 특정 토큰의 URI(토큰의 정보?) 조회
  input : tokenId
  return : string 타입의 해당 토큰의 URI

];

```
