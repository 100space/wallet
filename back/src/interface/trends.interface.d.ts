export interface ITrends {
  rank: number;
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  changePercent: number;
  current_price?: number;
  price_change_percentage_24h?: number;
}
