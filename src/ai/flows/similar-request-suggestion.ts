'use server';

/**
 * @fileOverview A flow to suggest similar medical aid requests based on a user's input.
 *
 * - suggestSimilarRequests - A function that suggests similar requests.
 * - SimilarRequestSuggestionInput - The input type for the suggestSimilarRequests function.
 * - SimilarRequestSuggestionOutput - The return type for the suggestSimilarRequests function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SimilarRequestSuggestionInputSchema = z.object({
  requestDetails: z
    .string()
    .describe('Detailed description of the medical aid request.'),
});
export type SimilarRequestSuggestionInput = z.infer<
  typeof SimilarRequestSuggestionInputSchema
>;

const SimilarRequestSuggestionOutputSchema = z.object({
  similarRequests: z
    .array(z.string())
    .describe('A list of similar medical aid requests.'),
});
export type SimilarRequestSuggestionOutput = z.infer<
  typeof SimilarRequestSuggestionOutputSchema
>;

export async function suggestSimilarRequests(
  input: SimilarRequestSuggestionInput
): Promise<SimilarRequestSuggestionOutput> {
  return similarRequestSuggestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'similarRequestSuggestionPrompt',
  input: {schema: SimilarRequestSuggestionInputSchema},
  output: {schema: SimilarRequestSuggestionOutputSchema},
  prompt: `You are an AI assistant helping patients find similar medical aid requests to understand how to write their own effectively.

  Given the following medical aid request details, please suggest a list of similar requests. Focus on requests with similar medical conditions, treatments, or financial needs.

  Request Details: {{{requestDetails}}}

  Similar Requests:`,
});

const similarRequestSuggestionFlow = ai.defineFlow(
  {
    name: 'similarRequestSuggestionFlow',
    inputSchema: SimilarRequestSuggestionInputSchema,
    outputSchema: SimilarRequestSuggestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
