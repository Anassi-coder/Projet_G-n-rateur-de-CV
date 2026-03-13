<?php

function formatDateFr($dateString) {
    if (empty($dateString)) {
        return '';
    }
    $date = new DateTime($dateString);
    return $date->format('d/m/Y');
}

$nom = $_POST['nom'] ?? '';
$prenom = $_POST['prenom'] ?? '';
$email = $_POST['email'] ?? '';
$telephone = $_POST['telephone'] ?? '';
$titre = $_POST['titre'] ?? '';
$profil = $_POST['description'] ?? '';

$diplomes = (array)($_POST['diplome'] ?? []);
$etablissements = (array)($_POST['etablissement'] ?? []);
$dates_deb_form = (array)($_POST['date_debut_formation'] ?? []);
$dates_fin_form = (array)($_POST['date_fin_formation'] ?? []);
$desc_form = (array)($_POST['description_formation'] ?? []);

$entreprises = (array)($_POST['entreprise'] ?? []);
$postes = (array)($_POST['poste'] ?? []);
$dates_deb_exp = (array)($_POST['date_debut'] ?? []);
$dates_fin_exp = (array)($_POST['date_fin'] ?? []);
$missions = (array)($_POST['missions'] ?? []);

$competences = (array)($_POST['competence'] ?? []);
$niveaux = (array)($_POST['niveau'] ?? []);

$interet_types = (array)($_POST['type_interet'] ?? []);
$desc_interets = (array)($_POST['description_interet'] ?? []);

$image_data = "";
if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
    $path = $_FILES['photo']['tmp_name'];
    $type = pathinfo($_FILES['photo']['name'], PATHINFO_EXTENSION);
    $data = file_get_contents($path);
    $image_data = 'data:image/' . $type . ';base64,' . base64_encode($data);
}



?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <style>
        @page {
        margin: 0cm;
    }

    body {
        font-family: 'DejaVu Sans' sans-serif;
        font-size: 11px;
        margin: 0;
        padding: 0;
    }

        .cv-container {
            width: 100%;
            display: table;
            table-layout: fixed;
            position: relative;
        }

        .sidebar-bg {
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            width: 30%;
            background-color: #1a1a1a;
            z-index: -1;
        }

        .left-column {
            background-color: #1a1a1a;
            color: #fff;
            height: 30%;
            width: 30%;
            padding: 20px;
            display: table-cell;
            vertical-align: top;
        }

        .right-column {
            background-color: #fff;
            color: #333;
            width: 70%;
            padding: 30px;
            display: table-cell;
            vertical-align: top;
        }

        .section-title {
            border-bottom: 1px solid #fff;
            margin: 15px 0 10px;
            font-weight: bold;
            padding-bottom: 5px;
            text-transform: uppercase;
            font-size: 13px;
        }
        
        .section-title-dark {
            border-bottom: 2px solid #1a1a1a;
            margin: 20px 0 20px;
            padding-bottom: 5px;
            font-weight: bold;
            text-transform: uppercase;
            font-size: 13px;
        }

        .photo-container {
            width: 100%;
            height: 250px;
            border: 2px solid #fff;
            margin-bottom: 20px;
            overflow: hidden;
        }

        .photo-container img {
            width: 100%;
            height: auto;
        }

        .item {
            border: 1px solid #666;
            margin-bottom: 5px;
            margin-left: 5px;
            margin-right: 5px;
            padding: 15px;
        }

        .date {
            font-size: 9px;
        }
    </style>
</head>
<body>
    <div class="sidebar-bg"></div>
    <div class="cv-container">
        <div class="left-column">
            <?php if($image_data): ?>
                <div class="photo-container"><img src="<?php echo $image_data; ?>"></div>
            <?php endif; ?>

            <div class="section-title">PROFIL</div>
            <p><?php echo nl2br(htmlspecialchars($profil)); ?></p>

            <div class="section-title">CONTACT</div>
            <p><strong>E-mail :</strong> <?php echo htmlspecialchars($email); ?></p>
            <p><strong>Tél :</strong> <?php echo htmlspecialchars($telephone); ?></p>

            <div class="section-title">INTÉRÊTS</div>
            <?php foreach($interet_types as $index => $type): ?>
                <p><strong><?php echo htmlspecialchars($type); ?></strong>: <?php echo htmlspecialchars($desc_interets[$index] ?? ''); ?></p>
            <?php endforeach; ?>
        </div>

        <div class="right-column">
            <h1 style="margin: 0; text-align: center; font-size: 24px;"><?php echo htmlspecialchars($prenom . ' ' . $nom); ?></h1>
            <h3 style="text-align: center; margin-top: 5px;"><?php echo htmlspecialchars($titre); ?></h3>

            <div class="section-title-dark">FORMATIONS</div>
            <?php foreach($diplomes as $index => $diplome): ?>
                <div class="item">
                    <strong><?php echo htmlspecialchars($diplome); ?></strong> - <?php echo htmlspecialchars($etablissements[$index] ?? ''); ?><br>
                    <span class="date"><?php echo formatDateFr($dates_deb_form[$index] ?? ''); ?> - <?php echo formatDateFr($dates_fin_form[$index] ?? ''); ?></span>
                    <p style="margin-top:2px;"><?php echo htmlspecialchars($desc_form[$index] ?? ''); ?></p>
                </div>
            <?php endforeach; ?>

            <div class="section-title-dark">EXPÉRIENCES PROFESSIONNELLES</div>
            <?php foreach($entreprises as $index => $ent): ?>
                <div class="item">
                    <strong><?php echo htmlspecialchars($postes[$index] ?? ''); ?></strong> - <?php echo htmlspecialchars($ent); ?><br>
                    <span class="date"><?php echo formatDateFr($dates_deb_exp[$index] ?? ''); ?> - <?php echo formatDateFr($dates_fin_exp[$index] ?? ''); ?></span>
                    <p style="margin-top:2px;"><?php echo nl2br(htmlspecialchars($missions[$index] ?? '')); ?></p>
                </div>
            <?php endforeach; ?>

            <div class="section-title-dark">COMPÉTENCES</div>
                <?php foreach($competences as $index => $comp): ?>
                    <div class="item">
                        <p><strong><?php echo htmlspecialchars($comp); ?></strong>: <?php echo htmlspecialchars($niveaux[$index] ?? ''); ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
    </div>
</body>
</html>
<?php


                