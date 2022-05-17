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
    public class ProfessoresController : ControllerBase
    {
        private readonly DataContext _context;

        public ProfessoresController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Professores
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Professores>>> GetProfessor()
        {
          if (_context.Professor == null)
          {
              return NotFound();
          }
            return await _context.Professor.ToListAsync();
        }

        // GET: api/Professores/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Professores>> GetProfessores(int id)
        {
          if (_context.Professor == null)
          {
              return NotFound();
          }
            var professores = await _context.Professor.FindAsync(id);

            if (professores == null)
            {
                return NotFound();
            }

            return professores;
        }

        // PUT: api/Professores/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProfessores(int id, Professores professores)
        {
            if (id != professores.idProfessor)
            {
                return BadRequest();
            }

            _context.Entry(professores).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProfessoresExists(id))
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

        // POST: api/Professores
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Professores>> PostProfessores(Professores professores)
        {
          if (_context.Professor == null)
          {
              return Problem("Entity set 'DataContext.Professor'  is null.");
          }
            _context.Professor.Add(professores);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProfessores", new { id = professores.idProfessor }, professores);
        }

        // DELETE: api/Professores/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProfessores(int id)
        {
            if (_context.Professor == null)
            {
                return NotFound();
            }
            var professores = await _context.Professor.FindAsync(id);
            if (professores == null)
            {
                return NotFound();
            }

            _context.Professor.Remove(professores);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProfessoresExists(int id)
        {
            return (_context.Professor?.Any(e => e.idProfessor == id)).GetValueOrDefault();
        }
    }
}
