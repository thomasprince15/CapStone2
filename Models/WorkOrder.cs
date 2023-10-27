namespace CapStone2.Models;

public class WorkOrder
{
    public int Id { get; set; }
    public int? ProfileId { get; set; }
    public UserProfile UserProfile { get; set; }
    public int CarId { get; set; }
    public Car Car { get; set; }
    public int LiftId { get; set; }
    public string Description { get; set; }
    public DateTime DayNeeded { get; set; }
}