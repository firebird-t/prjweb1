-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.2.14-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win32
-- HeidiSQL Versão:              9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para trabalho
CREATE DATABASE IF NOT EXISTS `trabalho` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `trabalho`;

-- Copiando estrutura para tabela trabalho.client_data
CREATE TABLE IF NOT EXISTS `client_data` (
  `client_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `token` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.client_data: ~0 rows (aproximadamente)
DELETE FROM `client_data`;
/*!40000 ALTER TABLE `client_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_data` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.devices
CREATE TABLE IF NOT EXISTS `devices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL DEFAULT 0,
  `nome_dispositivo` varchar(50) NOT NULL,
  `topic` varchar(50) DEFAULT NULL,
  `ip` varchar(16) DEFAULT NULL,
  `protocolo` varchar(10) DEFAULT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp(),
  `descricao` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.devices: ~3 rows (aproximadamente)
DELETE FROM `devices`;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;
INSERT INTO `devices` (`id`, `id_usuario`, `nome_dispositivo`, `topic`, `ip`, `protocolo`, `data_criacao`, `descricao`) VALUES
	(1, 29, 'Sensor Temperatura', 'sensor/temp', '', '', '2018-05-27 15:47:37', 'Sensor de teste'),
	(2, 29, 'sensor de umidade', 'sensor/umidade', '', '', '2018-05-28 14:49:03', 'Sensor de teste de umidade'),
	(3, 29, 'sensor de chuva', 'sensor/chuva', '', '', '2018-05-28 15:00:08', 'Sensor de chuva');
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.device_data
CREATE TABLE IF NOT EXISTS `device_data` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` int(11) NOT NULL,
  `topic` varchar(300) NOT NULL,
  `message` varchar(300) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=230 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.device_data: ~38 rows (aproximadamente)
DELETE FROM `device_data`;
/*!40000 ALTER TABLE `device_data` DISABLE KEYS */;
INSERT INTO `device_data` (`message_id`, `device_id`, `topic`, `message`, `datetime`) VALUES
	(1, 1, 'sensor/temp', '29.234293024', '2018-05-31 19:42:52'),
	(2, 1, 'sensor/temp', '29.9169242249', '2018-05-31 19:43:02'),
	(3, 1, 'sensor/temp', '29.9432983787', '2018-05-31 19:43:12'),
	(4, 1, 'sensor/temp', '29.2652419855', '2018-05-31 19:43:22'),
	(5, 1, 'sensor/temp', '29.9015843803', '2018-05-31 19:43:32'),
	(6, 1, 'sensor/temp', '30.8101808005', '2018-05-31 19:43:42'),
	(7, 1, 'sensor/temp', '30.7636345953', '2018-05-31 19:43:52'),
	(8, 1, 'sensor/temp', '28.8851949886', '2018-05-31 19:44:02'),
	(9, 1, 'sensor/temp', '29.6134140753', '2018-05-31 19:44:12'),
	(10, 1, 'sensor/temp', '29.5479207629', '2018-05-31 19:44:22'),
	(11, 1, 'sensor/temp', '30.1987308167', '2018-05-31 19:44:32'),
	(12, 1, 'sensor/temp', '30.8640989391', '2018-05-31 19:44:42'),
	(13, 1, 'sensor/temp', '30.3996177955', '2018-05-31 19:44:52'),
	(14, 1, 'sensor/temp', '29.4644051736', '2018-05-31 19:45:01'),
	(15, 1, 'sensor/temp', '30.0928599187', '2018-05-31 19:45:02'),
	(16, 1, 'sensor/temp', '29.8578837267', '2018-05-31 19:45:02'),
	(17, 1, 'sensor/temp', '29.91113634', '2018-05-31 19:45:03'),
	(18, 1, 'sensor/temp', '30.6515980685', '2018-05-31 19:45:04'),
	(19, 1, 'sensor/temp', '29.8919821722', '2018-05-31 19:45:05'),
	(20, 1, 'sensor/temp', '30.8290739531', '2018-05-31 19:45:06'),
	(21, 1, 'sensor/temp', '29.6337004735', '2018-05-31 19:45:07'),
	(22, 1, 'sensor/temp', '30.022618088', '2018-05-31 19:45:08'),
	(23, 1, 'sensor/temp', '30.9149058658', '2018-05-31 19:45:09'),
	(24, 1, 'sensor/temp', '28.9714793159', '2018-05-31 19:45:10'),
	(25, 1, 'sensor/temp', '29.8041387931', '2018-05-31 19:45:11'),
	(26, 1, 'sensor/temp', '30.4457003102', '2018-05-31 19:45:12'),
	(27, 1, 'sensor/temp', '29.6297363083', '2018-05-31 19:45:12'),
	(28, 1, 'sensor/temp', '30.1486111135', '2018-05-31 19:45:13'),
	(29, 1, 'sensor/temp', '29.7817653044', '2018-05-31 19:45:14'),
	(30, 1, 'sensor/temp', '29.1731462461', '2018-05-31 19:45:15'),
	(31, 1, 'sensor/temp', '29.0598526733', '2018-05-31 19:45:16'),
	(32, 1, 'sensor/temp', '30.0876618381', '2018-05-31 19:45:17'),
	(33, 1, 'sensor/temp', '30.3711575876', '2018-05-31 19:45:18'),
	(34, 1, 'sensor/temp', '29.5616605013', '2018-05-31 19:45:19'),
	(35, 1, 'sensor/temp', '29.1629029154', '2018-05-31 19:45:20'),
	(36, 1, 'sensor/temp', '29.5667601833', '2018-05-31 19:45:21'),
	(37, 1, 'sensor/temp', '29.7929852397', '2018-05-31 19:45:22'),
	(38, 1, 'sensor/temp', '30.148146647', '2018-05-31 19:45:23'),
	(39, 1, 'sensor/temp', '30.1402067017', '2018-05-31 19:45:24'),
	(40, 1, 'sensor/temp', '29.7851373778', '2018-05-31 19:45:25'),
	(41, 1, 'sensor/temp', '29.4136386963', '2018-05-31 19:45:26'),
	(42, 1, 'sensor/temp', '29.9342295032', '2018-05-31 19:45:27'),
	(43, 1, 'sensor/temp', '29.2976588403', '2018-05-31 19:45:28'),
	(44, 1, 'sensor/temp', '30.3746029932', '2018-05-31 19:45:29'),
	(45, 1, 'sensor/temp', '29.1607616153', '2018-05-31 19:45:30'),
	(46, 1, 'sensor/temp', '30.0673172616', '2018-05-31 19:45:31'),
	(47, 1, 'sensor/temp', '30.3394251553', '2018-05-31 19:45:32'),
	(48, 1, 'sensor/temp', '29.6487723963', '2018-05-31 19:45:33'),
	(49, 1, 'sensor/temp', '29.9110555144', '2018-05-31 19:45:34'),
	(50, 1, 'sensor/temp', '30.5430161055', '2018-05-31 19:45:35'),
	(51, 1, 'sensor/temp', '30.3801874978', '2018-05-31 19:45:36'),
	(52, 1, 'sensor/temp', '30.4560486527', '2018-05-31 19:45:37'),
	(53, 1, 'sensor/temp', '29.95981283', '2018-05-31 19:45:38'),
	(54, 1, 'sensor/temp', '29.8101392611', '2018-05-31 19:45:39'),
	(55, 1, 'sensor/temp', '30.3213699632', '2018-05-31 19:45:40'),
	(56, 1, 'sensor/temp', '29.1465257481', '2018-05-31 19:45:41'),
	(57, 1, 'sensor/temp', '29.9838754184', '2018-05-31 19:45:42'),
	(58, 1, 'sensor/temp', '30.205496703', '2018-05-31 19:45:43'),
	(59, 1, 'sensor/temp', '29.8515824746', '2018-05-31 19:45:44'),
	(60, 1, 'sensor/temp', '30.6233817172', '2018-05-31 19:45:45'),
	(61, 1, 'sensor/temp', '30.3881277593', '2018-05-31 19:45:46'),
	(62, 1, 'sensor/temp', '29.5303779451', '2018-05-31 19:45:47'),
	(63, 1, 'sensor/temp', '29.6193254847', '2018-05-31 19:45:48'),
	(64, 1, 'sensor/temp', '29.4592472985', '2018-05-31 19:45:49'),
	(65, 1, 'sensor/temp', '30.5122740765', '2018-05-31 19:45:50'),
	(66, 1, 'sensor/temp', '29.4701447317', '2018-05-31 19:45:51'),
	(67, 1, 'sensor/temp', '30.5608980051', '2018-05-31 19:45:52'),
	(68, 1, 'sensor/temp', '30.7796835085', '2018-05-31 19:45:53'),
	(69, 1, 'sensor/temp', '29.5422242776', '2018-05-31 19:45:54'),
	(70, 1, 'sensor/temp', '29.6910667136', '2018-05-31 19:45:55'),
	(71, 1, 'sensor/temp', '30.7456304628', '2018-05-31 19:45:56'),
	(72, 1, 'sensor/temp', '29.8951234452', '2018-05-31 19:45:57'),
	(73, 1, 'sensor/temp', '29.8608287416', '2018-05-31 19:45:58'),
	(74, 1, 'sensor/temp', '29.6173345812', '2018-05-31 19:45:59'),
	(75, 1, 'sensor/temp', '28.3188698376', '2018-05-31 19:46:00'),
	(76, 1, 'sensor/temp', '29.3930288757', '2018-05-31 19:46:01'),
	(77, 1, 'sensor/temp', '30.5608959198', '2018-05-31 19:46:02'),
	(78, 1, 'sensor/temp', '28.9512089777', '2018-05-31 19:46:03'),
	(79, 1, 'sensor/temp', '30.0178405579', '2018-05-31 19:46:04'),
	(80, 1, 'sensor/temp', '29.790502168', '2018-05-31 19:46:05'),
	(81, 1, 'sensor/temp', '30.5055419048', '2018-05-31 19:46:06'),
	(82, 1, 'sensor/temp', '30.7464181866', '2018-05-31 19:46:07'),
	(83, 1, 'sensor/temp', '29.4902028576', '2018-05-31 19:46:08'),
	(84, 1, 'sensor/temp', '29.8286157852', '2018-05-31 19:46:09'),
	(85, 1, 'sensor/temp', '30.8662119117', '2018-05-31 19:46:10'),
	(86, 1, 'sensor/temp', '29.8329582094', '2018-05-31 19:46:11'),
	(87, 1, 'sensor/temp', '29.9208293567', '2018-05-31 19:46:11'),
	(88, 1, 'sensor/temp', '29.9559276318', '2018-05-31 19:46:12'),
	(89, 1, 'sensor/temp', '30.6875731375', '2018-05-31 19:46:13'),
	(90, 1, 'sensor/temp', '29.5231990737', '2018-05-31 19:46:14'),
	(91, 1, 'sensor/temp', '29.9620280686', '2018-05-31 19:46:15'),
	(92, 1, 'sensor/temp', '29.7574754093', '2018-05-31 19:46:16'),
	(93, 1, 'sensor/temp', '31.1161012866', '2018-05-31 19:46:18'),
	(94, 1, 'sensor/temp', '30.2794044345', '2018-05-31 19:46:19'),
	(95, 1, 'sensor/temp', '29.6859747909', '2018-05-31 19:46:20'),
	(96, 1, 'sensor/temp', '30.2838635408', '2018-05-31 19:46:21'),
	(97, 1, 'sensor/temp', '30.7317983508', '2018-05-31 19:46:21'),
	(98, 1, 'sensor/temp', '29.6899933123', '2018-05-31 19:46:22'),
	(99, 1, 'sensor/temp', '29.998669977', '2018-05-31 19:46:23'),
	(100, 1, 'sensor/temp', '30.6001202617', '2018-05-31 19:46:24'),
	(101, 1, 'sensor/temp', '29.9041154315', '2018-05-31 19:46:25'),
	(102, 1, 'sensor/temp', '29.9058056775', '2018-05-31 19:46:26'),
	(103, 1, 'sensor/temp', '30.2872362298', '2018-05-31 19:46:27'),
	(104, 1, 'sensor/temp', '30.6045434527', '2018-05-31 19:46:28'),
	(105, 1, 'sensor/temp', '29.2779139972', '2018-05-31 19:46:29'),
	(106, 1, 'sensor/temp', '30.008806494', '2018-05-31 19:46:30'),
	(107, 1, 'sensor/temp', '30.6160997108', '2018-05-31 19:46:31'),
	(108, 1, 'sensor/temp', '30.6708241281', '2018-05-31 19:46:31'),
	(109, 1, 'sensor/temp', '30.3518372475', '2018-05-31 19:46:41'),
	(110, 1, 'sensor/temp', '30.0548723165', '2018-05-31 19:46:51'),
	(111, 1, 'sensor/temp', '29.725111733', '2018-05-31 19:47:01'),
	(112, 1, 'sensor/temp', '29.4606431806', '2018-05-31 19:47:11'),
	(113, 1, 'sensor/temp', '30.3852025719', '2018-05-31 19:47:21'),
	(114, 1, 'sensor/temp', '30.1684933947', '2018-05-31 19:47:31'),
	(115, 1, 'sensor/temp', '29.4736490226', '2018-05-31 19:47:41'),
	(116, 1, 'sensor/temp', '30.2376557371', '2018-05-31 19:47:51'),
	(117, 1, 'sensor/temp', '30.1627682099', '2018-05-31 19:48:01'),
	(118, 1, 'sensor/temp', '29.2016770655', '2018-05-31 19:48:11'),
	(119, 1, 'sensor/temp', '29.7985207179', '2018-05-31 19:48:22'),
	(120, 1, 'sensor/temp', '29.1788100473', '2018-05-31 19:48:31'),
	(121, 1, 'sensor/temp', '29.6808108922', '2018-05-31 19:48:41'),
	(122, 1, 'sensor/temp', '29.425328348', '2018-05-31 19:48:51'),
	(123, 1, 'sensor/temp', '30.5436831161', '2018-05-31 19:49:01'),
	(124, 1, 'sensor/temp', '30.6671677963', '2018-05-31 19:49:11'),
	(125, 1, 'sensor/temp', '30.1780806031', '2018-05-31 19:49:21'),
	(126, 1, 'sensor/temp', '30.1542410187', '2018-05-31 19:49:32'),
	(127, 1, 'sensor/temp', '30.1320008706', '2018-05-31 19:49:42'),
	(128, 1, 'sensor/temp', '29.0920362146', '2018-05-31 19:49:52'),
	(129, 1, 'sensor/temp', '29.734775526', '2018-05-31 19:50:02'),
	(130, 1, 'sensor/temp', '29.8772750136', '2018-05-31 19:50:12'),
	(131, 1, 'sensor/temp', '30.5376955097', '2018-05-31 19:50:22'),
	(132, 1, 'sensor/temp', '29.5746403709', '2018-05-31 19:50:32'),
	(133, 1, 'sensor/temp', '30.1884245782', '2018-05-31 19:50:42'),
	(134, 1, 'sensor/temp', '30.2402009251', '2018-05-31 19:50:52'),
	(135, 1, 'sensor/temp', '30.0865107267', '2018-05-31 19:51:02'),
	(136, 1, 'sensor/temp', '31.3281343847', '2018-05-31 19:51:12'),
	(137, 1, 'sensor/temp', '31.240642779', '2018-05-31 19:51:22'),
	(138, 1, 'sensor/temp', '30.6343542755', '2018-05-31 19:51:32'),
	(139, 1, 'sensor/temp', '30.6905398678', '2018-05-31 19:51:42'),
	(140, 1, 'sensor/temp', '29.8974240085', '2018-05-31 19:51:52'),
	(141, 1, 'sensor/temp', '29.3649644188', '2018-05-31 19:52:02'),
	(142, 1, 'sensor/temp', '30.1539356939', '2018-05-31 19:52:12'),
	(143, 1, 'sensor/temp', '29.5174537645', '2018-05-31 19:52:22'),
	(144, 1, 'sensor/temp', '30.2134370575', '2018-05-31 19:52:32'),
	(145, 1, 'sensor/temp', '29.7942937443', '2018-05-31 19:52:42'),
	(146, 1, 'sensor/temp', '29.8249207903', '2018-05-31 19:52:52'),
	(147, 1, 'sensor/temp', '29.9636660937', '2018-05-31 19:53:02'),
	(148, 1, 'sensor/temp', '30.110682269', '2018-05-31 19:53:12'),
	(149, 1, 'sensor/temp', '29.9483756722', '2018-05-31 19:53:22'),
	(150, 1, 'sensor/temp', '29.6732795266', '2018-05-31 19:53:32'),
	(151, 1, 'sensor/temp', '29.9351686453', '2018-05-31 19:53:42'),
	(152, 1, 'sensor/temp', '29.8142057115', '2018-05-31 19:53:52'),
	(153, 1, 'sensor/temp', '29.4464742676', '2018-05-31 19:54:02'),
	(154, 1, 'sensor/temp', '29.9277240785', '2018-05-31 19:54:12'),
	(155, 1, 'sensor/temp', '30.6357004385', '2018-05-31 19:54:22'),
	(156, 1, 'sensor/temp', '30.1300935572', '2018-05-31 19:54:32'),
	(157, 1, 'sensor/temp', '29.8679738799', '2018-05-31 19:54:42'),
	(158, 2, 'sensor/umidade', '65.7932062712', '2018-05-31 19:54:42'),
	(159, 1, 'sensor/temp', '29.9707718462', '2018-05-31 19:54:52'),
	(160, 2, 'sensor/umidade', '60.6034343984', '2018-05-31 19:54:52'),
	(161, 2, 'sensor/umidade', '51.9699641434', '2018-05-31 19:55:02'),
	(162, 2, 'sensor/umidade', '62.9560474371', '2018-05-31 19:55:12'),
	(163, 2, 'sensor/umidade', '79.9279391239', '2018-05-31 19:55:22'),
	(164, 2, 'sensor/umidade', '107.074409754', '2018-05-31 19:55:32'),
	(165, 2, 'sensor/umidade', '93.7608510801', '2018-05-31 19:55:37'),
	(166, 2, 'sensor/umidade', '84.9350967172', '2018-05-31 19:55:42'),
	(167, 2, 'sensor/umidade', '27.5242934075', '2018-05-31 19:55:47'),
	(168, 2, 'sensor/umidade', '73.8085870675', '2018-05-31 19:55:52'),
	(169, 2, 'sensor/umidade', '42.5040682412', '2018-05-31 19:55:57'),
	(170, 2, 'sensor/umidade', '30.4156603733', '2018-05-31 19:56:07'),
	(171, 2, 'sensor/umidade', '54.5771374697', '2018-05-31 19:56:17'),
	(172, 2, 'sensor/umidade', '69.7561220408', '2018-05-31 19:56:27'),
	(173, 2, 'sensor/umidade', '59.9956808102', '2018-05-31 19:56:37'),
	(174, 2, 'sensor/umidade', '12.4722591248', '2018-05-31 19:56:47'),
	(175, 2, 'sensor/umidade', '40.8612085159', '2018-05-31 19:56:57'),
	(176, 2, 'sensor/umidade', '35.1732812122', '2018-05-31 19:57:07'),
	(177, 2, 'sensor/umidade', '46.0698107722', '2018-05-31 19:57:17'),
	(178, 2, 'sensor/umidade', '89.1722190965', '2018-05-31 19:57:27'),
	(179, 2, 'sensor/umidade', '-2.44806659147', '2018-05-31 19:57:37'),
	(180, 2, 'sensor/umidade', '-22.0606566538', '2018-05-31 19:57:47'),
	(181, 2, 'sensor/umidade', '-11.2517787927', '2018-05-31 19:57:57'),
	(182, 2, 'sensor/umidade', '66.4193065055', '2018-05-31 19:58:07'),
	(183, 2, 'sensor/umidade', '17.5818546506', '2018-05-31 19:58:17'),
	(184, 2, 'sensor/umidade', '7.95804193734', '2018-05-31 19:58:27'),
	(185, 2, 'sensor/umidade', '45.6522784756', '2018-05-31 19:58:37'),
	(186, 2, 'sensor/umidade', '58.0578360959', '2018-05-31 19:58:47'),
	(187, 2, 'sensor/umidade', '53.3011646981', '2018-05-31 19:58:57'),
	(188, 2, 'sensor/umidade', '110.704700056', '2018-05-31 19:59:07'),
	(189, 2, 'sensor/umidade', '46.7668541178', '2018-05-31 19:59:17'),
	(190, 2, 'sensor/umidade', '51.9531387361', '2018-05-31 19:59:27'),
	(191, 2, 'sensor/umidade', '48.3979180595', '2018-05-31 19:59:37'),
	(192, 2, 'sensor/umidade', '1.3874000833', '2018-05-31 19:59:47'),
	(193, 2, 'sensor/umidade', '40.9966512298', '2018-05-31 19:59:57'),
	(194, 2, 'sensor/umidade', '22.1635407715', '2018-05-31 20:00:07'),
	(195, 2, 'sensor/umidade', '21.1967447557', '2018-05-31 20:00:17'),
	(196, 2, 'sensor/umidade', '40.1476169773', '2018-05-31 20:00:27'),
	(197, 2, 'sensor/umidade', '94.0083786906', '2018-05-31 20:00:37'),
	(198, 2, 'sensor/umidade', '49.3636149288', '2018-05-31 20:00:47'),
	(199, 2, 'sensor/umidade', '40.3235679049', '2018-05-31 20:00:57'),
	(200, 2, 'sensor/umidade', '45.0632093376', '2018-05-31 20:01:07'),
	(201, 2, 'sensor/umidade', '111.937346991', '2018-05-31 20:01:17'),
	(202, 2, 'sensor/umidade', '54.8539667723', '2018-05-31 20:01:27'),
	(203, 2, 'sensor/umidade', '-4.20120402707', '2018-05-31 20:01:37'),
	(204, 2, 'sensor/umidade', '91.370797181', '2018-05-31 20:01:47'),
	(205, 2, 'sensor/umidade', '25.2972345117', '2018-05-31 20:01:57'),
	(206, 2, 'sensor/umidade', '28.5071027446', '2018-05-31 20:02:07'),
	(207, 2, 'sensor/umidade', '102.698521393', '2018-05-31 20:02:17'),
	(208, 2, 'sensor/umidade', '16.9413184582', '2018-05-31 20:02:27'),
	(209, 2, 'sensor/umidade', '44.7725698064', '2018-05-31 20:02:37'),
	(210, 2, 'sensor/umidade', '36.0702252927', '2018-05-31 20:02:47'),
	(211, 2, 'sensor/umidade', '86.7087204354', '2018-05-31 20:02:57'),
	(212, 2, 'sensor/umidade', '49.2438594104', '2018-05-31 20:03:07'),
	(213, 2, 'sensor/umidade', '90.6641639983', '2018-05-31 20:03:17'),
	(214, 2, 'sensor/umidade', '34.8331914888', '2018-05-31 20:03:27'),
	(215, 2, 'sensor/umidade', '36.7231859301', '2018-05-31 20:03:37'),
	(216, 2, 'sensor/umidade', '30.3001543965', '2018-05-31 20:03:47'),
	(217, 2, 'sensor/umidade', '39.1001480873', '2018-05-31 20:03:58'),
	(218, 2, 'sensor/umidade', '34.3883824476', '2018-05-31 20:04:07'),
	(219, 2, 'sensor/umidade', '23.1710755845', '2018-05-31 20:04:18'),
	(220, 2, 'sensor/umidade', '14.844462364', '2018-05-31 20:04:28'),
	(221, 2, 'sensor/umidade', '93.1427352484', '2018-05-31 20:04:38'),
	(222, 2, 'sensor/umidade', '56.9657226891', '2018-05-31 20:04:48'),
	(223, 2, 'sensor/umidade', '74.0528331778', '2018-05-31 20:04:58'),
	(224, 2, 'sensor/umidade', '44.9705008662', '2018-05-31 20:05:08'),
	(225, 2, 'sensor/umidade', '37.5439088222', '2018-05-31 20:05:18'),
	(226, 2, 'sensor/umidade', '27.2007281575', '2018-05-31 20:05:28'),
	(227, 2, 'sensor/umidade', '89.830761172', '2018-05-31 20:05:38'),
	(228, 2, 'sensor/umidade', '12.7044699943', '2018-05-31 20:05:48'),
	(229, 2, 'sensor/umidade', '30.5957203783', '2018-05-31 20:05:58');
/*!40000 ALTER TABLE `device_data` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.tokens
CREATE TABLE IF NOT EXISTS `tokens` (
  `token_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `activate_date` datetime NOT NULL DEFAULT current_timestamp(),
  `lifetime` int(11) NOT NULL,
  `used_date` datetime DEFAULT NULL,
  `token` varchar(250) NOT NULL,
  PRIMARY KEY (`token_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.tokens: ~0 rows (aproximadamente)
DELETE FROM `tokens`;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` (`token_id`, `user_id`, `activate_date`, `lifetime`, `used_date`, `token`) VALUES
	(2, 29, '2018-05-28 09:22:21', 12, '2018-05-28 09:22:33', 'PdXtKEZ33D9sbhu1veSKNFX6TWMpX84JAJ8jMCZhFCBPCrC2xeN05f0FsRVKpRvF760eU9xZSNkg08NRVTCttFXpz4wwUH7IAEdaeMg3I6Wlgren5dqFwI6CLnYLfSGL');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `nome_usuario` varchar(50) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.users: ~0 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `nome`, `nome_usuario`, `senha`, `email`) VALUES
	(29, 'Leonardo', 'leonardo', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', 'leonardo.everson@outlook.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
