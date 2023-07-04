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
