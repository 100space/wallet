# router: trends

## 개별 코인 페이지 렌더시: POST

받는 데이터

```json
{
  "symbol": "USDT"
}
```

```json
{
  "name": "Tether",
  "symbol": "USDT",
  "rank": 4,
  "marketCap": 83177035118,
  "totalSupply": 83177035118,
  "maxSupply": 83177035118,
  "circulatingSupply": 21000000,
  "description": "테더(USDT)의 메타마스크 추가를 통해 토큰...",
  "image": "https://assets.coingecko.com/coins/images/325/small/Tether.png?1668148663",
  "changePercent": 0.3,
  "currency": "USD",
  "price": 1.0
}
```

## 전체 코인 목록(슬라이드, 코인차트): GET

```json
[
  {
    "name": "",
    "symbol": "",
    "rank": 0,
    "image": "",
    "changePercent": 0,
    "coinPrice": [
      { "currency": "KRW", "price": 0 },
      { "currency": "USD", "price": 0 }
    ]
  },
  {
    "name": "",
    "symbol": "",
    "rank": 0,
    "image": "",
    "changePercent": 0,
    "coinPrice": [
      { "currency": "KRW", "price": 0 },
      { "currency": "USD", "price": 0 }
    ]
  }
]
```

================================================================

# router: Market(NFT)

## 단일 NFT

## 컬럼형 NFT 목록: GET, GET + Query(?search=hot || ?search=latest || ?search=name) /market?type=list

```json
{
  "rank": 11,
  "name": "NONGDAMGOM",
  "image": "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
  "owner": "Char1ey",
  "prices": [
    { "currency": "KRW", "price": 4500 },
    { "currency": "ETH", "price": 0.0005 }
  ]
}
```

## 카드형 NFT 목록(슬라이드, 카드): GET, GET + Query(?search=hot || ?search=latest || ?search=name) /market?type=slide

GET 요청

```json
{
  [{"name": "NONGDAMGOM",
  "image": "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
  "owner": "Char1ey",
  "prices": [
    { "currency": "KRW", "price": 4500 },
    { "currency": "ETH", "price": 0.0005 }
  ]},
  {"name": "NONGDAMGOM",
  "image": "https://assets.coingecko.com/nft_contracts/images/1609/small/renga.gif?1663648984",
  "owner": "Char1ey",
  "prices": [
    { "currency": "KRW", "price": 4500 },
    { "currency": "ETH", "price": 0.0005 }
  ]}]
}
```

## NFT 트랜잭션 리스트 : POST

받는 데이터
{
tokenId: ,
ca: ,
}

```json
{
  [{"state": "sender",
  "opponent": "0x00000000000000000000000000000000000000000000000000000",
  "timestamp": "7월21일",
  "amounts": [
    { "currency": "KRW", "amount": 4500 },
    { "currency": "ETH", "amount": 0.0005 }
  ]},
  {"state": "sender",
  "opponent": "0x00000000000000000000000000000000000000000000000000000",
  "timestamp": "7월21일",
  "amounts": [
    { "currency": "KRW", "amount": 4500 },
    { "currency": "ETH", "amount": 0.0005 }
  ]}]
}
```

## myNFTInfo

### 받는 데이터 POST

{
tokenId:"",
ca:"",
}

```json
{
  "ca": ["계약주소", "0xagdsdgasdgasdgasdgasdgasdg"],
  "supply": ["발행량", "100개"],
  "isTrade": ["거래가능", "99개"],
  "isSell": ["판매중", "50개"],
  "owner": ["내 계정 닉네임", "내 계정 주소"],
  "blockchain": [
    "블록체인",
    [
      "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912",
      "Polygon"
    ]
  ],
  "tokenId": ["토큰 ID", 50],
  "tokenStandard": ["토큰 표준", "ERC 1155"],
  "nftName": "Gdori",
  "nftId": 1234,
  "like": 1234,
  "ownerImage": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
  "owner": "내 계정",
  "collectionName": "asdfasdf",
  "sellPrice": { "currency": "ETH", "price": 0.013 },
  "chargePrice": { "currency": "ETH", "price": 0.0000013 }
}
```

### NFTStatus POST

```json
{
  "blockchain": [
    "블록체인",
    [
      "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912",
      "Polygon"
    ]
  ],
  "supply": ["발행량", "100개"],
  "isTrade": ["거래가능", "99개"],
  "isSell": ["판매중", "50개"]
}
```

### NFTINfomation POST

```json
{
  "owner": ["내 계정 닉네임", "내 계정 주소"],
  "blockchain": [
    "블록체인",
    [
      "https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912",
      "Polygon"
    ]
  ],
  "ca": ["계약주소", "0xagdsdgasdgasdgasdgasdgasdg"],
  "tokenId": ["토큰 ID", 50],
  "tokenStandard": ["토큰 표준", "ERC 1155"]
}
```

### NFTStandard

```json
{
  "nftName": "Gdori",
  "nftId": 1234,
  "like": 1234,
  "ownerImage": "https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579",
  "owner": "내 계정",
  "collectionName": "asdfasdf",
  "sellPrice": { "currency": "ETH", "price": 0.013 },
  "chargePrice": { "currency": "ETH", "price": 0.0000013 }
}
```

=============================================================

# mnemonic

## 니모닉 전달해주기: GET

## 니모닉으로 계정생성: POST --> database에 저장

받을 데이터
{
mnemonic: ["","","","","","","","","","","",""]
}

```json
{
  "privateKey": "",
  "publicKey": "",
  "address": ""
}
```

=========================================

# user

## 계정 등록 user POST

받아야 하는 데이터
{
"address":"",
"nickName":""
}

```json
{
  "suceess": "OK"
}
```

## 이미지 등록 : user/profile PUT

받아야 하는 데이터
{
"address":"",
""
}

```json
{
  "imageUrl": ""
}
```

============================================================

## token

## 토큰 추가하기: POST --> database에 저장

받을 데이터
{
"ca":"",
"symbol":"",
"decimal":"",
}

```json
{
  "ca": "",
  "symbol": "",
  "decimal": "",
  "image": ""
}
```

##
