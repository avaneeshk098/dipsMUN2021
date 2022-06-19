const submit = document.getElementById("mailpost")

submit.addEventListener('click', (e) => {
    e.preventDefault();

    // e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    messageval = message.value
    const body = encodeURI('Name: ' + name.value + '\n\nEmail: ' + email.value + '\n\nMessage:\n' + messageval);
    const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value.match(mailformat)) {
        if (name.value.length === 0 || message.value.length === 0) {
            alert("Name or message field is empty!")
        } else {
            window.open(`mailto:dipsmun2022@gmail.com?subject=DiPSMUN%20Enquiry%20-%20${name.value}%20-%20${email.value}&body=${body}`);
    //         Email.send({
    //             Host: "smtp.gmail.com",
    //             Username: "dipsmun2021@gmail.com",
    //             Password: "juiceadbelly",
    //             To: 'dipsmun2021@gmail.com',
    //             From: "dipsmun2021@gmail.com",
    //             Subject: `DiPSMUN Enquiry - ${name.value} - ${email.value}`,
    //             Body: body
    //         }).then(
    //             message2 => {
    //                 alert("Your enquiry has been successfully sent.")
    //                 name.value = ""
    //                 email.value = ""
    //                 message.value = ""
    //             }
    //         );
        }
    } else {
        alert("You have entered an invalid email address!")
    }
})