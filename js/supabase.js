const { createClient } = supabase

const supabaseUrl = 'https://rakhuksolnyyvlfavdty.supabase.co'
const supabaseKey = 'sb_publishable_8ukdpv1KOlVzvUjlZF5hFQ_jKSTOrIa'

const db = createClient(supabaseUrl, supabaseKey)

async function checkSession() {
    const { data } = await db.auth.getSession()

    if (!data.session) {
      window.location.href = 'index.html'
    }
  }
document.addEventListener('DOMContentLoaded', function() {
  const logoutBtn = document.getElementById('logoutBtn')
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async function() {
      await db.auth.signOut()
      window.location.href = '../index.html'
    })
  }
})