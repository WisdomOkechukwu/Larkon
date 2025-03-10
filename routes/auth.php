<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\RoutingController;
use App\Http\Controllers\V1\ForgotPasswordController;
use App\Http\Controllers\V1\LoginController;
use App\Http\Controllers\V1\LogoutController;
use App\Http\Controllers\V1\RegisterController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['guest']], function () {
    Route::get('/', [RoutingController::class, 'index']);

    Route::get('/register', [RegisterController::class, 'register'])
        ->name('register');

    Route::post('/register', [RegisterController::class, 'register_user'])
        ->name('register.store');

    Route::get('/login', [LoginController::class, 'login'])
        ->name('login');

    Route::post('/login', [LoginController::class, 'validate_login'])
        ->name('login.validate');


    Route::get('/forgot-password', [ForgotPasswordController::class, 'forgot_password'])
        ->name('forgot.password');

    Route::post('/check_mail', [ForgotPasswordController::class, 'check_mail'])
        ->name('check.mail');


    Route::post('/verify_otp', [ForgotPasswordController::class, 'verify_otp'])
        ->name('verify_otp');

    Route::get('/verify_otp_view', [ForgotPasswordController::class, 'verify_otp_view'])
        ->name('verify_otp_view');

    Route::get('/reset_password_view', [ForgotPasswordController::class, 'reset_password_view'])
        ->name('reset_password_view');

    Route::post('/reset_password', [ForgotPasswordController::class, 'reset_password'])
        ->name('reset_password');
});

Route::post('/logout', [LogoutController::class, 'logout'])
    ->middleware('auth')
    ->name('logout');

// Route::get('/forgot-password', [PasswordResetLinkController::class, 'create'])
//     ->middleware('guest')
//     ->name('password.request');

// Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
//     ->middleware('guest')
//     ->name('password.email');

// Route::get('/reset-password/{token}', [NewPasswordController::class, 'create'])
//     ->middleware('guest')
//     ->name('password.reset');

// Route::post('/reset-password', [NewPasswordController::class, 'store'])
//     ->middleware('guest')
//     ->name('password.update');

// Route::get('/verify-email', [EmailVerificationPromptController::class, '__invoke'])
//     ->middleware('auth')
//     ->name('verification.notice');

// Route::get('/verify-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
//     ->middleware(['auth', 'signed', 'throttle:6,1'])
//     ->name('verification.verify');

// Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
//     ->middleware(['auth', 'throttle:6,1'])
//     ->name('verification.send');

// Route::get('/confirm-password', [ConfirmablePasswordController::class, 'show'])
//     ->middleware('auth')
//     ->name('password.confirm');

// Route::post('/confirm-password', [ConfirmablePasswordController::class, 'store'])
//     ->middleware('auth');


