import { mongoDBConnect } from '@/middleware';
import { ECountryCode, EIndustry, EStateCode, Info, InfoWithId } from '@/types';

import { InfoModel } from './infoModel';

// Get all Infos
export async function findAllInfos(): Promise<InfoWithId[]> {
  await mongoDBConnect();
  return await InfoModel.find();
}

// Get Info by ID
export async function findInfoById(id: string): Promise<InfoWithId | null> {
  await mongoDBConnect();
  return await InfoModel.findById(id);
}

// Create a new Info
export async function createInfo(InfoData: Info): Promise<InfoWithId> {
  await mongoDBConnect();
  return await InfoModel.create(InfoData);
}

// Update Info by ID
export async function updateInfoById(
  id: string,
  updatedData: Partial<Info>
): Promise<InfoWithId | null> {
  await mongoDBConnect();
  return await InfoModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });
}

// Delete Info by ID
export async function deleteInfoById(id: string): Promise<void | null> {
  await mongoDBConnect();
  await InfoModel.findByIdAndDelete(id);
}

// Find Info by DocumentId
export async function findInfoByDocumentId(
  documentId: string
): Promise<InfoWithId[] | null> {
  await mongoDBConnect();
  return await InfoModel.find({ documentId });
}

// Query Info
export async function queryInfoByVector(
  vectors: number[],
  stateCode: EStateCode,
  countryCode: ECountryCode,
  industry: EIndustry
): Promise<InfoWithId[]> {
  await mongoDBConnect();

  // define pipeline
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const aggregation: any[] = [
    {
      $vectorSearch: {
        index: 'vector_index',
        path: 'vectors',
        filter: {
          $and: [
            {
              countryCode: {
                $in: [`${countryCode}`],
              },
            },
            {
              stateCode: {
                $in: [`${stateCode}`],
              },
            },
            {
              industry: {
                $in: [`${industry}`],
              },
            },
          ],
        },
        queryVector: vectors,
        numCandidates: 200,
        limit: 10,
      },
    }
  ];

  // run pipeline
  const result = await InfoModel.aggregate(aggregation);

  return result;
}
