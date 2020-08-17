using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Web
{
    public class BaseListModel
    {
        public BaseListModel()
        {
        }

        public BaseListModel(string title)
        {
            Title = title;
        }

        public string Title { get; }
        public Dictionary<string, string> Items { get; }
    }

    public class BaseListModel<T> : BaseListModel
    {
        public BaseListModel(T pageModel, string title) : base(title)
        {
            PageModel = pageModel;
        }

        public T PageModel { get; }
    }
}
