function generateToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = Math.round(Math.random()*1000);
    return token;
  }

function login(){
    let pass = document.getElementById('password').value;
    console.log(pass);
    if(pass=='asd'){
        window.location.href='http://127.0.0.1:5500/app.html';
        const token = generateToken();
        document.cookie = "token"; 
    }else{
        alert("Wrong Password!");
        localStorage.removeItem('authToken');
    }
}