<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\DB;

class CountryController extends Controller
{
    //
    public function getAllCountryData(){
        $countryData = DB::table('paises')
            ->select('paises.bandera', 'paises.nombre_pais')
            ->get();
        return response()->json($countryData, 200);
    }

    public function pedirBanderas(){
        $consulta_pedirBandera = 'select nombre_pais, bandera from paises order by rand() limit 10';
        $query_pedirBandera = DB::select($consulta_pedirBandera);

        return response()->json($query_pedirBandera, 200);
    }

    public function pedirPaises(){
        $consulta_pedirPaises = 'select nombre_pais from paises where nombre_pais not like \'Vaticano\' order by rand()';
        $query_pedirPaises = DB::select($consulta_pedirPaises);

        return response()->json($query_pedirPaises, 200);
    }

    public function getQuestion(Request $request){
        $id_pregunta = $request->i;

        $consulta_relacion_pregunta = 'select relacion_pregunta, campo_pregunta, pregunta, relacion_respuesta, campo_respuesta, clave_relacion from preguntas_quiz where id like '.$id_pregunta.'';
        $relacion_pregunta = DB::select($consulta_relacion_pregunta);

        $consulta_pregunta_random = 'select '.$relacion_pregunta[0]->campo_pregunta.' from '.$relacion_pregunta[0]->relacion_pregunta.' order by rand() limit 1';
        $pregunta_random = DB::select($consulta_pregunta_random);

        $pregunta_random = array_map(function($valor){
            return (array)$valor;
        }, $pregunta_random);

        $key_random = array_keys($pregunta_random[0]);


        /*$consulta_respuesta = 'select ' .$relacion_pregunta[0]->campo_respuesta.' from '.$relacion_pregunta[0]->relacion_respuesta.
            ' where '.$relacion_pregunta[0]->campo_pregunta.' = "'.$pregunta_random[0][$key_random[0]].'"';*/

        $consulta_respuesta_correcta = 'select a.' .$relacion_pregunta[0]->campo_respuesta.' from '.$relacion_pregunta[0]->relacion_respuesta.
            ' a join '.$relacion_pregunta[0]->relacion_pregunta.' b on a.'.$relacion_pregunta[0]->clave_relacion.
            ' = b.'.$relacion_pregunta[0]->clave_relacion.' where b.'.$relacion_pregunta[0]->campo_pregunta.' = "'.$pregunta_random[0][$key_random[0]].'"';


        $respuesta_correcta = DB::select($consulta_respuesta_correcta);


        $respuesta_correcta = array_map(function($valor){
            return (array)$valor;
        }, $respuesta_correcta);

        $key_correcta = array_keys($respuesta_correcta[0]);




        $consulta_respuesta_incorrecta = 'select ' .$relacion_pregunta[0]->campo_respuesta.' from '.$relacion_pregunta[0]->relacion_respuesta.
            ' where '.$relacion_pregunta[0]->campo_respuesta.' != "'.$respuesta_correcta[0][$key_correcta[0]].'" order by rand() limit 3';
        $respuesta_incorrecta = DB::select($consulta_respuesta_incorrecta);



        $relacion_pregunta = array_map(function($valor){
            return (array)$valor;
        }, $relacion_pregunta);

        $key_pregunta = array_keys($relacion_pregunta[0]);



        $respuesta_incorrecta = array_map(function($valor){
            return (array)$valor;
        }, $respuesta_incorrecta);

        $key_incorrecta = array_keys($respuesta_incorrecta[0]);

        return response()->json([$relacion_pregunta[0][$key_pregunta[2]], $pregunta_random[0][$key_random[0]],
            $respuesta_correcta[0][$key_correcta[0]], $respuesta_incorrecta[0][$key_incorrecta[0]],
            $respuesta_incorrecta[1][$key_incorrecta[0]], $respuesta_incorrecta[2][$key_incorrecta[0]]], 200);
    }
}
