-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 01-06-2023 a las 22:27:46
-- Versión del servidor: 8.0.30
-- Versión de PHP: 8.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_ff`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `continentes`
--

CREATE TABLE `continentes` (
  `cod_continente` int NOT NULL,
  `nombre_continente` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `area` decimal(10,1) NOT NULL,
  `poblacion` decimal(10,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `continentes`
--

INSERT INTO `continentes` (`cod_continente`, `nombre_continente`, `area`, `poblacion`) VALUES
(1, 'Asia', '29.5', '60.0'),
(2, 'América', '28.5', '14.0'),
(3, 'África', '20.4', '14.0'),
(4, 'Antártida', '9.2', '0.1'),
(5, 'Europa', '6.8', '11.0'),
(6, 'Oceania', '5.9', '0.5');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `idiomas`
--

CREATE TABLE `idiomas` (
  `cod_idioma` int NOT NULL,
  `nombre_idioma` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hablantes` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `idiomas`
--

INSERT INTO `idiomas` (`cod_idioma`, `nombre_idioma`, `hablantes`) VALUES
(1, 'Albanés', 5),
(2, 'Alemán', 130),
(3, 'Dialecto catalán', 10),
(4, 'Armenio', 6),
(5, 'Azerbaiyano', 8),
(6, 'Neerlandés', 30),
(7, 'Bielorruso', 11),
(8, 'Bosnio', 4),
(9, 'Búlgaro', 9),
(10, 'Griego', 12),
(11, 'Latín', 0),
(12, 'Croata', 7),
(13, 'Danés', 6),
(14, 'Eslovaco', 5),
(15, 'Esloveno', 2),
(16, 'Español ', 596),
(17, 'Estonio', 1),
(18, 'Finés', 5),
(19, 'Francés', 321),
(20, 'Húngaro', 15),
(21, 'Irlandés', 3),
(22, 'Islandés', 1),
(23, 'Italiano', 85),
(24, 'Letón', 1),
(25, 'Lituano', 4),
(26, 'Macedonio', 2),
(27, 'Montenegrino', 1),
(28, 'Noruego', 5),
(29, 'Polaco', 50),
(30, 'Portugués', 270),
(31, 'Inglés', 1452),
(32, 'Checo', 12),
(33, 'Rumano', 28),
(34, 'Ruso', 250),
(35, 'Serbio', 12),
(36, 'Sueco', 10),
(37, 'Turco', 85),
(38, 'Ucraniano', 27),
(39, 'Georgiano', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monedas`
--

CREATE TABLE `monedas` (
  `cod_moneda` int NOT NULL,
  `nombre_moneda` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `abreviatura` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `simbolo` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `monedas`
--

INSERT INTO `monedas` (`cod_moneda`, `nombre_moneda`, `abreviatura`, `simbolo`) VALUES
(1, 'Euro', 'EUR', '€'),
(2, 'Libra esterlina', 'GBP', '£'),
(3, 'Franco suizo', 'CHF', 'Fr'),
(4, 'Rublo ruso', 'RUB', '₽'),
(5, 'Corona danesa', 'DKK', 'kr'),
(6, 'Lek', 'ALL', 'L'),
(7, 'Rublo bielorruso', 'BYN', '₽'),
(8, 'Marco bosnioherzegovino', 'BAM', 'KM'),
(9, 'Leva búlgara', 'BGN', 'Лв'),
(10, 'Dram armenio', 'AMD', '֏'),
(11, 'Manat azerbaiyano', 'AZN', '₼'),
(12, 'Forinto húngaro', 'HUF', 'Ft'),
(13, 'Corona islandesa', 'ISK', 'kr'),
(14, 'Dinar macedonio', 'MKD', 'Ден'),
(15, 'Leu moldavo', 'MDL', 'LM'),
(16, 'Corona noruega', 'NOK', 'kr'),
(17, 'Zloty', 'PLN', 'zł'),
(18, 'Corona checa', 'CZK', 'Kč'),
(19, 'Leu rumano', 'RON', 'L'),
(20, 'Dinar serbio', 'RSD', 'Дин'),
(21, 'Corona sueca', 'SEK', 'kr'),
(22, 'Lira turca', 'TRY', '₺'),
(23, 'Grivna', 'UAH', '₴'),
(24, 'Lari', 'GEL', '₾');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paises`
--

CREATE TABLE `paises` (
  `id` int NOT NULL,
  `nombre_pais` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `bandera` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `poblacion` bigint NOT NULL,
  `capital` varchar(30) NOT NULL,
  `cod_moneda` int NOT NULL,
  `cod_continente` int NOT NULL,
  `cod_idioma` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `paises`
--

INSERT INTO `paises` (`id`, `nombre_pais`, `bandera`, `poblacion`, `capital`, `cod_moneda`, `cod_continente`, `cod_idioma`) VALUES
(1, 'Albania', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Flag_of_Albania.svg/800px-Flag_of_Albania.svg.png', 2837848, 'Tirana', 6, 5, 1),
(2, 'Alemania', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png', 84270625, 'Berlín', 1, 5, 2),
(3, 'Andorra', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Andorra.svg/800px-Flag_of_Andorra.svg.png', 81588, 'Andorra la Vella', 1, 5, 3),
(4, 'Armenia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Armenia.svg/800px-Flag_of_Armenia.svg.png', 2777974, 'Ereván', 10, 5, 4),
(5, 'Austria', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/800px-Flag_of_Austria.svg.png', 9027999, 'Viena', 1, 5, 2),
(6, 'Azerbaiyán', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Flag_of_Azerbaijan.svg/800px-Flag_of_Azerbaijan.svg.png', 10412652, 'Bakú', 11, 5, 5),
(7, 'Bélgica', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/692px-Flag_of_Belgium.svg.png', 11550039, 'Bruselas', 1, 5, 6),
(8, 'Bielorrusia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Flag_of_Belarus.svg/1024px-Flag_of_Belarus.svg.png', 9498237, 'Minsk', 7, 5, 7),
(9, 'Bosnia y Herzegovina', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1024px-Flag_of_Bosnia_and_Herzegovina.svg.png', 3281000, 'Sarajevo', 8, 5, 8),
(10, 'Bulgaria', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1024px-Flag_of_Bulgaria.svg.png', 6951482, 'Sofía', 9, 5, 9),
(11, 'Chipre', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Cyprus.svg/1024px-Flag_of_Cyprus.svg.png', 956800, 'Nicosia', 1, 5, 10),
(12, 'Vaticano', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_the_Vatican_City.svg/1024px-Flag_of_the_Vatican_City.svg.png', 618, 'Ciudad del Vaticano', 1, 5, 11),
(13, 'Croacia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/1024px-Flag_of_Croatia.svg.png', 3888529, 'Zagreb', 1, 5, 12),
(14, 'Dinamarca', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/1024px-Flag_of_Denmark.svg.png', 5837213, 'Copenhague', 5, 5, 13),
(15, 'Eslovaquia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Flag_of_Slovakia.svg/1024px-Flag_of_Slovakia.svg.png', 5464060, 'Bratislava', 1, 5, 14),
(16, 'Eslovenia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Flag_of_Slovenia.svg/1024px-Flag_of_Slovenia.svg.png', 2100126, 'Liubliana', 1, 5, 15),
(17, 'España', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/135px-Bandera_de_Espa%C3%B1a.svg.png', 47615034, 'Madrid', 1, 5, 16),
(18, 'Estonia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Flag_of_Estonia.svg/135px-Flag_of_Estonia.svg.png', 1316133, 'Tallin', 1, 5, 17),
(19, 'Finlandia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/135px-Flag_of_Finland.svg.png', 5549184, 'Helsinki', 1, 5, 18),
(20, 'Francia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/135px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png', 67407241, 'París', 1, 5, 19),
(21, 'Grecia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/135px-Flag_of_Greece.svg.png', 10432481, 'Atenas', 1, 5, 10),
(22, 'Hungría', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Flag_of_Hungary.svg/135px-Flag_of_Hungary.svg.png', 9678000, 'Budapest', 12, 5, 20),
(23, 'Irlanda', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Flag_of_Ireland.svg/135px-Flag_of_Ireland.svg.png', 5123536, 'Dublín', 1, 5, 21),
(24, 'Islandia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/135px-Flag_of_Iceland.svg.png', 366425, 'Reikiavik', 13, 5, 22),
(25, 'Italia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/135px-Flag_of_Italy.svg.png', 58870764, 'Roma', 1, 5, 23),
(26, 'Letonia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Flag_of_Latvia.svg/135px-Flag_of_Latvia.svg.png', 1912789, 'Riga', 1, 5, 24),
(27, 'Liechtenstein', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Flag_of_Liechtenstein.svg/135px-Flag_of_Liechtenstein.svg.png', 38749, 'Vaduz', 3, 5, 2),
(28, 'Lituania', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Flag_of_Lithuania.svg/135px-Flag_of_Lithuania.svg.png', 2853001, 'Vilna', 1, 5, 25),
(29, 'Luxemburgo', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/135px-Flag_of_Luxembourg.svg.png', 626108, 'Luxemburgo', 1, 5, 19),
(30, 'Macedonia del Norte', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/135px-Flag_of_North_Macedonia.svg.png', 2072531, 'Skopie', 14, 5, 26),
(31, 'Malta', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Malta.svg/135px-Flag_of_Malta.svg.png', 475700, 'La Valeta', 1, 5, 31),
(32, 'Moldavia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Flag_of_Moldova.svg/135px-Flag_of_Moldova.svg.png', 2597100, 'Chisináu', 15, 5, 33),
(33, 'Mónaco', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Flag_of_Monaco.svg/135px-Flag_of_Monaco.svg.png', 38100, 'Mónaco', 1, 5, 19),
(34, 'Montenegro', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flag_of_Montenegro.svg/135px-Flag_of_Montenegro.svg.png', 642550, 'Podgorica', 1, 5, 27),
(35, 'Noruega', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/135px-Flag_of_Norway.svg.png', 5488984, 'Oslo', 16, 5, 28),
(36, 'Países Bajos', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/135px-Flag_of_the_Netherlands.svg.png', 17302116, 'Ámsterdam', 1, 5, 6),
(37, 'Polonia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/135px-Flag_of_Poland.svg.png', 41026068, 'Varsovia', 17, 5, 29),
(38, 'Portugal', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/135px-Flag_of_Portugal.svg.png', 10352042, 'Lisboa', 1, 5, 30),
(39, 'Reino Unido', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/135px-Flag_of_the_United_Kingdom_%283-5%29.svg.png', 67736800, 'Londres', 2, 5, 31),
(40, 'República Checa', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/135px-Flag_of_the_Czech_Republic.svg.png', 10610947, 'Praga', 18, 5, 32),
(41, 'Rumanía', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/135px-Flag_of_Romania.svg.png', 19317984, 'Bucarest', 19, 5, 33),
(42, 'Rusia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/135px-Flag_of_Russia.svg.png', 145478097, 'Moscú', 4, 5, 34),
(43, 'San Marino', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Flag_of_San_Marino.svg/135px-Flag_of_San_Marino.svg.png', 33553, 'San Marino', 1, 5, 23),
(44, 'Serbia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/135px-Flag_of_Serbia.svg.png', 6690887, 'Belgrado', 20, 5, 35),
(45, 'Suecia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/135px-Flag_of_Sweden.svg.png', 10343403, 'Estocolmo', 21, 5, 36),
(46, 'Suiza', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/110px-Flag_of_Switzerland.svg.png', 8670300, 'Berna', 3, 5, 2),
(47, 'Turquía', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/135px-Flag_of_Turkey.svg.png', 85816190, 'Ankara', 22, 5, 37),
(48, 'Ucrania', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/135px-Flag_of_Ukraine.svg.png', 36744636, 'Kiev', 23, 5, 38),
(49, 'Georgia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_Georgia.svg/135px-Flag_of_Georgia.svg.png', 3728278, 'Tiflis', 24, 5, 39);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas_quiz`
--

CREATE TABLE `preguntas_quiz` (
  `id` int NOT NULL,
  `relacion_pregunta` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `campo_pregunta` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pregunta` varchar(300) NOT NULL,
  `relacion_respuesta` varchar(20) NOT NULL,
  `campo_respuesta` varchar(20) NOT NULL,
  `clave_relacion` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `preguntas_quiz`
--

INSERT INTO `preguntas_quiz` (`id`, `relacion_pregunta`, `campo_pregunta`, `pregunta`, `relacion_respuesta`, `campo_respuesta`, `clave_relacion`) VALUES
(1, 'monedas', 'nombre_moneda', '¿Cúal es el símbolo de', 'monedas', 'simbolo', 'cod_moneda'),
(2, 'monedas', 'nombre_moneda', '¿Cúal es la abreviatura iso de', 'monedas', 'abreviatura', 'cod_moneda'),
(3, 'paises', 'nombre_pais', '¿Cúal es la moneda oficial de', 'monedas', 'nombre_moneda', 'cod_moneda'),
(4, 'paises', 'nombre_pais', '¿Cúal es el idioma oficial de', 'idiomas', 'nombre_idioma', 'cod_idioma'),
(5, 'idiomas', 'nombre_idioma', '¿Cuántos millones(aprox) de personas hablan', 'idiomas', 'hablantes', 'cod_idioma'),
(6, 'paises', 'nombre_pais', '¿A qué continente pertenece', 'continentes', 'nombre_continente', 'cod_continente'),
(7, 'continentes', 'nombre_continente', '¿Qué porcentaje de área(km2) ocupa', 'continentes', 'area', 'cod_continente'),
(8, 'continentes', 'nombre_continente', '¿Qué porcentaje de densidad(hab/km2) tiene', 'continentes', 'poblacion', 'cod_continente'),
(9, 'paises', 'nombre_pais', '¿Cuál es la capital de', 'paises', 'capital', 'id'),
(10, 'paises', 'nombre_pais', '¿Cuál es la bandera de', 'paises', 'bandera', 'id'),
(11, 'paises', 'nombre_pais', '¿Cuánta gente vive en', 'paises', 'poblacion', 'id');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ranking`
--

CREATE TABLE `ranking` (
  `id_usuario` bigint NOT NULL,
  `nombre_juego` varchar(30) NOT NULL,
  `puntuacion` int NOT NULL,
  `tiempo` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `ranking`
--

INSERT INTO `ranking` (`id_usuario`, `nombre_juego`, `puntuacion`, `tiempo`) VALUES
(29, 'banderas_europa', 100, '00:19:4'),
(29, 'mapa_europa', 0, '00:08:2'),
(29, 'quiz_europa', 50, '00:16:4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(29, 'admin', 'admin@admin.com', '$2y$10$8k9hmhQ.eDLdW7FrmcvzfOhKiGY5yvb8xO4g7.kUTvgBvfPYqUIIG', '2023-05-23 15:24:53', '2023-05-23 15:24:53');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `continentes`
--
ALTER TABLE `continentes`
  ADD PRIMARY KEY (`cod_continente`);

--
-- Indices de la tabla `idiomas`
--
ALTER TABLE `idiomas`
  ADD PRIMARY KEY (`cod_idioma`);

--
-- Indices de la tabla `monedas`
--
ALTER TABLE `monedas`
  ADD PRIMARY KEY (`cod_moneda`);

--
-- Indices de la tabla `paises`
--
ALTER TABLE `paises`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cod_moneda` (`cod_moneda`),
  ADD KEY `cod_continente` (`cod_continente`),
  ADD KEY `cod_idioma` (`cod_idioma`);

--
-- Indices de la tabla `preguntas_quiz`
--
ALTER TABLE `preguntas_quiz`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `ranking`
--
ALTER TABLE `ranking`
  ADD PRIMARY KEY (`id_usuario`,`nombre_juego`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `paises`
--
ALTER TABLE `paises`
  ADD CONSTRAINT `paises_ibfk_1` FOREIGN KEY (`cod_idioma`) REFERENCES `idiomas` (`cod_idioma`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `paises_ibfk_2` FOREIGN KEY (`cod_continente`) REFERENCES `continentes` (`cod_continente`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `paises_ibfk_3` FOREIGN KEY (`cod_moneda`) REFERENCES `monedas` (`cod_moneda`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `ranking`
--
ALTER TABLE `ranking`
  ADD CONSTRAINT `ranking_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
