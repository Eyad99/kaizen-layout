export interface KolDetails_Res {
	kol: Kol;
	callXsAvg: string;
	winCalls: string;
	winRate: number;
	Xs: Xs;
	bestCall: BestCall;
	allCalls: string;
	totalGrowth: number;
	kolImage: KolImage;
	averageBuyPerWallet: number;
	activeWallets: number;
	traders: Trader[];
	recentSignals: RecentSignal[];
	bestSignals: BestSignal[];
}

export interface Kol {
	id: number;
	channelChatId: string;
	name: string;
	description: string;
	usersCount: number;
	username: string;
	avgBuyPower: number;
	signalsCount: number;
	topWinStreak: number;
	currentWinStreak: number;
	createdAt: string;
	updatedAt: string;
}

export interface Xs {
	[key: string]: string;
}

export interface BestCall {
	id: number;
	tokenName: string;
	tokenContractAddress: string;
	direction: string;
	chain: string;
	priceOnCall: string;
	average1hVolumeBefore: number;
	volume1hAfter: number;
	createdAt: string;
	updatedAt: string;
	kolChannelId: number;
	ath: string;
	atl: string;
	mcap: number;
	liquidity: number;
	img: string;
	supply: string;
	symbol: string;
	tokenAge: number;
	mintedAt: string;
	callTimeStamp: string;
	athCallXs: string;
	originalSingalId: any;
	winStatus: string;
	trackingStatus: string;
	athTime: string;
	atlTime: string;
}

export interface KolImage {
	type: string;
	data: number[];
}

export interface Trader {
	id: number;
	wallet: string;
	signalsTraded: number;
	averageVolume: number;
	totalVolume: number;
	createdAt: string;
	updatedAt: string;
}

export interface RecentSignal {
	id: number;
	tokenName: string;
	symbol: string;
	tokenContractAddress: string;
	direction: string;
	chain: string;
	callTimeStamp: string;
	tokenAge: number;
	priceOnCall: string;
	mcap: number;
	liquidity: number;
	mintedAt: string;
	supply: string;
	img: string;
	average1hVolumeBefore: number;
	volume1hAfter: number;
	ath: string;
	athCallXs: string;
	atl: string;
	winStatus: string;
	trackingStatus: string;
	athTime: string;
	atlTime: string;
	originalSingalId: any;
	createdAt: string;
	updatedAt: string;
}

export interface BestSignal {
	id: number;
	tokenName: string;
	symbol: string;
	tokenContractAddress: string;
	direction: string;
	chain: string;
	callTimeStamp: string;
	tokenAge: number;
	priceOnCall: string;
	mcap: number;
	liquidity: number;
	mintedAt: string;
	supply: string;
	img: string;
	average1hVolumeBefore: number;
	volume1hAfter: number;
	ath: string;
	athCallXs: string;
	atl: string;
	winStatus: string;
	trackingStatus: string;
	athTime: string;
	atlTime: string;
	originalSingalId: any;
	createdAt: string;
	updatedAt: string;
}

export interface KolOpportunity_Ress {
	monthlySignalsCount: MonthlySignalsCount[];
	xStats: XStats;
	marketcapStats: MarketcapStats;
	averageTimeToAthInHours: number;
	averageTimeToAtlInHours: number;
	averageTimeToDumpAfterAthInHours: number;
	percentageOfTokensDumped: number;
	addressesWithCallPrice: AddressesWithCallPrice[];
}

export interface MonthlySignalsCount {
	month: string;
	signalCount: number;
}

export interface XStats {
	averageX: number;
	medianX: any;
	highestX: number;
	lowestX: number;
}

export interface MarketcapStats {
	averageMarketCap: number;
	medianMarketCap: number;
	modeMarketCap: number;
}

export interface AddressesWithCallPrice {
	tokenContractAddress: string;
	priceOnCall: string;
}

export interface StrategyBuilder_Req {
	startingBalance: number;
	riskPerTrade: number;
	tp: number;
	sl: number;
	kolId: number;
	filters: { fieldName: string; operation: string; value: number }[];
}
