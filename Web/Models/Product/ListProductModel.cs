using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web
{
    public class ListProductModel : BaseListModel
    {
        public ListProductModel()
        {
            Products = new List<ProductModel>();
        }

        public string Name { get; set; }
        public List<ProductModel> Products { get; set; }
    }
}
