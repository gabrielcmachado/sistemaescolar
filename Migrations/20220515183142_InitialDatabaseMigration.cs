using Microsoft.EntityFrameworkCore.Migrations;
using System;

#nullable disable

namespace sistemaEscolar.Migrations
{
    public partial class InitialDatabaseMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //Criação Tabela Users

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    idUser = table.Column<int>(nullable: false),
                    nameUser = table.Column<string>(nullable: false),
                    passwordUser = table.Column<string>(nullable: false),
                    createData = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.idUser);
                });

                //Criação Tabela Aluno

                migrationBuilder.CreateTable(
                name: "Aluno",
                columns: table => new
                {
                    idAluno = table.Column<int>(nullable: false),
                    nomeAluno = table.Column<string>(nullable: false),
                    dtCadastro = table.Column<DateTime>(nullable: false),
                    stAtivo = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aluno", x => x.idAluno);
                });

            //Criação Tabela Materias

            migrationBuilder.CreateTable(
            name: "Materia",
            columns: table => new
            {
                idMateria = table.Column<int>(nullable: false),
                nomeMateria = table.Column<string>(nullable: false),
                pesoProva1 = table.Column<float>(nullable: false),
                pesoProva2 = table.Column<float>(nullable: false),
                pesoProva3 = table.Column<float>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Materia", x => x.idMateria);
            });

            //Criação Tabela PeriodosAcademico

            migrationBuilder.CreateTable(
            name: "PeriodoAcademico",
            columns: table => new
            {
                idPeriodo = table.Column<int>(nullable: false),
                nomePeriodo = table.Column<string>(nullable: false),
                dtCadastro = table.Column<DateTime>(nullable: false),
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_PeriodoAcademico", x => x.idPeriodo);
            });

            //Criação Tabela Professores

            migrationBuilder.CreateTable(
            name: "Professor",
            columns: table => new
            {
                idProfessor = table.Column<int>(nullable: false),
                nomeProfessor = table.Column<string>(nullable: false),
                dtCadastro = table.Column<DateTime>(nullable: false),
                stAtivo = table.Column<int>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Professor", x => x.idProfessor);
            });

            //Criação Tabela ProvasDetalhe

            migrationBuilder.CreateTable(
            name: "ProvaDetalhe",
            columns: table => new
            {
                idProvaDetalhe = table.Column<int>(nullable: false),
                idAluno = table.Column<int>(nullable: false),
                idPeriodo = table.Column<int>(nullable: false),
                idMateria = table.Column<int>(nullable: false),
                idTurma = table.Column<int>(nullable: false),
                ntProva1 = table.Column<float>(nullable: false),
                ntProva2 = table.Column<float>(nullable: false),
                ntProva3 = table.Column<float>(nullable: false),
                ntProva4 = table.Column<float>(nullable: false),
                stRecuperacao = table.Column<int>(nullable: false),
                stAprovado = table.Column<int>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_ProvaDetalhe", x => x.idProvaDetalhe);
            });

            //Criação Tabela Turmas

            migrationBuilder.CreateTable(
            name: "Turma",
            columns: table => new
            {
                idTurma = table.Column<int>(nullable: false),
                nmTurma = table.Column<string>(nullable: false),
                qtAlunos = table.Column<int>(nullable: false),
                stAtivo = table.Column<int>(nullable: false),
                dtCadastro = table.Column<DateTime>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_Turma", x => x.idTurma);
            });

            //Criação Tabela TurmasDetalhe

            migrationBuilder.CreateTable(
            name: "TurmaDetalhe",
            columns: table => new
            {
                idTurmaDetalhe = table.Column<int>(nullable: false),
                idAluno = table.Column<int>(nullable: false),
                idPeriodo = table.Column<int>(nullable: false),
                idProfessor = table.Column<int>(nullable: false),
                idTurma = table.Column<int>(nullable: false)
            },
            constraints: table =>
            {
                table.PrimaryKey("PK_TurmaDetalhe", x => x.idTurmaDetalhe);
            });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "Aluno");
            migrationBuilder.DropTable(name: "Materia");
            migrationBuilder.DropTable(name: "PeriodoAcademico");
            migrationBuilder.DropTable(name: "Professor");
            migrationBuilder.DropTable(name: "ProvaDetalhe");
            migrationBuilder.DropTable(name: "Turma");
            migrationBuilder.DropTable(name: "TurmaDetalhe");
            migrationBuilder.DropTable(name: "Users");
        }
    }
}
