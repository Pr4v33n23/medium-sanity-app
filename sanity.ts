import { createClient, createCurrentUserHook } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'




export const config = {
    //* these informations are pulled out from sanity.json from the sanity project
    
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: "2021-03-25",
    useCdn: process.env.NODE_ENV === "production"
}

export const sanityClient = createClient(config);


export const urlFor = (source:any) => (imageUrlBuilder(sanityClient).image(source));

export const useCurrentUser = createCurrentUserHook(config);