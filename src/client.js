import { createClient } from "@supabase/supabase-js";

const URL = "https://rheutnilihzkbtscufak.supabase.co"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoZXV0bmlsaWh6a2J0c2N1ZmFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY0NDczNDEsImV4cCI6MjAwMjAyMzM0MX0.oTsdY2GnP7-E9r9RzJWMwOb1iRJ7PtR3rH_eKXS6njc"

export const supabase = createClient(URL, API_KEY);