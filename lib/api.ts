const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8080";

const API_VERSION = "/v1";

export const API_URLS = {
  HOME: `${BASE_URL}${API_VERSION}/home`,
  SEARCH: `${BASE_URL}${API_VERSION}/search`,
  VIDEO_SEARCH: `${BASE_URL}${API_VERSION}/video`,
  VIDEO_DETAIL: (slugId: string) => `${BASE_URL}${API_VERSION}/video/${slugId}`,
  DIY_SEARCH: `${BASE_URL}${API_VERSION}/diy`,
  DIY_DETAIL: (slugId: string) => `${BASE_URL}${API_VERSION}/diy/${slugId}`,
  LIKE: `${BASE_URL}${API_VERSION}/like`,
};
