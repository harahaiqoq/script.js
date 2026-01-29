const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1466314319347318941/NT-iHpONGm61Q4tfoUs9ojB8jEAJ7aG9Opzo-2G0pdb6dKkjTITZSB3Bt4NLQ6BwFnLs";

// Aapka allowed email ya username
const allowedUsers = ["harsh48227@gmail.com", "harsh"]; 

async function sendDiscordAlert(msg) {
    await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: msg })
    });
}

// Ye function aapke "AUTHORIZE ACCESS" button ke liye hai
function checkLogin() {
    const userVal = document.getElementById('user').value;
    const passVal = document.getElementById('pass').value;

    // Check agar user allowed list mein hai (Password aap apni marzi se badal sakte hain)
    if (allowedUsers.includes(userVal.toLowerCase().trim()) && passVal === "1234") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        sendDiscordAlert(`✅ **Login Success:** User "${userVal}" ne dashboard khola.`);
    } else {
        sendDiscordAlert(`🚫 **Block Alert:** Galat login koshish! User: "${userVal}", Pass: "${passVal}"`);
        alert("ACCESS DENIED! Aap block hain.");
    }
}

// Search track karne ke liye
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBox');
    if (searchBar) {
        searchBar.addEventListener('change', (e) => {
            sendDiscordAlert(`🔍 **Search Alert:** User ne search kiya: "${e.target.value}"`);
        });
    }
});
