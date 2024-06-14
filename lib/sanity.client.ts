import { createClient } from '@sanity/client';


const config = {
  projectId: 'gao5768u', 
  dataset: 'production', 
  useCdn: false, // change it to true later :)
  apiVersion: '2021-08-31', 
  token: process.env.SANITY_API_TOKEN,
};

export const sanityClient = createClient(config);
export const getSanityImageConfig = () => config;