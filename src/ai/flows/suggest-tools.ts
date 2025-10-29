// This file holds the genkit flow for suggesting AI tools based on a user prompt.
// It defines the input and output schemas and uses a prompt to generate tool suggestions.

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestToolsInputSchema = z.object({
  prompt: z.string().describe('The prompt describing the desired AI tool functionality.'),
});
export type SuggestToolsInput = z.infer<typeof SuggestToolsInputSchema>;

const SuggestToolsOutputSchema = z.object({
  toolSuggestions: z.array(z.string()).describe('A list of suggested AI tools based on the prompt.'),
});
export type SuggestToolsOutput = z.infer<typeof SuggestToolsOutputSchema>;

export async function suggestTools(input: SuggestToolsInput): Promise<SuggestToolsOutput> {
  return suggestToolsFlow(input);
}

const suggestToolsPrompt = ai.definePrompt({
  name: 'suggestToolsPrompt',
  input: {schema: SuggestToolsInputSchema},
  output: {schema: SuggestToolsOutputSchema},
  prompt: `You are an AI tool suggestion expert. Given the following prompt from the user, suggest a list of AI tools that would be helpful. Return the answer as a numbered list.

Prompt: {{{prompt}}}`,
});

const suggestToolsFlow = ai.defineFlow(
  {
    name: 'suggestToolsFlow',
    inputSchema: SuggestToolsInputSchema,
    outputSchema: SuggestToolsOutputSchema,
  },
  async input => {
    const {output} = await suggestToolsPrompt(input);
    return output!;
  }
);
