import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://duanhaaykckjovnpksdw.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1YW5oYWF5a2Nram92bnBrc2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc4MDQwNjIsImV4cCI6MjA2MzM4MDA2Mn0.nxdLWe4OTKwNSNDHyRdonIzEEZ5nMpCSNA4EAYNrLGw";
export const supabase = createClient(supabaseUrl, supabaseKey);
