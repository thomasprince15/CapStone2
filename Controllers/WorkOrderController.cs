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

    [HttpGet]
    [Authorize]
    public IActionResult Get()
    {
        return Ok(_dbContext.WorkOrders
        .Include(wo => wo.Car)
        .Include(wo => wo.CarLift)
        .ToList());
    }

    [HttpGet("{id}")]
    [Authorize]
    public IActionResult GetWorkOrderById(int id)
    {
        WorkOrder workOrder = _dbContext
        .WorkOrders
        .SingleOrDefault(c => c.Id == id);
        if (workOrder == null)
        {
            return NotFound();
        }
        return Ok(workOrder);
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
        workOrderToUpdate.CarLiftId = workOrder.CarLiftId;
        workOrderToUpdate.CarId = workOrder.CarId;

        _dbContext.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    [Authorize]
     public IActionResult DeleteWorkOrder(int id)
    {
        // Find the work order by its ID
        WorkOrder workOrderToDelete = _dbContext.WorkOrders.SingleOrDefault(wo => wo.Id == id);

        if (workOrderToDelete == null)
        {
            // If the work order with the specified ID does not exist, return a "Not Found" response
            return NotFound();
        }
        // Remove the work order from the database
        _dbContext.WorkOrders.Remove(workOrderToDelete);
        _dbContext.SaveChanges();
        // Return a "No Content" response to indicate successful deletion
        return NoContent();
    }
}