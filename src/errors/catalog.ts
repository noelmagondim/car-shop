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
    message: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};