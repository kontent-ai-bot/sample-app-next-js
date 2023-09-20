import { isValidCollectionCodename } from "../types/perCollection";

const { KONTENT_COLLECTION_CODENAME, NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID } = process.env;

if (!isValidCollectionCodename(KONTENT_COLLECTION_CODENAME)) {
  throw new Error(`Invalid collection codename "${KONTENT_COLLECTION_CODENAME}".`);
}

if (!NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID) {
  throw new Error(`Environment variable NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID is missing`);
}

/** Use only on server - for client use `useSiteCodename` hook */
export const siteCodename = KONTENT_COLLECTION_CODENAME;
export const commonCollection = "common";

export const defaultEnvId = NEXT_PUBLIC_KONTENT_ENVIRONMENT_ID;

// Domains
const { NEXT_PUBLIC_KONTENT_DAPI_DOMAIN, NEXT_PUBLIC_KONTENT_PREVIEW_DAPI_DOMAIN, NEXT_PUBLIC_KONTENT_MAPI_DOMAIN, NEXT_PUBLIC_KONTENT_IAPI_DOMAIN, NEXT_PUBLIC_KONTENT_AUTH_DOMAIN, NEXT_PUBLIC_KONTENT_DOMAIN } = process.env;

export const deliveryApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `https://deliver.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_DAPI_DOMAIN;

export const deliveryPreviewApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `https://preview-deliver.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_PREVIEW_DAPI_DOMAIN;

export const managementApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `https://manage.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_MAPI_DOMAIN;

export const internalApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `https://app.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_IAPI_DOMAIN;

export const authApiDomain = NEXT_PUBLIC_KONTENT_DOMAIN ? `login.${NEXT_PUBLIC_KONTENT_DOMAIN}` : NEXT_PUBLIC_KONTENT_AUTH_DOMAIN;
