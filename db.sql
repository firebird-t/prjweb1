-- --------------------------------------------------------
-- Servidor:                     192.168.10.109
-- Versão do servidor:           10.2.14-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              9.5.0.5277
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Copiando estrutura do banco de dados para trabalho
CREATE DATABASE IF NOT EXISTS `trabalho` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `trabalho`;

-- Copiando estrutura para tabela trabalho.devices
CREATE TABLE IF NOT EXISTS `devices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `ip` varchar(16) DEFAULT NULL,
  `protocolo` varchar(10) DEFAULT NULL,
  `data_criacao` timestamp NOT NULL DEFAULT current_timestamp(),
  `tipo` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.devices: ~13 rows (aproximadamente)
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;
INSERT INTO `devices` (`id`, `nome`, `ip`, `protocolo`, `data_criacao`, `tipo`) VALUES
	(1, 'controle_temp', '192.168.10.100', 'ip', '2018-04-21 15:44:55', 'arduino\r\n'),
	(2, 'leonardo', 'leonardo', 'leonardo', '2018-04-22 16:11:56', '0'),
	(3, 'Raspberry', '192.168.1.5', 'ip', '2018-04-22 16:15:15', '0'),
	(4, 'Raspberry', '192.168.1.5', 'ip', '2018-04-22 16:16:05', '0'),
	(5, 'Raspberry', '192.168.1.5', 'ip', '2018-04-22 16:16:28', '0'),
	(6, 'Raspberry', '192.168.1.6', 'Ethernet', '2018-04-22 16:18:29', '0'),
	(7, 'Raspberry', '192.168.1.6', 'Ethernet', '2018-04-22 16:19:11', '0'),
	(8, 'Raspberry', '192.168.1.6', 'Ethernet', '2018-04-22 16:19:46', '0'),
	(9, 'Raspberry', '192.168.1.5', 'leonardo', '2018-04-22 17:48:18', '0'),
	(10, 'leonardo', '192.168.1.6', 'leonardo', '2018-04-22 17:48:28', '0'),
	(11, 'Raspberry', 'leonardo', 'ip', '2018-04-22 18:55:18', '0'),
	(12, 'Raspberry', '192.168.1.5', 'ip', '2018-04-22 19:12:27', '0'),
	(13, 'Raspberry', '192.168.1.5', 'Ethernet', '2018-04-22 19:40:49', '0');
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `nome_usuario` varchar(50) NOT NULL,
  `senha` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.users: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
