// Inner fnctin have access t variables f the outer fnctin

function timer() {
    let message = "Hello, after 3 seconds!";

    setTimeout(function() {
        console.log(message);
    }, 3000);
}       

timer(); // After 3 seconds, logs: Hello, after 3 seconds!