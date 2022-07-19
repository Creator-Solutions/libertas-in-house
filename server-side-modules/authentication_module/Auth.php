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
        }elseif (self::$decodedData['Type'] == 'Register')
        {
            self::Register(self::$config::$conn, self::$decodedData);
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
                self::$SQL = "SELECT id, email, username, password FROM users WHERE email=?";
                self::$stmt = $conn->prepare(self::$SQL);
                self::$stmt->bindValue(1, $email);
                self::$stmt->execute();

                self::$row = self::$stmt->fetch();

                if (self::$row){
                    if (password_verify($password, self::$row['password']))
                    {
                        self::$response[] = array
                        (
                            'Message' => 'Authenticated',
                            'Name' => self::$row['username'],
                            'Email' => self::$row['email'],
                            'UUID' => self::$row['id']
                        );

                    }else
                    {
                        self::$response[] = array('Message' => 'Incorrect Password or Email');
                    }
                }else
                {
                    self::$response[] = array('Message' => 'No records found');
                }

            }catch(Exception $ex)
            {
                self::$response[] = array('Message' => 'Could not login');
            }
        }else
        {
            self::$response[] = array('Message' => 'No Connection');
        }

        echo json_encode(self::$response);
    }

    public static function Register($conn, $arr)
    {
        if ($conn)
        {
            $email = $arr['Email'] ?? '';
            $fullName = $arr['Name'] ?? '';
            $password = $arr['Password'] ?? '';

            try
            {
                self::$SQL = 'INSERT INTO users(email, password, username) VALUES (?, ?, ?)';
                self::$stmt = $conn->prepare(self::$SQL);
                self::$stmt->bindValue(1, $email);
                self::$stmt->bindValue(2, password_hash($password, PASSWORD_ARGON2ID));
                self::$stmt->bindValue(3, $fullName);

                self::$stmt->execute();

                self::$response[] = array('Message' => 'Success');

            }catch (Exception $ex)
            {
                self::$response[] = array('Message' => 'Could not create account');
            }

        }else
        {
            self::$response[] = array('Message' => 'Could not connect to server');
        }

        echo json_encode(self::$response);
    }
}

$auth = new Auth();