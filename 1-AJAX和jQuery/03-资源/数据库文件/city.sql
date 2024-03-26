SET FOREIGN_KEY_CHECKS=0;

DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `provinceid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;


INSERT INTO `city` VALUES ('1', '石家庄市', '1');
INSERT INTO `city` VALUES ('2', '秦皇岛', '1');
INSERT INTO `city` VALUES ('3', '保定市', '1');
INSERT INTO `city` VALUES ('4', '张家口', '1');
INSERT INTO `city` VALUES ('5', '南昌市', '9');
INSERT INTO `city` VALUES ('6', '九江市', '9');
INSERT INTO `city` VALUES ('7', '宜春市', '9');
INSERT INTO `city` VALUES ('8', '福州市', '8');
INSERT INTO `city` VALUES ('9', '厦门市', '8');
INSERT INTO `city` VALUES ('10', '泉州市', '8');
INSERT INTO `city` VALUES ('11', '龙岩市', '8');
INSERT INTO `city` VALUES ('12', '太原', '2');
INSERT INTO `city` VALUES ('13', '大同', '2');
INSERT INTO `city` VALUES ('14', '呼和浩特', '3');
INSERT INTO `city` VALUES ('15', '包头', '3');
INSERT INTO `city` VALUES ('16', '呼伦贝尔', '3');
