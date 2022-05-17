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
    public class TurmasController : ControllerBase
    {
        private readonly DataContext _context;

        public TurmasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Tumas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tumas>>> GetTurma()
        {
          if (_context.Turma == null)
          {
              return NotFound();
          }
            return await _context.Turma.ToListAsync();
        }

        // GET: api/Tumas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tumas>> GetTumas(int id)
        {
          if (_context.Turma == null)
          {
              return NotFound();
          }
            var tumas = await _context.Turma.FindAsync(id);

            if (tumas == null)
            {
                return NotFound();
            }

            return tumas;
        }

        // PUT: api/Tumas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTumas(int id, Tumas tumas)
        {
            if (id != tumas.idTurma)
            {
                return BadRequest();
            }

            _context.Entry(tumas).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TumasExists(id))
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

        // POST: api/Tumas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Tumas>> PostTumas(Tumas tumas)
        {
          if (_context.Turma == null)
          {
              return Problem("Entity set 'DataContext.Turma'  is null.");
          }
            _context.Turma.Add(tumas);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTumas", new { id = tumas.idTurma }, tumas);
        }

        // DELETE: api/Tumas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTumas(int id)
        {
            if (_context.Turma == null)
            {
                return NotFound();
            }
            var tumas = await _context.Turma.FindAsync(id);
            if (tumas == null)
            {
                return NotFound();
            }

            _context.Turma.Remove(tumas);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TumasExists(int id)
        {
            return (_context.Turma?.Any(e => e.idTurma == id)).GetValueOrDefault();
        }
    }
}
