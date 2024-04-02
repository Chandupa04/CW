
    document.getElementById('submit').addEventListener('click', function(event) {
    
        event.preventDefault();
    
        if (validateForm()) {
            
            alert("Thank you for your feedback!");
            
            window.location.href = "../html_page/home_page.html"; 
        } else {
        
            alert("Please fill out all required fields.");
        }
    });


    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var option1 = document.querySelector('input[name="option1"]:checked');
        var option2 = document.querySelector('input[name="option2"]:checked');
        var option = document.querySelector('input[name ="option"]:checked');
        // var option3 = document.querySelector('input[name="option3"]:checked');
        var feedback1 = document.querySelector('textarea').value;
        var updates = document.getElementById('updates').value;

        if (name === "" || email === "" || !option1 || !option2 || !option || feedback1==="" || updates === "") {
            return false;
        }
        return true;
    }


//     document.getElementById('submit').addEventListener('click', function(event) {
//         // Prevent the default form submission
//         event.preventDefault();
//     if(id = !name){
//         alert("Please enter your name.");
//         return true;
//     }
//     if (!email) {
//         alert("Please enter your email");
//     }
// })
