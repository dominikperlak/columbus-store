import { ApiResponse } from "@/types/api";

const API_URL = process.env.API_URL!;
const API_KEY = process.env.API_KEY!;

export const fetchProducts = async (): Promise<ApiResponse> => {
  const response = await fetch(API_URL, {
    headers: {
      "x-api-key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
};
