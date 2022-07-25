-- CREATE TABLE city_info (
--   event_datetime timestamp NOT NULL,
--   city VARCHAR(50) NOT NULL,
--   temperature decimal NOT NULL,
--   light decimal NOT NULL,
--   airquality_raw decimal NOT NULL,
--   sound decimal NOT NULL,
--   humidity decimal NOT NULL,
--   dust decimal NOT NULL);
-- COPY city_info(event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust)
-- FROM 'C:\Users\Public\Documents\city_info.csv' DELIMITER ',' CSV HEADER;
-- SELECT * FROM city_info
-- SELECT * FROM city_info where city = 'Boston' AND event_datetime ='2015-03-01 11:00:00'
-- select * from city_info where city = 'San Francisco' and temperature > 28 and temperature < 30
-- select * from city_info order by sound ASC limit 1
-- select * from city_info order by sound DESC limit 1
select dust from city_info dust where city ='San Francisco' and event_datetime= '2015/03/026 20:00:00';
SELECT city, COUNT(*) FROM  city_info GROUP BY city;
select avg(dust) from city