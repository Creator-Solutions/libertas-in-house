<?php

class Config
{
   private static string $servername = 'localhost';
   private static string $username = 'postgres';
   private static string $dbname = 'libertas-board-room';
   private static string $password = 'root';

   public static $conn;

   public static function init():void
   {
       if (self::$conn == null)
       {
           try
           {
               self::$conn = new PDO('pgsql:host='.self::$servername.';dbname='.self::$dbname.';',self::$username, self::$password);
               echo "connected";
           }catch (Exception $ex)
           {
               echo $ex->getMessage();
           }
       }
   }
}

$config = new Config();
$config::init();