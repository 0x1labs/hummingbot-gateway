import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 2222,
  TESTNET = 97 //
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const defaultProvider = {
	'kava': 'https://evm.kava.io'
}

export const defaultTokenList = {
	'kava': [
		{ value: "kava", chainId: 2222, address: "0x0000000000000000000000000000000000000000", symbol: "KAVA", name: "KAVA Coin", decimals: 18, logoURL: "https://assets-cdn.trustwallet.com/blockchains/kava/info/logo.png", tags: ["Coin"] },
		{ value: "busd", chainId: 2222, address: "0x332730a4F6E03D9C55829435f10360E13cfA41Ff", symbol: "BUSD", name: "BUSD Coin", decimals: 18, logoURL: "https://cryptologos.cc/logos/binance-usd-busd-logo.png", tags: ["stablecoin"] },
		{ value: "wkava", chainId: 2222, address: "0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b", symbol: "WKAVA", name: "Wrapped KAVA", decimals: 18, logoURL: "https://assets-cdn.trustwallet.com/blockchains/kava/info/logo.png", tags: ["Coin"] },
		{ value: "usdc", chainId: 2222, address: "0xfa9343c3897324496a05fc75abed6bac29f8a40f", symbol: "USDC", name: "USD Coin", decimals: 6, logoURL: "https://assets-cdn.trustwallet.com/blockchains/kava/info/logo.png", tags: ["stablecoin"] },
	]
}

export let AddressPoolMap = {
    "0x332730a4F6E03D9C55829435f10360E13cfA41Ff-0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b": "0x6be57618c8832ad25cceadf2745d5c92de7ab7b2",
    "0x765277EebeCA2e31912C9946eAe1021199B39C61-0xB44a9B6905aF7c801311e8F4E76932ee959c663C": "0x02Bd2e7f107A15CE8b6414df67F4A7e662218Bc9",
    "0x765277EebeCA2e31912C9946eAe1021199B39C61-0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b": "0xbd3d481e308A6f2fA6714bA3dc33e68Ab3915557",
    "0x765277EebeCA2e31912C9946eAe1021199B39C61-0xfA9343C3897324496A05fC75abeD6bAC29f8A40f": "0x9f065518185436FbDd72FD7ca7fd99CCAF3f061A",
    "0x332730a4F6E03D9C55829435f10360E13cfA41Ff-0x765277EebeCA2e31912C9946eAe1021199B39C61": "0x9D102cE615ab35CEdDDa899bE47A8DA5Dc139460",
    "0x765277EebeCA2e31912C9946eAe1021199B39C61-0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b": "0x1e34dd2F920630e6AF04519221ed9004608A6c52",
    "0xB44a9B6905aF7c801311e8F4E76932ee959c663C-0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D": "0xBd87cD1512763EEFC14B3717ff42538022E95C95",
    "0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b-0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D": "0x545236b930E5F5f339934296A5d442014978706F"
}



export const poolList = {
	'kava': [
		{ value: "other", address: "0x6be57618c8832ad25cceadf2745d5c92de7ab7b2", symbols: ["BUSD", "WKAVA"], logoURLs: ["/icons/busd.svg", "/icons/wkava.png"] },
		{ value: "other", address: "0xbd3d481e308a6f2fa6714ba3dc33e68ab3915557", symbols: ["DAI", "WBTC"], logoURLs: ["/icons/dai.svg", "/icons/wbtc.png"] },
		{ value: "other", address: "0x9d102ce615ab35ceddda899be47a8da5dc139460", symbols: ["BUSD", "DAI"], logoURLs: ["/icons/busd.svg", "/icons/dai.svg"] },
		{ value: "other", address: "0x1e34dd2f920630e6af04519221ed9004608a6c52", symbols: ["DAI", "WKAVA"], logoURLs: ["/icons/dai.svg", "/icons/wkava.png"] },
		{ value: "other", address: "0xbd87cd1512763eefc14b3717ff42538022e95c95", symbols: ["USDT", "ETH"], logoURLs: ["/icons/usdt.png", "/icons/eth.png"] },
		{ value: "other", address: "0x9f065518185436fbdd72fd7ca7fd99ccaf3f061a", symbols: ["DAI", "USDC"], logoURLs: ["/icons/dai.svg", "/icons/usdc.svg"] },
		{ value: "other", address: "0x02bd2e7f107a15ce8b6414df67f4a7e662218bc9", symbols: ["DAI", "USDT"], logoURLs: ["/icons/dai.svg", "/icons/usdt.svg"] },
		{ value: "other", address: "0x545236b930e5f5f339934296a5d442014978706f", symbols: ["WKAVA", "ETH"], logoURLs: ["/icons/wkava.svg", "/icons/eth.svg"] },
	]
}


export const ROUTER_ADDRESS = "0x923A7273480e73439b73b065d096c58034968504"
export const FACTORY_ADDRESS = '0xbD4C56E952c238389AEE995E1ed504cA646D199B'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: '0x6725f303b657a9451d8ba641348b6761a6cc7a17' // not gamut real factory
}

// all initializers from pancake

export const INIT_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: '0xd0d4c4cd0848c93cb4fd1f498d7013ee6bfb25783ea21593d5834f5d250ece66'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
