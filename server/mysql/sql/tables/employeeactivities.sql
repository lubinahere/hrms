CREATE TABLE IF NOT EXISTS `employee_activities` (
  `id` varchar(50) NOT NULL,
  `punchintime` datetime ,
  `punchouttime` datetime ,
  `workupdates` text(1000) );