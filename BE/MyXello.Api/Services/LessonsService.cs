using System.Collections.Generic;
using System.Linq;
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
                Name = "Choosing a College",
                IsCompleted = false,
                IsCore = true,
                IconName = "univer.jpg"
            },
            new LessonModel
            {
                Id= 2,
                Name = "Work Values",
                IsCompleted = false,
                IsCore = true,
                IconName ="bag.jpg"

            },
            new LessonModel
            {
                Id= 3,
                Name = "Finish Matchmaker",
                IsCompleted = false,
                IsCore = true,
                IconName = "fm.jpg"
            },
             new LessonModel
            {
                Id= 4,
                Name = "Career Demand",
                IsCompleted = false,
                IsCore = true,
                IconName = "career.jpg"
            },
            new LessonModel
            {
                Id= 5,
                Name = "Math",
                IsCompleted = false,
                IsCore = false,
                IconName ="math.png"

            },
            new LessonModel
            {
                Id= 6,
                Name = "Science",
                IsCompleted = false,
                IsCore = false,
                IconName = "career.jpg"
            },
            new LessonModel
            {
                Id= 7,
                Name = "Geography",
                IsCompleted = false,
                IsCore = false,
                IconName ="geography.png"

            },
            new LessonModel
            {
                Id= 8,
                Name = "English",
                IsCompleted = false,
                IsCore = false,
                IconName = "career.jpg"
            }
        };

        public void Complete(int userId, int lessonId)
        {            
            for(var i = 0; i <this.lessons.Count(); i++)
            {
                if (this.lessons[i].Id == lessonId)
                {
                    this.lessons[i].IsCompleted = true;
                    break;
                }                
            }
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
