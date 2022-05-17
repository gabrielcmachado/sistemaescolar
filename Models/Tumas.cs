using SQLite;
using System.ComponentModel.DataAnnotations;
namespace sistemaEscolar.Models
{
    public class Tumas
    {
        [Key]
        [AutoIncrement]
        public int idTurma { get; set; }
        [SQLite.MaxLength(120)]
        public string nmTurma { get; set; }
        public int qtAlunos { get; set; }
        public bool stAtivo { get; set; }
        public DateTime dtCadastro { get; set; }
    }
}