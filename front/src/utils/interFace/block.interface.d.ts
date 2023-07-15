export interface IBlockRow {
    blockNumber: number
    blockHash: string
    hash: string
}

export interface ITxByUser {
    from: string
    to: string
    timeStamp: string
    value: string
    isError: string
}

export interface ITx extends IBlockRow, ITxByUser {
    transactionIndex: string
    gas: string
    gasPrice: string
    nonce: string
    txreceipt_status: string
    input: string
    contractAddress: string
    cumulativeGasUsed: string
    gasUsed: string
    confirmations: string
    methodId: string
    functionName: string
}