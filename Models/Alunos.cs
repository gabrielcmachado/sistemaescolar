using SQLite;
using System.ComponentModel.DataAnnotations;

namespace sistemaEscolar.Models
{
    public class Alunos
    {
            [Key]
            [AutoIncrement]
            public int idAluno { get; set; }
            [SQLite.MaxLength(120)]
            public string nomeAluno { get; set; }
            public DateTime dtCadastro { get; set; }
            public bool stAtivo { get; set; }
    }
}