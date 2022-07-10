<?php

require '../config/config.php';

class Meetings
{

    private static Config $config;

    private static $stmt;
    private static string $SQL;

    private static $encodedData;
    private static $decodedData;

    private static array $response;
    private static $row;

    public function __construct()
    {
        self::$config = new Config;
        self::$config::init();

        self::$encodedData = file_get_contents('php://input');
        self::$decodedData = json_decode(self::$encodedData, true);

        if (self::$decodedData['Type'] == 'MyTasks')
        {
            self::Get_My_Tasks(self::$config::$conn, self::$decodedData);
        }
    }

    public static function Get_My_Tasks($conn, $arr)
    {
        if ($conn)
        {
            $uuid = $arr['UUID'] ?? "";

            try
            {
                self::$SQL = "SELECT meeting_name, meeting_time from meetings WHERE uuid=?";
                self::$stmt = $conn->prepare(self::$SQL);
                self::$stmt->bindValue(1, $uuid);
                self::$stmt->execute();



            }catch (Exception $ex)
            {
                self::$response[] = array('Message' => 'Could not fetch meetings');
            }
        }else
        {
            self::$response[] = array('Message' => 'No Connection');
        }

        echo json_encode(self::$response);
    }

}