
    class User {
        STORAGE_KEY = "user";
        SESSION_KEY = "connectedUser";
        
        constructor(name,email, password) {
          this.name = name;
          this.email = email;
          this.password = password;
        }
    
        hashPassword() {
            let hashed = [this.password].map(v => v.charCodeAt(0)).join('');
            hashed = hashed.repeat(30).split('');
            hashed.length = 60;
            return hashed.join('');
        }
    
        findAll() {
            return JSON.parse(localStorage.getItem(User.STORAGE_KEY)) || [];
        }
    }
    
    
    function setData() {
    
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
    
        let user = new User(name,email,password);
        user.password = user.hashPassword();
        
    
        localStorage.setItem((user.STORAGE_KEY + name), JSON.stringify(user));
        return alert('Bonjour'+ " " + (user.name) + " " + 'vous êtes bien connecté !')
    }


