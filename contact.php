<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Jamai Attema</title>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="CSS/contact.css">
    <link rel="stylesheet" href="CSS/Navbar.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark d-block ml-auto">
        <div div style="float: right;">
            <input type="checkbox" class="checkbox" id="chk" />
            <label class="label" for="chk">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <div class="ball"></div>
            </label>
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#iceNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse" id="iceNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link " href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="Mijnwerk.html">MijnWerk</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="contact.html">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    <?php
    $response = '';
if (isset($_POST['email'], $_POST['subject'], $_POST['name'], $_POST['msg'])) {
	if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$response = 'Email is not valid!';
	} else if (empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['name']) || empty($_POST['msg'])) {
		$response = 'Please complete all fields!';
	} else {
		$to      = 'hoedisgoed@gmail';
		$from    = $_POST['email'];
		$subject = $_POST['subject'];
		$message = $_POST['msg'];
		$headers = 'From: ' . $_POST['email'] . "\r\n" . 'Reply-To: ' . $_POST['email'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();
		mail($to, $subject, $message, $headers);
		$response = 'Message sent!';		
	}
}
?>
    <form class="contact" method="post" action="contact.php">
	<input type="email" name="email" placeholder="Your Email Address" required>
	<input type="text" name="name" placeholder="Your Name" required>
	<input type="text" name="subject" placeholder="Subject" required>
	<textarea name="msg" placeholder="What would you like to contact us about?" required></textarea>
	<input type="submit">
</form>

    <h3 class="display-4"></h3>
    </div>
    </div>
    <div class="card" style="width: 25rem;">
        <img class="card-img-top" src="./Afbeeldingen/Contact.jpg" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Mijn contact gegevens</h5>
            <p class="card-text">
                Number: +31 6 24192493
                Email: 302315920@student.rocmondriaan.nl
            </p>
        </div>
    </div>






    <div class="footer">
        <div class="voeter">
            <hr />
            <p class="text-center">
                Copyright Jamai - (C#) 2021
            </p>




            <script src="bootstrap/js/jquery-3.5.1.min.js"></script>
            <script src="bootstrap/js/bootstrap.min.js"></script>
            <script src=JS/Switcher.js></script>

</html>