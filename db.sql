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
	(1, 29, 'Sensor Temperatura', '\\sensor\\temp', '', '', '2018-05-27 15:47:37', 'Sensor de teste'),
	(2, 29, 'sensor de umidade', '\\sensor\\umidade', '', '', '2018-05-28 14:49:03', 'Sensor de teste de umidade'),
	(3, 29, 'sensor de chuva', '\\sensor\\chuva', '', '', '2018-05-28 15:00:08', 'Sensor de chuva');
/*!40000 ALTER TABLE `devices` ENABLE KEYS */;

-- Copiando estrutura para tabela trabalho.device_data
CREATE TABLE IF NOT EXISTS `device_data` (
  `device_id` int(11) NOT NULL,
  `topic` varchar(300) NOT NULL,
  `value` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Copiando dados para a tabela trabalho.device_data: ~0 rows (aproximadamente)
DELETE FROM `device_data`;
/*!40000 ALTER TABLE `device_data` DISABLE KEYS */;
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
	(29, 'Leonardo', 'leonardo', '18ccba186d8757c20cbf05d7a98b2c64f9f16eb64ea4a64659bbc5c9b7b3a7fe', 'leonardo.everson@outlook.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
