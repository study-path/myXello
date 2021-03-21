using System.Collections.Generic;
using MyXello.Api.Services.Models;

namespace MyXello.Api.Services
{
    public interface ILessonsService
    {
        IList<LessonModel> GetAll(int userId);

        LessonModel Get(int userId, int lessonId);

        void Complete(int userId, int lessonId);   
    }
}
