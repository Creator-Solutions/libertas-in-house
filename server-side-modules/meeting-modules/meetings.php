<?php

require '../config/config.php';

class Meetings
{

    public static Config $config;

    private static string $SQL;
    private static $stmt;
    private static $row;
    private static array $response;

    private static $encodedData, $decodedData;

    public function __construct()
    {
        self::$config = new Config;
        self::$config::init();

        self::$encodedData = file_get_contents('php://input');
        self::$decodedData = json_decode(self::$encodedData, true);

        if (self::$decodedData['Type'] == 'Meetings')
        {
            self::Get_Meetings(self::$config::$conn);
        }elseif (self::$decodedData['Type'] == 'nextSched')
        {
            self::NextSchedule(self::$config::$conn, self::$decodedData);
        }elseif (self::$decodedData['Type'] == 'Create')
        {
            self::CreateMeeting(self::$config::$conn, self::$decodedData);
        }
    }

    public static function Get_Meetings($conn)
    {
        if ($conn)
        {

            try
            {
                self::$SQL = "SELECT title, start_time, end_time, venue, team FROM meetings";
                self::$stmt = $conn->prepare(self::$SQL);
                self::$stmt->execute();

                while (self::$row = self::$stmt->fetch(PDO::FETCH_ORI_NEXT))
                {

                    self::$response[] = array('Message' => 'Success', 'Title' => self::$row['title'], 'Start' => self::$row['start_time'], 'End' => self::$row['end_time'], 'Team' => self::$row['team']);

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

    public static function NextSchedule($conn, $arr)
    {
        if ($conn)
        {
            $date = $arr['Date'] ?? '';
            try
            {
                self::$SQL = 'SELECT title, date,  start_time, end_time, venue, team FROM meetings WHERE date=? ORDER BY start_time ';
                self::$stmt = $conn->prepare(self::$SQL);
                self::$stmt->bindValue(1, $date);
                self::$stmt->execute();

                self::$row = self::$stmt->fetch();

                if (self::$row)
                {
                    self::$response[] = array(
                        'Title' => self::$row['title'],
                        'Date' => self::$row['date'],
                        'Start' => self::$row['start_time'],
                        'End' => self::$row['end_time'],
                        'Venue' => self::$row['venue'],
                        'Team' => self::$row['team']
                    );
                }else
                {
                    self::$response[] = array('Message' => 'Could not find a meeting');
                }



            }catch (Exception $ex)
            {
                self::$response[] = array('Message' => 'No meetings Scheduled');
            }
        }else
        {
            self::$response[] = array('Message' => 'No Connection');
        }

        echo json_encode(self::$response);
    }

    public function CreateMeeting($conn, $arr)
    {
        if ($conn)
        {

            $name = $arr['Name'] ?? '';
            $date = $arr['Date'] ?? '';
            $start = $arr['Start'] ?? '';
            $end = $arr['End'] ?? '';
            $venue = $arr['Venue'] ?? '';
            $team = $arr['Team'] ?? '';

            try
            {
                $checkSchedule = self::CheckMeeting($conn, $date, $venue, $start, $end);

                if ($checkSchedule)
                {
                    self::$SQL = 'INSERT INTO meetings(title, date, start_time, end_time, venue, team) VALUES (?,?,?,?,?,?)';
                    self::$stmt = $conn->prepare(self::$SQL);
                    self::$stmt->bindValue(1,$name);
                    self::$stmt->bindValue(2, $date);
                    self::$stmt->bindValue(3, $start);
                    self::$stmt->bindValue(4, $end);
                    self::$stmt->bindValue(5, $venue);
                    self::$stmt->bindValue(6, $team);
                    self::$stmt->execute();

                    self::$response[] = array('Message' => 'Meeting created');

                }else
                {
                    self::$response[] = array('Message' => 'No spot open');
                }

            }catch (Exception $ex)
            {
                self::$response[] = array('Message' => 'Could not create meeting at this time');
            }

        }else
        {
            self::$response[] = array('Message' => 'Could not connect to server');
        }

        echo json_encode(self::$response);
    }

    public static function CheckMeeting($conn, $date, $venue, $s, $e): string
    {
        if ($conn)
        {
            try
            {
                self::$SQL = 'SELECT venue, start_time, end_time, date FROM meetings WHERE date=? AND venue=? AND start_time=? AND end_time=? ';
                self::$stmt = $conn->prepare(self::$SQL);
                self::$stmt->bindValue(1, $date);
                self::$stmt->bindValue(2,$venue);
                self::$stmt->bindValue(3,$s);
                self::$stmt->bindValue(4,$e);
                self::$stmt->execute();

                if (self::$row = self::$stmt->fetch())
                {
                    return false;
                }else{
                    return true;
                }
            }catch (Exception $ex)
            {
                return false;
            }
        }

        return false;
    }
}

$meetings = new Meetings();