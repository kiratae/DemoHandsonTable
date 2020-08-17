using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web
{
    public class ProductModel
    {
        public ProductModel()
        {

        }

        public int? ProductId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

    }
}
