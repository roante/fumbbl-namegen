/**
 * A random name generator for FUMBBL, the largest on-line Blood Bowl league.
 * https://github.com/roante/fumbbl-namegen
 * Copyright (C) 2013 roante
 *
 * This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General
 * Public License as published by the Free Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Lesser General Public License along with this library; if not, write to
 * the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
 *
 * @version 2.0RC1
 */

// --- utils.js ---------------------------------------------------------------
function toArray(longStringSeparatedByComas) {
	return longStringSeparatedByComas.split(", ");
}

function randomArrayElement(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

function setName(generatedName) {
	var elements = document.getElementsByName("name");

	if (elements.length > 0) {
		elements[0].value = generatedName;
	} else {
		alert("No name input field was found!\n" +
		      "Please report the error at roante.bb@gmail.com!");
	}
}

function generateName() {
	return randomArrayElement(names) + " " + randomArrayElement(names);
}

function checkIfRosterHasPositionalWithId(n) {
	var position_ids = document.getElementsByName("position_id");
	if (0 == position_ids.length) {
		return false;
	}

	for (var i = 0; i < position_ids.length; ++i) {
		if (n == position_ids[i].value) {
			return true;
		}
	}

	return false;
}

var names = toArray(
	"Aache, Aanwas, Aaron, Abaet, Abarden, Abbadon, Abbe, Abbo, Abe, Aberbysion, Abeyaratne, Aboloft, Abril, Abthony, Abu, Acamen, Acear, Acele, Acence, Achalla, Achard, Achilles, Acholate, Ackmard, Acorn, Ada, Adame, Adaon, Adeen, Adena, Adiannon, Adoma, Adon, Adorra, Adric, Advoc, Aegir, Aeglaeca, Aenas, Aerden, Aerin, Aerinha, Aesa, Aette, Aevor, Afflon, Agamemon, Ageon, Aghon, Agmemon, Agnar, Agnvala, Agravaine, Agrippa, Agsded, Ahalfar, Ahanna, Ahburn, Ahdun, Aidan, Ailion, Airen, Airis, Airk, Ajax, Akara, Akassa, Akia, Akkad, Akki, Akvar, Al-Rashid, Alabama, Aladan, Alan, Alandis, Alaric, Alarion, Alaris, Alayne, Alberon, Albright, Aldaren, Aldden, Alderman, Aldmor, Aldor, Aldren, Aldwin, Alec, Aleemy, Alek, Alenthe, Alexander, Alfred, Alfwyn, Alfy, Algween, Alia, Alic, Alidore, Alio, Alixa, Alkirk, Allso, Almude, Alor, Alos, Aloysius, Alsvider, Aluatis, Aluca, Aluna, Alver, Alveron, Alvy, Alys, Amaerilde, Amara, Amarisa, Amarizi, Amatin, Amber, Amberscand, Ambros, Ambrose, Ambrosius, Amburgalas, Ament, Amerdan, Ames, Amethyst, Amintor, Amitel, Amivar, Amloth, Ammaranza, Amok, Amorine, Amoth, Ampria, Amren, Ana, And, Andal, Andeler, Andonna, Andraut, Andrew, Andvarii, Andya, Aneirin, Anfar, Angar, Angel, Angelina, Angur, Ani, Aniun, Anmuspi, Annalyn, Annion, Annubi, Annyk, Ans, Ansar, Ansell, Anson, Antar, Anthony, Anthro, Antii, Anumi, Anumil, Anval, Aoea, Apollyon, Apore, April, Aquinas, Ar, Arade, Aradise, Arak, Arakis, Aral, Aramcham, Aramsham, Aran, Aranor, Arasu, Arath, Arawn, Arbagon, Arboran, Archane, Archman, Arcy, Arden, Arenith, Argon, Ariannona, Aric, Ariel, Arienthil, Aries, Arimaspia, Arina, Ariome, Arion, Arise, Arithin, Arizona, Arl, Arlbeth, Arleenan, Arminius, Arngrim, Arnor, Arnt, Arole, Arrakis, Arryn, Arte, Arther, Arthur, Artor, Arvene, Arzheviel, Asa, Asada, Asbrand, Asden, Asdern, Asen, Asha, Ashlin, Aslan, Aslane, Asleen, Asmen, Asmund, Asoka, Asperon, Aspes, Astar, Astaulf, Astea, Aster, Astire, Astro, Astrol, Asuraka, Atar, Aten, Atgur, Athana, Athane, Athen, Atherni, Athiss, Atiaran, Atiarn, Atili, Atlantes, Atlin, Aton, Ator, Atrak, Attacotti, Attew, Attila, Auburn, Auchfor, Auden, Audh, Augustus, Ault, Auma, Aurelius, Aurion, Aurora, Austill, Austri, Autumntide, Auvien, Avedar, Avel, Aveline, Avil, Avitus, Avllach, Avon, Avride, Avtar, Awile, Awnia, Axeth, Ayat, Ayesh, Ayesha, Ayne, Ayrie, Aysen, Azhar, Azimir, Azreal, Azuela, Bacohl, Badeek, Baduk, Baeron, Bahir, Bahrair, Baily, Balain, Balati, Balderon, Baldulf, Baldur, Ballar, Balzar, Bam-Bam, Ban, Bana, Bando, Bane, Banheen, Banipal, Bann, Bannor, Bar, Baradakas, Baradeer, Barak, Barakah, Baralan, Baram, Barbo, Barboda, Barcer, Bardar, Barebranch, Baren, Barfolomul, Bari, Barim, Barinthus, Barkydle, Barlo, Barnabas, Barph, Barty, Baru, Baruch, Basden, Basete, Basil, Baskin, Basse, Basturn, Bathelie, Battan, Baudi, Baugi, Bavmorda, Bawenni, Baxter, Bayde, Beac, Beak, Beaknose, Beate, Beatric, Beck, Bedegran, Bedic, Bedivere, Bedwyr, Beeron, Beeta, Behine, Bein, Bek, Bekki, Beli, Belissa, Bella, Bellenzor, Belor, Belrene, Beltane, Belug, Belyn, Ben, Benard, Bennor, Benth, Beolann, Beona, Beowulf, Berch, Berek, Berenmil, Berenwick, Berez, Berg, Berhodrick, Berk, Berle, Bern, Bertram, Beson, Besur, Besurlde, Beth, Bethe, Bets, Betsy, Bevin, Bewul, Beyla, Bianca, Biblo, Biedgar, Biel, Biff, Bildon, Bili, Bimpfoodle, Birinair, Biston, Bita, Bithon, Bitio, Blackstone, Blade, Blaide, Blain, Blair, Blaise, Blak, Blanche, Blane, Blaze, Bleda, Blek, Blissia, Boadill, Boal, Boaldelr, Boddyjon, Boden, Bodie, Bodus, Boern, Boethuis, Bog, Boin, Boliva, Boll, Bollinar, Bolrock, Bolthorn, Bolu, Bolwerk, Bomar, Bonly, Borel, Borin, Boris, Bormor, Borne, Boro, Bors, Boru, Bourc, Brabha, Bradley, Braeker, Braggi, Bragi, Brahil, Brakdern, Bran, Brana, Brand, Brane, Brannel, Brav, Brave, Breagan, Breanon, Bredere, Bredin, Bredock, Breek, Breen, Brega, Brenbard, Brendan, Brendar, Bres, Bretwalda, Brianan, Briarman, Bridonna, Brie, Brigadore, BrightHelm, Brightmaster, Brighton, Brightspot, Brill, Brin, Brine, Brinn, Briseis, Bristan, Brithna, Brittany, Broddi, Brodir, Bron, Brosa, Brucius, Bruk, Brutus, Brynhilde, Brynnda, Brytta, Bucelus, Buchmeid, Bue, Bunkman, Burbhin, Buren, Burglekutt, Burhan, Burk, Buser, Bush, Bushe, Busma, Buthomar, Bydern, Cabolus, Cadate, Caddor, Cade, Caden, Cadria, Caecilius, Cael, Caelholdt, Caelon, Caen, Caer, Caere, Caerno, Caerroil, Caf-es, Cafe-, Cahir, Cail, Caino, Cainon, Caiora, Caladon, Calcompton, Calcul, Calden, Caleb, Calen, Calene, Calgaron, Caliban, Calina, Caliron, Calla, Callindrill, Callipygia, Calls, Calnor, Calon, Calonet, Cambreard, Camchak, Camelie, Camilde, Camus, Camyal, Canda, Candaree, Candelis, Candor, Cannon, Canute, Capad, Capet, Capid, Capide, Caracatus, Carace, Caradec, Carakin, Caramon, Carcslain, Carde, Cardon, Caret, Cariki, Caris, Carl, Carly, Carna, Carnen, Caro, Carpo, Carrai, Carrie, Carson, Carsys, Cart, Carte, Carter, Carthag, Casca, Casden, Caspardrug, Cassair, Casta, Casties, Castrich, Casy, Catchclaw, Catherine, Cathwar, Catos, Cavem, Caveral, Cavil, Cayla, Caylus, Cayold, Cear, Cedric, Ceel, Ceer, Cei, Celbahr, Celdarin, Celeb, Celere, Celeren, Celestine, Celinn, Celise, Cell, Celoa, Celorn, Celsus, Celthric, Cemark, Cenu, Ceoline, Cephenrene, Cercan, Cerdern, Cerdic, Cereb, Cereben, Ceremon, Cern, Cernon, Cerrin, Cert, Cervek, Cespar, Cether, Cevelt, Ch-ian, Chagor, Chakili, Chal, Cham, Chamon, Chance, Chaney, Chang, Chani, Chant, Char, Chardu, Chare, Charford, Charis, Charlemagne, Chartiphon, Chary, Chastitie, Chatt, Cheddar, Chekhov, Chengai, Cherem, Cherlinar, Cherlindrea, Chesmarn, Chidak, Chirp, Chivahle, Chrodra, Chronet, Chronos, Chrynn, Chrystyne, Chusuk, Chymas, Ciatha, Cibrock, Cid, Cider, Cile, Cino, Cinon, Cipyar, Circa, Circe, Cirda, Ciroc, Ciron, Clanica, Clare, Clarnleef, Clathin, Claudius, Clay, Clere, Cliff, Cloin, Clomen, Cloudshape, Clovis, Coatl, Cobbder, Cobbman, Coda, Codach, Code, Codern, Cognious, Cohan, Cohen, Coi, Colberane, Coledac, Colin, Coll, Collen, Collur, Colmen, Colriolis, Colthan, Columba, Columbia, Come, Comperri, Comri, Con, Cona, Conan, Concaline, Cone, Coni, Conn, Connell, Conon, Conquaine, Constantine, Constantius, Coper, Copernicua, Copernicus, Coppereye, Corage, Corand, Corann, Cord, Corda, Cordale, Corimini, Corineus, Coriolis, Corith, Cormach, Cormann, Cornelius, Coron, Corphrim, Corrigad, Cortes, Corwin, Corydar, Corydar, Cos, Cosdeer, Coseecer, Cosine, Cotal, Cotan, Cotterall, Covenant, Cowal, Crag, Crage, Craig, Crandall, Crede, Crimax, Croesus, Crofta, Cromine, Cron, Crondon, Crowl, Cruaver, Crudak, Cruni, Cuall, Cuna, Cune, Cunedda, Cuparun, Cusmirk, Custennin, Cutte, Cybel, Cydare, Cyelena, Cylmar, Cymel, Cyndi, Cynth, Cyrtina, Cyrus, Cythnar, Cyton, Daburn, Dacer, Dacia, Daermalkin, Daermod, Daero, Daerto, Dafyd, Dag, Dagar, Dager, Dagh, Dagnall, Dague, Dagus, Dahgir, Daide, Daikini, Dailia, Dak, Dakamon, Dakkone, Dalamar, Dalavesta, Dalburn, Dalla, Dallpen, Dalmarn, Dama, Damelon, Damenae, Dami, Damon, Danan, Danaw, Dando, Danial, Daniel, Daniger, Danner, Danony, Dante, Danthragnir, Dantice, Daon, Daphin, Dapvhir, Darar, Darda, Dareene, Dargo, Dari, Darin, Darion, Darius, Dark, Darkblade, Darkbone, Darkboon, Darkkon, Darkmage, Darkmoore, Darko, Darkspur, Darmor, Darora, Darpick, Darr, Darra, Darrin, Darset, Darsin, Darste, Darth, Darthe, Darult, Darven, Darvon, Dasbeck, Dask, Dathony, Daud, Daun, Dauron, Davae, Davic, Davics, David, Dawes, Dawn, Dawnflower, Dawns, Dawnwind, Dazos, Dearog, Deart, Deathmar, Decuis, Deerslayer, Deeval, Defearon, Degan, Deik, Del, Delaneen, Delebrith, Deler, Dellin, Delphis, Delsheevah, Deltix, Delv, Dema, Denast, Denderah, Dengold, Deoger, Deon, Derel, Derik, Derlynnet, Dermit, Derokin, Derrin, Derset, Derth, Dertha, Derthe, Desil, Desini, Dessfar, Deucalion, Devell, Devrel, Dharan-sar, Dhart, Dhrozna, Dhyana, Dhyne, Didion, Diloen, Dilon, Dilvish, Dima, Dime, Dimjon, Dimth, Dimura, Dinfar, Dinth, Dinyr, Dira, Direst, Dirist, Dismer, Distant, Distran, Doar, Doble, Doceon, Dochrohan, Doiran, Dokoran, Dolman, Dolsa, Domin, Donser, Donya, Dore, Doregren, Doright, Dorn, Dorsat, Dorset, Doshack, Dosoman, Dougen, Douger, Douphra, Draco, Dracula, Drae, Draedan, Drak, Drake, Drakoe, Drakone, Drandon, Drave, Draven, Dravon, Drazil, Drew, Driel, Drienel, Drim, Drin, Drinishok, Drinny, Drit, Dritz, Driz, Drizzt, Drocta, Drogan, Drogo, Droma, Dron, Drool, Drophar, Dru, Druk, Drumma, Drunen, Drunhilde, Drusilla, Druth, Druwain, Dryden, Dryn, Dryope, Duach, Duald, Duarin, Duba, Duftah, Dukran, Dulia, Dumas, Dunaut, Duncan, Dunewalker, Dunge, Dungon, Duorn, Dura, Duran, Durar, Durathor, Durek, Durian, Durmark, Durris, Dusaro, Dutch, Duvado, Duvagel, Duvani, Duzedrawse, Dwalin, Dwarl, Dwobble, Dwobwicket, Dwort, Dyfar, Dylena, Dynar, Dynera, Dyten, Eadric, Eagle, Eamon, Ear, Eard, Earnan, Eart, Eashaft, Eashasft, Eatle, Ebatryne, Ebeth, Ebog, Eborane, Ebow, Ecematare, Echule, Eckard, Ectorius, Edaece, Edan, Edar, Edarph, Eddra, Ede, Eder, Edoc, Edorin, Edra, Edward, Edwin, Eevel, Efamar, Efar, Efari, Effronin, Efnie, Eglea, Egmardern, Eidanel, Eiddon, Eillian, Eilong, Eira, Eiric, Eiridan, Eiron, Eisa, Eithne, Ekgamut, Eklake, Eksaar, Elac, Elantir, Elati, Elderon, Eldin, Eldramor, Eldrin, Eleg, Elen, Elena, Elerach, Elet, Elflaine, Elfodd, Elgo, Eli, Elik, Elisne, Elius, Ellen, Ellia, Ellidyr, Ellie, Ellyjoo, Ellywicket, Elman, Elnibera, Elo, Eloka, Elora, Elphin, Elronhir, Elsa, Elson, Elthin, Elune, Elveen, Elward, Elyon, Embar, Emmene, Emon, Emyys, Enaldie, Enbane, Encantam, Enda, Endor, Endra, Endymythalion, Engle, Engoliothil, Enidin, Enoka, Enoon, Enoona, Enril, Enro, Enton, Eogan, Eogar, Eoman, Eorinn, Ephram, Equate, Equebus, Eradan, Erebos, Eregdor, Ergar, Ergoth, Eric, Erich, Erik, Erikarn, Erill, Erim, Eritai, Erle, Ermin, Ermit, Eron, Errinaya, Erro, Erthe, Erus, Eryn, Esatte, Escariet, Esdros, Esele, Esnar, Espardo, Essault, Esthila, Estidh, Etar, Etburn, Etdar, Etgarrai, Ethen, Ethesa, Ethna, Etmere, Etran, Etrigan, Ette, Eudock, Evarudt, Evet, Ewall, Eyndy, Eythil, Fabienne, Fac, Facent, Facer, Fadukes, Fael, Faer, Faermate, Faeroh, Faeron, Faex, Fafnin, Fafnir, Faheem, Faid, Fairflank, Fajor, Falan, Falat, Falcon, Fallan, Fallowry, Fangred, Fant, Faolin, Faoturk, Faowind, Faran, Farate, Faravinn, Fargo, Farin, Farn, Farret, Farse, Farshadow, Farth, Fasner, Fassen, Fasten, Fater, Fath, Fault, Faust, Faux, Faver, Fawks, Fayne, Fearlock, Feart, Fedaykin, Feilyn, Feldor, Felixmarte, Felor, Fenia, Fenrirr, Fer, Ferdinand, Ferg, Ferless, Fern, Ferny, Feron, Ferrate, Ferret, Fetchstorm, Feth, Fetil, Fetmar, Feturn, Fhain, Fhastine, Fiacus, Fiana, Fiannah, Ficadon, Fickfylo, Fie, Fient, Figire, Fildon, Fimbe, Findail, Findal, FinFanFoom, Finmottin, Finn, Finrink, Finwocket, Firedorn, Firiro, Firon, Fistor, Fizban, Fizbo, Flandrena, Flavio, Floki, Floran, Flosi, Foel, Folden, Fole, Folmard, Fomdey, Fon, Fonni, Font, Fonya, Forer, Forseti, Forthe, Fother, Fovor, Fract, Fraderk, Frake, Frater, Frather, Frealaf, Freasse, Freca, Frederika, Fredrick, Freedom, Freeke, Freen, Frey, Freyja, Frida, Frikin, Frish, Frith, Frodo, Fronal, Fronar, Frost, Froth, Frufalcon, Fudder, Fuker, Fukstoan, Fukui, Fullengarten, Fuller, Funith, Furl, Fydar, Fyn, Fynnete, Gaelanon, Gaelinar, Gaer, Gaese, Gaess, Gaet, Gaethaa, Gafolern, Gagar, Gai, Galach, Galadren, Galain, Galanna, Galar, Galderon, Galdwulf, Galen, Galet, Galileo, Galion, Galiron, Gallovinn, Gallowglas, Gallowglass, Galron, Galzar, Gametris, Gamic, Gammer, Gandalf, Ganieda, Ganith, Gann, Gantholion, Gardan, Garden, Gare, Garel, Garendi, Gareth, Garishaw, Garith, Garley, Garm, Garrar, Garth, Garwocket, Gash, Lark, Gaskite, Gaspani, Gast, Gaston, Gath, Gauthus, Gavein, Gaven, Gavin, Gawain, Gay, Gaynor, Gean, Gebeth, Ged, Geirrod, Gelderon, Gemardt, Gemedern, Gemedes, Gemma, Gene, Genghis, Genlon, Genselda, Gerald, Geri, Gerirr, Germe, Gern, Gern-y-fhain, Geront, Gerontius, Gerpin, Gesell, Gessane, Getale, Geth, Gette, Ghant, Ghata, Ghazanvi, Ghulen, Gib, Gibbon, Gibolock, Gibolt, Giga, Gash, Gilden, Gildor, Gilgamesh, Gillan, Gilmesh, Gilthanas, Gimli, Gina, Gine, Ginger, Gith, Glanern, Glius, Gloria, Gloriatha, Gloryaxe, Glose, Gloth, Gnar, Gode, Godestere, Godhilder, Godrech, Gofannon, Golas, Golina, Gollum, Golush, Gom, Goman, Gondel, Gons, Gorak, Gorbash, Gorfet, Goriolo, Gorlais, Gorm, Goroth, Gorth, Gortin, Gosford, Gosselyn, Gothar, Gothikar, Gothsettan, Goul, Grabfoot, Grace, Gradule, Gragold, Graice, Gralon, Gramorn, Granlon, Grau, Gravin, Graymantle, Greann, Greenblade, Greenbriar, Greenvine, Greeth, Gregor, Grement, Gren, Grenda, Gresforn, Grey, Greyfell, Greylock, Greymalkin, Grian, Grilik, Grimie, Grimlock, Grimm, Grimman, Grimmand, Grimnir, Grimwall, Grimwulf, Grog, Grolim, Gronalyn, Gronf, Gront, Grosner, Grumedan, Grunag, Grunen, Gryn, Gudus, Gueda, Guen, Guese, Guice, Guillarmo, Guilomar, Guinevere, Guistan, Guldergrance, Gulgonen, Gumuor, Gunasekera, Gunde, Gundir, Gurgi, Gurgwen, Gurney, Gurrath, Gustfer, Gustov, Gusts, Gutar, Guthale, Guthe, Guy-Fern, Gvene, Gwain, Gwalcmai, Gwath, Gwathard, Gwathis, Gwayhne, Gweir, Gwendha, Gwendolau, Gwennia, Gwertra, Gwethana, Gwyddno, Gwydion, Gwystyl, Gybol, Gybrush, Gyda, Gyin, Gymir, Gymmer, Hacer, Hachiman, Hacyon, Hadoc, Hadrian, Hael, Haert, Haffis, Hafgan, Hagan, Hagels, Haiji, Hairth, Hal, Hale, Halete, Halianor, Halix, Fang, Halleck, Hallgerd, Halmar, Halogia, Haltach, Hama, Hamako, Hamlet, Hammer, Hampshire, Han, Hane, Hanlo, Hannibal, Hanny, Hantal, Haque, Hardep, Hardis, Hardnoggin, Hardon, Harken, Harmakros, Harnway, Harod, Harold, Harper, Harrenhal, Harven, Hasten, Haster, Hathar, Hathil, Haunt, Haunta, Havassa, Hawat, Hawkwind, Heast, Heatrix, Hectar, Hecton, Hector, Hedd, Heer, Heft, Hele, Helenia, Helm, Helring, Helskadi, Heme, Hengest, Henry, Hepac, Hepec, Heramon, Herekin, Herem, Heres, Hergrom, Heridd, Hermenze, Hermes, Hermuck, Herod, Heron, Herty, Herzog, Hestophes, Hezak, Hianor, Higra, Hildale, Hildandi, Hildar, Hile, Hileict, Hinate, Hinge, Hinon, Hirga, Hirn, Hisle, Hiterid, Hithies, Hitts, Hjollder, Hlok, Hoar, Hob, Hobben, Hodgenik, Hoekstra, Hoel, Hogon, Hogun, Hokora, Holferne, Holith, Hollian, Hollister, Holly, Holth, Hon, Honet, Hor-em-akhet, Horace, Horatio, Horben, Horik, Horium, Horner, Hornmar, Hornt, Horse, Hort, Hortalus, Horus, Hosage, Hotsprings, Hount, Hower, Howor, Howpe, Hrothgar, Hrugan, Huchaw, Huctute, Hugels, Huithnil, Hultor, Huner, Hunir, Hunko, Hunter, Huor, Hurn, Hurnt, Hustle, Hutant, Huyrn, Hycar, Hydale, Hydaspes, Hyksos, Hymir, Hynaril, Hyrim, Hyten, Hyza, Iambic, Ian, Iarmod, Iarri, Iason, Idaho, Iddec, Ided, Iden, Idene, Ididnet, Idin, Idint, Idle, Idon, Idona, Idric, Idris, Idun, Ieli, Ieserk, Igon, Igraine, Igs, Ihate, Ijunt, Ikar, Ikarus, Ike, Ikini, Ikko, Ikul, Ildwater, Ilene, Ilermath, Ilester, Ilgenar, Iliendor, Illearth, Illia, Illilorn, Illium, Ilron, Imberwick, Iminter, Imler, Imoiran, Indhios, Indra, Indrius, Infelice, Ingel, Ingle, Ingles, Inlan, Inlind, Insa, Inse, Inswich, Intejag, Inter, Iolder, Iona, Ionythe, Iosmut, Ipedorn, Ipsl, Ir, Irefist, Irekain, Ireland, Irin, Irk, Irnys, Iron, Ironbrand, Irone, Ironmage, Ironmark, Isaac, Isabeau, Iscon, Iseld, Isen, Isiah, Isil, Isma, Issalt, Ist, Itazais, Ithlot, Ithric, Itner, Ivan, Ivles, Iwell, Jabbert, Jace, Jacer, Jacha, Jacid, Jacinth, Jackson, Jad, Jada, Jade, Jain, Jakom, Jalil, James, Jamik, Jamina, Jamis, Jamril, Jandrel, Janlove, Janus, Januviel, Jarak, Jared, Jareth, Jargo, Jarlath, Jarriel, Jartin, Jashoone, Jason, Jasper, Jasyn, Jayco, Jayn, Jaython, Jazmine, Jean, Jeane, Jeast, Jedd, Jelgo, Jeliala, Jen, Jenan, Jenansfer, Jenethrim, Jennyve, Jesco, Jespar, Jesseman, Jessica, Jessika, Jester, Jethil, Jex, Jezzail, Jezzine, Jhan, Jib, Jibar, Jin, Jinter, Jinx, Jisma, Jizm, Jmais, Joan, Joast, Joel, Joeland, Joele, Joesai, John, Jok, Joly, Jon, Jorad, Joram, Jorden, Joriel, Jormunrek, Josc, Joseph, Josette, Josh, Jost, Joyseysta, Jshoone, Jude, Juel, Juit, Juktar, Julia, Juliam, Juliet, Julionne, Julthor, Jume, Jun, June, Junio, Junist, Junius, Junoi, Junper, Jurine, Jurn, Jusite, Justal, Justalyne, Jytia, Jzahlaren, Kael, Kafar, Kafsal, Kagya, Kaitch, Kakatal, Kal, Kala, Kalan, Kalantir, Kaldar, Kalieb, Kalili, Kalina, Kalvan, Kalyra, Kam, Kan, Kandur, Kantor, Kapat, Kaprin, Karas, Karden, Kareth, Karf, Kargo, Karis, Karissa, Karl, Kasey, Kassina, Katah, Kathathorn, Kathein, Katra, Katsu, Kavelin, Kax, Kayce, Kazuyo, Keal, Keenedge, Kekuda, Kellan, Keltan, Keltus, Keltz, Kemper, Kendos, Kenneldor, Kenobi, Kens, Keppa, Keran, Kerberos, Kerl, Kern, Kerrinen, Kesad, Kesmon, Kesrick, Kessius, Kethren, Kethtaz, Ketial, Ketinella, Ketlz, Kevvy, Kevward, Khaine, Khan, Khris, Khymir, Khystros, Kian, Kiaya, Kib, Kibber, Kibidon, Kiden, Kient, Kilayox, Kilbas, Kilburn, Kildarien, Kilia, Killrey, Kilmer, Kilyne, Kimdar, Kimura, Kines, King, Kingsliege, Kingurvind, Kinorn, Kins, Kinwerd, Kip, Kippe, Kirder, Kirik, Kiril, Kiringard, Kirk, Kirra, Kirsten, Kirstwig, Kirwendus, Kisha, Kisler, Kith, Kjarren, Klass, Klaus, Klean, Klemnor, Klerak, Klesteus, Kletus, Klion, Klore, Klose, Klothe, Knik, Knorthur, Knour, Kodof, Kokba, Kolaren, Kolmorn, Konil, Kontouche, Kor, Koral, Korba, Korell, Koreth, Korik, Kornag, Kothe, Kountra, Koutara, Koutra, Koydl, Kram, Krank, Krash, Krass, Kreed, Krekle, Kressara, Krile, Krim, Krinn, Krishnan, Krisiries, Kristhanna, Kristion, Kro, Krom, Kronos, Krush, Krywood, Kubkli, Kur, Kurr, Kuruk, Kuse, Kuvar, Kypros, Kyrad, Lackus, Lacspor, Laderic, Laela, Laelff, Laelia, Laelithra, Laelyre, Laenaya, Laertes, Lafornon, Lagor, Lahorn, Lain, Laissez-Faire, Laithi, Lajka, Laki, Lal, Lance, Lancelot, Lando, Landolfur, Landoris, Landrin, Laner, Lange, Lanissiel, Lanrthal, Lanthal, Laph, Laracal, Laren, Largo, Larina, Lark, Larson, Lasuni, Lath, Launt, Laured, Laurelin, Laurh, Lavell, Layne, Lazarak, Leach, Leagment, Lear, Lebran, Ledale, Lefreth, Left, Legolas, Leia, Leif, Leise, Leit, Lelani, Lena, Lenala, Lenas, Lenny, Leo, Leonard, Leonardo, Leonaro, Leonien, Leopopira, Lephar, Lephidiles, Lept, Lerin, Lesh, Lesphares, Letnerr, Leto, Letor, Leuke, Leuvdar, Levelys, Levvo, Lewinda, Leynar, Lhunig, Lib, Liban, Licinius, Lidorn, Liet, Lifity, Lile, Lily, Limner, Lin, Lingar, Linney, Linor, Linovahle, Linyah, Liphanes, Lisma, Lisp, Listor, Lithe, Lithuir, Litsa, Livic, Lizzie, Lloyanda, Lluara, Loath, Lob, Loban, Loerya, Loetter, Logang, Logius, Lohtur, Loine, Lokh, Lolinda, Lonavan, Longin, Longston, Lookfar, Loopzig, Lor, Loreena, Loric, Lorienith, Lorne, Losner, Lossar, Loth, Lothard, Louis, Lox, Lucan, Lucius, Lucky, Luctost, Ludokrin, Lug, Lugaid, Luke, Lull, Lumax, Lumbar, Lunetta, Luphildern, Lupin, Lurd, Luster, Luthe, Luther, Luxanustar, Luxor, Lycra, Lyle, Lylish, Lyna, Lynch, Lynd, Lyndi, Lyne, Lynessa, Lynnie, Maachal, Mabon, Macbeaust, MacBeth, Macci, MacDuff, Macer, Macon, Macsen, Madarlon, Maddox, Mades, Madhi, Madis, Madmartigan, Madonnla, Madric, Madsa, Madse, Madukes, Maelwys, Mafar, Magamp, Mage, Magius, Magkain, Maglos, Magni, Magnus, Magus, Magveil, Maidukes, Maildun, Maina, Malan, Malander, Malcuma, Malfar, Malistra, Malki, Malley, Malvin, Mandricardo, Mane, Mangarak, Mango, Mani, Manien, Mar, Maran, Marc, Marce, Marcelo, Marco, Marcus, Mardder, Marderdeen, Mardha, Mardin, Mareberth, Mareena, Marena, Margaret, Margo, Margolis, Margonn, Margott, Marid, Marien, Maries, Marik, Markahn, Markard, Markdoon, Marklin, Markos, Marli, Marmund, Marn, Marney, Marny, Marophon, Marr, Marsh, Marsidy, Marte, Marten, Martine, Marval, Marwenfyw, Masc, Mashasen, Mask, Mason, Matew, Mathar, Mathe, Mathr, Matthew, Maud-dib, Maugh, Maugrim, Maurain, Maurice, Maximillia, Maximillina, Maximus, Mayda, Mayga, Mayn, Mayre, Mazhel, Mcdonnega, Meadcraft, Mect, Medain, Medarin, Medel, Medhir, Medin, Medsa, Medua, Medwyn, Meegosh, Meets, Meg, Megelin, Mehande, Mehtyl, Meinne, Mekt, Melathor, Melatus, Meliel, Melisande, Mellamo, Mellind, Melman, Melvin, Meme, Memla, Memor, Mena, Mene, Menelaus, Menlaus, Mensa, Mentle, Menus, Meowol, Meragrand, Merdon, Meredigawn, Merg, Meri, Meridan, Meriel, Merkesh, Merlin, Merlinna, Merlon, Merrilee, Mery, Merythe, Mes-ard, Mesah, Mesech, Mesophan, Mesoton, Messa, Messchoro, Metellus, Metron, Metshanal, Meurig, Meursault, Mezo, Mhill, Mhoram, Mi-talrythin, Miattraddi, Michael, Micheal, Michelangl, Michelanglo, Mick, Mickal, Middibell, Midiga, Mielo, Migorn, Milander, Mildin, Miler, Millard, Milo, Mim, Mimir, Min, Mina, Mindukes, Mine-, Minga, Minge, Mingo, Mink, Minsk, Minx, Mip, Miphates, Mirayam, MireBane, Mirith, Miritna, Misary, Mishayla, Mist, Mistbow, Mistiss, Mistweave, Mitar, Mitch, Mitchh, Mithanica, Mitheor, Mithra, Modi, Modred, Modric, Modru, Modum, Mogologolo, Moira, Moiron, Mok, Mokanna, Molestorm, Moll-ar, Mollye, Molti, Momos, Monas, Moncaire, Moncy, Monga, Mongo, Montezuma, Mony, Moon, Moondancer, Moonfriend, Moonshadow, Moort, Moraine, Moranet, Moranielen, Morcant, Morchan, Morex, Morga, Morgain, Morgan, Morgur, Morie, Morin, Morril, Morth, Mote, Moushe, Moyann, Moyna, Mryddren, Muad-dib, Mual, Mudon, Mufar, Muhannad, Mujarin, Muluin, Mundelin, Mune, Munstar, Murgle, Murky, Murrin, Murtan, Murtle, Musaeus, Musky, Mustle, Musty, Mutle, Mylene, Mylo, Myonra, Myrddin, Myrshad, Mythik, Mythil, Myvar, Nacer, Nachaloa, Nacle, Nadeer, Nader, Naeem, Nafrat, Nagic, Nakkarra, Nalfar, Namorn, Nana, Nancy, Nannor, Naphates, Napoleon, Naria, Narisa, Narok, Narthlis, Nassic, Nate, Nato, Naul, Naw, Neal, Nebuchadnezzar, Necari, Necur, Nefarus, Neff, Neivel, Nelenna, Neowyld, Neral, Nero, Nerth, Nerthus, Nestle, Neth, Netherman, Nette, Nettina, Netzigon, Nevard, Nevarious, Nichelle, Nick, Nidale, Niefred, Nife, Nigel, Night, Nightstalker, Nikki, Nikoli, Nikpal, Nikrolin, Niktohal, Nile, Nilnot, Nilyn, Nimaminanon, Nimbara, Nimlad, Nimue, Niraya, Niro, Nismen, Nizra, Nobath, Nockmaar, Noford, Nogen, Noke, Nolan, Nolo, Nome, Noname, Nony, Noos, Nophalis, Nordri, Nore, Norse, Norv, Norvi, Noss, Nota, Nothar, Notlbrob, Notty, Nuckle, Nucky, Nuky, Nunoo-Quarcoo, Nura, Nuria, Nuthor, Nutsy, Nuwolf, Nydale, Nym, Nymira, Nyota, Nyrlol, Nysty, Nythil, O-Bryon, Ocarin, Occelot, Occhi, Ochala, Odana, Odaren, Odeir, Oden, Odoacer, Odona, Odyaseus, Odyss, Oele, Oelita, Ofeva, Ofton, Og, Ogardus, Ogen, Ogien, Ogrus, Ogyvan, Ohethlic, Oil, Oilli, Okar, Oke, Okle, Olath, Olaxtin, Olen, Olgen, Oliat, Olidi, Olissa, Olivia, Olix, Olomorn, Olotin, Olsa, Omaniron, Omarn, Omournil, Omsell, Onathe, Onbrawst, Ondola, Onnan, Onrine, Onulion, Onyx, Oolndiana, Opal, Ophelia, Ophra, Opimius, Opshun, Optima, Orabias, Oran, Oranius, Orard, Orbal, Orbin, Ord, Ordelle, Ordred, Org, Orgalan, Orgen, Orgorgan, Orin, Orion, Orken, Orlina, Orloft, Orm, Ormay, Ormiss, Orms, Oron, Orsay, Orsen, Ort, Ortho, Orton, Orwyne, Osen, Oshawal, Osondrea, Ospar, Osprey, Osten, Otaiy, Othelen, Othkar, Otho, Othran, Otlen, Otsuka, Otto, Ottobien, Ount, Ovel, Owain, Owin, Oxbaren, Ozorak, O-tho, Pack, Padan, Padishah, Padrias, Padricus, Padys, Paeld, Pagetti, Palid, Pallantides, Paloadrin, Palomides, Palus, Papur, Parale, Parch, Pardor, Parele, Parellus, Parse, Parser, Parthinia, Pascent, Pascheine, Patch, Path, Pathcines, Patnas, Patnos, Patrel, Patter, Paul, Pearl, Peash, Pedro, Peener, Peeple, Peetrie, Pefergg, Peirce, Peitar, Pela, Pellar, Pelles, Pelops, Pelphides, Pelthros, Pemba, Pender, Pendragon, Pendus, Pengarth, Pensif, Pepin, Pepita, Pepsi, Peramee, Perder, Peredon, Peregrin, Pereta, Pereth, Perith, Peri-el, Perle, Perol, Peronn, Peter, Pethcines, Pethros, Pethsine, Petita, Petrad, Petroman, Petter, Phairdon, Phames, Phara, Phardir, Pharysene, Pheblon, Phemedes, Phen, Phendin, Phera, Phexides, Phife, Philadona, Philth, Phira, Phlith, Phlunk, Phoenix, Phornel, Picard, Picceppa, Picon, Pictal, Picti, Picumar, Pidla, Piedad, Pietten, Pigly, Pildoor, Pildor, Pilo, Pilon, Pine, Pip, Pippin, Pirouetta, Pitchblend, Pitchblende, Piter, Pixdale, Plaiglos, Pochos, Pock, Pod, Pogenthoni, Polonius, Polor, Polson, Ponile, Ponith, Poran, Porchos, Porib, Porix, Portan, Portolis, Poscidion, Postolis, Poyna, Prageur, Prageus, Prak, Prataxis, Praxiteles, Prayad, Pren, Pridgit, Prinice, Prisane, Pristess, Pronos, Prothal, Prothalon, Proxar, Prunt, Prush, Pryderi, Prysala, Prytani, Ptosphes, Puck, Puhl, Pulsur, Punit, Punk, Puno, Purple, Puthor, Pwyll, Pyder, Pythagoras, Pythe, Pytrigon, Qadir, Qaiyum, Qatar, Qeisan, Qeylargo, Qidan, Quaan, Quadran, Quana, Quanan, Quasee, Quernister, Quezo, Quiad, Quickens, Quickfoot, Quickhand, Quid, Quidia, Quihanna, Quike, Quillan, Quine, Quinn, Quintilius, Quintus, Quirrel, Quiss, Quix, Qunlac, Quolamin, Qupar, Qurak, Qwaylar, Qwine, Qysan, Q-ara, Q-pala, Racer, Rach, Rachel, Radag-mal, Radcliff, Radridge, Rael, Ragar, Rager, Ragnarson, Ragon, Ragons, Rahasli, Rak, Rakash, Ralegeal, Ralibe, Ramen, Ramous, Ramrod, Ranabas, Rand, Randar, Randolf, Random, Ranem, Ranon, Ransisc, Ransus, Raphael, Rarson, Rason, Rasputin, Rastolnik, Rath, Rathia, Rathisa, Raus, Rave, Raven-sBow, Ravenkin, Ravenor, Raver, Ravisher, Raysdan, Rayth, Raziel, Razzia, Razzo, Reaper, Reave, Reaver, Recom, Recoun, Recy, Red, Redknob, Redthorn, Redwine, Redynvar, Reevur, Reggian, Regin, Regnar, Rehhaile, Reisoun, Relkinthrin, Relo, Relos, Rematus, Rembas, Rentham, Resboron, Reskind, Ressa, Ret, Reth, Rethik, Rever, Rex, Rexor, Reynar, Rhain, Rhithik, Rhithin, Rhonwyn, Rhoson, Rhuna, Rhyanon, Rhys, Rhysling, Riamon, Riandur, Riatha, Richard, Rickhir, Rida, Ridley, Rifkind, Riger, Righe, Rigol, Rikar, RikkiTikkiTavi, Ril, Rilia, Rille, Rima, Rime, Rines, Ringwood, Rinim, Rint, Ripentide, Rismak, Riss, Riter, Rith, Ritic, Riva, Rivatha, River, Riverfield, Riverwind, Rivex, Rizwan, Robag, Robeel, Robin, Rocner, Rod, Roderik, Roge, Rogeir, Rogis, Rogist, Rogoth, Rogur, Rogus, Rohannah, Roker, Roland, Role, Rolf, Rolfur, Rolo, Rombonolw, Romeo, Ronetan, Rooka, Rophan, Roseate, Rosemude, Rosh, Rosindo, Rosobal, Rossak, Rost, Roster, Roth, Rotner, Rout, Ruamaryn, Ruatomin, Rubi, Ruby, Ruchlight, Rudy, Rue, Ruein, Ruel, Rufus, Ruger, Ruinar, Rulrindale, Ruly, Runnik, Rupen, Rupprecht, Rusch, Ruse, Rushlight, Russ, Rustah, Rustion, Rustle, Rutabega, Ruth, Ruthir, Rutilus, Ruvius, Rydan, Ryfar, Ryiah, Rylla, Ryodan, Rysdan, Rythen, Rythern, Sabal, Saberg, Sabo, Sacer, Sadareen, Sadus, Saeg, Safilix, Saft, Saka, Sake, Saker, Salach, Salexor, Salie, Salor, Samairnel, Sames, Samir, Samira, Sammir, Samon, Samot, Samson, Samuel, Samwise, Samyad, Sanala, Sandwave, Saneto, Sanger, Sanin, Saranie, Sargo, Sargonus, Saril, Sarma, Sarmacid, Sarme, Sarna, Sarrask, Sarthgine, Sasic, Sataura, Sathe, Satian, Satica, Saturn, Sawen, Sayed, Sayeesa, Sayst, Scelinn, Sciotus, Scius, Scoth, Screva, Scrole, Scronna, Scrooge, Scrounge, Scry, Scythe, Scythia, Seadreamer, Seafoam, Seaford, Seaftink, Sealanna, Sean, Seared, Seberg, Secor, Secrean, Sed, Sedar, Seetia, Sefe, Seg, Segrim, Segwilma, Seig, Seiont, Seithenin, Seka, Seke, Selenia, Sellen, Semaphone, Semuta, Senick, Senira, Sennetta, Sensai, Sensei, Senson, Senthyril, Senwen, Sepek, Sepherene, Seporic, Serane, Sere, Sergius, Serin, Serma, Sermak, Serrma, Seryth, Sesai, Sesklos, Sesmidat, Seth, Sethron, Setlo, Settlesand, Sevestra, Sevinhand, Sezer, Shabel, Shade, Shado, Shadow, Shadowbane, Shakespear, Shakespeare, Shalpan, Shamir, Shane, Shanna, Shantra, Shard, Shardo, Sharra, Shatra, Shauksten, Shaya, Shayera, Sheem, Sheena, Sheera, Shelvestra, Shetra, Shetre, Shevynn, Shillana, Shillen, Shire, Shnorr, Shodowwind, Shorn, Shrew, Shull, Shyle, Shylock, Sid, Sidara, Sidathe, Sig, Sigel, Siglaf, Siglin, Siguruk, Sigyn, Sil-forrin, Silco, Sildo, Silienori, Silius, Sill, Sillius, Silne, Silpal, Silver, Silverleaf, Silveron, Silvertail, Silverwind, Silvyre, Simmont, Simon, Simpriss, Sina, Sine, Singh, Sinks, Sipher, Sirat, Sirio, Sirma, Sirme, Sithik, Skadi, Skelbanda, Skit, Skobo, Skrymir, Skylark, Skywalker, Slamder, Slath, Sleeth, Slen, Slender, Slevon, Slill, Sloisa, Slorica, Smog, Smoglswane, Smoke, Snadrider, Snellia, Soderman, Sog, Soka, Sola, Solar, Solaris, Soliel, Solisa, Solita, Solo, Solomon, Solon, Solton, Soncern, Soor, Soranal, Sorayya, Sorch, Soren, Soret, Soreth, Sorod, Soron, Sorsha, Sotha, Sothale, Souce, Soulshaper, Soure, Sourte, Sout, Sparrow, Sparrowhawk, Spask, Spazm, Spede, Spitel, Spoc, Sretalles, Srodki, Staban, Stadegrio, Stadlaer, Stagger, Staggner, Staler, Stane, Staph, Star, Stara, Starr, Stasheff, Statilius, Staver, Stayn, Steadmen, Steel, Steinngium, Stel, Stell, Stella, Stellar, Stentz, Stenwulf, Stephen, Stera, Steven, Stiff, Stil, Still, Stonehand, Stonne, Stormbringer, Strean, Strolan, Strongarm, Strus, Studd, Stump, Sturm, Stylie, Styrix, Sudri, Suktor, Sulanie, Sulcar, Summai, Summas, Sumon, Sunberry, Sunder, Sunete, Sunfall, Sunfire, Sungaze, Sunshadow, Surtur, Suskin, Suth, Sutha, Suther, Sutlin, Suzana, Swaedan, Sweetwood, Sword, Swust, Syknernen, Syndarra, Synestra, Synina, Syr, Syth, Sythini, Sythril, Szene, Tabika, Tabithi, Tacer, Tad, Taddi, Taerhael, Tagram, Tahir, Tail, Tajule, Talarin, Talat, Talberon, Talbot, Talea, Taleen, Talen, Taley, Talgoid, Taliesin, Tall, Tallax, Tallisan, Taltre, Tamarantha, Tamare, Tamerlane, Tamtha, Tan, Tand, Tansley, Tapran, Tare, Targo, Tark, Tarl, Taro, Tasdar, Tasden, Tasmya, Tasus, Tatoria, Tatsu, Taubir, Tawfik, Taz, Tazoe, Teadd, Teh-bor, Teirn, Teka, Teksin, Tekyla, Telefe, Tellus, Telpur, Telsin, Temil, Temilfist, Tempist, Tenebrig, Tensring, Tenzil, Tepena, Tera, Terass, Tereccler, Teresse, Terrel, Teslanar, Tespar, Tessino, Tethra, Tethran, Tewdig, Teyrida, Thaddefert, Thaikir, Thaleen, Thalen, Thar, Thare, Tharn, Tharthar, Thaxter, Thelinde, Therad, Theresa, Therr, Thew, Thiazi, Thiltran, Thina, Thirle, Thog, Thoinen, Tholan, Thomas, Thomin, Thorin, Thorn, Thorus, Thothet, Threndorle, Threndorler, Throdi, Throll, Thron, Thufir, Thunderstroke, Thurgudmen, Thurin, Thurny, Thymas, Tia, Tiang, Tiaz, Tibber, Tibers, Tiberus, Tibolt, Ticharol, Tigranes, Tika, Tiler, Tillaron, Tilner, Tinaeus, Tinus, Tir, Tirian, Tiro, Tisiphone, Titan, Tithan, Titian, Titius, Titus, Tobale, Tobin, Tohrm, Tola, Tolde, Tolen, Tolf, Tolida, Tolle, Tolsar, Tolsen, Tol, Solie, Toma, Tomal, Tomas, Tomodrin, Tondril, Tongue, Tonica, Topah, Tor, Tora, Torfire, Tori, Torial, Toringad, Torinko, Torrelloc, Tortha, Toth, Totha, Tothale, Toto, Tottra, Touret, Tousba, Towerlock, Toyna, Toza, Tract, Trajan, Trake, Tralen, Tralinth, Tram, Tranl, Tranorr, Trapster, Tras, Traven, Treamuel, Trece, Trede, Tree, Treka, Trelane, Trele, Trell, Tremec, Trent, Treon, Tressa, Trever, Trevor, Trewlayne, Trey, Tricus, Trill, Tringoll, Trinsa, Triock, Trion, Triscuit, Trish, Troilus, Tronos, Tror, Trotwood, Troy, Trumper, Trus, Tryane, Tuck, Tudus, Tuek, Tuk, Tull, Tullaris, Tupaji, Turk, Turle, Turzig, Tuscanar, Tusdar, Tussah, Tuvor, Twilight, Two, TwoDawns, Twyla, Tybressa, Tyburn, Tycane, Tyd, Tyden, Tyell, Tyjen, Tyl, Tyldoran, Tyne, Tysinni, Ubaydah, Ubriks, Uerthe, Uevarius, Ugmar, Uhara, Uhrd, Uisna, Ulfang, Ullie, Ullist, Ulowadjaa, Ulror, Ulysses, Unarath, Undaria, Undin, Unduma, Uneste, Ungard, Ungon, Untall, Unteel, Unwulf, Unysis, Updar, Uranus, Urcit, Urda, Urdrasil, Uri, Urixen, Urk, Usara, Useli, Usking, Usnar, Ussesa, Ussiun, Uther, Vaccon, Vacone, Vaginamite, Vagor, Vagot, Valacar, Valda, Vale, Valek, Valekka, Valezka, Vali, Valistor, Valkeri, Vall, Valli, Vallie, Valon, Valor, Valynard, Vanidor, Vanil, Vannen, Varag, Vargo, Varion, Varken, Varota, Varron, Varth, Varus, Vasud, Vatch, Vectomon, Veldahar, Venessa, Verdandi, Verdanez, Vergil, Veseere, Vesend, Vespar, Vethelot, Vettius, Vevar, Vicari, Vicenzi, Victamorel, Victor, Victory, Vider, Vidron, Vidykal, Vigoth, Viki, Vikos, Vilan, Vildar, Vina, Vinald, Vinkolt, Virde, Vlad, Vladamere, Vohnkar, Voladea, Voltain, Volux, Vopnir, Vortigern, Voudim, Vrisa, Vroomfondle, Vulpen, Vurner, Vyblos, Vyehntyir, Vysarane, Vythethi, Vythica, Wade, Waeron, Wagen, Wailan, Waistere, Wak-dern, Waldan, Walena, Walkar, Walker, Walman, Walnan, Walter, Wanar, Wandagwen, Wandatranna, Wanera, Wargo, Warmage, Warne, Warwick, Waste, Wastik, Wavenhair, Wavenhait, Wayfinder, Wayland, Waynock, Weace, Weara, Weaver, Weddington, Wekmar, Weldig, Welisarne, Wellath, Wellisa, Werni, Werre, Werymn, Weshin, Wesolyne, Westri, Wham, Whane, Whitefall, Whitewell, Whithri, Whitlock, Whorl, Wieth, Wikas, Wilbeth, Wildwood, Will, Willa, Willen, Willenhir, Willi, William, Willican, Willow, Wilmoor, Wilner, Wilrow, Wilster, Wilte, Wiltmar, Wilton, Wimkin, Wimnig, Winding, Windwalker, Windweave, Windwhisper, Winewood, Winius, Wird, Wisdum, Wishane, Wisp, Witfar, Withion, Witmor, Witner, Witworld, Wocca, Wode, Wolfe, Wolfgang, Wolk, Womal, Wonder, Wonderer, Wone, Wonya, Wood-leg, Wooll, Woon, Worf, Wotan, Wrall, Wrathran, Wraythe, Wrothag, Wulf, Wulfgrim, Wuthmon, Wyder, Wyeta, Wyeth, Wylf, Wymmar, Wymmer, Wynnde, Wyrd, Wyrde, Wyvorn, Xander, Xandie, Xandrog, Xanice, Xannas, Xanril, Xanry, Xaviar, Xavier, Xealen, Xenil, Xercon, Xex, Xithyl, Xo, Xocholactl, Xorn, Xuio, Xylana, Xylano, Yabaro, Yali, Yanan, Yaz, Yellowleaf, Yepal, Yesirn, Yeurquin, Ygerna, Yilvoxe, Ymma, Ynnd-r, Yoda, Yolanda, Yolenid, Yorrek, Ysane, Yssik, Yssith, Yve, Yviene, Yvonnette, Yysara, Yareth, Zackma, Zak, Zakarn, Zalyz, Zana, Zandinell, Zanfalcon, Zanice, Zannan, Zantiln, Zar, Zathe, Zeax, Zecane, Zecele, Zeke, Zenden, Zenobia, Zensunni, Zephale, Zepher, Zephere, Zere, Zerin, Zerma, Zessfar, Zestia, Zidar, Zigmal, Zile, Zilka, Zilocke, Zim, Zio, Zir, Ziva, Zixil, Zoe, Zonya, Zorie, Zoru, Zotar, Zoura, Zrye, Zubanquer, Zulekia, Zutar, Zymos, Zyneste, Zynoa, Zyten");

// Got these results form the REST API:
// http://fumbbl.com/xml:roster?id=[40+]

function isAmazonTeam() { // team id: 41
	//var linewomanIdInRoster = 2625;
	var linewomanIdInRoster = 2812;
	return checkIfRosterHasPositionalWithId(linewomanIdInRoster);
}

function isChaosTeam() {
	var chaosWarriorIdInRoster = 2629;
	return checkIfRosterHasPositionalWithId(chaosWarriorIdInRoster);
}

function isChaosDwarfTeam() {
	var hobgoblinIdInRoster = 2634;
	return checkIfRosterHasPositionalWithId(hobgoblinIdInRoster);
}

function isChaosPactTeam() {
	var maruderIdInRoster = 2750;
	return checkIfRosterHasPositionalWithId(maruderIdInRoster);
}

function isDarkElfTeam() {
	var linemanIdInRoster = 2639;
	return checkIfRosterHasPositionalWithId(linemanIdInRoster);
}

function isDwarfTeam() {
	var longbeardIdInRoster = 2643;
	return checkIfRosterHasPositionalWithId(longbeardIdInRoster);
}

function isElfTeam() {
	var linemanIdInRoster = 2707;
	return checkIfRosterHasPositionalWithId(linemanIdInRoster);
}

function isGoblinTeam() {
	var goblinIdInRoster = 2648;
	return checkIfRosterHasPositionalWithId(goblinIdInRoster);
}

function isHalflingTeam() {
	var halflingIdInRoster = 2651;
	return checkIfRosterHasPositionalWithId(halflingIdInRoster);
}

function isHighElfTeam() {
	var linemanIdInRoster = 2654;
	return checkIfRosterHasPositionalWithId(linemanIdInRoster);
}

function isHumanTeam() {
	var linemanIdInRoster = 2658;
	return checkIfRosterHasPositionalWithId(linemanIdInRoster);
}

function isKhemriTeam() {
	var skeletonIdInRoster = 2693;
	return checkIfRosterHasPositionalWithId(skeletonIdInRoster);
}

function isLizardmenTeam() {
	var skinkIdInRoster = 2663;
	return checkIfRosterHasPositionalWithId(skinkIdInRoster);
}

function isNecromanticTeam() {
	var fleshGolemIdInRoster = 2702;
	return checkIfRosterHasPositionalWithId(fleshGolemIdInRoster);
}

function isNorseTeam() {
	var linemanIdInRoster = 2666;
	return checkIfRosterHasPositionalWithId(linemanIdInRoster);
}

function isNurgleTeam() {
	var rotterIdInRoster = 2697;
	return checkIfRosterHasPositionalWithId(rotterIdInRoster);
}

function isOgreTeam() {
	var snotlingIdInRoster = 2914;
	return checkIfRosterHasPositionalWithId(snotlingIdInRoster);
}

function isOrcTeam() {
	var trollIdInOrcRoster = 2921;
	return checkIfRosterHasPositionalWithId(trollIdInOrcRoster);
}

function isSkavenTeam() {
	var linemanIdInRoster = 2679;
	return checkIfRosterHasPositionalWithId(linemanIdInRoster);
}

function isSlannTeam() {
	var linemanIdInRoster = 2993;
	return checkIfRosterHasPositionalWithId(linemanIdInRoster);
}

function isUndeadTeam() {
	var sleketonIdInRoster = 2684;
	return checkIfRosterHasPositionalWithId(sleketonIdInRoster);
}

function isUnderworldTeam() {
	var goblinIdInRoster = 2997;
	return checkIfRosterHasPositionalWithId(goblinIdInRoster);
}

function isWoodElfTeam() {
	var linemanIdInRoster = 2689;
	return checkIfRosterHasPositionalWithId(linemanIdInRoster);
}

function isVampireTeam() {
	var vampireLordIdInRoster = 2699;
	return checkIfRosterHasPositionalWithId(vampireLordIdInRoster);
}

var eatingStyles = toArray("chewer, eater, gor, slayer, smasher, claw, fury, tooth, burner, pillager, pox, seer, fever, thul, turd, trapper, deathbringer, smasha, fella, arm, dawner, breaker, mauler, devourer, belly, bleeder, brother, thar, basher, stealer, slaver, maimer, hunter, flamer, tyrant, chopper, burster");

// Source: http://www.chronofus.net/wargames/amazon/names.htm
function generateAmazonName() {
	var zonNames = toArray("Aella, Ainia, Ainippe, Alcibie, Alcinoe, Alcippe, Alkaia, Amynome, Andromache, Antiope, Anaea, Anaxilea, Androdameia, Andromache, Andromeda, Antandre, Antianara, Antianeira, Antibrote, Antimache, Antimachos, Antiope, Antiopeia, Areto, Areximacha, Aristomache, Asteria, Bremusa, Celaneo, Clete, Clyemne, Deianeira, Deinomache, Derimacheia, Derinoe, Doris, Echephyle, Eriobea, Eumache, Eurybe, Euryleia, Harmothoe, Hippolyte, Hippomache, Hippothoe, Hypsipyle, Iphito, Kleoptoleme, Kreousa, Kydoime, Laodoke, Lykopis, Lysippe, Marpe, Marpesia, Melanippe, Melousa, Mimnousa, Molpadia, Okyale, Okypous, Oreithyia, Pantariste, Penthesilea, Philippis, Phoebe, Pisto, Polemusa, Prothoe, Pyrgomache, Radigund, Scyleia, Tecmessa, Teisipyte, Telepyleia, Thalestris, Thermodosa, Thraso, Tomyris, Toxaris, Toxis, Toxophile, Valasca, Xanthippe, Admete, Aerope, Aethra, Agave, Alcestis, Alcimede, Alcmene, Althaea, Amata, Anteia, Anticleia, Antigone, Arachne, Arete, Arethusa, Ariadne, Astyocheia, Atalanta, Berenice, Beroe, Brises, Calliope, Callisto, Cassandra, Cassiopeia, Chryseis, Clymene, Clytaemnestra, Clytie, Coronis, Creusa, Cynthia, Danae, Daphne, Deianeira, Deipyle, Dia, Dido, Dryope, Dymas, Electra, Euryclea, Eurydice, Glauce, Halcyone, Hecabe, Helen, Helle, Hero, Hesione, Hippodameia, Hypermnestra, Ino, Io, Iole, Iphigenia, Ismene, Jocasta, Laodameia, Ledae, Marpessa, Medea, Nausicaa, Oenone, Omphale, Orithyia, Pandora, Pasiphae, Penelope, Phaedra, Philonoe, Polyxena, Procris, Proetus, Psyche, Pyrrha, Rhene, Sibyl, Theophane, Thetis, Thisbe, Tiresias, Aethelflaed, Alftruda, Alice, Anna, Argante, Aude, Beatrice, Bertha, Biargey, Boudica, Brigit, Cartimandua, Cathleen, Christine, Dechtire, Elaine, Eleanor, Elena/Elena, Elfleda, Elsa, Enid, Fausta, Fedelm, Fikenhild, Godhild, Godiva, Goldborough, Guinevere, Gytha, Helena, Helwise, Hildeburh, Hygd, Igraine, Isabel, Isolde/Iseult, Jeanne, Lendabair, Leve, Mairi, Marie, Marion, Matilda, Meave, Medb, Morgan/a, Morgause, Nimue, Oona, Penelope, Rhymenhild, Sigrid, Swanborow, Thordis, Vivianne, Wealhtheow, Aideen, Aifa, Aine, Aoife, Arianrod, Banba, Bave, Bebo, Birog, Blai, Blanid, Blodeuwedd, Branwen, Caer, Ceridwen, Cleena, Condwiramur, Creudylad, Dalny, Dana, Dectera, Deirdre, Deoca, Emer, Eri, Eriu, Etain, Etar, Ethlinn, Ethnea, Fand, Fedelma, Fial, Finchoom, Findabair, Fionuala, Fohla, Fuamnach, Goewin, Goleuddydd, Grania, Keva, Kicva, Kymideu, Levarcam, Luned, Macha, Maev, Maga, Messbauchalla, Moriath, Murna, Nessa, Aahames, Ahura, Anthat, Apet, Aso, Banth-Anth, Bent-Reshy, Hatibi, Hatme'hit, Hatshepsut, Hekt, Khnem-nefert, Mah-I-tou'as-khit, Mat-ka-re, Natch-ura, Nef-er'et, Acilia, Acte, Aelia, Aemilia, Agrippina, Albucilla, Annia, Antistia, Antonia, Apicata, Apronia, Arria, Atia, Augusta, Caedicia, Calpurnia, Camilla, Claudia, Claudilla, Cleopatra, Cornelia, Diana, Domitia, Drusilla, Ennia, Epicharis, Galla, Ilia, Julia, Junia, Lara, Lavinia, Lepida, Livilla, Livia, Lollia, Marcella, Marcia, Megara, Messalina, Metaneira, Mutilia, Nephele, Numantina, Octavia, Paetina, Paulina, Paxaea, Plancina, Pollitta, Poppaea, Prisca, Pulchra, Sabina, Servilia, Sextia, Silano, Silvia, Sosia, Tuccia, Urgulania, Vibidia, Vipsania, Vitellia, Zenobia, Aesa, Aino, Aldis, Alfdis, Alfeid, Alfhild, Alof, Alvit, Angrboda, Arngunn, Arnkatla, Arnora, Asa, Asdis, Asgard, Aslaug, Asleif, Asny, Asta, Astrid, Asvor, Aud, Audbjorg, Audhild, Audumla, Bera, Bergljot, Bergthora, Bestla, Beyla, Bjartney, Bjorg, Bodvild, Borghild, Borgny, Bothild, Brynhild, Dalla, Botta, Edda, Elli, Ermingard, Erna, Freydis, Fricka, Frida, Fridgerd, Geirlaug, Gerd, Gjalp, Gjaflaug, Glaumvor, Gorm, Greip, Greygerd, Grid, Grimhild, Groa, Grelod, Grima, Grimhild, Groa, Gudbjorg, Gudfinna, Gudrid, Gudrun, Gunnhild, Gunnlod, Gyda, Gyrd, Halla, Hallbera, Hallberta, Halldis, Halldora, Hallfrid, Hallgerd, Hallgrim, Hallkatla, Hallveig, Helga, Herbjorg, Herdis, Hervor, Hild, Hildigunn, Hildirid, Hlif, Hrafnhild, Hrefna, Hrodny, Hungerd, Hyndla, Hyrrokin, Ina, Ingebjorg, Ingigerd, Ingunn, Isgerd, Jaddvor, Jarnsaxxa, Jodis, Jofrid, Joereid, Jorunn, Kara, Kostbera, Kreimhild, Laufey, Lifthrasir, Ljufa, Luta, Kadlin, Menglad, Modgud, Moeid, Mothir, Nidbjorg, Oddbjorg, Oddny, Oddrun, Olof, Olrun, Ormhild, Osk, Ottkatla, Rafarta, Ragna, Ragneid, Ragnhild, Rannveig, Reginleif, Rind, Roskva, Saereid, Saeunn, Salbjorg, Sieglinde, Sigfrida, Signy, Sigrid, Sigrun, Sinrjod, Skadi, Solveig, Solvor, Steinunn, Steinvor, Svanlaug, Svava, Swanhild, Thjodhild, Thora, Thorbjorg, Thordis, Thorelf, Thorgerd, Thorgunna, Thorhalla, Thorhild, Thorkatla, Thorlaug, Thorljot, Thorunn, Thorve, Thorvor, Thraslaug, Thrud, Thurid, Ulfheid, Una, Unn, Valborg, Vandrad, Valgerd, Vigdis, Yngvild, Yri, Yrsa");	

	return randomArrayElement(zonNames) + " " + randomArrayElement(names);
}

// Source: http://www.chaos-dwarfs.com/wiki/index.php?title=Chaos_Dwarf_Names
function generateChaosDwarfName() {
	var cdNames = toArray("Doomaxe, the Dreaded, Drum, Drone Ulsen, the Foaming, Mad Furrikson, Khazek, Doomlord Mad Mark, Trollbiter, Napper, Grundrin, Pulper, Spikehead, The Master, of Madness, Antor, Axebreath, Axehead, One-Eye, Azakil, Bonecruncher, Badbreath, Blackbeard, Baldrick, Backbreaker, Barin, Aardnose, Barin, Spikehead, Belakhost, Deathbringer, Carazad, Spiketail, Dourgrim, Duniun, Dust-tooth, Durgal, Deathdealer, Ekalim, The Mad, Finehorn, Deathscream, Furgul, Thunderfoot, Geggus, Boltwanger, Grimdur, Gutwrencher, Growler, Beardhead, Hairy, Hengist, Horse-eater, Hardgrab, Hammerhand, Jabbertooth, Eyesplinter, Jezreel, Ironhand, Kaaos, Armahand, Khardang, Bloodsucker, Kirgund, Widowmaker, Lufin, Bristlebeard, Mainliner, Deathswipe, Naurthang, Blacksoul, Ori, Pointed-beard, Origol, The Horrible, Pig Splatter, Radblast, The Reaver, Rainhard, Stump, Scarsol, Smashskull, Sithan, Sharpsword, Slayer, Maskface, Spikes, Harveywotan, Squarehammer, One-Eye, Status, Wastedhead, Stunty, Sven, Targ, Toothface, Telegrim, Flamebeard, Thrakbal, Skullcrusher, Ulfo, Bloodmask, Zelazad, Hornhead, Thymbrin, Snakebeard, Astragoth, Zhatan, the Black, Commander of Zharr, Ghorth, the Cruel, Anurell, Lord Bzaark, Zhrazak, Bultar, Slavemaster, Varzhnak, The Black, Barukh, the Champion, Rykarth, the Unbreakable, Hthark, the Unstoppable, Zzharg, Madeye, Zharr, Naggrund, Ziggurrat, Scarfaced, Scavengers, Halgir, Ashbrewer, Mordian, Slagfest, Vikram, Flametongue, Gakroth, Zhorgrath, Zygrad, Baron, Brightgore, Od, Blackfang, Vile, Slitbone, Dut, Doomaxe, Angror, Gruil, Swiftfoot, Spinetoe, Ogi, Darktooth, Voxin, Gashgrut, Sureye, Kroenail, Gorduz, Backstabber, Ghazak, Khan, the, Terror of the East, Oglah, Khan, Tarka, Gorduz, Glashruk, Grashnak, Sneekit, Skurfrik, Stone-Sucker, Rashnak, Backstabber, Brodai, Choknech, Morcar, Khan, Shoresh, Zhorag");

	return randomArrayElement(names) + " " + randomArrayElements(cdNames);

}

function generateChaosPactName() {
	var alternatives = [generateChaosName, generateDarkElfName, generateGoblinName, generateSkavenName];
	return randomElementOf(alternatives)();
}

// Source: http://www.seventhsanctum.com/generate.php?Genname=darkelfnamer
function generateDarkElfName() {
	var durchiiNames = toArray("Binalais, Borel, Byloraas, Dorha, Enehiduz, Eviod, Idemo, Idobir, Idxek, Iredod, Izerin, Kirta, Lihod, Naronuab, Niril, Noreniol, Oreky, Oriratu, Otiraroc, Rabaniak, Riden, Terurtob, Uranetar, Vise, Zirykram, Arkit, Atova, Cusvu, Didri, Edonaki, Etaoc, Etina, Ibaad, Icbav, Ireforer, Loris, Muhydac, Naneb, Neratom, Odeda, Ohciz, Oriid, Radet, Suha, Taranef, Tytozkar, Ulbic, Umaban, Umakino, Yiduseid, Ahdar, Akitamal, Anrad, Cale, Darazet, Ekilanuk, Ekysodo, Hyxir, Idarikal, Irareyi, Izren, Leredzar, Nahirvon, Relerar, Rini, Rokaxnax, Ruvixad, Sadofise, Uhanuza, Uloret, Uraot, Yudne, Zavro, Zeravin, Zirumoir, Acute, Adaca, Adera, Anyol, Atamu, Atarebe, Atleh, Danu, Dinko, Dirle, Emasa, Eryis, Exoic, Hebeliih, Kite, Oller, Oniar, Otarebod, Otybura, Ranovaoh, Rirel, Risar, Urfer, Vacirlur, Zorre")
	
	return randomArrayElement(names) + " " + randomArrayElement(durchiiNames);
}

// Source: http://www.uesp.net/wiki/Lore:Orc_Names
function generateOrcName() {
	var orcNames =
		toArray("Atulg, Azuk, Bagamul, Bakh, Baronk, Bashag, Bazgulub, Bogakh, Bologra, Borug, Both, Bugdul, Bugharz, Bugrash, Bugrol, Bumbub, Burul, Dul, Dular, Duluk, Duma, Dumbuk, Dumburz, Dur, Durbul, Durgash, Durz, Durzol, Durzub, Durzum, Garothmuk, Garzonk, Gashna, Ghamborz, Ghamonk, Ghoragdush, Ghorlorz, Glush, Grat, Gruzgob, Guarg, Gurak, Khadba, Khagra, Khargol, Koffutto, Largakh, Lorbumol, Lorzub, Lugdum, Lugrub, Lurog, Mash, Matuk, Mauhul, Mazorn, Mol, Morbash, Mug, Mugdul, Muk, Murag, Murkub, Murzol, Muzgonk, Nag, Nar, Nash, Ogrul, Ogrumbu, Olfin, Olumba, Orakh, Rogdul, Shakh, Shamar, Shamob, Shargam, Sharkub, Shat, Shazgob, Shulong, Shura, Shurkul, Shuzug, Snaglak, Snakha, Snat, Ugdumph, Ughash, Ulam, Umug, Uram, Urim, Urul, Urzog, Ushamph, Ushat, Yadba, Yagak, Yak, Yam, Yambagorn, Yambul, Yargol, Yashnarz, Yatur, Agronak, Bat, Bazur, Brugo, Bogrum, Brag, Brokil, Bugak, Buramog, Burz, Dubok, Dul, Dulfish, Dulphumph, Dumag, Gaturn, Ghola, Ghorub, Gogron, Gorgo, Graklak, Graman, Grommok, Gul, Hanz, Krognak, Kurdan, Kurz, Lum, Lumdum, Luronk, Magra, Magub, Maknok, Mug, Orok, Rugdumph, Shagol, Shagrol, Shobob, Shum, Ulmug, Urbul, Urul, Ushnar, Uzul, Gortwog, Makor, Olpac, Balagog, Bashnag, Borkul, Burguk, Durak, Dushnamub, Gadba, Gat, Ghamorz, Ghorbash, Ghunzul, Grogmar, Grushnag, Gularzob, Kharag, Larak, Lob, Lurbuk, Mahk, Makhel, Malkus, Mauhulakh, Moth, Mul, Mulush, Nagrub, Oglub, Ogol, Olur, Ulag, Umurn, Urag, Yamarz, Yar, Durgob, Grul, Mog, Othmash, Ramolg, Shelakh, Uzgakh, Agrob, Badbog, Bashuk, Bogdub, Bugdurash, Bula, Bulak, Bulfim, Bum, Burub, Burzob, Dura, Durgat, Durz, Gashnakh, Ghob, Glasha, Glob, Gluronk, Gonk, Grat, Grazob, Gulfim, Kharzug, Lagakh, Lambug, Lazgar, Mogak, Morn, Murob, Murzush, Nargol, Orbul, Ragash, Rolfish, Rulfim, Shadbak, Shagar, Shagdub, Sharn, Sharog, Shelur, Sloomalah, Uloth, Ulumpha, Urzoth, Urzul, Ushug, Yazgash, Batul, Borba, Bumph, Homraz, Mazoga, Mog, Mor, Oghash, Orag, Rogbut, Rogmesh, Snak, Ugak, Umar, Umog, Arob, Atub, Bagrak, Batum, Bolar, Bor, Borgakh, Dulug, Garakh, Ghak, Gharol, Ghorza, Gul, Lash, Mogdurz, Murbul, Sharamph, Shel, Shuftharz, , Ugor, Urog, Urzoga, Yag, Yatul, Voltha");

	var foods = toArray("Ghoul, Goblin, Troll, Dread, Wolf, Tree, Fling, Amazon, Elf, Lizard, Rat, Beast, Zombie, Skeleton, Frog, Dworf, Viking, Mummy, Ogre, Vampire");

	return randomArrayElement(orcNames) + " " + randomArrayElement(foods) + "-" + randomArrayElement(eatingStyles);
}

function generateNewPlayerName() {
	if (isAmazonTeam()) {
		return generateAmazonName();
	} else if (isChaosTeam()) {
		return generateChaosName();
	} else if (isChaosDwarfTeam()) {
		return generateChaosDwarfName();
	} else if (isChaosPactTeam()) {
		return generateChaosPactName();
	} else if (isDarkElfTeam()) {
		return generateDarkElfName();
	} else if (isDwarfTeam()) {
		return generateDwarfName();
	} else if (isElfTeam()) {
		return generateElfName();
	} else if (isGoblinTeam()) {
		return generateGoblinName();
	} else if (isHalflingTeam()) {
		return generateHalflingName();
	} else if (isHighElfTeam()) {
		return generateHighElfName();
	} else if (isHumanTeam()) {
		return generateHumanName();
	} else if (isKhemriTeam()) {
		return generateKhemriName();
	} else if (isLizardmenTeam()) {
		return generateLizardmenName();
	} else if (isNecromanticTeam()) {
		return generateNecromanticName();
	} else if (isNorseTeam()) {
		return generateNorseName();
	} else if (isNurgleTeam()) {
		return generateNurgleName();
	} else if (isOgreTeam()) {
		return generateOgreName();
	} else if (isOrcTeam()) {
		return generateOrcName();
	} else if (isSkavenTeam()) {
		return generateName();
	} else if (isSlannTeam()) {
		return generateSlannName();
	} else if (isUndeadTeam()) {
		return generateUndeadName();
	} else if (isUnderworldTeam()) {
		return generateUnderworldName();
	} else if (isVampireTeam()) {
		return generateName();
	} else {
		return "???";
	}
}

setName(generateNewPlayerName());

