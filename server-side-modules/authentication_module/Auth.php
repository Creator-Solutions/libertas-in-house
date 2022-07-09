<?php

header('Access-Control-Allow-Origin: http://192.168.0.1:3000');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: Content-Type");
require '../config/config.php';

class Auth
{

    private static Config $config;

    private static $stmt;

    private static string $SQL;
    private static $row;
    private static $response;

    private static $encodedData;
    private static $decodedData;

    public function __construct()
    {
        self::$config = new Config;
        self::$config::init();

        self::$encodedData = file_get_contents('php://input');
        self::$decodedData = json_decode(self::$encodedData, true);

        if (self::$decodedData['Type'] == 'Login')
        {
            self::Authenticate(self::$config::$conn, self::$decodedData);
        }
    }


    public static function Authenticate($conn, $arr):void
    {
        if ($conn)
        {
            $email = $arr['Email'] ?? "";
            $password = $arr['Password'] ?? "";
            try
            {
                self::$SQL = "SELECT * FROM users WHERE email=?";
                self::$stmt = $conn->prepare(self::$SQL);
                self::$stmt->bindValue(1, $email);
                self::$stmt->execute();

                self::$row = self::$stmt->fetch();

                if (password_verify($password, self::$row['password']))
                {
                    self::$response[] = array('Message' => 'Authenticated', 'Name' => self::$row['name'], self::$row['email']);

                }else
                {
                    self::$response[] = array('Message' => 'Incorrect Password');
                }

            }catch(Exception $ex)
            {
                self::$response[] = array('Message' => 'Could not login');
            }



        }else
        {
            self::$response[] = array('Message' => 'No Connection');
        }

        echo json_encode(array('Message' => 'Authenticated', 'Name' => 'Owen Burns', 'Email' => 'owenb@libertasgh.com'));
    }
}

$auth = new Auth();