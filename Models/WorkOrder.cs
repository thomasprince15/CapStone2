namespace CapStone2.Models;

public class WorkOrder
{
    public int Id { get; set; }
    public int UserProfileId { get; set; }
    public UserProfile UserProfile { get; set; }
    public int CarId { get; set; }
    public Car Car { get; set; }
    public int CarLiftId { get; set; }
    public CarLift CarLift { get; set; }
    public string Description { get; set; }
    public DateTime DayNeeded { get; set; }
}