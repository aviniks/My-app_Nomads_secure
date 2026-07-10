import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_Supabase_URL_Nomads;
const supabaseKey = import.meta.env.VITE_Supabase_ANON_key_nomads;

console.log("URL = https://uscdurmsftxodmlwwxjw.supabase.co/rest/v1/", supabaseUrl);
export const supabase = createClient(supabaseUrl, supabaseKey);
