using SQLite;
using System.ComponentModel.DataAnnotations;
namespace sistemaEscolar.Models
{
    public class Materias
    {
        [Key]
        [AutoIncrement]
        public int idMateria { get; set; }
        [SQLite.MaxLength(120)]
        public string nomeMateria { get; set; }
        public float pesoProva1 { get; set; }
        public float pesoProva2 { get; set; }
        public float pesoProva3 { get; set; }
    }
}