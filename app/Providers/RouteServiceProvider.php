<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use App\Models\Responselog;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const USER_DASHBOARD = '/account/dashboard';

    public const ADMIN_DASHBOARD = '/admin/dashboard';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(10)->by(optional($request->user())->id ?: $request->ip())->response(function($request) {
                $log = Responselog::create([
                    'status' => 'failed',
                    'reason' => 'Request blocked, too many requests by IP',
                    'code' => 429,
                    'request_url' => $request->domain_url . $request->endpoint,
                    'ip' => $request->ip()
                ]);
                return response()->json([ "message" => "Request blocked, too many requests by IP", "ip" => '', 'status' => 429], 429);
            });
        });
    }
}