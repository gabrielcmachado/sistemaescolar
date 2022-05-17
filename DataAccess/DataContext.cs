using Microsoft.EntityFrameworkCore;
using sistemaEscolar.Models;

namespace sistemaEscolar.DataAccess
{
    public class DataContext : DbContext
    {
    public DataContext(DbContextOptions<DataContext> options) : base(options) {
    }
        public DbSet<User> Users { get; set; }
        public DbSet<Alunos> Aluno { get; set; }
        public DbSet<Tumas> Turma { get; set; }
        public DbSet<Professores> Professor { get; set; }
        public DbSet<Materias> Materia { get; set; }
        public DbSet<PeriodosAcademico> PeriodoAcademico { get; set; }
        public DbSet<ProvasDetalhe> ProvaDetalhe { get; set; }
        public DbSet<TurmasDetalhe> TurmaDetalhe { get; set; }

    }
}
