CREATE DATABASE PRECIOS;
GO

USE PRECIOS

CREATE TABLE Intercambio (
Id INT IDENTITY,
CodMoneda NVARCHAR(3),
DesMoneda NVARCHAR(50),
ValUSD DECIMAL(20,10),
);

GO
CREATE TABLE Pais (
Id INT IDENTITY,
CodPais NVARCHAR(3),
DesPais NVARCHAR(50)
);

GO
CREATE TABLE Impuesto (
Id INT IDENTITY,
DesImpuesto NVARCHAR(50),
CodPais NVARCHAR(3),
Valor DECIMAL (10,2)
);

GO
INSERT INTO Intercambio VALUES ('USD','DOLAR',1)
INSERT INTO Intercambio VALUES ('EUR','EURO',0.82662)
INSERT INTO Intercambio VALUES ('ARS','PESOS ARGENTINOS',93.1443)
INSERT INTO Intercambio VALUES ('BOB','BOLIVIANO',6.93)
INSERT INTO Intercambio VALUES ('BRL','REAL BRAZILERO',5.4763)
INSERT INTO Intercambio VALUES ('CLP','PESO CHILENO',712.6)
INSERT INTO Intercambio VALUES ('COP','PESO COLOMBIANO',3623.76)
INSERT INTO Intercambio VALUES ('PYG','GUARANY PARAGUAYO',6442.07)
INSERT INTO Intercambio VALUES ('PEN','SOL PERUANO',3.7785)
INSERT INTO Intercambio VALUES ('UYU','PESO URUGUAYO',44.1018)
INSERT INTO Intercambio VALUES ('VES','BOLIVAR VENEZOLANO',2573881.14)
INSERT INTO Intercambio VALUES ('GBP','LIBRAS ESTERLINAS',0.72051)

GO
INSERT INTO Pais VALUES ('249','ESTADOS UNIDOS')
INSERT INTO Pais VALUES ('245','ESPAÑA')
INSERT INTO Pais VALUES ('063','ARGENTINA')
INSERT INTO Pais VALUES ('097','BOLIVIA')
INSERT INTO Pais VALUES ('105','BRASIL')
INSERT INTO Pais VALUES ('211','CHILE')
INSERT INTO Pais VALUES ('169','COLOMBIA')
INSERT INTO Pais VALUES ('586','PARAGUAY')
INSERT INTO Pais VALUES ('589','PERU')
INSERT INTO Pais VALUES ('845','URUGUAY')
INSERT INTO Pais VALUES ('850','VENEZUELA')
INSERT INTO Pais VALUES ('628','REINO UNIDO')

GO
INSERT INTO Impuesto VALUES ('TAX EU','249',1)
INSERT INTO Impuesto VALUES ('TAX ESPAÑA','245',2)
INSERT INTO Impuesto VALUES ('TAX ARGENTINA','063',1)
INSERT INTO Impuesto VALUES ('TAX BOLIVIA','097',1)
INSERT INTO Impuesto VALUES ('TAX BRASIL','105',2)
INSERT INTO Impuesto VALUES ('TAX CHILE','211',1)
INSERT INTO Impuesto VALUES ('IVA COLOMBIA','169',3)
INSERT INTO Impuesto VALUES ('TAX PARAGUAY','586',1)
INSERT INTO Impuesto VALUES ('TAX PERU','589',2)
INSERT INTO Impuesto VALUES ('TAX URUGUAY','845',1)
INSERT INTO Impuesto VALUES ('TAX VENEZUELA1','850',1)
INSERT INTO Impuesto VALUES ('TAX VENEZUELA2','850',4)

GO
SELECT * FROM Intercambio
SELECT * FROM Pais
SELECT * FROM Impuesto