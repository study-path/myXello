using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyXello.Api.Controllers.ViewModels;

namespace MyXello.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonsController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<LessonViewModel> Get()
        {
            return new[] {
                new LessonViewModel {
                    Id=1,
                    Name="Math"
                },
                new LessonViewModel{
                    Id=2,
                    Name="Gym"
                }
            };            
        }
    }
}