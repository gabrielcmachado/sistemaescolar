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
    public class TurmasDetalhesController : ControllerBase
    {
        private readonly DataContext _context;

        public TurmasDetalhesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/TurmasDetalhes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TurmasDetalhe>>> GetTurmaDetalhe()
        {
          if (_context.TurmaDetalhe == null)
          {
              return NotFound();
          }
            return await _context.TurmaDetalhe.ToListAsync();
        }

        // GET: api/TurmasDetalhes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TurmasDetalhe>> GetTurmasDetalhe(int id)
        {
          if (_context.TurmaDetalhe == null)
          {
              return NotFound();
          }
            var turmasDetalhe = await _context.TurmaDetalhe.FindAsync(id);

            if (turmasDetalhe == null)
            {
                return NotFound();
            }

            return turmasDetalhe;
        }

        // PUT: api/TurmasDetalhes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTurmasDetalhe(int id, TurmasDetalhe turmasDetalhe)
        {
            if (id != turmasDetalhe.idTurmaDetalhe)
            {
                return BadRequest();
            }

            _context.Entry(turmasDetalhe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TurmasDetalheExists(id))
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

        // POST: api/TurmasDetalhes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TurmasDetalhe>> PostTurmasDetalhe(TurmasDetalhe turmasDetalhe)
        {
          if (_context.TurmaDetalhe == null)
          {
              return Problem("Entity set 'DataContext.TurmaDetalhe'  is null.");
          }
            _context.TurmaDetalhe.Add(turmasDetalhe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTurmasDetalhe", new { id = turmasDetalhe.idTurmaDetalhe }, turmasDetalhe);
        }

        // DELETE: api/TurmasDetalhes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTurmasDetalhe(int id)
        {
            if (_context.TurmaDetalhe == null)
            {
                return NotFound();
            }
            var turmasDetalhe = await _context.TurmaDetalhe.FindAsync(id);
            if (turmasDetalhe == null)
            {
                return NotFound();
            }

            _context.TurmaDetalhe.Remove(turmasDetalhe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TurmasDetalheExists(int id)
        {
            return (_context.TurmaDetalhe?.Any(e => e.idTurmaDetalhe == id)).GetValueOrDefault();
        }
    }
}
