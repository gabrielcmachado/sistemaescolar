using SQLite;
using System.ComponentModel.DataAnnotations;
namespace sistemaEscolar.Models
{
    public class ProvasDetalhe
    {
        [Key]
        [AutoIncrement]
        public int idProvaDetalhe { get; set; }
        public int idAluno { get; set; }
        public int idPeriodo { get; set; }
        public int idMateria { get; set; }
        public int idTurma { get; set; }
        public decimal ntProva1 { get; set; }
        public decimal ntProva2 { get; set; }
        public decimal ntProva3 { get; set; }
        public decimal ntProva4 { get; set; }
        public bool stRecuperacao { get; set; }
        public bool stAprovado { get; set; }

    }
}