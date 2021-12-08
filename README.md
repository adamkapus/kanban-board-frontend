# Temalabor frontend

## Leírás

Az alkalmazás egy Teendőnyilvántartó alkalmazást valósít meg. Egy teendőnek van neve, leírása, és határideje. A teendők 4 kategória egyikébe sorolhatóak be: függőben, folyamatban, kész, elhalasztva. A felhasználó megadhat teendőket az "Új feladat felvétele" gomb segítségével. A hozzáadott teendők permanensen elmentődnek, a weboldalt később megnyitva ismét láthatóak. A hozzáadott teendők minden adata szerkeszthető, valamint a teendők törölhetőek is, ezek a változtatások szintén permanensen elmentődnek. Egy teendő prioritása a kategóriáján belül szintén változtatható.

## Beüzemelés

A weboldal tesztcélú kiszolgálásához az alkalmazás gyökérmappájában ki kell adni az `npm start` parancsot, amely elindít egy npm dev-server-t, ami a `localhost:3000`-en szolgálja ki a weboldalt. Az adatbáziskapcsolathoz szükséges url az src/App.js-ben deklarált `backendUrl` konstansban található, szükség szerint módosítandó.

Optimalizát build készíthető az `npm run build` parancs kiadásával, ami egy build mappába létrehozza a kiszolgálandó .html, .css és .js fájlokat, amiket aztán tetszőleges módon ki lehet szolgálni.

## Szoftver felépítése

A szoftver ReactJS technológiát használ az oldal kirenderelésére, és BootstrapCSS-t a stílusokhoz. A React komponensek külön fájlokba vannak szervezve.

A komponensek hierarchiájában a gyökérelem az App komponens. Ez a komponens felel a backenddel való kommunikációért: a teendők lekérdezésért, egy teendő új teendő létrehozásáért az adatbázisban, egy meglévő teendő módosításáért, két teendő kategórián belüli pozíciójának megcserélésért, illetve egy teendő törléséért. A komponens state-ben tárolja az összes teendőt. A komponens kirenderelésében található egy ActivityAdder és egy CategoryManager. Ha megváltozik az App-ban tárolt teendők listája, akkor az összes teendő újra kirenderelődik, mivel a CategoryManager propként kapja azokat.

Az ActivityAdder komponens felel egy új teendő hozzáadásához szükséges felületért. Prop-ként kap egy callback függvényt az őt tartalmazó App-től, amin keresztül megadhat egy új teendőt az Appnak.

A CategoryManager komponens felel a kategóriák kirendereléésért. Props-ként megkapja az összes teendőt az őt tartalmazó App-tól, és a 4 kategória szerint szétválogatja őket. A komponens 4 darab kategóriát tartalmaz, amelyekért 4 Category osztály felel.

Egy Category osztály felel egy kategóriának a kirendereléésért. Props-ként megkapja az adott kategóriába tartozó teendőket az őt tartalmazó CategoryManager-től. Ezután kirendereli a benne lévő teendőket, amik Itemeknek felelnek meg.

Egy teendőnek a megjelenéséért az Item kompononens a felelős. Propként megkapja egy adott teendő adatait, és ezt kirendereli. Szintén ez a komponens felel egy már létező komponens szerkesztéséhez szükséges felületért. A szerkesztőfelületen a komponens eredeti adatai jelennek, ezeket át lehet írni, és a Save gombra nyomva a komponens a prop-ként kapott, App callback függvényének adja oda az új adatokat. A backenddel való kommunikáció az App komponensben történik. 