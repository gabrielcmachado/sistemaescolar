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
    public class PeriodosAcademicosController : ControllerBase
    {
        private readonly DataContext _context;

        public PeriodosAcademicosController(DataContext context)
        {
            _context = context;
        }

        // GET: api/PeriodosAcademicoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PeriodosAcademico>>> GetPeriodoAcademico()
        {
          if (_context.PeriodoAcademico == null)
          {
              return NotFound();
          }
            return await _context.PeriodoAcademico.ToListAsync();
        }

        // GET: api/PeriodosAcademicoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PeriodosAcademico>> GetPeriodosAcademico(int id)
        {
          if (_context.PeriodoAcademico == null)
          {
              return NotFound();
          }
            var periodosAcademico = await _context.PeriodoAcademico.FindAsync(id);

            if (periodosAcademico == null)
            {
                return NotFound();
            }

            return periodosAcademico;
        }

        // PUT: api/PeriodosAcademicoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPeriodosAcademico(int id, PeriodosAcademico periodosAcademico)
        {
            if (id != periodosAcademico.idPeriodo)
            {
                return BadRequest();
            }

            _context.Entry(periodosAcademico).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PeriodosAcademicoExists(id))
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

        // POST: api/PeriodosAcademicoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PeriodosAcademico>> PostPeriodosAcademico(PeriodosAcademico periodosAcademico)
        {
          if (_context.PeriodoAcademico == null)
          {
              return Problem("Entity set 'DataContext.PeriodoAcademico'  is null.");
          }
            _context.PeriodoAcademico.Add(periodosAcademico);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPeriodosAcademico", new { id = periodosAcademico.idPeriodo }, periodosAcademico);
        }

        // DELETE: api/PeriodosAcademicoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePeriodosAcademico(int id)
        {
            if (_context.PeriodoAcademico == null)
            {
                return NotFound();
            }
            var periodosAcademico = await _context.PeriodoAcademico.FindAsync(id);
            if (periodosAcademico == null)
            {
                return NotFound();
            }

            _context.PeriodoAcademico.Remove(periodosAcademico);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PeriodosAcademicoExists(int id)
        {
            return (_context.PeriodoAcademico?.Any(e => e.idPeriodo == id)).GetValueOrDefault();
        }
    }
}
