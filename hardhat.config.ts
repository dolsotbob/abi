import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';
dotenv.config();

// (내가 추가할 부분) 안전한 프라이빗 키 처리 
// const privateKey = process.env.PRIVATE_KEY as string;

// if (!privateKey) {
//   throw new Error("X .env 파일에 PRIVATE_KEY가 없습니다!");
// }

const config: HardhatUserConfig = {
  solidity: '0.8.28',
  networks: {
    ganache: {
      url: 'http://127.0.0.1:7545', // Todo: Ganache RPC URL
      accounts: [process.env.PRIVATE_KEY || '', // Todo: Ganache에서 제공하는 프라이빗 키 사용(.env 파일을 사용합니다)
      ],
    },
  },
};

export default config;
