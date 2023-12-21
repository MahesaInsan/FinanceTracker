# Final Project Web Programming - COMP6821001 - LE01

## Finance Tracker Web App 

Mahesa Insan Raushanfikir - 2501981024 as Fullstack Developer

Dimas Dani Zaini - 2502021872 as Fullstack Developer

Kenrick Panca Dewanto - 2501986422 as Fullstack Developer <br /> <br />

Techstack used : ReactJS, Laravel and MySQL. <br /> <br />

### How to run : 

Turn on apache and MySQL on xampp

Don't forget to config the database on .env <br /> 
on .env, replace the SANCTUM_STATEFUL_DOMAINS and SESSION_DOMAIN to <br /> 
SANCTUM_STATEFUL_DOMAINS=127.0.0.1:8000 <br /> 
SESSION_DOMAIN=127.0.0.1:8000 <br /> <br /> 

Open 2 terminal 

For the first terminal, 

Make sure the folder is at xampp\htdocs\FinanceTracker> 

composer install

npm install --legacy-peer-deps

php artisan migrate:fresh --seed

php artisan optimize

php artisan serve

No need to open the laravel localhost on browser because the laravel only works as the backend and API on this project ! <br /> <br />

For the second terminal

Open r-frontend folder for the react frontend 

xampp\htdocs\FinanceTracker> cd r-frontend

Make sure the folder is at xampp\htdocs\FinanceTracker\r-frontend> <br />
npm install --legacy-peer-deps<br />
npm run dev <br />

Open the localhost at your browser!
