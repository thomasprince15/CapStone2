using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using CapStone2.Data;
using CapStone2.Models;

namespace CapStone2.Controllers;

[ApiController]
[Route("api/[controller]")]
public class WorkOrderController : ControllerBase
{
    private CapStone2DbContext _dbContext;

    public WorkOrderController(CapStone2DbContext context)
    {
        _dbContext = context;
    }

    [HttpGet("incomplete")]
    [Authorize]
    public IActionResult GetIncompleteWorkOrders()
    {
        return Ok(_dbContext.WorkOrders
        .Include(wo => wo.Car)
        .ThenInclude(c => c.UserProfile)
        .Include(wo => wo.Car)
        .ThenInclude(b => b.Model)
        .Include(wo => wo.UserProfile)
        .OrderBy(wo => wo.DayNeeded)
        .ThenByDescending(wo => wo.ProfileId == null).ToList());
    }

    [HttpPost]
    [Authorize]
    public IActionResult CreateWorkOrder(WorkOrder workOrder)
    {
        workOrder.DayNeeded = DateTime.Now;
        _dbContext.WorkOrders.Add(workOrder);
        _dbContext.SaveChanges();
        return Created($"/api/workorder/{workOrder.Id}", workOrder);
    }

    [HttpPut("{id}")]
[Authorize]
public IActionResult UpdateWorkOrder(WorkOrder workOrder, int id)
{
    WorkOrder workOrderToUpdate = _dbContext.WorkOrders.SingleOrDefault(wo => wo.Id == id);
    if (workOrderToUpdate == null)
    {
        return NotFound();
    }
    else if (id != workOrder.Id)
    {
        return BadRequest();
    }

    //These are the only properties that we want to make editable
    workOrderToUpdate.Description = workOrder.Description;
    workOrderToUpdate.ProfileId = workOrder.ProfileId;
    workOrderToUpdate.CarId = workOrder.CarId;

    _dbContext.SaveChanges();

    return NoContent();
}
}