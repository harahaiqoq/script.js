const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1466314319347318941/NT-iHpONGm61Q4tfoUs9ojB8jEAJ7aG9Opzo-2G0pdb6dKkjTITZSB3Bt4NLQ6BwFnLs";

// 1. Notification bhejne ka function
async function sendAlert(msg) {
    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: msg })
        });
    } catch (e) { console.log("Webhook error"); }
}

// 2. Login Function (Jo aapke button se connected hai)
function checkLogin() {
    const userVal = document.getElementById('user').value;
    const passVal = document.getElementById('pass').value;

    // Aapka email aur password yahan check hoga
    if (userVal.toLowerCase().trim() === "harsh48227@gmail.com" && passVal === "1234") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        sendAlert(`✅ **Admin Login:** "${userVal}" ne dashboard open kiya!`);
    } else {
        sendAlert(`🚫 **Block Attempt:** Galat login! User: ${userVal}, Pass: ${passVal}`);
        alert("ACCESS DENIED! Aap block hain.");
    }
}

// 3. Search Tracking (Target Number wale box ke liye)
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBox');
    if (searchBar) {
        // Jab user box mein kuch likh kar enter dabayega ya bahar click karega
        searchBar.addEventListener('change', (e) => {
            const val = e.target.value;
            if(val.trim() !== "") {
                sendAlert(`🔍 **Search Alert:** User ne ye data search kiya: \`${val}\``);
            }
        });
    }
});
