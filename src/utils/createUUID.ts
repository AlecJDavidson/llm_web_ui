import { v4 as uuidv4 } from 'uuid';

export const generateRandomUUID = (): string => {
  return uuidv4();
};
