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
  `id_usuario` int(10) NOT NULL,
  `nome_dispositivo` varchar(50) NOT NULL,
  `ip` varchar(16) NOT NULL,
  `protocolo` varchar(10) NOT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tipo_dispositivo` varchar(50) NOT NULL DEFAULT '0',
  `tempo_verificacao` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `id_usuarioFK1` (`id_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.devices: ~2 rows (aproximadamente)
DELETE FROM `devices`;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;
INSERT INTO `devices` (`id`, `id_usuario`, `nome_dispositivo`, `ip`, `protocolo`, `data_criacao`, `tipo_dispositivo`, `tempo_verificacao`) VALUES
	(16, 5, 'Arduino UNO R3', '192.168.54.8', 'REST', '2018-04-27 14:31:21', 'Doméstico', 0),
	(17, 11, 'Arduino UNO R3', '192.168.54.1', 'REST', '2018-04-27 15:48:03', 'Comercial', 0);
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.device_data
CREATE TABLE IF NOT EXISTS `device_data` (
  `device_id` int(11) NOT NULL,
  `device_data` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.device_data: ~0 rows (aproximadamente)
DELETE FROM `device_data`;
/*!40000 ALTER TABLE `device_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `device_data` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.tokens
CREATE TABLE IF NOT EXISTS `tokens` (
  `user_id` int(11) NOT NULL,
  `activate_date` datetime NOT NULL,
  `lifetime` int(11) NOT NULL,
  `end_date` datetime NOT NULL,
  `token` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.tokens: ~0 rows (aproximadamente)
DELETE FROM `tokens`;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `nome_usuario` varchar(50) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.users: ~3 rows (aproximadamente)
DELETE FROM `users`;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `nome`, `nome_usuario`, `senha`, `email`) VALUES
	(27, 'Leonardo Everson', 'firebird1', '5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5', 'firebird_tech@live.com'),
	(28, 'Leonardo Everson', 'leonardoeverson', '8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92', 'leonardo.everson@outlook.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
