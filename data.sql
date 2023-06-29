-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql311.infinityfree.com
-- Generation Time: Jun 29, 2023 at 04:56 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `if0_34515055_db_users`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` varchar(50) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `company` varchar(50) DEFAULT NULL,
  `owner` varchar(50) DEFAULT NULL,
  `item` varchar(100) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `weight` float NOT NULL,
  `req_shipment` varchar(255) DEFAULT NULL,
  `tracking_id` varchar(50) DEFAULT NULL,
  `shipment_size` int(11) DEFAULT NULL,
  `box_count` int(11) NOT NULL,
  `specification` varchar(255) DEFAULT NULL,
  `checklist_quantity` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `password`) VALUES
('admin', 'admin'),
('admin', 'admin'),
('customer1', 'customer1'),
('customer2', 'customer2');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

