
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MyXello.Api.Services.Models;

namespace MyXello.Api.Services
{
    public class LessonsService : ILessonsService
    {
        private IList<LessonModel> lessons = new[]
            {
                new LessonModel
                {
                    Id= 1,
                    Name = "Math",
                    IsCompleted = false,
                    IsCore = false,
                    IconName = "univer.jpg"
                },
                new LessonModel
                {
                    Id= 2,
                    Name = "Gym",
                    IsCompleted = false,
                    IsCore = true,
                    IconName ="bag.jpg"

                },
                new LessonModel
                {
                    Id= 3,
                    Name = "Science",
                    IsCompleted = true,
                    IsCore = true,
                    IconName = "career.jpg"
                }
            };

        public void Complete(int userId, int lessonId)
        {
            
        }

        public LessonModel Get(int userId, int lessonId)
        {
            return this.lessons.FirstOrDefault(l => l.Id == lessonId);
        }

        public IList<LessonModel> GetAll(int userId)
        {
            return this.lessons;
        }
    }
}
