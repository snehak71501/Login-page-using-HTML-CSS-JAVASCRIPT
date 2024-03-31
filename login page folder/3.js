const  Mail_id="snehak71501@gmail.com";
const  My_password="Sneha@003";
function login()
{
        const email= document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Check if the entered credentials are correct
        if (email === Mail_id || password === My_password) {
            // If correct, display success message
            alert("You are successfully logged in!🤗");
        } 
        else {
            // If incorrect, display error message
            alert("Oops! Invalid username or password🧐");
        }
        if (email.trim() === "" || password.trim() === "") {
            alert("Please enter both email and password🤨");
            return; 
        }
   

}