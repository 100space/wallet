export interface ICoinList {
  rank: number;
  id: string;
  name: string;
  symbol: string;
  image: string;
  changePercent: number;
  coinPrice: object[];
}

export interface ICoinInfo {
  name: string;
  symbol: string;
  rank: number;
  marketCap: number;
  totalSupply: number;
  maxSupply: number;
  circulatingSupply: number;
  description: string;
  image: string;
  changePercent: number;
  currency: string;
  price: number;
}
