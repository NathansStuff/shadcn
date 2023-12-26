import { NextApiRequest, NextApiResponse } from 'next';

import { BadRequestError } from '@/exceptions/BadRequestError';
import {
  InfoRequest,
  InfoWithId,
  ParamsWithId,
  PartialInfoRequest,
} from '@/types';
import { QueryRequest } from '@/types/QueryRequest';

import {
  createNewInfo,
  deleteInfo,
  getAllInfos,
  getInfoById,
  queryInfo,
  updateInfo,
} from './infoService';

// Get all Infos
export async function getAllInfosHandler(
  req: NextApiRequest,
  res: NextApiResponse<InfoWithId[]>
): Promise<void> {
  const Infos = await getAllInfos();
  res.status(200).json(Infos);
}

// Get Info by id
export async function getInfoByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<InfoWithId>
): Promise<void> {
  const safeId = ParamsWithId.parse(req.query);
  const response = await getInfoById(safeId.id);
  if (!response) throw new BadRequestError('Info not found');

  res.status(200).json(response);
}

// Create Info
export async function createInfoHandler(
  req: NextApiRequest,
  res: NextApiResponse<InfoWithId>
): Promise<void> {
  const safeInfoData = InfoRequest.parse(req.body);
  const newInfo = await createNewInfo(safeInfoData);
  res.status(201).json(newInfo);
}

// Update Info
export async function updateInfoHandler(
  req: NextApiRequest,
  res: NextApiResponse<InfoWithId>
): Promise<void> {
  const safeInfoData = PartialInfoRequest.parse(req.body);

  const safeId = ParamsWithId.parse(req.query);

  const result = await updateInfo(safeId.id, safeInfoData);
  if (result) {
    res.status(200).json(result);
  } else {
    throw new BadRequestError('Info not found');
  }
}

// Delete Info
export async function deleteInfoByIdHandler(
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
): Promise<void> {
  const safeId = ParamsWithId.parse(req.query);
  const response = await deleteInfo(safeId.id);
  if (response === null) throw new BadRequestError('Info not found');
  const message = `Info with id ${safeId.id} deleted`;
  res.status(204).json({ message });
}

// Query Info
export async function queryInfoHandler(
  req: NextApiRequest,
  res: NextApiResponse<InfoWithId[] | null>
): Promise<void> {
  const { text, stateCode, countryCode, industry } = QueryRequest.parse(
    req.body
  );

  const response = await queryInfo(text, stateCode, countryCode, industry);

  res.status(200).json(response);
}
