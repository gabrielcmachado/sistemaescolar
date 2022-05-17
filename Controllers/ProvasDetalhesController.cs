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
    public class ProvasDetalhesController : ControllerBase
    {
        private readonly DataContext _context;

        public ProvasDetalhesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/ProvasDetalhes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProvasDetalhe>>> GetProvaDetalhe()
        {
          if (_context.ProvaDetalhe == null)
          {
              return NotFound();
          }
            return await _context.ProvaDetalhe.ToListAsync();
        }

        // GET: api/ProvasDetalhes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProvasDetalhe>> GetProvasDetalhe(int id)
        {
          if (_context.ProvaDetalhe == null)
          {
              return NotFound();
          }
            var provasDetalhe = await _context.ProvaDetalhe.FindAsync(id);

            if (provasDetalhe == null)
            {
                return NotFound();
            }

            return provasDetalhe;
        }

        // PUT: api/ProvasDetalhes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProvasDetalhe(int id, ProvasDetalhe provasDetalhe)
        {
            if (id != provasDetalhe.idProvaDetalhe)
            {
                return BadRequest();
            }

            _context.Entry(provasDetalhe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProvasDetalheExists(id))
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

        // POST: api/ProvasDetalhes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProvasDetalhe>> PostProvasDetalhe(ProvasDetalhe provasDetalhe)
        {
          if (_context.ProvaDetalhe == null)
          {
              return Problem("Entity set 'DataContext.ProvaDetalhe'  is null.");
          }
            _context.ProvaDetalhe.Add(provasDetalhe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProvasDetalhe", new { id = provasDetalhe.idProvaDetalhe }, provasDetalhe);
        }

        // DELETE: api/ProvasDetalhes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProvasDetalhe(int id)
        {
            if (_context.ProvaDetalhe == null)
            {
                return NotFound();
            }
            var provasDetalhe = await _context.ProvaDetalhe.FindAsync(id);
            if (provasDetalhe == null)
            {
                return NotFound();
            }

            _context.ProvaDetalhe.Remove(provasDetalhe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProvasDetalheExists(int id)
        {
            return (_context.ProvaDetalhe?.Any(e => e.idProvaDetalhe == id)).GetValueOrDefault();
        }
    }
}
