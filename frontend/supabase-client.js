(function() {
    const SUPABASE_URL = 'https://quqxkzzddjmtvoswdbjw.supabase.co';
    const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1cXhrenpkZGptdHZvc3dkYmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMDgxNzQsImV4cCI6MjA4MTc4NDE3NH0.cz6Flu4fkFXdxboowLw6FHnHMnhQ64-191mhr70QmzY';

    if (!window.supabaseClient) {
        window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('✅ Supabase Client 初始化成功 (window.supabaseClient)');
    }
})();