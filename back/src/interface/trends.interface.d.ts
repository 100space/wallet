export interface ICoinList {
  id?: string;
  rank: number;
  name: string;
  symbol: string;
  image: string;
  changePercent: number;
  coinPrice: ICoinPrice[];
}

export interface ICoinPrice {
  currency: string
  price: number
}

export interface IGetCoinList {
  name: string;
  symbol: string;
  image: string;
  price_change_percentage_24h: number;
  current_price: number;
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
