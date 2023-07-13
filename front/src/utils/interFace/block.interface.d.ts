export interface IBlockRow {
    blockNumber: number
    blockHash: string
    hash: string
}

export interface ITx extends IBlockRow {
    timeStamp: string
    nonce: string
    transactionIndex: string
    from: string
    to: string
    value: string
    gas: string
    gasPrice: string
    isError: string
    txreceipt_status: string
    input: string
    contractAddress: string
    cumulativeGasUsed: string
    gasUsed: string
    confirmations: string
    methodId: string
    functionName: string
}