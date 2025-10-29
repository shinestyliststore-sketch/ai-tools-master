// src/ai/flows/categorize-tool.ts
'use server';

/**
 * @fileOverview A tool categorization AI agent.
 *
 * - categorizeTool - A function that handles the tool categorization process.
 * - CategorizeToolInput - The input type for the categorizeTool function.
 * - CategorizeToolOutput - The return type for the categorizeTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const Categories = [
  'writing',
  'design',
  'web',
  'marketing',
  'dev',
  'daily',
] as const;

const CategorizeToolInputSchema = z.object({
  description: z.string().describe('The description of the tool.'),
});
export type CategorizeToolInput = z.infer<typeof CategorizeToolInputSchema>;

const CategorizeToolOutputSchema = z.object({
  category: z.enum(Categories).describe('The suggested category for the tool.'),
});
export type CategorizeToolOutput = z.infer<typeof CategorizeToolOutputSchema>;

export async function categorizeTool(input: CategorizeToolInput): Promise<CategorizeToolOutput> {
  return categorizeToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeToolPrompt',
  input: {schema: CategorizeToolInputSchema},
  output: {schema: CategorizeToolOutputSchema},
  prompt: `You are an expert AI tool categorizer.

You will analyze the tool description and suggest the most appropriate category.

Description: {{{description}}}

Categories: ${Categories.join(', ')}

Based on the description, choose one category from the list above.

Output the category only.`,
});

const categorizeToolFlow = ai.defineFlow(
  {
    name: 'categorizeToolFlow',
    inputSchema: CategorizeToolInputSchema,
    outputSchema: CategorizeToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
