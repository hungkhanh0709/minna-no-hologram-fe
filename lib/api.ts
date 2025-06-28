const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const API_VERSION = "/v1";

export const API_URLS = {
  HOME: `${BASE_URL}${API_VERSION}/home`,
  SEARCH: `${BASE_URL}${API_VERSION}/search`,
  //categories
  VIDEO_SEARCH: `${BASE_URL}${API_VERSION}/video`,
  VIDEO_DETAIL: (slugId: string) => `${BASE_URL}${API_VERSION}/video/${slugId}`,
  DIY_SEARCH: `${BASE_URL}${API_VERSION}/diy`,
  DIY_DETAIL: (slugId: string) => `${BASE_URL}${API_VERSION}/diy/${slugId}`,
  LIKE: `${BASE_URL}${API_VERSION}/like`,
};
