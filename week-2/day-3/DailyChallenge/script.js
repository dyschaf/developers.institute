let userCartLog = {
	username : "Johnny",
	password: 12345,
	isUserSignedIn : true,
};
userName = prompt("username");
passWord = prompt("password");
if (userName == userCartLog[username] && passWord == userCartLog[password]) {
    userCartLog.isUserSignedIn = true;
} else {userCartLog.isUserSignedIn = false; 
    alart('you need to sign in')}
    
if (userCartLog.user == userCartLog.isUserSignedIn){
    alart(`username ${[userCartLog][username]} 'password' ${[userCartlog][password]}`)
}else alart('you need to sign in')
// if 