// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculate").click(function () {
        let hours = $("#hours").val(); // Get user input
        let rate = $("#rate").val(); // Get hourly rate
        let errorMessage = $("#error-message");

        // Clear previous error messages
        errorMessage.text("");

        // Validation: Check if input is a positive number
        if (hours === "" || isNaN(hours) || hours <= 0) {
            errorMessage.text("Please enter a valid positive number of hours.");
            $("#total").val(""); // Clear output box if invalid input
            return;
        }

        // Calculate total cost
        let totalCost = hours * rate;
        $("#total").val(totalCost.toFixed(2)); // Display result with 2 decimal places
    });
});
