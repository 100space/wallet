export interface ICoinList {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  image: string;
  changePercent: number;
  coinPrice: object[];
}

export interface IGetCoinList {
  name: string;
  symbol: string;
  image: string;
  price_change_percentage_24h: number;
  id: string;
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
