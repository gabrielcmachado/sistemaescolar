using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sistemaEscolar.DataAccess;
using sistemaEscolar.Models;

namespace sistemaEscolar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MateriasController : ControllerBase
    {
        private readonly DataContext _context;

        public MateriasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Materias
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Materias>>> GetMateria()
        {
          if (_context.Materia == null)
          {
              return NotFound();
          }
            return await _context.Materia.ToListAsync();
        }

        // GET: api/Materias/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Materias>> GetMaterias(int id)
        {
          if (_context.Materia == null)
          {
              return NotFound();
          }
            var materias = await _context.Materia.FindAsync(id);

            if (materias == null)
            {
                return NotFound();
            }

            return materias;
        }

        // PUT: api/Materias/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaterias(int id, Materias materias)
        {
            if (id != materias.idMateria)
            {
                return BadRequest();
            }

            _context.Entry(materias).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MateriasExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Materias
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Materias>> PostMaterias(Materias materias)
        {
          if (_context.Materia == null)
          {
              return Problem("Entity set 'DataContext.Materia'  is null.");
          }
            _context.Materia.Add(materias);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaterias", new { id = materias.idMateria }, materias);
        }

        // DELETE: api/Materias/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMaterias(int id)
        {
            if (_context.Materia == null)
            {
                return NotFound();
            }
            var materias = await _context.Materia.FindAsync(id);
            if (materias == null)
            {
                return NotFound();
            }

            _context.Materia.Remove(materias);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MateriasExists(int id)
        {
            return (_context.Materia?.Any(e => e.idMateria == id)).GetValueOrDefault();
        }
    }
}
