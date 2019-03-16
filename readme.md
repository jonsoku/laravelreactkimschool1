###
    composer create-project --prefer-dist laravel/laravel blog "5.7.*"

###
    DB_CONNECTION=mysql
    DB_HOST=laravel.cim78dtgz3dv.ap-northeast-1.rds.amazonaws.com
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=

###
    App\Provider\AppServiceProvider.php에 아래 라인 추가.

    use Illuminate\Support\Facades\Schema;

    public function boot()
    {
        Schema::defaultStringLength(191);
    }

###
    cd laravel-react
###
    php artisan preset react
###
    npm install && npm run dev
###
    npm run watch
###
    Route::get('/{any}', function(){
        return view('welcome');
    })->where('any','.*');
###
    yarn add react-router-dom
    npm install react-router-dom
###
    npm install axios
###
    npm install styled-component
    yarn add styled-component
