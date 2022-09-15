export enum ErrorTypes {
  EntityNotFoudnd = 'EntityNotFoudnd',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponseObjetc = {
  message: string,
  httpStatus: number,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObjetc
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFoudnd: {
    message: 'Entity not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    httpStatus: 400,
  },
};