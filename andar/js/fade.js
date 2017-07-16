function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(750,function(){//fade out the top image
        $next.fadeIn(750,function(){});
	      $active.css('z-index',1).removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function(){
// run every 4.5s
setInterval('cycleImages()', 4500);
})

function changeText1()
{
 document.getElementById('nosotros-p').innerHTML = '</br>Somos una fundación que busca generar una comunidad de estudiantes y profesionales de calidad comprometidos con la transformación de la realidad del país, donde sus miembros tengan acceso a programas de formación, apoyo, integración, innovación y desarrollo, que incrementen su probabilidad de éxito en la vida universitaria y mejoren sus habilidades sociales, profesionales y empresariales. Además, buscamos que estos estudiantes y profesionales tengan la posibilidad de proponer o participar de proyectos de estudiantes líderes, fundaciones, empresas y/o ideas de emprendimiento en cualquier comunidad del país, que les permita ganar experiencia profesional, desarrollar vínculos de calidad, generar empleo e ingresos y contribuir al desarrollo del país.';
}

function changeText2()
{
 document.getElementById('nosotros-p').innerHTML = 'Para el 2020 estaremos posicionadas como una de las redes estudiantiles más grandes a nivel nacional, con presencia en más de 30 instituciones de educación superior acreditadas por el Ministerio de Educación y con más de 3000 integrantes activos. Asimismo, seremos una lideres en el ámbito de innovación social, toda vez que habremos estructurado y desarrollado múltiples proyectos de emprendimiento en comunidades vulnerables a nivel nacional.';
}

function changeText3()
{
 document.getElementById('nosotros-p').innerHTML = 'Somos una red estudiantil/fundación que busca reducir la deserción estudiantil a nivel universitario, a través de mecanismos que promuevan la inclusión, la reciprocidad y la solidaridad entre sus miembros a la vez que estos proveen ayuda en diferentes proyectos de emprendimiento que ayuden al progreso de comunidades en estado vulnerable a lo largo del paí.s';
}

function changeText4()
{
 document.getElementById('nosotros-p').innerHTML = 'A través de la replicación y extensión de programas de acompañamiento, promoción de espacios para la inclusión y formación de líderes que se adapten a las necesidades de cada grupo estudiantil en específico. Adicionalmente, utilizando la red estudiantil como plataforma, facilitaremos la consolidación de equipos interdisciplinarios, comprometidos en desarrollar proyectos de emprendimiento en comunidades en estado vulnerable.';
}

function changeText5()
{
 document.getElementById('nosotros-p').innerHTML = '<ul><li>Asesoría e implementación de programas de acompañamiento a estudiantes con apoyo financiero, adaptadas a las necesidades de las distintas Instituciones de Educación Superior acreditadas por el Ministerio de Educación Nacional.<li>Organización de charlas de liderazgo, innovación, emprendimiento y coaching estilo TED Talks.<li>Eventos de potenciamiento de las habilidades de liderazgo y gerencial de los estudiantes.<li>Elaboración de actividades de integración dentro de la red y de la red con sus comunidades adyacentes.<li>Estructuración y desarrollo, con el capital humano y la fuerza de trabajo de la red, de proyectos de innovación y emprendimiento con fines sociales y económicos que procuren la mejora del entorno de una comunidad en estado de vulnerabilidad.<li>Plataformas de emparejamiento efectivo entre el talento universitario, el mercado laboral y las oportunidades de emprendimiento a nivel nacional e internacional.</ul>';
}

function changeText6()
{
 document.getElementById('nosotros-p').innerHTML = '<br><ul><li>Pensar y sentir la reciprocidad con aquellos que están a nuestro lado y vienen detrás de nosotros.<li>Ser solidaridarios con nuestros pares y, especialmente, con aquellos que tienen dificultades económicas y sociales.<li>Ser y crear líderes comprometidos con el bienestar de sus comunidades.<li>Innovar y desarrollar nuevas propuestas que mejoren la calidad de vida de aquellos que lo rodean.<li>Construir una comunidad inclusiva, fraternal y responsable con el país.<li>Trabajar con pasión por nuestros sueños, convertirlos en metas y hacerlos realidad.</ul>';
}