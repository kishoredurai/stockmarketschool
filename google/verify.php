<?php

if (!isset($_GET['token'])) {
    $res['err'] = 'Token not found!';
    die(json_encode($res));
}

function verifyToken($token): string
{
    try {
        $js = json_decode(file_get_contents('https://www.googleapis.com/oauth2/v2/tokeninfo?id_token=' . $token), true);
        $email = $js["email"];
        return $email;
    } catch (Exception $e) {
        die($e);
    }
    return null;
}

$mail = verifyToken($_GET['token']);

echo 'logged in as ' . $mail;


