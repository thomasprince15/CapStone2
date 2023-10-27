namespace CapStone2.Models;

public class Car
{
    public int Id { get; set; }
    public int Year { get; set; }
    public string Make { get; set; }
    public string Model { get; set; }
    public int ProfileId { get; set; }
    public UserProfile UserProfile { get; set; }
}