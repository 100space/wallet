export interface IListNft {
  name: string;
  description: string;
  image: string;
  marketId: number;
  owner: string;
  nftAddress: string;
  tokenId: number;
  prices: { currency: string; price: number }[];
  isSoldOut: boolean;
}
