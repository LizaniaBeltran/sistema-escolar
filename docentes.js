// Docentes data
const docentes = [
    { id: 1, nombre: "Prof. Jirafales", especialidad: "Programación", horario: "Matutino", materias: 2, foto: "../../assets/img/prof jirafales.jpg" },
    { id: 2, nombre: "Mrs. Penelope Puff", especialidad: "Inglés", horario: "Matutino", materias: 3, foto: "../../assets/img/señora_puff.jpg" },
    { id: 3, nombre: "Denzel Quincy Crocker", especialidad: "Bases de Datos", horario: "Vespertino", materias: 2, foto: "../../assets/img/Crocker.jpg" },
    { id: 4, nombre: "Winifred Fowl", especialidad: "Ingeniería de Software", horario: "Matutino", materias: 4, foto: "../../assets/img/jymm.jpg" },
    { id: 5, nombre: "Agatha Tronchatoro", especialista: "Estadística/IA", horario: "Vespertino", materias: 2, foto: "../../assets/img/tronchatoro.jpg" }
];

// Todas las materias disponibles
const todasMaterias = [
    { id: "prog-web", nombre: "Programación Web", codigo: "PW", docenteId: 1, asignada: false },
    { id: "poo", nombre: "POO", codigo: "POO", docenteId: 1, asignada: false },
    { id: "mate", nombre: "Matemáticas", codigo: "MT", docenteId: 1, asignada: false },
    { id: "ingles", nombre: "Inglés", codigo: "IN", docenteId: 2, asignada: false },
    { id: "ingles-adv", nombre: "Inglés Avanzado", codigo: "INA", docenteId: 2, asignada: false },
    { id: "ingles-neg", nombre: "Inglés para Negocios", codigo: "INN", docenteId: 2, asignada: false },
    { id: "bd1", nombre: "Base de Datos I", codigo: "BD1", docenteId: 3, asignada: false },
    { id: "bd2", nombre: "Base de Datos II", codigo: "BD2", docenteId: 3, asignada: false },
    { id: "ing-soft", nombre: "Ingeniería de Software I", codigo: "IS1", docenteId: 4, asignada: false },
    { id: "arq-soft", nombre: "Arquitectura de Software", codigo: "AS", docenteId: 4, asignada: false },
    { id: "apps-mov", nombre: "Apps Móviles", codigo: "DAM", docenteId: 4, asignada: false },
    { id: "prob-est", nombre: "Probabilidad y Estadística", codigo: "PE", docenteId: 5, asignada: false },
    { id: "est-adv", nombre: "Estadística Avanzada", codigo: "EA", docenteId: 5, asignada: false },
    { id: "ia", nombre: "Inteligencia Artificial", codigo: "IA", docenteId: 5, asignada: false }
];

// Renderizar lista de docentes
function renderDocentes(lista = docentes) {
    const list = document.getElementById('teacherList');
    list.innerHTML = '';
    
    lista.forEach(docente => {
        const li = document.createElement('li');
        li.className = 'teacher-item';
        li.setAttribute('data-id', docente.id);
        li.onclick = () => seleccionarDocente(docente.id);
        
        li.innerHTML = `
            <img src="${docente.foto}" alt="${docente.nombre}" class="teacher-avatar" onerror="this.src='../../assets/img/cabezon.jpg'">
            <div class="teacher-info">
                <h3>${docente.nombre}</h3>
                <p class="teacher-meta">${docente.especialidad || 'Sin especialidad'}</p>
            </div>
            <span class="teacher-badge">${docente.materias || 0}</span>
        `;
        list.appendChild(li);
    });
    
    document.getElementById('teacherCount').textContent = lista.length;
}

// Filtrar docentes
function filtrarDocentes(query) {
    if (!query) {
        renderDocentes(docentes);
        return;
    }
    const filtrados = docentes.filter(d => 
        d.nombre.toLowerCase().includes(query.toLowerCase()) ||
        d.especialidad.toLowerCase().includes(query.toLowerCase())
    );
    renderDocentes(filtrados);
}

// Seleccionar docente
let docenteSeleccionado = null;

function seleccionarDocente(id) {
    // Resaltar en lista
    document.querySelectorAll('.teacher-item').forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.getAttribute('data-id')) === id) {
            item.classList.add('active');
        }
    });
    
    docenteSeleccionado = docentes.find(d => d.id === id);
    renderDocenteDetail(docenteSeleccionado);
}

// Renderizar detalle del docente
function renderDocenteDetail(docente) {
    const detail = document.getElementById('docenteDetail');
    
    if (!docente) {
        detail.innerHTML = '<p class="info-placeholder">Selecciona un docente de la lista</p>';
        return;
    }
    
    // Obtener materias del docente
    const materiasDocente = todasMaterias.filter(m => m.docenteId === docente.id);
    const materiasAsignadas = todasMaterias.filter(m => m.docenteId === docente.id && m.asignada);
    
    detail.innerHTML = `
        <div class="docente-header">
            <img src="${docente.foto}" alt="${docente.nombre}" class="docente-foto-large" onerror="this.src='../../assets/img/cabezon.jpg'">
            <div class="docente-header-info">
                <h2>${docente.nombre}</h2>
                <p class="docente-specialty">${docente.especialidad || 'Sin especialidad'}</p>
            </div>
        </div>
        
        <div class="docente-stats">
            <div class="stat-box">
                <span class="stat-value">${materiasAsignadas.length}</span>
                <span class="stat-label">Materias Asignadas</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${docente.horario || 'N/A'}</span>
                <span class="stat-label">Horario</span>
            </div>
            <div class="stat-box">
                <span class="stat-value">${docente.especialidad || 'N/A'}</span>
                <span class="stat-label">Especialidad</span>
            </div>
        </div>
        
        <div class="materias-grid-container">
            <!-- Materias Disponibles -->
            <div class="materias-column">
                <h3>Disponibles</h3>
                <div class="subject-cards">
                    ${materiasDocente.length === 0 ? '<p class="empty">No hay materias disponibles</p>' : ''}
                    ${materiasDocente.map(m => `
                        <div class="subject-card ${m.asignada ? 'assigned' : ''}">
                            <div class="subject-card-header">
                                <span class="subject-code">${m.codigo}</span>
                                <span class="subject-name">${m.nombre}</span>
                            </div>
                            <button class="btn-assign ${m.asignada ? 'active' : ''}" onclick="toggleMateria('${m.id}')">
                                ${m.asignada ? '✓ Asignada' : '+ Asignar'}
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <!-- Materias Asignadas -->
            <div class="materias-column">
                <h3>Asignadas</h3>
                <div class="subject-cards assigned-list">
                    ${materiasAsignadas.length === 0 ? '<p class="empty">Sin materias asignadas</p>' : ''}
                    ${materiasAsignadas.map(m => `
                        <div class="subject-card assigned">
                            <div class="subject-card-header">
                                <span class="subject-code">${m.codigo}</span>
                                <span class="subject-name">${m.nombre}</span>
                            </div>
                            <button class="btn-remove" onclick="toggleMateria('${m.id}')">×</button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <button class="btn-confirm-assignment" onclick="guardarAsignacion()">
            ✓ Guardar Asignacion
        </button>
    `;
}

// Guardar asignación
function guardarAsignacion() {
    if (!docenteSeleccionado) {
        alert('Selecciona un docente primero');
        return;
    }
    
    const asignadas = todasMaterias.filter(m => m.docenteId === docenteSeleccionado.id && m.asignada);
    alert(`Asignación guardada para ${docenteSeleccionado.nombre}:\n${asignadas.length} materias`);
}

// Toggle materia
function toggleMateria(materiaId) {
    const materia = todasMaterias.find(m => m.id === materiaId);
    if (materia) {
        materia.asignada = !materia.asignada;
        // Actualizar contador del docente
        if (docenteSeleccionado) {
            const count = todasMaterias.filter(m => m.docenteId === docenteSeleccionado.id && m.asignada).length;
            const docente = docentes.find(d => d.id === docenteSeleccionado.id);
            if (docente) docente.materias = count;
            renderDocenteDetail(docenteSeleccionado);
        }
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderDocentes();
});