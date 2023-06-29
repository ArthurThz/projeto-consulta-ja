import axios from "axios";

export const apiRoute = axios.create({
  baseURL: "https://ctadryqoxzqzhznnjbcv.supabase.co/rest/v1",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0YWRyeXFveHpxemh6bm5qYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDIzNTQsImV4cCI6MjAwMzU3ODM1NH0.n6QCwb0pShsXvFx862mGm8ls7teF1gq25Au0HTKQTL8",
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0YWRyeXFveHpxemh6bm5qYmN2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwMDIzNTQsImV4cCI6MjAwMzU3ODM1NH0.n6QCwb0pShsXvFx862mGm8ls7teF1gq25Au0HTKQTL8",
  },
});
