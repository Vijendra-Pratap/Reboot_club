'use server';

import {
  suggestSimilarRequests,
  type SimilarRequestSuggestionOutput,
} from '@/ai/flows/similar-request-suggestion';

export async function getSimilarRequestSuggestions(
  requestDetails: string
): Promise<SimilarRequestSuggestionOutput> {
  if (!requestDetails || requestDetails.trim().length < 50) {
    return { similarRequests: [] };
  }
  try {
    const result = await suggestSimilarRequests({ requestDetails });
    return result;
  } catch (error) {
    console.error('Error fetching similar requests:', error);
    return { similarRequests: [] };
  }
}
