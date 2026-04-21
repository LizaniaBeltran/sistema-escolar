// Datos de materias
let materias = [
    // Ingeniería en Software
    { id: "prog-web", nombre: "Programación Web", codigo: "PW", descripcion: "Desarrollo de aplicaciones web", docente: "Prof. Jirafales", foto: "../../assets/img/prof jirafales.jpg", creditos: 4, semestre: "1", carrera: "Ing. Software", estado: "activa" },
    { id: "prog-web-adv", nombre: "Desarrollo Web Avanzado", codigo: "PWA", descripcion: "Frameworks modernos y APIs", docente: "Prof. Jirafales", foto: "../../assets/img/prof jirafales.jpg", creditos: 4, semestre: "3", carrera: "Ing. Software", estado: "activa" },
    { id: "poo", nombre: "POO", codigo: "POO", descripcion: "Programación Orientada a Objetos", docente: "Prof. Jirafales", foto: "../../assets/img/prof jirafales.jpg", creditos: 4, semestre: "2", carrera: "Ing. Software", estado: "activa" },
    { id: "arq-soft", nombre: "Arquitectura de Software", codigo: "AS", descripcion: "Patrones y arquitectura de apps", docente: "Winifred Fowl", foto: "../../assets/img/jymm.jpg", creditos: 5, semestre: "4", carrera: "Ing. Software", estado: "activa" },
    { id: "bd-avz", nombre: "Bases de Datos Avanzadas", codigo: "BDA", descripcion: "NoSQL y distribuidas", docente: "Denzel Quincy Crocker", foto: "../../assets/img/Crocker.jpg", creditos: 4, semestre: "4", carrera: "Ing. Software", estado: "activa" },
    { id: "apps-mov", nombre: "Apps Móviles", codigo: "DAM", descripcion: "iOS y Android", docente: "Winifred Fowl", foto: "../../assets/img/jymm.jpg", creditos: 4, semestre: "5", carrera: "Ing. Software", estado: "activa" },
    { id: "seg-inf", nombre: "Seguridad Informática", codigo: "SI", descripcion: "Ciberseguridad y criptografía", docente: "Agatha Tronchatoro", foto: "../../assets/img/tronchatoro.jpg", creditos: 4, semestre: "6", carrera: "Ing. Software", estado: "inactiva" },
    { id: "ia", nombre: "Inteligencia Artificial", codigo: "IA", descripcion: "Machine learning y redes neuronales", docente: "Agatha Tronchatoro", foto: "../../assets/img/tronchatoro.jpg", creditos: 5, semestre: "7", carrera: "Ing. Software", estado: "activa" },
    
    // Ingeniería Industrial
    { id: "ing-op", nombre: "Investigación de Operaciones", codigo: "IO", descripcion: "Modelos matemáticos de optimización", docente: "Mrs. Penelope Puff", foto: "../../assets/img/señora_puff.jpg", creditos: 4, semestre: "3", carrera: "Ing. Industrial", estado: "activa" },
    { id: "ges-cal", nombre: "Gestión de la Calidad", codigo: "GC", descripcion: "Control y mejora de calidad", docente: "Mrs. Penelope Puff", foto: "../../assets/img/señora_puff.jpg", creditos: 3, semestre: "4", carrera: "Ing. Industrial", estado: "activa" },
    { id: "logistica", nombre: "Logística", codigo: "LCS", descripcion: "Gestión de inventarios y transporte", docente: "Winifred Fowl", foto: "../../assets/img/jymm.jpg", creditos: 4, semestre: "5", carrera: "Ing. Industrial", estado: "activa" },
    { id: "lean", nombre: "Lean Manufacturing", codigo: "LM", descripcion: "Metodología lean", docente: "Mrs. Penelope Puff", foto: "../../assets/img/señora_puff.jpg", creditos: 3, semestre: "7", carrera: "Ing. Industrial", estado: "activa" },
    
    // Generales
    { id: "mate", nombre: "Matemáticas", codigo: "MT", descripcion: "Cálculo y álgebra", docente: "Prof. Jirafales", foto: "../../assets/img/prof jirafales.jpg", creditos: 4, semestre: "1", carrera: "General", estado: "activa" },
    { id: "ingles", nombre: "Inglés", codigo: "IN", descripcion: "Idioma inglés técnico", docente: "Mrs. Penelope Puff", foto: "../../assets/img/señora_puff.jpg", creditos: 3, semestre: "1", carrera: "General", estado: "activa" },
    { id: "prob-est", nombre: "Probabilidad y Estadística", codigo: "PE", descripcion: "Análisis estadístico y probabilidades", docente: "Agatha Tronchatoro", foto: "../../assets/img/tronchatoro.jpg", creditos: 4, semestre: "2", carrera: "General", estado: "activa" },
    { id: "etica", nombre: "Ética Profesional", codigo: "ET", descripcion: "Ética en la ingeniería", docente: "Mrs. Penelope Puff", foto: "../../assets/img/señora_puff.jpg", creditos: 2, semestre: "1", carrera: "General", estado: "inactiva" },
    { id: "admin-proy", nombre: "Administración de Proyectos", codigo: "AP", descripcion: "Gestión de proyectos PMI", docente: "Winifred Fowl", foto: "../../assets/img/jymm.jpg", creditos: 3, semestre: "3", carrera: "General", estado: "activa" },
    { id: "analisis-datos", nombre: "Análisis de Datos", codigo: "AD", descripcion: "Big data y visualización", docente: "Agatha Tronchatoro", foto: "../../assets/img/tronchatoro.jpg", creditos: 4, semestre: "4", carrera: "General", estado: "activa" }
];

// Renderizar materias
function renderMaterias() {
    const grid = document.getElementById('materiasGrid');
    grid.innerHTML = '';
    
    materias.forEach(materia => {
        const card = document.createElement('div');
        card.className = 'materia-card';
        if (materia.estado === 'inactiva') card.classList.add('inactiva');
        
        card.innerHTML = `
            <div class="card-header">
                <span class="codigo-badge">${materia.codigo}</span>
                <span class="estado-badge ${materia.estado}">● ${materia.estado === 'activa' ? 'Activa' : 'Inactiva'}</span>
            </div>
            <h3 class="materia-nombre">${materia.nombre}</h3>
            <p class="materia-desc">${materia.descripcion}</p>
            <div class="materia-meta">
                <span class="meta-item">${materia.creditos} créds</span>
                <span class="meta-item">${materia.semestre}° Sem</span>
                <span class="meta-item carrera">${materia.carrera}</span>
            </div>
            <div class="materia-docente">
                <img src="${materia.foto}" alt="${materia.docente}" onerror="this.src='../../assets/img/cabezon.jpg'">
                <span>${materia.docente}</span>
            </div>
            <div class="card-actions">
                <button class="btn-action btn-edit" onclick="editMateria('${materia.id}')">✏ Editar</button>
                <button class="btn-action btn-delete" onclick="deleteMateria('${materia.id}')">🗑 Eliminar</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filtrar materias
function filtrarMaterias() {
    const search = document.getElementById('searchMateria').value.toLowerCase();
    const carrera = document.getElementById('filterCarrera').value;
    const semestre = document.getElementById('filterSemestre').value;
    
    const filtradas = materias.filter(m => {
        const matchSearch = !search || m.nombre.toLowerCase().includes(search) || m.codigo.toLowerCase().includes(search);
        const matchCarrera = !carrera || m.carrera === carrera;
        const matchSemestre = !semestre || m.semestre === semestre;
        return matchSearch && matchCarrera && matchSemestre;
    });
    
    renderFilteredMaterias(filtradas);
}

function renderFilteredMaterias(list) {
    const grid = document.getElementById('materiasGrid');
    grid.innerHTML = '';
    
    if (list.length === 0) {
        grid.innerHTML = '<p class="no-results">No se encontraron materias</p>';
        return;
    }
    
    list.forEach(materia => {
        const card = document.createElement('div');
        card.className = 'materia-card';
        if (materia.estado === 'inactiva') card.classList.add('inactiva');
        
        card.innerHTML = `
            <div class="card-header">
                <span class="codigo-badge">${materia.codigo}</span>
                <span class="estado-badge ${materia.estado}">● ${materia.estado === 'activa' ? 'Activa' : 'Inactiva'}</span>
            </div>
            <h3 class="materia-nombre">${materia.nombre}</h3>
            <p class="materia-desc">${materia.descripcion}</p>
            <div class="materia-meta">
                <span class="meta-item">${materia.creditos} créds</span>
                <span class="meta-item">${materia.semestre}° Sem</span>
                <span class="meta-item carrera">${materia.carrera}</span>
            </div>
            <div class="materia-docente">
                <img src="${materia.foto}" alt="${materia.docente}" onerror="this.src='../../assets/img/cabezon.jpg'">
                <span>${materia.docente}</span>
            </div>
            <div class="card-actions">
                <button class="btn-action btn-edit" onclick="editMateria('${materia.id}')">✏ Editar</button>
                <button class="btn-action btn-delete" onclick="deleteMateria('${materia.id}')">🗑 Eliminar</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Editar materia
function editMateria(id) {
    const materia = materias.find(m => m.id === id);
    if (materia) {
        document.getElementById('nombreMateria').value = materia.nombre;
        document.getElementById('codigoMateria').value = materia.codigo;
        document.getElementById('descripcionMateria').value = materia.descripcion || '';
        document.getElementById('creditosMateria').value = materia.creditos;
        document.getElementById('semestreMateria').value = materia.semestre;
        
        // Abrir formulario
        document.getElementById('formSection').classList.add('show');
        
        // Guardar ID para actualizar
        document.getElementById('materiaForm').dataset.editId = id;
    }
}

// Eliminar materia
function deleteMateria(id) {
    if (confirm('¿Estás seguro de eliminar esta materia?')) {
        materias = materias.filter(m => m.id !== id);
        renderMaterias();
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', renderMaterias);