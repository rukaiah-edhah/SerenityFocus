import { createClient } from '@sanity/client';


const config = {
  projectId: 'gao5768u', 
  dataset: 'production', 
  useCdn: false, // change it to true later :)
  apiVersion: '2021-08-31', 
};

export const sanityClient = createClient(config);
export const getSanityImageConfig = () => config;