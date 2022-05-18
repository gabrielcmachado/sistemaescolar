using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace sistemaEscolar.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Aluno",
                columns: table => new
                {
                    idAluno = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nomeAluno = table.Column<string>(type: "TEXT", nullable: false),
                    dtCadastro = table.Column<DateTime>(type: "TEXT", nullable: false),
                    stAtivo = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aluno", x => x.idAluno);
                });

            migrationBuilder.CreateTable(
                name: "Materia",
                columns: table => new
                {
                    idMateria = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nomeMateria = table.Column<string>(type: "TEXT", nullable: false),
                    pesoProva1 = table.Column<float>(type: "REAL", nullable: false),
                    pesoProva2 = table.Column<float>(type: "REAL", nullable: false),
                    pesoProva3 = table.Column<float>(type: "REAL", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Materia", x => x.idMateria);
                });

            migrationBuilder.CreateTable(
                name: "PeriodoAcademico",
                columns: table => new
                {
                    idPeriodo = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nomePeriodo = table.Column<string>(type: "TEXT", nullable: false),
                    dtCadastro = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PeriodoAcademico", x => x.idPeriodo);
                });

            migrationBuilder.CreateTable(
                name: "Professor",
                columns: table => new
                {
                    idProfessor = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nomeProfessor = table.Column<string>(type: "TEXT", nullable: false),
                    dtCadastro = table.Column<DateTime>(type: "TEXT", nullable: false),
                    stAtivo = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Professor", x => x.idProfessor);
                });

            migrationBuilder.CreateTable(
                name: "ProvaDetalhe",
                columns: table => new
                {
                    idProvaDetalhe = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    idAluno = table.Column<int>(type: "INTEGER", nullable: false),
                    idPeriodo = table.Column<int>(type: "INTEGER", nullable: false),
                    idMateria = table.Column<int>(type: "INTEGER", nullable: false),
                    idTurma = table.Column<int>(type: "INTEGER", nullable: false),
                    ntProva1 = table.Column<decimal>(type: "TEXT", nullable: false),
                    ntProva2 = table.Column<decimal>(type: "TEXT", nullable: false),
                    ntProva3 = table.Column<decimal>(type: "TEXT", nullable: false),
                    ntProva4 = table.Column<decimal>(type: "TEXT", nullable: false),
                    stRecuperacao = table.Column<bool>(type: "INTEGER", nullable: false),
                    stAprovado = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProvaDetalhe", x => x.idProvaDetalhe);
                });

            migrationBuilder.CreateTable(
                name: "Turma",
                columns: table => new
                {
                    idTurma = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nmTurma = table.Column<string>(type: "TEXT", nullable: false),
                    qtAlunos = table.Column<int>(type: "INTEGER", nullable: false),
                    stAtivo = table.Column<bool>(type: "INTEGER", nullable: false),
                    dtCadastro = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Turma", x => x.idTurma);
                });

            migrationBuilder.CreateTable(
                name: "TurmaDetalhe",
                columns: table => new
                {
                    idTurmaDetalhe = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    idAluno = table.Column<int>(type: "INTEGER", nullable: false),
                    idPeriodo = table.Column<int>(type: "INTEGER", nullable: false),
                    idProfessor = table.Column<int>(type: "INTEGER", nullable: false),
                    idTurma = table.Column<int>(type: "INTEGER", nullable: false),
                    idMateria = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TurmaDetalhe", x => x.idTurmaDetalhe);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    idUser = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nameUser = table.Column<string>(type: "TEXT", nullable: false),
                    passwordUser = table.Column<string>(type: "TEXT", nullable: false),
                    createData = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.idUser);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Aluno");

            migrationBuilder.DropTable(
                name: "Materia");

            migrationBuilder.DropTable(
                name: "PeriodoAcademico");

            migrationBuilder.DropTable(
                name: "Professor");

            migrationBuilder.DropTable(
                name: "ProvaDetalhe");

            migrationBuilder.DropTable(
                name: "Turma");

            migrationBuilder.DropTable(
                name: "TurmaDetalhe");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
