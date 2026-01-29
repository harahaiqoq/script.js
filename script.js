<script>
    // 1. Apne Credentials
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "harsh@786";

    // 2. Yahan apna asli Discord Webhook URL paste karein
    const WEBHOOK_URL = "YAHAN_APNA_DISCORD_WEBHOOK_URL_DALO";

    // 3. Discord par message bhejane wala function
    async function sendDiscord(message) {
        if(!WEBHOOK_URL.includes("discord.com")) return;
        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: `🚀 **HARSH PRO SYSTEM ALERT**\n━━━━━━━━━━━━━━━━━━━━\n${message}\n━━━━━━━━━━━━━━━━━━━━`
                })
            });
        } catch (err) {
            console.error("Discord Error:", err);
        }
    }

    // 4. Login function with Alert
    function checkLogin() {
        const u = document.getElementById('user').value;
        const p = document.getElementById('pass').value;

        if (u === ADMIN_USER && p === ADMIN_PASS) {
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
            sendDiscord(`✅ **Admin Login Success!**\n👤 User: ${u}\n🕒 Time: ${new Date().toLocaleString()}`);
        } else {
            sendDiscord(`⚠️ **Failed Login Attempt!**\n👤 Input User: ${u}\n🔑 Input Pass: ${p}\n📍 Check System Security!`);
            alert("ACCESS DENIED: Wrong Credentials!");
        }
    }

    // 5. Search function with Alert
    async function run(ep, key) {
        const val = document.getElementById('inp').value;
        const res = document.getElementById('res');
        if(!val) return alert("Pehle target data dalo!");

        res.style.display = 'block';
        res.innerHTML = "Accessing Secured Database...";

        // Discord Alert for Search
        sendDiscord(`🔍 **New Search Performed**\n🛠️ Method: ${ep.toUpperCase()}\n🎯 Target: \`${val}\``);

        try {
            const url = `https://api.b77bf911.workers.dev/${ep}?${key}=${val}`;
            const response = await fetch(url);
            const data = await response.json();
            res.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        } catch (e) {
            res.innerHTML = "Error: API Response Fail!";
            sendDiscord(`❌ **API Error!**\nTarget: ${val}\nIssue: Fetch Failed.`);
        }
    }

    // 6. IP Tracker with Alert
    async function runIP() {
        const val = document.getElementById('inp').value;
        const res = document.getElementById('res');
        if(!val) return alert("IP address dalo!");

        res.style.display = 'block';
        res.innerHTML = "Tracking Target IP...";
        
        sendDiscord(`🌐 **IP Tracking Started**\n📍 Target IP: \`${val}\``);

        try {
            const response = await fetch(`https://ipapi.co/${val}/json/`);
            const data = await response.json();
            res.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        } catch (e) {
            res.innerHTML = "Error: IP Tracking Fail!";
        }
    }
</script>
        
