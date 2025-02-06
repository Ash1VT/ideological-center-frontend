import { env } from "process";

export const backendUrl = env.BACKEND_URL || 'http://localhost:8000/api/v1';