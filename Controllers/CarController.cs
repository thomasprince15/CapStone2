using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CapStone2.Data;
using Microsoft.EntityFrameworkCore;
using CapStone2.Models;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;

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
        return Ok(_dbContext.Cars.Include(c => c.UserProfile).ToList());
    }

    [HttpGet("{id}")]
    [Authorize]
    public IActionResult GetById(int id)
    {
        Car car = _dbContext
            .Cars
            .Include(c => c.UserProfile)
            // .Include(c => c.Year)
            .Include(c => c.Make)
            .Include(c => c.Model)
            .SingleOrDefault(c => c.Id == id);

        if (car == null)
        {
            return NotFound();
        }

        return Ok(car);
    }

}