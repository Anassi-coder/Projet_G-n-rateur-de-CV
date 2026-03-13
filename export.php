<?php

require_once 'vendor/autoload.php';
use Dompdf\Dompdf;
use Dompdf\Options;

ob_start ();
include 'cv.php';
$html = ob_get_clean();

$options = new Options();
$options->set('isRemoteEnabled', true);
$options->set('defaultFont', 'DejaVu Sans'); 

$dompdf = new Dompdf($options);
$dompdf->loadHtml($html);
$dompdf->setPaper('A4', 'portrait');
$dompdf->render();

ob_end_clean(); 
$dompdf->stream("cv_" . $nom . '_' . $prenom . ".pdf", ["Attachment" => true]);
exit();

?>