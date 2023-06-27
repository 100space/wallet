export interface IContractMethods {
  methods: {
    decimals(): { call(): Promise<string> };
    symbol(): { call(): Promise<string> };
    balanceOf(address: string): {
      call(): Promise<string>;
    };
  };
}
