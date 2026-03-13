// Fonction pour ajouter une nouvelle expérience
function addExperience() {
    const container = document.getElementById('experiences-container');
    const newExperience = document.createElement('div');
    newExperience.className = 'experience-item';
    newExperience.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Nom de l'entreprise</label>
                    <input type="text" class="form-control" name="entreprise[]" placeholder="Nom de l'entreprise" required oninput="updatePreview()">
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Intitulé du poste</label>
                    <input type="text" class="form-control" name="poste[]" placeholder="Intitulé du poste" required oninput="updatePreview()">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Date de début</label>
                    <input type="date" class="form-control" name="date_debut[]" required onchange="updatePreview()">
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Date de fin</label>
                    <input type="date" class="form-control" name="date_fin[]" onchange="updatePreview()">
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label class="form-label">Description des missions</label>
            <textarea class="form-control" name="missions[]" placeholder="Décrivez vos missions" required oninput="updatePreview()"></textarea>
        </div>
        <button type="button" class="repeater-remove-btn" onclick="removeExperience(this)">Supprimer</button>
    `;
    container.appendChild(newExperience);
    updatePreview();
}

function removeExperience(button) {
    const experiences = document.querySelectorAll('#experiences-container .experience-item');
    if (experiences.length > 1) {
        button.parentElement.remove();
        updatePreview();
    } else {
        alert("Vous ne pouvez pas supprimer la dernière expérience.");
    }
}

function addFormation() {
    const container = document.getElementById('formations-container');
    const newFormation = document.createElement('div');
    newFormation.className = 'experience-item';
    newFormation.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Intitulé du diplôme ou de la formation</label>
                    <input type="text" class="form-control" name="diplome[]" placeholder="Intitulé du diplôme" required oninput="updatePreview()">
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Établissement</label>
                    <input type="text" class="form-control" name="etablissement[]" placeholder="Nom de l'établissement" required oninput="updatePreview()">
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Date de début</label>
                    <input type="date" class="form-control" name="date_debut_formation[]" required onchange="updatePreview()">
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Date de fin</label>
                    <input type="date" class="form-control" name="date_fin_formation[]" onchange="updatePreview()">
                </div>
            </div>
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <textarea class="form-control" name="description_formation[]" placeholder="Décrivez votre formation" required oninput="updatePreview()"></textarea>
        </div>
        <button type="button" class="repeater-remove-btn" onclick="removeFormation(this)">Supprimer</button>
    `;
    container.appendChild(newFormation);
    updatePreview();
}

function removeFormation(button) {
    const formations = document.querySelectorAll('#formations-container .experience-item');
    if (formations.length > 1) {
        button.parentElement.remove();
        updatePreview();
    } else {
        alert("Vous ne pouvez pas supprimer la dernière formation.");
    }
}

function addCompetence() {
    const container = document.getElementById('competences-container');
    const newCompetence = document.createElement('div');
    newCompetence.className = 'experience-item';
    newCompetence.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Nom de la compétence</label>
                    <input type="text" class="form-control" name="competence[]" placeholder="Nom de la compétence" required oninput="updatePreview()">
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Niveau</label>
                    <input type="text" class="form-control" name="niveau[]" placeholder="Niveau" required oninput="updatePreview()">
                </div>
            </div>
        </div>
        <button type="button" class="repeater-remove-btn" onclick="removeCompetence(this)">Supprimer</button>
    `;
    container.appendChild(newCompetence);
    updatePreview();
}

// Fonction pour supprimer une compétence
function removeCompetence(button) {
    const competences = document.querySelectorAll('#competences-container .experience-item');
    if (competences.length > 1) {
        button.parentElement.remove();
        updatePreview();
    } else {
        alert("Vous ne pouvez pas supprimer la dernière compétence.");
    }
}


function addInteret() {
    const container = document.getElementById('interets-container');
    const newInteret = document.createElement('div');
    newInteret.className = 'experience-item';
    newInteret.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Type d'intérêt</label>
                    <input type="text" class="form-control" name="type_interet[]" placeholder="Ex: Sport, Voyage" required oninput="updatePreview()">
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <input type="text" class="form-control" name="description_interet[]" placeholder="Ex: Football, Italie" required oninput="updatePreview()">
                </div>
            </div>
        </div>
        <button type="button" class="repeater-remove-btn" onclick="removeInteret(this)">Supprimer</button>
    `;
    container.appendChild(newInteret);
    updatePreview();
}

// Fonction pour supprimer un intérêt
function removeInteret(button) {
    const interets = document.querySelectorAll('#interets-container .experience-item');
    if (interets.length > 1) {
        button.parentElement.remove();
        updatePreview();
    } else {
        alert("Vous ne pouvez pas supprimer le dernier intérêt.");
    }
}

// Fonction pour mettre à jour l'aperçu du CV
function updatePreview() {
    // Mise à jour des informations générales
    const nom = document.getElementById('prenom').value || '';
    const prenom = document.getElementById('nom').value || '';
    const titre = document.getElementById('titre').value || '';
    const description = document.getElementById('description').value || '';
    const email = document.getElementById('email').value || '';
    const telephone = document.getElementById('telephone').value || '';

    document.getElementById('preview-nom').textContent = nom && prenom ? `${nom} ${prenom}` : '';
    document.getElementById('preview-titre').textContent = titre;
    document.getElementById('preview-description').textContent = description;
    document.getElementById('preview-email').textContent = email;
    document.getElementById('preview-telephone').textContent = telephone;

    // Mise à jour des intérêts
    const interetsContainer = document.getElementById('interets-container');
    const previewInterets = document.getElementById('preview-interets');
    previewInterets.innerHTML = '';

    const interets = interetsContainer.querySelectorAll('.experience-item');
    interets.forEach(interet => {
        const typeInteret = interet.querySelector('input[name="type_interet[]"]').value || '';
        const descriptionInteret = interet.querySelector('input[name="description_interet[]"]').value || '';

        if (typeInteret || descriptionInteret) {
            previewInterets.innerHTML += `
                <div>
                    <strong>${typeInteret}:</strong> ${descriptionInteret}
                </div>
            `;
        }
    });

    // Mise à jour des expériences
    const experiencesContainer = document.getElementById('experiences-container');
    const previewExperiences = document.getElementById('preview-experiences');
    previewExperiences.innerHTML = '';

    const experiences = experiencesContainer.querySelectorAll('.experience-item');
    experiences.forEach(exp => {
        const entreprise = exp.querySelector('input[name="entreprise[]"]').value || '';
        const poste = exp.querySelector('input[name="poste[]"]').value || '';
        const dateDebut = exp.querySelector('input[name="date_debut[]"]').value || '';
        const dateFin = exp.querySelector('input[name="date_fin[]"]').value || '';
        const missions = exp.querySelector('textarea[name="missions[]"]').value || '';

        const missionsList = missions.split(',').map(m => `<p>${m.trim()}</p>`).join('');

        if (entreprise || poste || dateDebut) {
            previewExperiences.innerHTML += `
                <div class="experience-item">
                    <p><strong>${poste}</strong> - ${entreprise}</p>
                    <p>${formatDate(dateDebut)} - ${dateFin ? formatDate(dateFin) : ' '}</p> 
                    <p>${missionsList}</p>
                </div>
            `;
        }
    });

    // Mise à jour des formations
    const formationsContainer = document.getElementById('formations-container');
    const previewFormations = document.getElementById('preview-formations');
    previewFormations.innerHTML = '';

    const formations = formationsContainer.querySelectorAll('.experience-item');
    formations.forEach(form => {
        const diplome = form.querySelector('input[name="diplome[]"]').value || '';
        const etablissement = form.querySelector('input[name="etablissement[]"]').value || '';
        const dateDebutFormation = form.querySelector('input[name="date_debut_formation[]"]').value || '';
        const dateFinFormation = form.querySelector('input[name="date_fin_formation[]"]').value || '';
        const descriptionFormation = form.querySelector('textarea[name="description_formation[]"]').value || '';

        if (diplome || etablissement || dateDebutFormation) {
            previewFormations.innerHTML += `
                <div class="experience-item">
                    <p><strong>${diplome}</strong> - ${etablissement}</p>
                    <p>${formatDate(dateDebutFormation)} - ${dateFinFormation ? formatDate(dateFinFormation) : ' '}</p>
                    <p>${descriptionFormation}</p>
                </div>
            `;
        }
    });

    // Mise à jour des compétences
    const competencesContainer = document.getElementById('competences-container');
    const previewCompetences = document.getElementById('preview-competences');
    previewCompetences.innerHTML = '';

    const competences = competencesContainer.querySelectorAll('.experience-item');
    competences.forEach(comp => {
        const competence = comp.querySelector('input[name="competence[]"]').value || '';
        const niveau = comp.querySelector('input[name="niveau[]"]').value || '';

        if (competence) {
            previewCompetences.innerHTML += `
                <div class="experience-item">
                    <p><strong>${competence}</strong> : ${niveau}</p>
                </div>
            `;
        }
    });
}

// Fonction pour formater la date
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR');
}

// Fonction pour prévisualiser la photo
function previewPhoto(event) {
    const reader = new FileReader();
    reader.onload = function() {
        const output = document.getElementById('preview-photo');
        output.src = reader.result;
        output.style.display = 'block';
    }
    reader.readAsDataURL(event.target.files[0]);
}

// Écouteurs d'événements pour les champs du formulaire
document.querySelectorAll('#cv-form input, #cv-form textarea').forEach(input => {
    input.addEventListener('input', updatePreview);
    input.addEventListener('change', updatePreview);
});

// Mise à jour initiale
updatePreview();
