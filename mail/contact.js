$(function () {
    // Initialize EmailJS
    emailjs.init("TcmARSc_-xGIzVOfW"); // Replace with your EmailJS user ID

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            // Prepare data for EmailJS
            var templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            // Reference the submit button
            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            // Use EmailJS to send the email
            emailjs.send("service_jjdzhah", "template_21gr474", templateParams)
                .then(function () {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');
                    
                    // Reset the form
                    $('#contactForm').trigger("reset");
                }, function (error) {
                    // Failure message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail service is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');

                    console.error('EmailJS error:', error);

                    // Reset the form
                    $('#contactForm').trigger("reset");
                })
                .finally(function () {
                    // Re-enable the button after 1 second
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});









$(function () {
    // Initialize EmailJS
    emailjs.init("TcmARSc_-xGIzVOfW"); // Replace with your EmailJS user ID

    $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function ($form, event, errors) {
        },
        submitSuccess: function ($form, event) {
            event.preventDefault(); // Prevent default form submission

            // Collect form data
            var name = $("input#name").val();
            var email = $("input#email").val();
            var subject = $("input#subject").val();
            var message = $("textarea#message").val();

            // Prepare data for EmailJS
            var templateParams = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            // Reference the submit button
            $this = $("#sendMessageButton");
            $this.prop("disabled", true);

            // Use AJAX to call EmailJS
            $.ajax({
                type: "POST",
                url: "https://api.emailjs.com/api/v1.0/email/send", // EmailJS API endpoint
                contentType: "application/json",
                data: JSON.stringify({
                    service_id: "service_jjdzhah",
                    template_id: "template_21gr474",
                    user_id: "TcmARSc_-xGIzVOfW",
                    template_params: templateParams
                }),
                success: function () {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    // Reset the form
                    $('#contactForm').trigger("reset");
                },
                error: function (xhr, status, error) {
                    // Failure message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail service is not responding. Please try again later!"));
                    $('#success > .alert-danger').append('</div>');

                    console.error('EmailJS error:', error);
                },
                complete: function () {
                    // Re-enable the button after 1 second
                    setTimeout(function () {
                        $this.prop("disabled", false);
                    }, 1000);
                }
            });
        },
        filter: function () {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function (e) {
        e.preventDefault();
        $(this).tab("show");
    });
});

$('#name').focus(function () {
    $('#success').html('');
});
