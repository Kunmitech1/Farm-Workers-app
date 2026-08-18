// ── Fill these in from Supabase Dashboard → Project Settings → API ──
const SUPABASE_URL = 'https://lrocighnjtundvcxvhar.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_XFEZspknxmRdcr5dixRl2Q_QSbPSwVo';

// Creates one shared client both apps use.
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
