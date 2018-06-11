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

-- Copiando estrutura para tabela trabalho.connecteds
CREATE TABLE IF NOT EXISTS `connecteds` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address` int(11) NOT NULL,
  `port` int(11) NOT NULL,
  `topic` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.connecteds: ~0 rows (aproximadamente)
DELETE FROM `connecteds`;
/*!40000 ALTER TABLE `connecteds` DISABLE KEYS */;
/*!40000 ALTER TABLE `connecteds` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.devices: ~2 rows (aproximadamente)
DELETE FROM `devices`;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;
INSERT INTO `devices` (`id`, `id_usuario`, `nome_dispositivo`, `topic`, `ip`, `protocolo`, `data_criacao`, `descricao`) VALUES
	(15, 29, 'Sensor Temperatura', 'sensor/casa/temperatura', 'undefined', 'undefined', '2018-06-02 11:05:13', 'Sensor de temperatura'),
	(16, 29, 'Sensor Temperatura 2', 'sensor/temperatura2', 'undefined', 'undefined', '2018-06-02 13:50:33', 'Sensor de temperatura 2');
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.messages
CREATE TABLE IF NOT EXISTS `messages` (
  `message_id` int(11) NOT NULL AUTO_INCREMENT,
  `device_id` int(11) NOT NULL,
  `topic` varchar(300) NOT NULL,
  `message` varchar(300) NOT NULL,
  `datetime` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1158 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.messages: ~123 rows (aproximadamente)
DELETE FROM `messages`;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` (`message_id`, `device_id`, `topic`, `message`, `datetime`) VALUES
	(1030, 15, 'sensor/casa/temperatura', '72.242874331', '2018-06-02 11:16:49'),
	(1031, 15, 'sensor/casa/temperatura', '42.2589717387', '2018-06-02 11:16:59'),
	(1032, 15, 'sensor/casa/temperatura', '58.2919947521', '2018-06-02 11:17:09'),
	(1033, 15, 'sensor/casa/temperatura', '51.3005597052', '2018-06-02 11:17:19'),
	(1034, 15, 'sensor/casa/temperatura', '72.3730688087', '2018-06-02 11:17:29'),
	(1035, 15, 'sensor/casa/temperatura', '27.5552871633', '2018-06-02 11:17:39'),
	(1036, 15, 'sensor/casa/temperatura', '57.7659042208', '2018-06-02 11:17:49'),
	(1037, 15, 'sensor/casa/temperatura', '75.5080648654', '2018-06-02 11:17:59'),
	(1038, 15, 'sensor/casa/temperatura', '41.2695637513', '2018-06-02 11:18:09'),
	(1039, 15, 'sensor/casa/temperatura', '56.1828174314', '2018-06-02 11:18:19'),
	(1040, 15, 'sensor/casa/temperatura', '41.4932292455', '2018-06-02 11:18:29'),
	(1041, 15, 'sensor/casa/temperatura', '26.3835363642', '2018-06-02 11:18:39'),
	(1042, 15, 'sensor/casa/temperatura', '26.3435751764', '2018-06-02 11:18:49'),
	(1043, 15, 'sensor/casa/temperatura', '-12.8780679314', '2018-06-02 11:18:59'),
	(1044, 15, 'sensor/casa/temperatura', '73.1642455439', '2018-06-02 11:19:09'),
	(1045, 15, 'sensor/casa/temperatura', '-1.67026056427', '2018-06-02 11:19:19'),
	(1046, 15, 'sensor/casa/temperatura', '83.7591768814', '2018-06-02 11:19:29'),
	(1047, 15, 'sensor/casa/temperatura', '22.5678106613', '2018-06-02 11:19:39'),
	(1048, 15, 'sensor/casa/temperatura', '54.1204458674', '2018-06-02 11:19:49'),
	(1049, 15, 'sensor/casa/temperatura', '69.1390264748', '2018-06-02 11:19:59'),
	(1050, 15, 'sensor/casa/temperatura', '68.3162964811', '2018-06-02 11:20:09'),
	(1051, 15, 'sensor/casa/temperatura', '62.3735899061', '2018-06-02 11:20:19'),
	(1052, 15, 'sensor/casa/temperatura', '72.2948911707', '2018-06-02 11:20:29'),
	(1053, 15, 'sensor/casa/temperatura', '112.895698339', '2018-06-02 11:20:39'),
	(1054, 15, 'sensor/casa/temperatura', '73.4850612991', '2018-06-02 11:20:49'),
	(1055, 15, 'sensor/casa/temperatura', '51.1285490593', '2018-06-02 11:20:59'),
	(1056, 15, 'sensor/casa/temperatura', '103.465958986', '2018-06-02 11:21:09'),
	(1057, 15, 'sensor/casa/temperatura', '46.1885915987', '2018-06-02 11:21:19'),
	(1058, 15, 'sensor/casa/temperatura', '88.4018327375', '2018-06-02 11:21:29'),
	(1059, 15, 'sensor/casa/temperatura', '99.9474840414', '2018-06-02 11:21:39'),
	(1060, 15, 'sensor/casa/temperatura', '11.1541012701', '2018-06-02 11:21:49'),
	(1061, 15, 'sensor/casa/temperatura', '98.4861037768', '2018-06-02 11:21:59'),
	(1062, 15, 'sensor/casa/temperatura', '39.389815193', '2018-06-02 11:22:09'),
	(1063, 15, 'sensor/casa/temperatura', '23.8622691241', '2018-06-02 11:22:19'),
	(1064, 15, 'sensor/casa/temperatura', '100.426429426', '2018-06-02 11:22:29'),
	(1065, 15, 'sensor/casa/temperatura', '18.5641018958', '2018-06-02 11:22:39'),
	(1066, 15, 'sensor/casa/temperatura', '-2.21177044377', '2018-06-02 11:22:49'),
	(1067, 15, 'sensor/casa/temperatura', '80.9600017594', '2018-06-02 11:22:59'),
	(1068, 15, 'sensor/casa/temperatura', '13.3211243291', '2018-06-02 11:23:09'),
	(1069, 15, 'sensor/casa/temperatura', '84.6589759862', '2018-06-02 11:23:19'),
	(1070, 15, 'sensor/casa/temperatura', '45.4971053963', '2018-06-02 11:23:29'),
	(1071, 15, 'sensor/casa/temperatura', '48.4235504261', '2018-06-02 11:23:39'),
	(1072, 15, 'sensor/casa/temperatura', '21.1933331779', '2018-06-02 11:23:49'),
	(1073, 15, 'sensor/casa/temperatura', '35.1129484976', '2018-06-02 11:23:59'),
	(1074, 15, 'sensor/casa/temperatura', '61.8132419936', '2018-06-02 11:24:09'),
	(1075, 15, 'sensor/casa/temperatura', '58.7709127464', '2018-06-02 11:24:19'),
	(1076, 15, 'sensor/casa/temperatura', '21.9879820418', '2018-06-02 11:24:29'),
	(1077, 15, 'sensor/casa/temperatura', '86.7506144263', '2018-06-02 11:24:40'),
	(1078, 15, 'sensor/casa/temperatura', '50.6687295939', '2018-06-02 11:24:49'),
	(1079, 15, 'sensor/casa/temperatura', '36.1180579666', '2018-06-02 11:24:59'),
	(1080, 15, 'sensor/casa/temperatura', '77.0144624859', '2018-06-02 11:25:10'),
	(1081, 15, 'sensor/casa/temperatura', '105.187514794', '2018-06-02 11:25:20'),
	(1082, 15, 'sensor/casa/temperatura', '51.0845886738', '2018-06-02 11:25:30'),
	(1083, 15, 'sensor/casa/temperatura', '0.347538211367', '2018-06-02 11:25:40'),
	(1084, 15, 'sensor/casa/temperatura', '51.8818633338', '2018-06-02 11:25:50'),
	(1085, 15, 'sensor/casa/temperatura', '35.0134764214', '2018-06-02 11:26:00'),
	(1086, 15, 'sensor/casa/temperatura', '56.2649109342', '2018-06-02 11:26:10'),
	(1087, 15, 'sensor/casa/temperatura', '50.2247909036', '2018-06-02 11:26:20'),
	(1088, 15, 'sensor/casa/temperatura', '12.8279079675', '2018-06-02 11:26:30'),
	(1089, 15, 'sensor/casa/temperatura', '-2.49286238098', '2018-06-02 11:26:40'),
	(1090, 15, 'sensor/casa/temperatura', '71.2229960552', '2018-06-02 11:26:50'),
	(1091, 15, 'sensor/casa/temperatura', '10.1958008432', '2018-06-02 11:27:00'),
	(1092, 15, 'sensor/casa/temperatura', '74.4603620147', '2018-06-02 11:27:10'),
	(1093, 15, 'sensor/casa/temperatura', '59.0194711447', '2018-06-02 11:27:20'),
	(1094, 15, 'sensor/casa/temperatura', '12.860832311', '2018-06-02 11:27:30'),
	(1095, 15, 'sensor/casa/temperatura', '87.4008226973', '2018-06-02 11:27:40'),
	(1096, 15, 'sensor/casa/temperatura', '67.3062371011', '2018-06-02 11:27:50'),
	(1097, 15, 'sensor/casa/temperatura', '31.2491294434', '2018-06-02 11:28:00'),
	(1098, 15, 'sensor/casa/temperatura', '23.8110413136', '2018-06-02 11:28:10'),
	(1099, 15, 'sensor/casa/temperatura', '44.0293989991', '2018-06-02 11:28:20'),
	(1100, 15, 'sensor/casa/temperatura', '62.0736243604', '2018-06-02 11:28:30'),
	(1101, 15, 'sensor/casa/temperatura', '71.4565128782', '2018-06-02 11:28:40'),
	(1102, 15, 'sensor/casa/temperatura', '46.5493305731', '2018-06-02 11:28:50'),
	(1103, 15, 'sensor/casa/temperatura', '70.5453172159', '2018-06-02 13:24:06'),
	(1104, 15, 'sensor/casa/temperatura', '80.7204650277', '2018-06-02 13:24:16'),
	(1105, 15, 'sensor/casa/temperatura', '72.6587316692', '2018-06-02 13:24:26'),
	(1106, 15, 'sensor/casa/temperatura', '1.67722301273', '2018-06-02 13:24:36'),
	(1107, 15, 'sensor/casa/temperatura', '49.1779568723', '2018-06-02 13:24:46'),
	(1108, 15, 'sensor/casa/temperatura', '68.7146096333', '2018-06-02 13:24:56'),
	(1109, 15, 'sensor/casa/temperatura', '138.102668318', '2018-06-02 13:25:06'),
	(1110, 15, 'sensor/casa/temperatura', '59.0018935157', '2018-06-02 13:25:16'),
	(1111, 15, 'sensor/casa/temperatura', '67.1595240933', '2018-06-02 13:25:26'),
	(1112, 15, 'sensor/casa/temperatura', '14.8716333385', '2018-06-02 13:25:36'),
	(1113, 15, 'sensor/casa/temperatura', '59.1962171269', '2018-06-02 13:25:46'),
	(1114, 15, 'sensor/casa/temperatura', '67.5564324027', '2018-06-02 13:25:56'),
	(1115, 15, 'sensor/casa/temperatura', '22.1901602227', '2018-06-02 13:26:06'),
	(1116, 15, 'sensor/casa/temperatura', '11.9329349245', '2018-06-02 13:26:16'),
	(1117, 15, 'sensor/casa/temperatura', '30.2953235294', '2018-06-02 13:26:26'),
	(1118, 15, 'sensor/casa/temperatura', '66.2516637106', '2018-06-02 13:26:36'),
	(1119, 15, 'sensor/casa/temperatura', '77.6215110716', '2018-06-02 13:26:46'),
	(1120, 15, 'sensor/casa/temperatura', '73.018465236', '2018-06-02 13:26:56'),
	(1121, 15, 'sensor/casa/temperatura', '-38.8215046896', '2018-06-02 13:27:06'),
	(1122, 15, 'sensor/casa/temperatura', '23.0332665099', '2018-06-02 13:27:16'),
	(1123, 15, 'sensor/casa/temperatura', '-4.48670175983', '2018-06-02 13:27:26'),
	(1124, 15, 'sensor/casa/temperatura', '45.2035528878', '2018-06-02 13:27:36'),
	(1125, 15, 'sensor/casa/temperatura', '33.8676363341', '2018-06-02 13:27:46'),
	(1126, 15, 'sensor/casa/temperatura', '31.8772314411', '2018-06-02 13:27:56'),
	(1127, 15, 'sensor/casa/temperatura', '24.9252292356', '2018-06-02 13:28:06'),
	(1128, 15, 'sensor/casa/temperatura', '56.192055655', '2018-06-02 13:28:16'),
	(1129, 15, 'sensor/casa/temperatura', '87.6983243397', '2018-06-02 13:28:26'),
	(1130, 15, 'sensor/casa/temperatura', '105.479484887', '2018-06-02 13:28:36'),
	(1131, 15, 'sensor/casa/temperatura', '104.305458226', '2018-06-02 13:28:46'),
	(1132, 15, 'sensor/casa/temperatura', '72.8808824506', '2018-06-02 13:28:56'),
	(1133, 15, 'sensor/casa/temperatura', '100.902103775', '2018-06-02 13:29:06'),
	(1134, 15, 'sensor/casa/temperatura', '50.559039784', '2018-06-02 13:29:16'),
	(1135, 15, 'sensor/casa/temperatura', '63.0389596668', '2018-06-02 13:29:26'),
	(1136, 15, 'sensor/casa/temperatura', '80.9363708422', '2018-06-02 13:29:36'),
	(1137, 15, 'sensor/casa/temperatura', '59.2326520378', '2018-06-02 13:29:46'),
	(1138, 15, 'sensor/casa/temperatura', '78.9899865888', '2018-06-02 13:29:56'),
	(1139, 15, 'sensor/casa/temperatura', '46.3891658985', '2018-06-02 13:30:06'),
	(1140, 15, 'sensor/casa/temperatura', '63.2849065917', '2018-06-02 13:30:16'),
	(1141, 15, 'sensor/casa/temperatura', '9.63189871602', '2018-06-02 13:30:26'),
	(1142, 15, 'sensor/casa/temperatura', '61.2885039991', '2018-06-02 13:30:36'),
	(1143, 15, 'sensor/casa/temperatura', '39.7523484045', '2018-06-02 13:30:46'),
	(1144, 15, 'sensor/casa/temperatura', '17.8707875473', '2018-06-02 13:30:56'),
	(1145, 15, 'sensor/casa/temperatura', '45.0841929572', '2018-06-02 13:31:06'),
	(1146, 15, 'sensor/casa/temperatura', '31.4826606431', '2018-06-02 13:31:16'),
	(1147, 15, 'sensor/casa/temperatura', '74.8854578883', '2018-06-02 13:31:26'),
	(1148, 15, 'sensor/casa/temperatura', '109.923884771', '2018-06-02 13:31:36'),
	(1149, 15, 'sensor/casa/temperatura', '58.3485805967', '2018-06-02 13:31:46'),
	(1150, 15, 'sensor/casa/temperatura', '2.72952777719', '2018-06-02 13:31:56'),
	(1151, 15, 'sensor/casa/temperatura', '13.6635180931', '2018-06-02 13:32:06'),
	(1152, 15, 'sensor/casa/temperatura', '50.0265469059', '2018-06-02 13:32:16'),
	(1153, 15, 'sensor/casa/temperatura', '19.3476298275', '2018-06-02 13:32:26'),
	(1154, 15, 'sensor/casa/temperatura', '98.3370230191', '2018-06-02 13:32:36'),
	(1155, 15, 'sensor/casa/temperatura', '65.2989800973', '2018-06-02 13:32:46'),
	(1156, 15, 'sensor/casa/temperatura', '124.497835431', '2018-06-02 13:32:56'),
	(1157, 15, 'sensor/casa/temperatura', '76.8320775621', '2018-06-02 13:33:06');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;

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
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.users: ~3 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `nome`, `nome_usuario`, `senha`, `email`) VALUES
	(29, 'Leonardo', 'leonardo', '15e2b0d3c33891ebb0f1ef609ec419420c20e320ce94c65fbc8c3312448eb225', 'leonardo.everson@outlook.com'),
	(31, 'Leonardo Everson', 'leonardoeverson', 'ef797c8118f02dfb649607dd5d3f8c7623048c9c063d532cc95c5ed7a898a64f', 'llinharespinheiro@gmail.com'),
	(32, 'Leonardo Everson', 'leonardoe', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'leonardo_linhares15@hotmail.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
