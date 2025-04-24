import { z } from 'zod';

export const TeamSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const MarketSchema = z.object({
  id: z.number(),
  name: z.string(),
  line: z.number().nullable(),
});

export const BetSchema = z.object({
  eventId: z.number(),
  date: z.string(),
  market: MarketSchema,
  awayTeam: TeamSchema,
  homeTeam: TeamSchema,
  selection: z.string(),
  odd: z.number(),
  live: z.boolean(),
  winStatusId: z.number(),
});

export const ProductDataSchema = z.object({
  bets: z.array(BetSchema),
  stake: z.number(),
  initialStake: z.number(),
  totalStake: z.number(),
});

export const ProductEntrySchema = z.object({
  previousRequestGuid: z.string().nullable(),
  productData: z.array(ProductDataSchema),
});

export const ResultInfoSchema = z.object({
  errorDescription: z.string().nullable(),
  additionalInfo: z.string().nullable(),
  eventData: z.unknown().nullable(),
  closedOdds: z.unknown().nullable(),
  errorCode: z.number(),
  resultCode: z.number(),
  errorCodeDescription: z.string().nullable(),
});

export const LoadBetResponseSchema = z.object({
  result: ResultInfoSchema,
  data: z.array(ProductEntrySchema),
  dataStructure: z.unknown().nullable(),
  additionalData: z.unknown().nullable(),
  userInfo: z.unknown().nullable(),
  isSuccessfull: z.boolean(),
});

export type LoadBetResponse = z.infer<typeof LoadBetResponseSchema>;