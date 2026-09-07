import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

let cachedClient: SanityClient | undefined;

export function getWriteClient(): SanityClient {
  if (cachedClient) return cachedClient;

  const token = process.env.SANITY_API_TOKEN;
  if (!token) {
    throw new Error("Missing environment variable: SANITY_API_TOKEN");
  }

  cachedClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token,
  });
  return cachedClient;
}
