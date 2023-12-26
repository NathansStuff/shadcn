import { embedOpenaiQuery } from '@/backend/features/langchain/langchainService';
import {
  ECountryCode,
  EIndustry,
  EStateCode,
  Info,
  InfoRequest,
  InfoWithId,
} from '@/types';

import {
  createInfo,
  deleteInfoById,
  findAllInfos,
  findInfoById,
  queryInfoByVector,
  updateInfoById,
} from './infoDal';

// Get all Infos
export async function getAllInfos(): Promise<InfoWithId[]> {
  const Infos = await findAllInfos();
  return Infos;
}

// Get Info by id
export async function getInfoById(id: string): Promise<InfoWithId | null> {
  const Info = await findInfoById(id);
  return Info;
}

// Create Info
export async function createNewInfo(Info: InfoRequest): Promise<InfoWithId> {
  const vectors = await embedOpenaiQuery(Info.text);
  const InfoWithVectors: Info = { ...Info, vectors };
  const newInfo = await createInfo(InfoWithVectors);
  return newInfo;
}

// Update Info
export async function updateInfo(
  id: string,
  updatedData: Partial<InfoRequest>
): Promise<InfoWithId | null> {
  const updatedInfo: Partial<Info> = { ...updatedData };
  if (updatedData.text) {
    const vectors = await embedOpenaiQuery(updatedData.text);
    updatedInfo.vectors = vectors;
  }
  const Info = await updateInfoById(id, updatedInfo);
  return Info;
}

// Delete Info
export async function deleteInfo(id: string): Promise<void | null> {
  const response = await deleteInfoById(id);
  return response;
}

// Query Info
export async function queryInfo(
  text: string,
  stateCode: EStateCode,
  countryCode: ECountryCode,
  industry: EIndustry
): Promise<InfoWithId[] | null> {
  const vectors = await embedOpenaiQuery(text);
  const result = await queryInfoByVector(
    vectors,
    stateCode,
    countryCode,
    industry
  );
  return result;
}
