﻿namespace MyXello.Api.Controllers.ViewModels
{
    public class LessonViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool IsCompleted { get; set; }

        public bool IsCore { get; set; }

        public string IconName { get; set; }
    }
}
