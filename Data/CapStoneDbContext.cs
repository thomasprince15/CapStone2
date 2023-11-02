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

        modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole[]
        {
            new IdentityRole
            {
            Id = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            Name = "Admin",
            NormalizedName = "admin"
            },
            new IdentityRole
        {
            Id = "9008fba6-93a0-412d-bc99-84a6cafb2be5",
            Name = "Customer",
            NormalizedName = "customer"
        }
        });

        modelBuilder.Entity<IdentityUser>().HasData(new IdentityUser[]
        {
            new IdentityUser
            {
            Id = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            UserName = "Administrator",
            Email = "admina@strator.comx",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            },
            new IdentityUser
            {
            Id = "dbc30bc6-0738-3ac4-a2ed-360f5e827a7f",
            UserName = "Demon",
            Email = "demon@strator.comx",
            PasswordHash = new PasswordHasher<IdentityUser>().HashPassword(null, _configuration["AdminPassword"])
            }
        });

        modelBuilder.Entity<IdentityUserRole<string>>().HasData(new IdentityUserRole<string>[]
        {
            new IdentityUserRole<string>
            {
            RoleId = "c3aaeb97-d2ba-4a53-a521-4eea61e59b35",
            UserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f"
            },
            new IdentityUserRole<string>
            {
                RoleId = "9008fba6-93a0-412d-bc99-84a6cafb2be5", 
                UserId = "dbc30bc6-0738-3ac4-a2ed-360f5e827a7f" 
            }
        });
        modelBuilder.Entity<UserProfile>().HasData(new UserProfile[]
        {
            new UserProfile
            {
            Id = 1,
            IdentityUserId = "dbc40bc6-0829-4ac5-a3ed-180f5e916a5f",
            FirstName = "Admina",
            LastName = "Strator",
            Address = "101 Main Street",
            },
            new UserProfile
            {
            Id = 2,
            IdentityUserId = "dbc30bc6-0738-3ac4-a2ed-360f5e827a7f",
            FirstName = "Demon",
            LastName = "Strator",
            Address = "103 Main Street",
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
            },
            new CarLift
            {
                Id = 4,
                Type = "TwoPost"
            },
            new CarLift
            {
                Id = 5,
                Type = "TwoPost"
            },
            new CarLift
            {
                Id = 6,
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
                UserProfileId = 2
            },
            new Car
            {
                Id = 2,
                Year = 1965,
                Make = "Datsun",
                Model = "210",
                UserProfileId = 1
            },
            new Car
            {
                Id = 3,
                Year = 1979,
                Make = "Cheverolet",
                Model = "C30",
                UserProfileId = 2
            },
            new Car
            {
                Id = 4,
                Year = 2003,
                Make = "Subaru",
                Model = "WRX STI",
                UserProfileId = 1
            },
            new Car
            {
                Id = 5,
                Year = 1968,
                Make = "Cheverolet",
                Model = "C10 Apache",
                UserProfileId = 2
            },
        });
        modelBuilder.Entity<WorkOrder>().HasData(new WorkOrder[]
        {
            new WorkOrder
            {
                Id = 1,
                UserProfileId = 2,
                CarId = 1,
                CarLiftId = 3,
                Description = "Flat Tire",
                DayNeeded = new DateTime(2023, 7, 15)
            },
            new WorkOrder
            {
                Id = 2,
                UserProfileId = 1,
                CarId = 3,
                CarLiftId = 2,
                Description = "Burnt Clutch",
                DayNeeded = new DateTime(2023, 7, 12),
            },
            new WorkOrder
            {
                Id = 3,
                UserProfileId = 2,
                CarId = 1,
                CarLiftId = 1,
                Description = "broken clutch fork",
                DayNeeded = new DateTime(2023, 7, 12),
            },
            new WorkOrder
            {
                Id = 4,
                UserProfileId = 1,
                CarLiftId = 4,
                CarId = 2,
                Description = "broken brakes",
                DayNeeded = new DateTime(2023, 7, 15),
            },
            new WorkOrder
            {
                Id = 5,
                UserProfileId = 2,
                CarLiftId = 6,
                CarId = 4,
                Description = "Slipping transmission",
                DayNeeded = new DateTime(2023, 7, 11),
            },
            new WorkOrder
            {
                Id = 6,
                UserProfileId = 1,
                CarLiftId = 5,
                CarId = 5,
                Description = "Cracked Radiator",
                DayNeeded = new DateTime(2023, 7, 19),
            }


    });
    }
}