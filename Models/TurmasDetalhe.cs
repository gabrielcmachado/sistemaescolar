using SQLite;
using System.ComponentModel.DataAnnotations;
namespace sistemaEscolar.Models
{
    public class TurmasDetalhe
    {
        [Key]
        [AutoIncrement]
        public int idTurmaDetalhe { get; set; }
        public int idAluno { get; set; }
        public int idPeriodo { get; set; }
        public int idProfessor { get; set; }
        public int idTurma { get; set; }
    }
}