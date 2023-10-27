using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using CapStone2.Data;

namespace CapStone2.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserProfileController : ControllerBase
{
    private CapStone2DbContext _dbContext;

    public UserProfileController(CapStone2DbContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.UserProfiles.ToList());
    }
}