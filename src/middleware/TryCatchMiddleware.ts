import { NextApiRequest, NextApiResponse } from 'next';
import { ZodError } from 'zod';

import { CustomError } from '@/exceptions/CustomError';

type MiddlewareFunction = (
  req: NextApiRequest,
  res: NextApiResponse
) => Promise<void>;

export function TryCatchMiddleware(
  middlewareFn: MiddlewareFunction
): MiddlewareFunction {
  return async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
      await middlewareFn(req, res);
    } catch (error) {
      if (error instanceof CustomError) {
        return res.status(error?.status ?? 401).json({
          status: error.status,
          error: error.message,
        });
      } else if (error instanceof ZodError) {
        const parsedErrors = JSON.parse(error.message);
        // Map over the parsed errors and create a formatted string for each
        const formattedErrors = parsedErrors.map(
          (err: {
            code?: string;
            expected?: string;
            received?: string;
            path?: string[];
            message?: string;
          }) => {
            let errorMessage = '';

            if (err.path && Array.isArray(err.path))
              errorMessage += `FieldName: ${err.path.join('.')}. `;
            if (err.code) errorMessage += `Error Code: ${err.code}. `;
            if (err.expected) errorMessage += `Expected: ${err.expected}. `;
            if (err.received) errorMessage += `Received: ${err.received}. `;
            if (err.message) errorMessage += `Message: ${err.message}.`;

            return errorMessage;
          }
        );
        res.status(422).json({
          message: `Bad Request. Errors:`,
          errors: formattedErrors,
        });
      } else if (error instanceof Error) {
        res.status(500).json({
          message: `Internal error. Error: ${error.message}`,
        });
      } else {
        res.status(500).json({
          message: `Internal error. Error: ${error}`,
        });
      }
    }
  };
}
