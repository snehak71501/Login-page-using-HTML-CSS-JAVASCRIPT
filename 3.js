const  Mail_id="snehak71501@gmail.com";
const  My_password="Sneha@003";
function login()
{
        const email= document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Check if the entered credentials are correct
        if (!email || !password){
            alert("Please enter both email and password🤨");
        }
        else if (email === Mail_id && password === My_password) {
            // If correct, display success message
            alert("You are successfully logged in!🤗");
        } 
        else {
            // If incorrect, display error message
            alert("Oops! Invalid email or password🧐");
            return; 
        }
        
   

}