-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 11:25 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `faisal_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `berita`
--

CREATE TABLE `berita` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `artikel` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `berita`
--

INSERT INTO `berita` (`id`, `title`, `image`, `url`, `artikel`, `createdAt`, `updatedAt`) VALUES
(4, 'dummy', 'd6c0adc5345f45264db4ecbc2a0943a2.jpg', 'http://localhost:5500/images/d6c0adc5345f45264db4ecbc2a0943a2.jpg', '<p>DUMMY</p>', '2023-05-22 21:22:11', '2023-05-22 21:22:11');

-- --------------------------------------------------------

--
-- Table structure for table `galeri`
--

CREATE TABLE `galeri` (
  `id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `galeri`
--

INSERT INTO `galeri` (`id`, `image`, `url`, `createdAt`, `updatedAt`) VALUES
(2, 'd6c0adc5345f45264db4ecbc2a0943a2.jpg', 'http://localhost:5500/galeri/d6c0adc5345f45264db4ecbc2a0943a2.jpg', '2023-05-22 17:35:11', '2023-05-22 17:35:11'),
(3, '64e01e1cb4a838bc596e8fa6de1d821e.jpg', 'http://localhost:5500/galeri/64e01e1cb4a838bc596e8fa6de1d821e.jpg', '2023-05-22 17:36:29', '2023-05-22 17:36:29'),
(4, 'ea0bd038903c3372b89e0f557c8a6cc9.jpg', 'http://localhost:5500/galeri/ea0bd038903c3372b89e0f557c8a6cc9.jpg', '2023-05-22 17:36:35', '2023-05-22 17:36:35');

-- --------------------------------------------------------

--
-- Table structure for table `pendukung`
--

CREATE TABLE `pendukung` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) DEFAULT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `nik` varchar(255) DEFAULT NULL,
  `hp` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `kecamatan` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pendukung`
--

INSERT INTO `pendukung` (`id`, `nama`, `alamat`, `nik`, `hp`, `email`, `kecamatan`, `createdAt`, `updatedAt`) VALUES
(1, 'dummy', 'dummy', 'dummy', 'dummy', 'dummy', 'dummy', '2023-05-22 16:52:44', '2023-05-22 16:52:44'),
(2, 'adminfaisal', 'Jl. Agung raya 2, Gg. swadaya rt 6 rw 4, Kel. Lenteng Agung, Kec. Jagakarsa, Jakarta Selatan, DKI Jakarta', '1341365246', '+6282312730909', 'akhdan.anargya@gmail.com', 'Jagakarsa', '2023-05-22 21:03:20', '2023-05-22 21:03:20');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `refresh_token` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `refresh_token`, `createdAt`, `updatedAt`) VALUES
(1, 'Developer', 'dev@1', '$2b$10$upMTs1aVzeS7LHjoTIqJgO4EP5j43IdTvC59SotEoZjYM3CVsnhTm', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJEZXZlbG9wZXIiLCJlbWFpbCI6ImRldkAxIiwiaWF0IjoxNjg0Nzc2NjY3LCJleHAiOjE2ODQ4NjMwNjd9.QshASYlKuoEJVGfOuWhhwKuTOVscOA13F1RdhbpZusA', '2023-05-22 16:57:38', '2023-05-22 17:31:07'),
(2, 'Admin', 'admin@admin.com', '$2b$10$5QNA82AQv5AdT..1dgQu6.kLTvZok9CMVl1h/TqimKpOMFHsQkpL.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsIm5hbWUiOiJBZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwiaWF0IjoxNjg0Nzc3MjUzLCJleHAiOjE2ODQ4NjM2NTN9.Al7UgilCL5l9zMNU-Ic9VbibLN_K2aJ8bY5BHo0XwIc', '2023-05-22 17:40:19', '2023-05-22 17:40:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `berita`
--
ALTER TABLE `berita`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galeri`
--
ALTER TABLE `galeri`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pendukung`
--
ALTER TABLE `pendukung`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `berita`
--
ALTER TABLE `berita`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `galeri`
--
ALTER TABLE `galeri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pendukung`
--
ALTER TABLE `pendukung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
