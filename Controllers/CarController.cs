using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CapStone2.Data;
using Microsoft.EntityFrameworkCore;
using CapStone2.Models;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using System.Security.Claims;

namespace CapStone2.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CarController : ControllerBase
{
    private CapStone2DbContext _dbContext;

    public CarController(CapStone2DbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Authorize]
     public IActionResult Get()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var profile = _dbContext.UserProfiles.SingleOrDefault(up => up.IdentityUserId == userId);
        var cars = _dbContext.Cars.Where(c => c.UserProfile.Id == profile.Id);

        return Ok(cars.ToList());
    }

    [HttpGet("{id}")]
    [Authorize]
    public IActionResult GetById(int id)
    {
        Car car = _dbContext
            .Cars
            .Include(c => c.Year)
            .Include(c => c.Make)
            .Include(c => c.Model)
            .SingleOrDefault(c => c.Id == id);

        if (car == null)
        {
            return NotFound();
        }

        return Ok(car);
    }

    [HttpPost]
    [Authorize]
    public IActionResult CreateCar(Car car)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        var profile = _dbContext.UserProfiles.SingleOrDefault(up => up.IdentityUserId == userId);
        car.UserProfileId = profile.Id;
        _dbContext.Cars.Add(car);
        _dbContext.SaveChanges();
        return Created($"/api/cars/{car.Id}", car);
    }

    [HttpDelete("{id}")]
    [Authorize]
     public IActionResult DeleteCar(int id)
    {
        Car carToDelete = _dbContext.Cars.SingleOrDefault(c => c.Id == id);

        if (carToDelete == null)
        {
            return NotFound();
        }

        _dbContext.Cars.Remove(carToDelete);
        _dbContext.SaveChanges();

        return NoContent();
    }

}