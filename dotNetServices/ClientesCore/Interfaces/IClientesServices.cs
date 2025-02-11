﻿using ClientesCore.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ClientesCore.Interfaces
{
    public interface IClientesServices
    {
        Task<IList<ClienteDTO>> ListarClientes();
        Task<AutenticarDTO> AuthenticarCliente(string UserName, string Password);
        Task<ClienteDTO> RegistrarCliente(ClienteDTO cliente);
    }
}
