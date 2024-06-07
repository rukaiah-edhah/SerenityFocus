import createImageUrlBuilder from '@sanity/image-url';
import sanityClient from './sanityClient';

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}