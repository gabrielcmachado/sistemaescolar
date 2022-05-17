using SQLite;
using System.ComponentModel.DataAnnotations;
namespace sistemaEscolar.Models
{
    public class Professores
    {
        [Key]
        [AutoIncrement]
        public int idProfessor { get; set; }
        [SQLite.MaxLength(120)]
        public string nomeProfessor { get; set; }
        public DateTime dtCadastro { get; set; }
        public bool stAtivo { get; set; }
    }
}