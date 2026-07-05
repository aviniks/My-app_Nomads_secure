import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_Supabase_URL_Nomads; 
const supabaseKey = import.meta.env.VITE_Supabase_ANON_key_nomads; 

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
