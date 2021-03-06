using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helper
{
    public class UserParams
    {
        private const int MAXPAGESIZE = 50;

        private int _pageSize = 10;

        public int PageNumber { get; set; } = 1;

        public int pageSize
        {
            get => _pageSize;
            set => _pageSize = (value > MAXPAGESIZE) ? MAXPAGESIZE : value;
        }
    }
}
