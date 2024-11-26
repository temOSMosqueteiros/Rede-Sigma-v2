-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dbsigma
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `venda`
--

DROP TABLE IF EXISTS `venda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venda` (
  `id_venda` int(11) NOT NULL AUTO_INCREMENT,
  `n_venda` varchar(50) DEFAULT NULL,
  `data_venda` varchar(120) NOT NULL,
  `nome_cliente` varchar(120) DEFAULT NULL,
  `nome_vendedor` varchar(120) DEFAULT NULL,
  `nome_veículo` varchar(120) DEFAULT NULL,
  `valor_veiculo` varchar(50) DEFAULT NULL,
  `v_entrada` varchar(50) DEFAULT NULL,
  `v_finan` varchar(50) DEFAULT NULL,
  `parcelas` varchar(50) DEFAULT NULL,
  `v_parcelas` varchar(50) DEFAULT NULL,
  `v_total` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_venda`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venda`
--

LOCK TABLES `venda` WRITE;
/*!40000 ALTER TABLE `venda` DISABLE KEYS */;
INSERT INTO `venda` VALUES (1,'V-1731949643159-782','2024-11-18','Larissa','Luiz','9BRBLWHEXG0107721','150000','40','R$ 99.960.00','60','R$ 1.666.00','R$ 100.000.00'),(2,'','','','','','','','','','',''),(3,'V-1731977096017-879','2024-10-18','Agnalo','Luiza','4BRBLWHEXG5567729','150000','40','R$ 99.960.00','24','R$ 4.165.00','R$ 100.000.00'),(4,'V-1732056404054-708','2024-11-19','Larissa','Luiz','7BRBLWHEXG0107822','150000','40','R$ 99.960.00','24','R$ 4.165.00','R$ 100.000.00'),(5,'V-1732057010053-587','2024-11-20','Manuella','Fernanda','9BRBLWHEXG0107721','150000','40','R$ 99.960.00','24','R$ 4.165.00','R$ 100.000.00');
/*!40000 ALTER TABLE `venda` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-26 18:45:30
