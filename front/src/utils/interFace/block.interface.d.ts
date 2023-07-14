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
}

export interface ITx extends IBlockRow, ITxByUser {
    nonce: string
    transactionIndex: string
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