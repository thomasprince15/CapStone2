using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CapStone2.Data;
using Microsoft.EntityFrameworkCore;
using CapStone2.Models;

namespace CapStone2.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CarLiftController : ControllerBase
{
    private CapStone2DbContext _dbContext;

    public CarLiftController(CapStone2DbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.CarLifts.ToList());
    }

    [HttpGet("{id}")]
    [Authorize]
    public IActionResult GetById(int id)
    {
        CarLift carLift = _dbContext
            .CarLifts
            .Include(b => b.Type)
            .SingleOrDefault(b => b.Id == id);

        if (carLift == null)
        {
            return NotFound();
        }

        return Ok(carLift);
    }

}