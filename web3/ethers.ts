import { ethers } from 'ethers';
import { abi, address as contractAddress } from '../abis/DataType.json'; // Todo: 배포먼저 실행해주세요. (npm run deploy)
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

const provider = new ethers.JsonRpcProvider('http://127.0.0.1:7545'); // Todo: 가나슈의 RPC SERVER 주소를 입력합니다.
const privateKey = process.env.PRIVATE_KEY || '';

export const checkNetworkInfo = async () => {
  return await provider.getNetwork();
};
/*
    위의 코드들은 지우지 않습니다.
    
    getSigner와 getContract는 다음의 데이터를 이용하여 구현합니다.

    provider : JSON-RPC API를 통해 블록체인과 통신하는 역할자
    abi : DataType Contract의 ABI 데이터
    contractAddress : DataType Contract의 Address
    privateKey : .env 파일에 설정된 가나슈 계정의 프라이빗 키
*/


export const getSigner = () => {
  // Todo: privateKey를 이용하여 Wallet 인스턴스를 리턴합니다. - new ethers.Wallet(프라이빗 키, provider)
  // (나) 누가 이 트잭을 보낼건가요? 즉 누가 서명하고 돈 쓰는 사람(지갑 주인) 인가요? 
  return new ethers.Wallet(privateKey, provider);
};

export const getContract = () => {
  // Todo: DataType Contract 인스턴스를 리턴합니다. - new ethers.Contract(컨트랙트 주소, ABI, signer)
  // 이 후에 구현하는 컨트랙트 호출은 구현한 getContract를 사용합니다.
  // (나) 어떤 컨트랙트 사용할 거죠? 
  if (!process.env.CONTRACT_ADDRESS) {
    throw new Error("X .env에 CONTRACT_ADDRESS가 없습니다.")
  }

  const signer = getSigner();

  return new ethers.Contract(contractAddress, abi, signer);
};

export const positiveNumber = async () => {
  // Todo: positiveNumber 함수는 컨트랙트의 positiveNumber 값을 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.positiveNumber();
  return value;
};

export const negativeNumber = async () => {
  // Todo: negativeNumber 함수는 컨트랙트의 negativeNumber 값을 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.negativeNumber();
  return value;
};

export const isActive = async () => {
  // Todo: isActive 함수는 컨트랙트의 isActive 값을 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.isActive();
  return value;
};

export const wallet = async () => {
  // Todo: wallet 함수는 컨트랙트의 wallet 값을 리턴해야 합니다,
  // (나) 예를 들어 자선단체에서 기부금 받는 컨트랙트라면, 기부금을 받을 지갑(바뀔 수 있음)
  const contract = getContract();

  const value = await contract.wallet();
  return value;
};

export const recipient = async () => {
  // Todo: recipient 함수는 컨트랙트를 배포한 주소를 리턴해야 합니다.
  // (나) 예를 들어 자선단체에서 기부금 받는 컨트랙트라면, 컨트랙트를 만든 사람(운영자). 배포할 때 자기 주소를 recipient로 지정함. (안 바뀜)
  const contract = getContract();

  const value = await contract.recipient();
  return value;
};

export const fixedData = async () => {
  // Todo: fixedData 함수는 컨트랙트의 fixedData 값을 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.fixedData();
  return value;
};

export const dynamicData = async () => {
  // Todo: fixedData 함수는 컨트랙트의 dynamicData 값을 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.dynamicData();
  return value;
};

export const currentState = async () => {
  // Todo: currentState 함수는 컨트랙트의 currentState 값을 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.currentState();
  return value;
};

export const getDynamicDataLength = async () => {
  // Todo: getDynamicDataLength 함수는 
  // 컨트랙트의 getDynamicDataLength 값을 리턴해야 합니다.
  const contract = getContract();

  const length = await contract.getDynamicDataLength();
  return length;
};

export const getDetails = async () => {
  // Todo: getDetails 함수는 컨트랙트의 getDetails 값을 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.getDetails();
  return value;
};

export const setPositiveNumber = async (_positive: number) => {
  // Todo: setPositiveNumber 함수의 인자를 사용해 컨트랙트의 setPositiveNumber를 실행시켜 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.setPositiveNumber(_positive);
  return value;
};

export const setNegativeNumber = async (_negative: number) => {
  // Todo: setNegativeNumber 함수의 인자를 사용해 컨트랙트의 setNegativeNumber를 실행시켜 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.setNegativeNumber(_negative);
  return value;
};

export const toggleActive = async () => {
  // Todo: 컨트랙트의 toggleActive를 실행시켜 리턴해야 합니다.
  const contract = getContract();

  const value = await contract.toggleActive();
  return value;
};

export const setState = async (_newState: number) => {
  // Todo: setState 함수의 인자를 사용해 컨트랙트의 setState를 실행시켜 리턴해야 합니다.
  const contract = getContract();

  const currentState = await contract.setState(_newState);
  return currentState;
};

export const setWallet = async (address: string) => {
  // Todo: setWallet 함수의 인자를 사용해 컨트랙트의 setWallet을 실행시켜 리턴해야 합니다.
  const contract = getContract();

  const newWallet = await contract.setWallet(address);
  return newWallet;
};

export const setFixedData = async (_newFixedData: string) => {
  // Todo: setFixedData 함수의 인자를 사용해 컨트랙트의 setFixedData을 실행시켜 리턴해야 합니다.
  const contract = getContract();

  const newFixedData = await contract.setFixedData(_newFixedData);
  return newFixedData;
};

export const setDynamicData = async (_newDynamicData: string) => {
  // Todo: setDynamicData 함수의 인자를 사용해 컨트랙트의 setDynamicData을 실행시켜 리턴해야 합니다.
  const contract = getContract();

  const newDynamicData = await contract.setDynamicData(_newDynamicData);
  return newDynamicData;
};
