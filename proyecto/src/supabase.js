// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://ryvvskddjlzmlxlmrbmx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5dnZza2Rkamx6bWx4bG1yYm14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MzkxMjAsImV4cCI6MjA2MzAxNTEyMH0.e_vRdxE-H0J5k1L_Uivp0M2qxJVt_9sCAVa33kq4t-0';
export const supabase = createClient(supabaseUrl, supabaseKey);