import PerformanceMatrics from '@/components/pages/performance-matrics';
import React from 'react';

const Kol = () => {
	const data = {
		statusCode: 200,
		message: 'Success',
		data: {
			kol: {
				id: 1,
				channelChatId: '2226351966',
				name: 'Titans calls',
				description: 'Nothing in this channel is financial advice.\n\nCollect currency and acquire wealth',
				usersCount: 227,
				username: 'ctitancalls',
				avgBuyPower: 2321,
				signalsCount: 9,
				createdAt: '2024-11-27T21:28:13.629Z',
				updatedAt: '2025-01-03T15:43:36.000Z',
			},
			callXsAvg: '2.112222',
			winCalls: '4',
			winRate: 0.4444444444444444,
			Xs: {
				x3: '2',
				x5: '1',
				x10: '0',
				x20: '0',
				x40: '0',
				x50: '0',
				x100: '0',
			},
			bestCall: {
				id: 6,
				tokenName: 'SAPPHIE THE POMSKY',
				tokenContractAddress: 'EVukCmmsSbs4Am9W5i8Hdf2me3sZGbpydSSmvmNwVgLF',
				direction: 'BUY',
				priceOnCall: '0.000042329503920110617',
				average1hVolumeBefore: 606304,
				volume1hAfter: 103764,
				createdAt: '2024-11-27T21:28:52.650Z',
				updatedAt: '2024-12-15T16:07:00.529Z',
				kolChannelId: 1,
				chain: 'solana',
				ath: '0.00024605908429255424',
				atl: '0.000007993841716181654',
				mcap: 42324,
				liquidity: 19441,
				supply: '999877300.6134969',
				img: 'https://dd.dexscreener.com/ds-data/tokens/solana/EVukCmmsSbs4Am9W5i8Hdf2me3sZGbpydSSmvmNwVgLF.png?key=71ea78',
				symbol: 'SAPPHIRE',
				athCallXs: '5.81',
				mintedAt: '2024-12-14T18:31:33.000Z',
				callTimeStamp: '2024-11-15T15:35:30.000Z',
				tokenAge: 3,
			},
			allCalls: '9',
			totalGrowth: 4.461481777284,

			averageBuyPerWallet: 89.26923076923077,
			activeWallets: 26,
			traders: [
				{
					id: 1,
					wallet: '7ti77iFqKbFvEtmgzdobwYxSDNcfnkEwFtv5RUzpiKbc',
					signalsTraded: 7,
					averageVolume: 573,
					totalVolume: 4584,
					createdAt: '2024-11-27T21:29:27.176Z',
					updatedAt: '2024-11-27T21:30:12.000Z',
				},
				{
					id: 6,
					wallet: 'ZG98FUCjb8mJ824Gbs6RsgVmr1FhXb2oNiJHa2dwmPd',
					signalsTraded: 6,
					averageVolume: 39,
					totalVolume: 274,
					createdAt: '2024-11-27T21:29:51.443Z',
					updatedAt: '2024-11-27T21:30:12.000Z',
				},
				{
					id: 3,
					wallet: '8qS4t3Z8qq64y66JPD8gbYX5Pr4cnR1z3BWWpQLWDbuq',
					signalsTraded: 5,
					averageVolume: 495,
					totalVolume: 2971,
					createdAt: '2024-11-27T21:29:51.442Z',
					updatedAt: '2024-11-27T21:30:12.000Z',
				},
				{
					id: 2,
					wallet: '5YET3YapxD6to6rqPqTWB3R9pSbURy6yduuUtoZkzoPX',
					signalsTraded: 4,
					averageVolume: 813,
					totalVolume: 4067,
					createdAt: '2024-11-27T21:29:51.441Z',
					updatedAt: '2024-11-27T21:30:08.000Z',
				},
				{
					id: 5,
					wallet: 'EaCD4Fx892m96HGzbbSHjyeJJffs45HrbbPEafkKqdWk',
					signalsTraded: 3,
					averageVolume: 8926,
					totalVolume: 35706,
					createdAt: '2024-11-27T21:29:51.443Z',
					updatedAt: '2024-11-27T21:29:58.000Z',
				},
				{
					id: 11,
					wallet: '8MqRTAQnjhDYH7TWS1b1DjFog4CLZfySWE5cZeotG2VW',
					signalsTraded: 3,
					averageVolume: 1938,
					totalVolume: 7752,
					createdAt: '2024-11-27T21:29:58.050Z',
					updatedAt: '2024-11-27T21:30:02.000Z',
				},
				{
					id: 12,
					wallet: 'BQXkq91CoSpGvn36BNQKywN5ZEVQzFSfd4MbPJNmhpkB',
					signalsTraded: 3,
					averageVolume: 293,
					totalVolume: 1172,
					createdAt: '2024-11-27T21:30:02.154Z',
					updatedAt: '2024-11-27T21:30:08.000Z',
				},
				{
					id: 15,
					wallet: '4UsrAtCctARjXr6TKPDp8V3h2NNt9WcsmMuYZbHk6QoL',
					signalsTraded: 3,
					averageVolume: 1693,
					totalVolume: 6774,
					createdAt: '2024-11-27T21:30:08.362Z',
					updatedAt: '2024-11-27T21:30:12.000Z',
				},
				{
					id: 16,
					wallet: '6BLRiB3sCVrYbJiQmcCQYKXdSAiJkQ5ZZ2BJFognbgFP',
					signalsTraded: 3,
					averageVolume: 1347,
					totalVolume: 5388,
					createdAt: '2024-11-27T21:30:08.362Z',
					updatedAt: '2024-11-27T21:30:12.000Z',
				},
				{
					id: 19,
					wallet: 'dexvcNUf31JyHkxcsceWpqGErhXe5Eu5QWLe993m1Pu',
					signalsTraded: 3,
					averageVolume: 330,
					totalVolume: 1322,
					createdAt: '2024-11-27T21:30:08.367Z',
					updatedAt: '2024-11-27T21:30:12.000Z',
				},
				{
					id: 4,
					wallet: 'Emajgzqt9QKyfXARSxdkKmzhnXZDw2KENm6wB7XB4XBW',
					signalsTraded: 2,
					averageVolume: 238,
					totalVolume: 714,
					createdAt: '2024-11-27T21:29:51.442Z',
					updatedAt: '2024-11-27T21:29:51.442Z',
				},
				{
					id: 7,
					wallet: 'J6L9fwPruZ8RmhTVd1FSyFo4ERisiooiYwESwsov2ZP',
					signalsTraded: 2,
					averageVolume: 6893,
					totalVolume: 20681,
					createdAt: '2024-11-27T21:29:58.044Z',
					updatedAt: '2024-11-27T21:29:58.044Z',
				},
				{
					id: 8,
					wallet: 'DQ97nu7t7fbhAtZUyam8EzNsxUzw5bgEE5seBfevPwRK',
					signalsTraded: 2,
					averageVolume: 2156,
					totalVolume: 6468,
					createdAt: '2024-11-27T21:29:58.048Z',
					updatedAt: '2024-11-27T21:29:58.048Z',
				},
				{
					id: 9,
					wallet: 'JD25qVdtd65FoiXNmR89JjmoJdYk9sjYQeSTZAALFiMy',
					signalsTraded: 2,
					averageVolume: 465,
					totalVolume: 1396,
					createdAt: '2024-11-27T21:29:58.049Z',
					updatedAt: '2024-11-27T21:29:58.049Z',
				},
				{
					id: 10,
					wallet: 'JD38n7ynKYcgPpF7k1BhXEeREu1KqptU93fVGy3S624k',
					signalsTraded: 2,
					averageVolume: 765,
					totalVolume: 2295,
					createdAt: '2024-11-27T21:29:58.049Z',
					updatedAt: '2024-11-27T21:29:58.049Z',
				},
			],
			recentSignals: [
				{
					id: 9,
					tokenName: 'Church of Ricardo Milos',
					symbol: 'CRM',
					tokenContractAddress: 'GjJr6oUNK5TBFdfC3fBo2iAQXhmbjfPPYuCB9GJuz2HA',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 8,
					priceOnCall: '0.0000734308152287216',
					mcap: 73428,
					liquidity: 16261,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999964589.2351274',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/GjJr6oUNK5TBFdfC3fBo2iAQXhmbjfPPYuCB9GJuz2HA.png?key=7aadbc',
					average1hVolumeBefore: 117485,
					volume1hAfter: 56877,
					ath: '0.00007749960531649335',
					athCallXs: '1.06',
					atl: '0.0000031362882465930525',
					createdAt: '2024-11-27T21:28:58.513Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 8,
					tokenName: 'XHAT',
					symbol: 'XHAT',
					tokenContractAddress: 'C7DFKBm8C2TtypD2XB8wK6d12LHA4CV5VdzrHhrepump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 4,
					priceOnCall: '0.00016394403155702274',
					mcap: 163909,
					liquidity: 40172,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999791883.4547347',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/C7DFKBm8C2TtypD2XB8wK6d12LHA4CV5VdzrHhrepump.png?key=18f9d7',
					average1hVolumeBefore: 16342,
					volume1hAfter: 42081,
					ath: '0.00019782001976549585',
					athCallXs: '1.21',
					atl: '0.0000447700288773161',
					createdAt: '2024-11-27T21:28:55.837Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 7,
					tokenName: 'sus',
					symbol: 'sus',
					tokenContractAddress: 'EM5XFHRjzDexTbrw9uEfMGeZRUU7qnngN5rToEb2pump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 30,
					priceOnCall: 'NaN',
					mcap: 0,
					liquidity: 66458,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '1000238568.5884691',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/EM5XFHRjzDexTbrw9uEfMGeZRUU7qnngN5rToEb2pump.png?key=a7136f',
					average1hVolumeBefore: 7387,
					volume1hAfter: 66651,
					ath: '0.0003957844113399898',
					athCallXs: '0.00',
					atl: '0.00009089474378209326',
					createdAt: '2024-11-27T21:28:55.293Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 6,
					tokenName: 'SAPPHIE THE POMSKY',
					symbol: 'SAPPHIRE',
					tokenContractAddress: 'EVukCmmsSbs4Am9W5i8Hdf2me3sZGbpydSSmvmNwVgLF',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 3,
					priceOnCall: '0.000042329503920110617',
					mcap: 42324,
					liquidity: 19441,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999877300.6134969',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/EVukCmmsSbs4Am9W5i8Hdf2me3sZGbpydSSmvmNwVgLF.png?key=71ea78',
					average1hVolumeBefore: 606304,
					volume1hAfter: 103764,
					ath: '0.00024605908429255424',
					athCallXs: '5.81',
					atl: '0.000007993841716181654',
					createdAt: '2024-11-27T21:28:52.650Z',
					updatedAt: '2024-12-15T16:07:00.529Z',
				},
				{
					id: 5,
					tokenName: 'Puff Puff Penguin',
					symbol: 'PUFFPUFF',
					tokenContractAddress: 'EzDVdvLrUXFaogdVrtxinHu5EwGt9v4UeNsqyv6fpump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 1,
					priceOnCall: '0.00046207868692952215',
					mcap: 462048,
					liquidity: 46454,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999934572.101544',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/EzDVdvLrUXFaogdVrtxinHu5EwGt9v4UeNsqyv6fpump.png?key=556710',
					average1hVolumeBefore: 72116,
					volume1hAfter: 187876,
					ath: '0.0011939337868632988',
					athCallXs: '2.58',
					atl: '0.00001973992791550852',
					createdAt: '2024-11-27T21:28:49.143Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 4,
					tokenName: 'Crazy Frog',
					symbol: 'CRAZYFROG',
					tokenContractAddress: 'AXe5hPtdQrPkTrp7PLQMWiuKZQ5PLoXNqTVQci1Rpump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 5,
					priceOnCall: '0.0002607834330960631',
					mcap: 260776,
					liquidity: 33023,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999974937.3433584',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/AXe5hPtdQrPkTrp7PLQMWiuKZQ5PLoXNqTVQci1Rpump.png?key=8e028d',
					average1hVolumeBefore: 71011,
					volume1hAfter: 97560,
					ath: '0.00054426373453472',
					athCallXs: '2.09',
					atl: '0.000016636620413395193',
					createdAt: '2024-11-27T21:28:41.363Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 3,
					tokenName: 'uwu',
					symbol: 'uwu',
					tokenContractAddress: '67EMa43TZVQzggmhUyKnShmcSU5hVWcQDjVvLJXrS2Li',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 4,
					priceOnCall: '0.0006161573846199355',
					mcap: 615220,
					liquidity: 34208,
					mintedAt: '2024-12-09T15:23:00.000Z',
					supply: '998479155.4839864',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/67EMa43TZVQzggmhUyKnShmcSU5hVWcQDjVvLJXrS2Li.png?key=a656d3',
					average1hVolumeBefore: 894608,
					volume1hAfter: 1023270,
					ath: '0.002663228159167663',
					athCallXs: '4.32',
					atl: '0.000029276486724896856',
					createdAt: '2024-11-27T21:28:37.886Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 2,
					tokenName: 'Gegagedigedagedago',
					symbol: 'NUGGET',
					tokenContractAddress: 'NUGuzrXB5JwxBAhTP8QHa8aiNBN8suoWiN7wiRppRty',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 2,
					priceOnCall: '0.0068958524951090875',
					mcap: 6897377,
					liquidity: 60214,
					mintedAt: '2024-11-30T20:00:00.000Z',
					supply: '1000221145.1075431',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/NUGuzrXB5JwxBAhTP8QHa8aiNBN8suoWiN7wiRppRty.png?key=8b7c9f',
					average1hVolumeBefore: 31364,
					volume1hAfter: 35636,
					ath: '0.01003417987214445',
					athCallXs: '1.46',
					atl: '0.00026228491978160467',
					createdAt: '2024-11-27T21:28:34.186Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 1,
					tokenName: 'Gen Z Quant',
					symbol: 'Quant',
					tokenContractAddress: '3an8rhdepsLCya22af7qDBKPbdomw8K4iCHXaA2Gpump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 1,
					priceOnCall: '0.024234608072548593',
					mcap: 24243490,
					liquidity: 543997,
					mintedAt: '0000-00-00 00:00:00',
					supply: '1000366525.4237288',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/3an8rhdepsLCya22af7qDBKPbdomw8K4iCHXaA2Gpump.png?key=9264fb',
					average1hVolumeBefore: 3012918,
					volume1hAfter: 1629208,
					ath: '0.01158793103926581',
					athCallXs: '0.48',
					atl: '0.0008297971766988021',
					createdAt: '2024-11-27T21:28:31.796Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
			],
			bestSignals: [
				{
					id: 6,
					tokenName: 'SAPPHIE THE POMSKY',
					symbol: 'SAPPHIRE',
					tokenContractAddress: 'EVukCmmsSbs4Am9W5i8Hdf2me3sZGbpydSSmvmNwVgLF',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 3,
					priceOnCall: '0.000042329503920110617',
					mcap: 42324,
					liquidity: 19441,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999877300.6134969',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/EVukCmmsSbs4Am9W5i8Hdf2me3sZGbpydSSmvmNwVgLF.png?key=71ea78',
					average1hVolumeBefore: 606304,
					volume1hAfter: 103764,
					ath: '0.00024605908429255424',
					athCallXs: '5.81',
					atl: '0.000007993841716181654',
					createdAt: '2024-11-27T21:28:52.650Z',
					updatedAt: '2024-12-15T16:07:00.529Z',
				},
				{
					id: 3,
					tokenName: 'uwu',
					symbol: 'uwu',
					tokenContractAddress: '67EMa43TZVQzggmhUyKnShmcSU5hVWcQDjVvLJXrS2Li',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 4,
					priceOnCall: '0.0006161573846199355',
					mcap: 615220,
					liquidity: 34208,
					mintedAt: '2024-12-09T15:23:00.000Z',
					supply: '998479155.4839864',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/67EMa43TZVQzggmhUyKnShmcSU5hVWcQDjVvLJXrS2Li.png?key=a656d3',
					average1hVolumeBefore: 894608,
					volume1hAfter: 1023270,
					ath: '0.002663228159167663',
					athCallXs: '4.32',
					atl: '0.000029276486724896856',
					createdAt: '2024-11-27T21:28:37.886Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 5,
					tokenName: 'Puff Puff Penguin',
					symbol: 'PUFFPUFF',
					tokenContractAddress: 'EzDVdvLrUXFaogdVrtxinHu5EwGt9v4UeNsqyv6fpump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 1,
					priceOnCall: '0.00046207868692952215',
					mcap: 462048,
					liquidity: 46454,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999934572.101544',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/EzDVdvLrUXFaogdVrtxinHu5EwGt9v4UeNsqyv6fpump.png?key=556710',
					average1hVolumeBefore: 72116,
					volume1hAfter: 187876,
					ath: '0.0011939337868632988',
					athCallXs: '2.58',
					atl: '0.00001973992791550852',
					createdAt: '2024-11-27T21:28:49.143Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 4,
					tokenName: 'Crazy Frog',
					symbol: 'CRAZYFROG',
					tokenContractAddress: 'AXe5hPtdQrPkTrp7PLQMWiuKZQ5PLoXNqTVQci1Rpump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 5,
					priceOnCall: '0.0002607834330960631',
					mcap: 260776,
					liquidity: 33023,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999974937.3433584',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/AXe5hPtdQrPkTrp7PLQMWiuKZQ5PLoXNqTVQci1Rpump.png?key=8e028d',
					average1hVolumeBefore: 71011,
					volume1hAfter: 97560,
					ath: '0.00054426373453472',
					athCallXs: '2.09',
					atl: '0.000016636620413395193',
					createdAt: '2024-11-27T21:28:41.363Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 2,
					tokenName: 'Gegagedigedagedago',
					symbol: 'NUGGET',
					tokenContractAddress: 'NUGuzrXB5JwxBAhTP8QHa8aiNBN8suoWiN7wiRppRty',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 2,
					priceOnCall: '0.0068958524951090875',
					mcap: 6897377,
					liquidity: 60214,
					mintedAt: '2024-11-30T20:00:00.000Z',
					supply: '1000221145.1075431',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/NUGuzrXB5JwxBAhTP8QHa8aiNBN8suoWiN7wiRppRty.png?key=8b7c9f',
					average1hVolumeBefore: 31364,
					volume1hAfter: 35636,
					ath: '0.01003417987214445',
					athCallXs: '1.46',
					atl: '0.00026228491978160467',
					createdAt: '2024-11-27T21:28:34.186Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 8,
					tokenName: 'XHAT',
					symbol: 'XHAT',
					tokenContractAddress: 'C7DFKBm8C2TtypD2XB8wK6d12LHA4CV5VdzrHhrepump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 4,
					priceOnCall: '0.00016394403155702274',
					mcap: 163909,
					liquidity: 40172,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999791883.4547347',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/C7DFKBm8C2TtypD2XB8wK6d12LHA4CV5VdzrHhrepump.png?key=18f9d7',
					average1hVolumeBefore: 16342,
					volume1hAfter: 42081,
					ath: '0.00019782001976549585',
					athCallXs: '1.21',
					atl: '0.0000447700288773161',
					createdAt: '2024-11-27T21:28:55.837Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 9,
					tokenName: 'Church of Ricardo Milos',
					symbol: 'CRM',
					tokenContractAddress: 'GjJr6oUNK5TBFdfC3fBo2iAQXhmbjfPPYuCB9GJuz2HA',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 8,
					priceOnCall: '0.0000734308152287216',
					mcap: 73428,
					liquidity: 16261,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '999964589.2351274',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/GjJr6oUNK5TBFdfC3fBo2iAQXhmbjfPPYuCB9GJuz2HA.png?key=7aadbc',
					average1hVolumeBefore: 117485,
					volume1hAfter: 56877,
					ath: '0.00007749960531649335',
					athCallXs: '1.06',
					atl: '0.0000031362882465930525',
					createdAt: '2024-11-27T21:28:58.513Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 1,
					tokenName: 'Gen Z Quant',
					symbol: 'Quant',
					tokenContractAddress: '3an8rhdepsLCya22af7qDBKPbdomw8K4iCHXaA2Gpump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 1,
					priceOnCall: '0.024234608072548593',
					mcap: 24243490,
					liquidity: 543997,
					mintedAt: '0000-00-00 00:00:00',
					supply: '1000366525.4237288',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/3an8rhdepsLCya22af7qDBKPbdomw8K4iCHXaA2Gpump.png?key=9264fb',
					average1hVolumeBefore: 3012918,
					volume1hAfter: 1629208,
					ath: '0.01158793103926581',
					athCallXs: '0.48',
					atl: '0.0008297971766988021',
					createdAt: '2024-11-27T21:28:31.796Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
				{
					id: 7,
					tokenName: 'sus',
					symbol: 'sus',
					tokenContractAddress: 'EM5XFHRjzDexTbrw9uEfMGeZRUU7qnngN5rToEb2pump',
					direction: 'BUY',
					chain: 'solana',
					callTimeStamp: '2024-11-15T15:35:30.000Z',
					tokenAge: 30,
					priceOnCall: 'NaN',
					mcap: 0,
					liquidity: 66458,
					mintedAt: '2024-12-14T18:31:33.000Z',
					supply: '1000238568.5884691',
					img: 'https://dd.dexscreener.com/ds-data/tokens/solana/EM5XFHRjzDexTbrw9uEfMGeZRUU7qnngN5rToEb2pump.png?key=a7136f',
					average1hVolumeBefore: 7387,
					volume1hAfter: 66651,
					ath: '0.0003957844113399898',
					athCallXs: '0.00',
					atl: '0.00009089474378209326',
					createdAt: '2024-11-27T21:28:55.293Z',
					updatedAt: '2024-12-15T16:01:46.491Z',
				},
			],
		},
	};
	return (
		<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
			{/* <div className='grid auto-rows-min gap-4 md:grid-cols-2'>
				<div className='aspect-video rounded-xl bg-secondary' />
				<div className='aspect-video rounded-xl bg-secondary' />
			</div> */}

			<div className='grid auto-rows-min'>
				<div className='rounded-xl bg-secondary py-4 px-6'>
					<PerformanceMatrics data={data.data} />
				</div>
			</div>

			{/* <div className='grid auto-rows-min'>
				<div className='aspect-video rounded-xl bg-secondary' />
			</div> */}
		</div>
	);
};

export default Kol;