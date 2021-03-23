using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using MyXello.Api.Controllers.ViewModels;
using MyXello.Api.Services;

namespace MyXello.Api.Controllers
{
    [Route("api/users/{userId}/lessons")]
    [ApiController]
    public class LessonsController : ControllerBase
    {
        private readonly ILessonsService lessonsService;

        public LessonsController(ILessonsService lessonsService)
        {
            this.lessonsService = lessonsService;
        }

        [HttpGet]
        public IEnumerable<LessonViewModel> Get(int userId)
        {
            var lessons =  this.lessonsService.GetAll(userId);

            var result = new List<LessonViewModel>();

            for(var i = 0; i < lessons.Count; i++)
            {
                var lesson = lessons[i];
                var viewLesson = new LessonViewModel();
                viewLesson.Id = lesson.Id;
                viewLesson.Name = lesson.Name;
                viewLesson.IsCompleted = lesson.IsCompleted;
                viewLesson.IsCore = lesson.IsCore;
                viewLesson.IconName = lesson.IconName;

                result.Add(viewLesson);
            }
            return result;
        }

        [HttpGet]
        [Route("{lessonId}")]
        public LessonViewModel GetLesson(int userId, int lessonId)
        {
            var lesson = this.lessonsService.Get(userId, lessonId);

            var l = new LessonViewModel();
            l.Id = lesson.Id;
            l.Name = lesson.Name;
            l.IsCompleted = lesson.IsCompleted;
            l.IsCore = lesson.IsCore;
            l.IconName = lesson.IconName;
                            
            return l;
                     
        }

        [HttpPut]
        [Route("{lessonId}/complete")]
        public void CompleteLesson(int userId, int lessonId)
        {
            this.lessonsService.Complete(userId, lessonId);
        }
    }
}