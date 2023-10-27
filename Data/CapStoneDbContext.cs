using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using CapStone2.Models;
using Microsoft.AspNetCore.Identity;

namespace CapStone2.Data;
public class CapStone2DbContext : IdentityDbContext<IdentityUser>
{
    private readonly IConfiguration _configuration;
    public DbSet<UserProfile> UserProfiles { get; set; }
    public DbSet<CarLift> CarLifts { get; set; }
    public DbSet<Car> Cars { get; set; }
    public DbSet<WorkOrder> WorkOrders { get; set; }

    public CapStone2DbContext(DbContextOptions<CapStone2DbContext> context, IConfiguration config) : base(context)
    {
        _configuration = config;
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole
        {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser
        {
            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            UserName = "Administrator",
            Email = "admina@strator.comx",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>
        {
            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
        });
        modelBuilder.Entity<UserProfile>().HasData(new UserProfile []
        { 
            new UserProfile
            {
            Id = 1,
            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            FirstName = "Admina",
            LastName = "Strator",
            Address = "101 Main Street",
            }
        });
        modelBuilder.Entity<CarLift>().HasData(new CarLift[]
        {
            new CarLift
            {
                Id = 1,
                Type = "TwoPost"
            },
            new CarLift
            {
                 Id = 2,
                Type = "TwoPost"
            },
            new CarLift
            {
                Id = 3,
                Type = "TwoPost"
            }
        });
        modelBuilder.Entity<Car>().HasData(new Car[]
        {
            new Car
            {
                Id = 1,
                Year = 1972,
                Make = "Cheverolet",
                Model = "Camero",
                ProfileId = 3
            },
            new Car
            {
                Id = 2,
                Year = 1965,
                Make = "Datsun",
                Model = "210",
                ProfileId = 1
            },
            new Car
            {
                Id = 3,
                Year = 1979,
                Make = "Cheverolet",
                Model = "C30",
                ProfileId = 3
            },
            new Car
            {
                Id = 4,
                Year = 2003,
                Make = "Subaru",
                Model = "WRX STI",
                ProfileId = 2
            },
            new Car
            {
                Id = 5,
                Year = 1968,
                Make = "Cheverolet",
                Model = "C10 Apache",
                ProfileId = 2
            },
        });
        modelBuilder.Entity<WorkOrder>().HasData(new WorkOrder[]
        {
            new WorkOrder
            {
                Id = 1,
                ProfileId = 2,
                CarId = 1,
                LiftId = 3,
                Description = "Flat Tire",
                DayNeeded = new DateTime(2023, 7, 15)
            },
            new WorkOrder
            {
                Id = 2,
                ProfileId = 1,
                CarId = 3,
                LiftId = 2,
                Description = "Burnt Clutch",
                DayNeeded = new DateTime(2023, 7, 12),
            }
        });
    }
}