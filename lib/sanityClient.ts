import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'gao5768u', 
  dataset: 'production', 
  useCdn: false, // change it to true later :)
});