export interface Profile {
  fullName: string;
  name: string;
  age: string;
  description: string;
  image: string;
  study: string;
  linkedin?: string; //TODO fjerne optional når alt er testa
  github?: string;
  cv?: string;

  //TODO: hva mer?
}
