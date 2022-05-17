using Microsoft.Build.Framework;
using Microsoft.EntityFrameworkCore;
using SQLite;
using System.ComponentModel.DataAnnotations;

namespace sistemaEscolar.Models
{
    public class User
    {
        [Key]
        [AutoIncrement]
        public int idUser { get; set; }
        [SQLite.MaxLength(120)]
        public string nameUser { get; set; }
        public string passwordUser { get; set; }
        public DateTime createData { get; set; }
    }
}