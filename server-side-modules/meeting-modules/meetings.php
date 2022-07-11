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
            $uuid = $arr['UUID'] ?? "a0f8ced5-2e14-4f90-a026-b10be3c7ad15";

            try
            {
                self::$SQL = "SELECT meeting_title, meeting_time_start, meeting_time_end from meetings WHERE user_id=?";
                self::$stmt = $conn->prepare(self::$SQL);
                self::$stmt->bindValue(1, $uuid);
                self::$stmt->execute();

                while (self::$row = self::$stmt->fetch(PDO::FETCH_ORI_NEXT))
                {

                    self::$response[] = array('Message' => 'Success', 'Title' => self::$row['meeting_title'], 'Start' => self::$row['meeting_time_start'], 'End' => self::$row['meeting_time_end']);

                    if (empty(self::$row))
                    {
                        self::$response[] = array('Message' => 'No meetings Today');
                        break;
                    }
                }
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

$meeting = new Meetings();
