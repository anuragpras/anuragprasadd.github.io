(function () {
    // 1. Supabase Credentials
    const SUPABASE_URL = 'https://vktirlbisjansnsexlff.supabase.co';
    const SUPABASE_KEY = 'sb_publishable_ZfqIAZ3q7XZYcB8pzBavTw_4oJASLfh';

    async function trackVisit() {
        try {
            // 2. Fetch location data from IP-API
            const geoResponse = await fetch('http://ip-api.com/json');
            const geoData = await geoResponse.json();

            // 3. Prepare the data package
            const payload = {
                page_path: window.location.pathname,
                city: geoData.city || 'Unknown',
                country: geoData.country || 'Unknown',
                ip_address: geoData.query || 'Hidden',
                user_agent: navigator.userAgent
            };

            // 4. Send to Supabase
            await fetch(`${SUPABASE_URL}/rest/v1/visitor_logs`, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_KEY,
                    'Authorization': `Bearer ${SUPABASE_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'return=minimal'
                },
                body: JSON.stringify(payload)
            });

        } catch (err) {
            // Silent error - don't break the website if tracking fails
            console.warn('Tracking skipped');
        }
    }

    // Run tracking after the page loads completely
    if (document.readyState === 'complete') {
        trackVisit();
    } else {
        window.addEventListener('load', trackVisit);
    }
})();
