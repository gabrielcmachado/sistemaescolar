using SQLite;
using System.ComponentModel.DataAnnotations;
namespace sistemaEscolar.Models
{
    public class PeriodosAcademico
    {
        [Key]
        [AutoIncrement]
        public int idPeriodo { get; set; }
        [SQLite.MaxLength(120)]
        public string nomePeriodo { get; set; }
        public DateTime dtCadastro { get; set; }
    }
}