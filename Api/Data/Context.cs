using Api.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    public class Context(DbContextOptions<Context> options) : IdentityDbContext<User>(options)
    {
    }
}
