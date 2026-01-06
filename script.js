document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('login-box').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'block';
    
    fetch(this.action, {
        method: 'POST',
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    });
});