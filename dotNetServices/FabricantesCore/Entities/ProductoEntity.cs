﻿using System;
namespace FabricantesCore.Entities
{
    public class ProductoEntity
    {
        public ProductoEntity()
        {
        }
        public int Id { get; set; }
        public string Nombre { get; set; }
        public double Precio { get; set; }
    }
}
