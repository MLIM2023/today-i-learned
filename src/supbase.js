import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rmurzvamxukhjgsiukoe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtdXJ6dmFteHVraGpnc2l1a29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU2MTkzMDUsImV4cCI6MjA0MTE5NTMwNX0.RCew_TtyGVlbrupT-X7INg7digcRWc4eLXYt72yL2HU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
