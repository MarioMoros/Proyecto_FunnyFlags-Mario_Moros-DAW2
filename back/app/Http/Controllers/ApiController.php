<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    //
    public function register(Request $req){
        $data = $req->only('name', 'email', 'password');
        $validator = Validator::make($data, [
            'name' => 'required|string|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required'
        ]);

        if($validator->fails()){
            return response()->json(['error' => $validator->errors()], 200);
        }

        $user = User::create([
            'name'=>$req->name,
            'email'=>$req->email,
            'password'=>bcrypt($req->password)
        ]);

        if($user){
            return response()->json([
                'success' => true,
                'code' => 1,
                'message' => 'User created',
                'data' => $user,
            ], Response::HTTP_OK);
        }
    }

    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        //valid credential
        $validator = Validator::make($credentials, [
            'email' => 'required|email',
            'password' => 'required'
        ]);

        //Send failed response if request is not valid
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 200);
        }

        //Request is validated
        //Crean token
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json([
                	'success' => false,
                    'code' => 2,
                	'message' => 'Login credentials are invalid.'
                ]);
            }
        } catch (JWTException $e) {
    	return $credentials;
            return response()->json([
                	'success' => false,
                    'code' => 2,
                	'message' => 'Could not create token.'
                ]);
        }

 		//Token created, return with success response and jwt token
        return response()->json([
            'success' => true,
            'code' => 1,
            'message' => 'Login Successfully',
            'token' => $token,
            'user_details' => $credentials['email']
        ]);
    }

    public function getUserData(Request $request){
        $info = $request->i;
        $user = DB::table('users')
            ->select('users.name', 'users.email')
            ->where('users.email', 'like', $info)
            ->get();

        return response()->json(['user' => $user], 200);
    }

    public function logout(Request $request){

        if(empty($request->token)){
            return response()->json([
                'success' => false,
                'code' => 2,
                'message' => 'Token is required'
            ]);
        }

		//Request is validated, do logout
        try {
            \JWTAuth::manager()->invalidate(new \Tymon\JWTAuth\Token($request->token), $forceForever = false);

            return response()->json([
                'success' => true,
                'code' => 1,
                'message' => 'User has been logged out'
            ]);
        } catch (JWTException $exception) {
            return response()->json([
                'success' => false,
                'code' => 2,
                'message' => 'Sorry, user cannot be logged out'
            ]);
        }
    }
}