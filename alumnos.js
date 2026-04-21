// Datos de materias
const todasMaterias = [
    // Ing. Software
    { id: "prog-web", nombre: "Programación Web", codigo: "PW", descripcion: "Desarrollo de aplicaciones web", docente: "Prof. Jirafales", creditos: 4, semestre: "1", carrera: "Ing. Software" },
    { id: "poo", nombre: "POO", codigo: "POO", descripcion: "Programación Orientada a Objetos", docente: "Prof. Jirafales", creditos: 4, semestre: "2", carrera: "Ing. Software" },
    { id: "bd1", nombre: "Base de Datos I", codigo: "BD1", descripcion: "Diseño de bases de datos", docente: "Denzel Q. Crocker", creditos: 4, semestre: "2", carrera: "Ing. Software" },
    { id: "ing-soft", nombre: "Ingeniería de Software I", codigo: "IS1", descripcion: "Metodologías de desarrollo", docente: "Winifred Fowl", creditos: 5, semestre: "3", carrera: "Ing. Software" },
    { id: "prog-web-adv", nombre: "Desarrollo Web Avanzado", codigo: "PWA", descripcion: "Frameworks modernos", docente: "Prof. Jirafales", creditos: 4, semestre: "3", carrera: "Ing. Software" },
    { id: "bd-avz", nombre: "Bases de Datos Avanzadas", codigo: "BDA", descripcion: "NoSQL y distribuidas", docente: "Denzel Q. Crocker", creditos: 4, semestre: "4", carrera: "Ing. Software" },
    { id: "arq-soft", nombre: "Arquitectura de Software", codigo: "AS", descripcion: "Patrones de arquitectura", docente: "Winifred Fowl", creditos: 5, semestre: "4", carrera: "Ing. Software" },
    { id: "apps-mov", nombre: "Apps Móviles", codigo: "DAM", descripcion: "iOS y Android", docente: "Winifred Fowl", creditos: 4, semestre: "5", carrera: "Ing. Software" },
    { id: "seg-inf", nombre: "Seguridad Informática", codigo: "SI", descripcion: "Ciberseguridad", docente: "Agatha Tronchatoro", creditos: 4, semestre: "6", carrera: "Ing. Software" },
    { id: "ia", nombre: "Inteligencia Artificial", codigo: "IA", descripcion: "Machine learning", docente: "Agatha Tronchatoro", creditos: 5, semestre: "7", carrera: "Ing. Software" },
    { id: "devops", nombre: "DevOps", codigo: "DEV", descripcion: "CI/CD y contenedores", docente: "Denzel Q. Crocker", creditos: 3, semestre: "7", carrera: "Ing. Software" },
    
    // Ing. Industrial
    { id: "ing-op", nombre: "Investigación de Operaciones", codigo: "IO", descripcion: "Optimización", docente: "Mrs. Penelope Puff", creditos: 4, semestre: "3", carrera: "Ing. Industrial" },
    { id: "ges-cal", nombre: "Gestión de la Calidad", codigo: "GC", descripcion: "Control de calidad", docente: "Mrs. Penelope Puff", creditos: 3, semestre: "4", carrera: "Ing. Industrial" },
    { id: "logistica", nombre: "Logística", codigo: "LCS", descripcion: "Cadena de suministro", docente: "Winifred Fowl", creditos: 4, semestre: "5", carrera: "Ing. Industrial" },
    { id: "sim-sist", nombre: "Simulación de Sistemas", codigo: "SS", descripcion: "Simulación", docente: "Agatha Tronchatoro", creditos: 4, semestre: "5", carrera: "Ing. Industrial" },
    { id: "plan-prod", nombre: "Planeación de la Producción", codigo: "PPD", descripcion: "Planificación", docente: "Winifred Fowl", creditos: 4, semestre: "6", carrera: "Ing. Industrial" },
    { id: "lean", nombre: "Lean Manufacturing", codigo: "LM", descripcion: "Metodología lean", docente: "Mrs. Penelope Puff", creditos: 3, semestre: "7", carrera: "Ing. Industrial" },
    
    // Generales
    { id: "mate", nombre: "Matemáticas", codigo: "MT", descripcion: "Cálculo y álgebra", docente: "Prof. Jirafales", creditos: 4, semestre: "1", carrera: "General" },
    { id: "ingles", nombre: "Inglés", codigo: "IN", descripcion: "Inglés técnico", docente: "Mrs. Penelope Puff", creditos: 3, semestre: "1", carrera: "General" },
    { id: "prob-est", nombre: "Probabilidad y Estadística", codigo: "PE", descripcion: "Análisis estadístico", docente: "Agatha Tronchatoro", creditos: 4, semestre: "2", carrera: "General" },
    { id: "etica", nombre: "Ética Profesional", codigo: "ET", descripcion: "Ética en ingeniería", docente: "Mrs. Penelope Puff", creditos: 2, semestre: "1", carrera: "General" },
    { id: "admin-proy", nombre: "Administración de Proyectos", codigo: "AP", descripcion: "Gestión de proyectos", docente: "Winifred Fowl", creditos: 3, semestre: "3", carrera: "General" },
    { id: "analisis-datos", nombre: "Análisis de Datos", codigo: "AD", descripcion: "Big data", docente: "Agatha Tronchatoro", creditos: 4, semestre: "4", carrera: "General" }
];

// Materias seleccionadas
let materiasSeleccionadas = [];

// Renderizar materias disponibles
function renderMaterias(materias) {
    const grid = document.getElementById('subjectsGrid');
    grid.innerHTML = '';
    
    materias.forEach(materia => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        const isSelected = materiasSeleccionadas.some(m => m.id === materia.id);
        if (isSelected) card.classList.add('selected');
        
        card.innerHTML = `
            <div class="subject-header">
                <div class="subject-icon">${materia.codigo}</div>
                <div class="subject-title">${materia.nombre}</div>
            </div>
            <p class="subject-desc">${materia.descripcion}</p>
            <div class="subject-footer">
                <span class="teacher">${materia.docente}</span>
                <span class="creditos">${materia.creditos} créds</span>
            </div>
            <button class="btn-toggle ${isSelected ? 'active' : ''}" onclick="toggleMateria('${materia.id}')">
                ${isSelected ? '✓ Seleccionada' : '+ Agregar'}
            </button>
        `;
        grid.appendChild(card);
    });
    
    document.getElementById('availableCount').textContent = materias.length;
}

// Actualizar filtros y contexto
function updateFilters() {
    const carrera = document.getElementById('filterCarrera').value;
    const semestre = document.getElementById('filterSemestre').value;
    const grupo = document.getElementById('filterGrupo').value;
    
    // Actualizar encabezado dinámico
    const header = document.getElementById('contextHeader');
    if (carrera && semestre && grupo) {
        header.innerHTML = `
            <span class="context-text">
                Asignando a: <strong>${carrera}</strong> - 
                <strong>${semestre}° Semestre</strong> - 
                <strong>Grupo ${grupo}</strong>
            </span>
            <span class="total-alumnos">32 alumnos</span>
        `;
    } else {
        header.innerHTML = `<span class="context-text">Selecciona carrera, semestre y grupo</span>`;
    }
    
    // Filtrar materias
    let filtered = todasMaterias;
    if (carrera) {
        filtered = filtered.filter(m => m.carrera === carrera || m.carrera === 'General');
    }
    if (semestre) {
        filtered = filtered.filter(m => m.semestre === semestre);
    }
    
    renderMaterias(filtered);
    renderSelectedList();
}

// Toggle materia seleccionada
function toggleMateria(id) {
    const materia = todasMaterias.find(m => m.id === id);
    if (!materia) return;
    
    const idx = materiasSeleccionadas.findIndex(m => m.id === id);
    if (idx >= 0) {
        materiasSeleccionadas.splice(idx, 1);
    } else {
        materiasSeleccionadas.push(materia);
    }
    
    updateFilters();
}

// Renderizar lista de seleccionadas
function renderSelectedList() {
    const list = document.getElementById('selectedList');
    
    if (materiasSeleccionadas.length === 0) {
        list.innerHTML = '<p class="empty-message">Selecciona materias del panel izquierdo</p>';
    } else {
        list.innerHTML = '';
        materiasSeleccionadas.forEach(m => {
            const item = document.createElement('div');
            item.className = 'selected-item';
            item.innerHTML = `
                <span class="item-code">${m.codigo}</span>
                <span class="item-name">${m.nombre}</span>
                <span class="item-creditos">${m.creditos}</span>
                <button class="btn-remove" onclick="toggleMateria('${m.id}')">×</button>
            `;
            list.appendChild(item);
        });
    }
    
    // Actualizar contadores
    document.getElementById('selectedCount').textContent = materiasSeleccionadas.length;
    
    const totalCreditos = materiasSeleccionadas.reduce((sum, m) => sum + m.creditos, 0);
    document.getElementById('totalCreditos').textContent = totalCreditos;
    document.getElementById('totalMaterias').textContent = materiasSeleccionadas.length;
}

// Guardar asignación
function guardarAsignacion() {
    const carrera = document.getElementById('filterCarrera').value;
    const semestre = document.getElementById('filterSemestre').value;
    const grupo = document.getElementById('filterGrupo').value;
    
    if (!carrera || !semestre || !grupo) {
        alert('Selecciona carrera, semestre y grupo');
        return;
    }
    
    if (materiasSeleccionadas.length === 0) {
        alert('Selecciona al menos una materia');
        return;
    }
    
    alert(`Asignación guardada:\n${carrera} - ${semestre}° - Grupo ${grupo}\n${materiasSeleccionadas.length} materias`);
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderMaterias(todasMaterias);
    renderSelectedList();
});