// Aapka Discord Webhook URL
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1466314319347318941/NT-iHpONGm61Q4tfoUs9ojB8jEAJ7aG9Opzo-2G0pdb6dKkjTITZSB3Bt4NLQ6BwFnLs";

// Aapka allowed email
const allowedUsers = ["harsh48227@gmail.com"]; 

async function sendDiscordAlert(msg) {
    try {
        await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: msg })
        });
    } catch (err) { console.log("Alert failed"); }
}

// Search track karne ke liye function
function initSearchTracking() {
    const searchInput = document.getElementById('searchBox');
    if (searchInput) {
        searchInput.addEventListener('change', (e) => {
            sendDiscordAlert(`🔍 **Search Activity:** User ne "${e.target.value}" search kiya.`);
        });
    }
}

// Access check karne ke liye logic
function checkAccess() {
    let email = prompt("Is website ko dekhne ke liye apna Email dalein:");
    
    // Email ko lower case mein check karenge taaki error na ho
    if (email && allowedUsers.includes(email.toLowerCase().trim())) {
        sendDiscordAlert(`✅ **Login Success:** ${email} ne site access ki.`);
    } else {
        sendDiscordAlert(`🚫 **Block Alert:** Unknown user (${email}) ne ghusne ki koshish ki. Access Denied!`);
        document.body.innerHTML = `
            <div style="text-align:center; margin-top:100px; font-family: sans-serif;">
                <h1 style="color:red;">❌ Access Denied</h1>
                <p>Aap is website ko dekhne ke liye authorized nahi hain.</p>
            </div>`;
    }
}

// Page load hote hi sab chalu ho jaye
window.onload = () => {
    checkAccess();
    initSearchTracking();
};
