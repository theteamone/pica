﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OrdenesCore.Interfaces
{
    public interface IAsyncRepository<T>
    {
        public Task<T> GetByIdAsync(long id);
        public Task<IReadOnlyList<T>> GetAllAsync();
        public Task<T> AddAsync(T entity);
        public Task UpdateAsync(T entity);
        public Task DeleteAsync(T entity);
        public Task<IList<T>> AddRangeAsync(IList<T> entity);
        public Task<IReadOnlyList<T>> GetByCustomerAsync(string emailCliente);
        public Task<IReadOnlyList<T>> GetOrdenDetailByOrdenIdAsync(long ordenId);
    }
}
