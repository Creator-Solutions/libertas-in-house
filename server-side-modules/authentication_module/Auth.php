<?php

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
            self::Authenticate(self::$config::$conn);
        }
    }


    public static function Authenticate($conn):void
    {
        if ($conn)
        {
            try
            {
                self::$SQL = "SELECT * FROM users";
                self::$stmt = $conn->query(self::$SQL);
                self::$stmt->execute();

                self::$row = self::$stmt->fetch();

                self::$response[] = array('Name' => self::$row['name'], 'Email'=> self::$row['email']);

            }catch(Exception $ex)
            {
                echo "Could not fetch data";
            }

        }else
        {
           echo "No Connection";
        }
        echo json_encode(self::$response);
    }
}

$auth = new Auth();