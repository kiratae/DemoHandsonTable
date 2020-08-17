using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Web.Models;

namespace Web
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult List()
        {
            ListProductModel model = new ListProductModel();
            List<ProductModel> products = new List<ProductModel>() {
                new ProductModel(){ ProductId = 1, Name = "Coke", Price =  15 },
                new ProductModel(){ ProductId = 2, Name = "Pepsi", Price =  19 },
                new ProductModel(){ ProductId = 3, Name = "Beer", Price =  54 },
            };
            model.Products.AddRange(products);
            return View(new BaseListModel<ListProductModel>(model, "Product List"));
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
