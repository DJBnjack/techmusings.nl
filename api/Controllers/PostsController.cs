using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using MySql.Data.MySqlClient;
using System.Threading.Tasks;
using System;

namespace techmusings_api.Controllers
{
    class Post
    {
        public int Id;
        public string date;
        public string title;
        [JsonProperty(PropertyName = "abstract")] public string summary;
        public string content;
        public string picture;
        public string link;
    }

    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        [HttpGet]
        public async Task<JsonResult> Get()
        {
            var posts = new List<Post>();

            var conn = new MySqlConnection("server=db;user id=root;password=my-secret-pw;port=3306;database=techmusings;");
            await conn.OpenAsync();
            var cmd = conn.CreateCommand();
            cmd.CommandText = @"SELECT `Id`, `date`, `title`, `abstract`, `picture`, `link` FROM `posts` ORDER BY `Id` DESC LIMIT 10;";
            
            using (var reader = await cmd.ExecuteReaderAsync())
            {
                while (await reader.ReadAsync())
                {
                    var post = new Post
                    {
                        Id = await reader.GetFieldValueAsync<int>(0),
                        date = (await reader.GetFieldValueAsync<DateTime>(1)).ToString(),
                        title = await reader.GetFieldValueAsync<string>(2),
                        summary = await reader.GetFieldValueAsync<string>(3),
                        picture = await reader.GetFieldValueAsync<string>(4),
                        link = await reader.GetFieldValueAsync<string>(5)
                    };
                    posts.Add(post);
                }
            }

            conn.Close();
            return Json(posts);
        }
    }
}
