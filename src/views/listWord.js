let words = ["ARMOIRE", "BUREAU", "CABINET", "CARREAU", "CHAISE", "CLASSE", "COULOIR", "DOSSIER", "ENTRER", "ESCALIER", "ETAGERE", "EXTERIEUR", "FENETRE", "INTERIEUR", "LAVABO", "MARCHE", "MATELAS", "MATERNELLE", "MEUBLE", "MOUSSE", "PELUCHE", "PLACARD", "PLAFOND", "POUBELLE", "RADIATEUR", "RIDEAU", "ROBINET", "SERRURE", "SERVIETTE", "SIESTE", "SILENCE", "SOMMEIL", "SONNETTE", "SORTIE", "TABLEAU", "TABOURET", "TIROIR", "TOILETTE", "AMENER", "APPORTER", "APPUYER", "ATTENDRE", "BAILLER", "COUCHER", "DORMIR", "ECLAIRER", "EMMENER", "EMPORTER", "ENTRER", "FERMER", "FRAPPER", "INSTALLER", "OUVRIR", "PRESSER", "RECHAUFFER", "RESTER", "SONNER", "SORTIR", "ABSENT", "PRESENT", "GAUCHE", "DROITE", "DEBOUT", "DEDANS", "DEHORS", "CONTRE", "DERRIERE", "DEVANT", "CRAYON", "FEUTRE", "DESSIN", "COLORIAGE", "RAYURE", "PEINTURE", "PINCEAU", "COULEUR", "PAPIER", "FEUILLE", "CAHIER", "CARNET", "CARTON", "CISEAUX", "DECOUPAGE", "PLIAGE", "AFFAIRE", "CASIER", "CAISSE", "TROUSSE", "CARTABLE", "DOMINO", "PUZZLE", "MODELER", "TAMPON", "HISTOIRE", "BIBLIOTHEQUE", "DICTIONNAIRE", "MAGAZINE", "CATALOGUE", "ENVELOPPE", "ETIQUETTE", "AFFICHE", "ALPHABET", "APPAREIL", "CAMESCOPE", "CASSETTE", "CHAINE", "CHANSON", "CHIFFRE", "CONTRAIRE", "DIFFERENCE", "ECRITURE", "INSTRUMENT", "INTRUS", "LETTRE", "MAGNETOSCOPE", "MODELE", "MUSIQUE", "NOMBRE", "ORCHESTRE", "ORDINATEUR", "POSTER", "PRENOM", "QUESTION", "TAMBOUR", "TELECOMMANDE", "TELEPHONE", "TELEVISION", "TROMPETTE", "XYLOPHONE", "CHANTER", "CHERCHER", "CHOISIR", "CHUCHOTER", "COLLER", "COLORIER", "COMMENCER", "COMPARER", "COMPTER", "CONSTRUIRE", "CONTINUER", "COPIER", "COUPER", "DECHIRER", "DECOLLER", "DECORER", "DECOUPER", "DEMOLIR", "DESSINER", "DISCUTER", "ECOUTER", "ECRIRE", "EFFACER", "ENTENDRE", "ENTOURER", "ENVOYER", "FOUILLER", "GOUTER", "IMITER", "LAISSER", "METTRE", "MONTRER", "OUVRIR", "PARLER", "PEINDRE", "PRENDRE", "PREPARER", "RANGER", "RECITER", "RECOMMENCER", "REGARDER", "REMETTRE", "REPETER", "REPONDRE", "SENTIR", "SOULIGNER", "TAILLER", "TERMINER", "TOUCHER", "TRAVAILLER", "ATTENTION", "CAMARADE", "COLERE", "COPAIN", "COQUIN", "DIRECTEUR", "DIRECTRICE", "EFFORT", "ENFANT", "FATIGUE", "GARCON", "GARDIEN", "MADAME", "MAITRE", "MAITRESSE", "MENSONGE", "PERSONNE", "RETARD", "JOUEUR", "SOURIRE", "TRAVAIL", "DEFENDRE", "DESOBEIR", "DISTRIBUER", "ECHANGER", "EXPLIQUER", "GRONDER", "OBLIGER", "PARTAGER", "PRETER", "PRIVER", "PROMETTRE", "PROGRES", "PROGRESSER", "QUITTER", "RACONTER", "EXPLIQUER", "REFUSER", "SEPARER", "CURIEUX", "DIFFERENT", "ENERVER", "GENTIL", "HANDICAPE", "INSEPARABLE", "JALOUX", "NOUVEAU", "PROPRE", "SERIEUX", "TRANQUILLE", "ARROSOIR", "ASSIETTE", "BATEAU", "BOUCHON", "BOUTEILLE", "BULLES", "CANARD", "CASSEROLE", "CUILLERE", "CUVETTE", "DOUCHE", "ENTONNOIR", "GOUTTES", "MOULIN", "POISSON", "PLASTIQUE", "SALADIER", "TABLIER", "AGITER", "AMUSER", "ARROSER", "ATTRAPER", "AVANCER", "BAIGNER", "BARBOTER", "BOUCHER", "BOUGER", "DEBORDER", "DOUCHER", "ECLABOUSSER", "ESSUYER", "ENVOYER", "COULER", "PARTIR", "FLOTTER", "GONFLER", "INONDER", "MELANGER", "MOUILLER", "PLEUVOIR", "PLONGER", "POUSSER", "POUVOIR", "PRESSER", "RECEVOIR", "REMPLIR", "RENVERSER", "SECHER", "SERRER", "SOUFFLER", "TOURNER", "TREMPER", "VERSER", "VOULOIR", "AMUSANT", "HUMIDE", "INTERESSANT", "MOUILLE", "TRANSPARENT", "MOITIE", "AUTANT", "BEAUCOUP", "ENCORE", "ANORAK", "BAGAGE", "BAGUETTE", "BONNET", "BOUTON", "BRETELLE", "CAGOULE", "CASQUE", "CASQUETTE", "CEINTURE", "CHAPEAU", "CHAUSSETTE", "CHAUSSON", "CHAUSSURE", "CHEMISE", "CIGARETTE", "COLLANT", "COURONNE", "CRAVATE", "CULOTTE", "ECHARPE", "FLECHE", "LUNETTES", "MAGICIEN", "MAILLOT", "MANCHE", "MANTEAU", "MOUCHOIR", "MOUFLE", "PANTALON", "PRINCE", "PYJAMA", "SEMELLE", "SOLDAT", "SOCIERE", "TAILLE", "TRICOT", "UNIFORME", "VALISE", "VETEMENT", "CHANGER", "CHAUSSER", "COUVRIR", "DEGUISER", "DESHABILLER", "ENLEVER", "HABILLER", "PORTER", "RESSEMBLER", "ETROIT", "MULTICOLORE", "PRESQUE", "AIGUILLE", "AMPOULE", "BRICOLAGE", "CABANE", "CARTON", "CROCHET", "ELASTIQUE", "FICELLE", "MARIONNETTE", "MARTEAU", "MORCEAU", "MOTEUR", "PEINTURE", "PINCEAU", "PLANCHE", "PLATRE", "TOURNEVIS", "VOITURE", "ARRACHER", "ATTACHER", "CASSER", "COUDRE", "DETRUIRE", "ECORCHER", "ENFILER", "ENFONCER", "FABRIQUER", "MESURER", "PERCER", "PINCER", "REPARER", "REUSSIR", "SERVIR", "TROUER", "TROUVER", "ADROIT", "DIFFICILE", "FACILE", "MALADROIT", "POINTU", "ACCIDENT", "AEROPORT", "CAMION", "GARAGE", "HELICOPTERE", "PARKING", "PILOTE", "VIRAGE", "VITESSE", "VOYAGE", "ZIGZAG", "ARRETER", "ATTERRIR", "BOUDER", "CHARGER", "CONDUIRE", "DEMARRER", "DISPARAITRE", "DONNER", "ECRASER", "ENVOLER", "GARDER", "MANQUER", "PARTIR", "RECULER", "ROULER", "TENDRE", "TRANSPORTER", "ANCIEN", "DERNIER", "DEUXIEME", "PAREIL", "PREMIER", "QUATRE", "SOLIDE", "TROISIEME", "DESSUS", "AUTOUR", "ACROBATE", "ARRIERE", "BARREAU", "CERCEAU", "CHAISE", "CHEVILLE", "CUISSE", "DANGER", "DOIGTS", "ECHASSES", "ECHELLE", "EPAULE", "EQUIPE", "ESCABEAU", "GYMNASTIQUE", "HANCHE", "MILIEU", "MONTAGNE", "ESCALADE", "MUSCLE", "NUMERO", "PARCOURS", "PASSERELLE", "PLONGEOIR", "POIGNET", "POUTRE", "EQUILIBRE", "RIVIERE", "CROCODILE", "ROULADE", "PIROUETTE", "SERPENT", "SUIVANT", "TOBOGGAN", "TRAMPOLINE", "TUNNEL", "VENTRE", "ACCROCHER", "APPUYER", "ARRIVER", "BAISSER", "BALANCER", "BONDIR", "BOUSCULER", "COGNER", "COURIR", "DANSER", "DEPASSER", "DESCENDRE", "ECARTER", "ESCALADER", "GAGNER", "GLISSER", "GRIMPER", "MARCHER", "PATTES", "DEBOUT", "MONTER", "MONTRER", "PENCHER", "PERCHER", "PERDRE", "RAMPER", "REMPLACER", "RESPIRER", "RETOURNER", "REVENIR", "SAUTER", "SOULEVER", "SUIVRE", "TOMBER", "TRANSPIRER", "TRAVERSER", "DANGEUREUX", "GROUPE", "IMMOBILE", "SOUPLE", "ENSEMBLE", "JAMAIS", "TOUJOURS", "SOUVENT", "BAGARRE", "BALANCOIRE", "BALLON", "BICYCLETTE", "ECUREUIL", "VOLANT", "CHATEAU", "COURSE", "ECHASSE", "FLAQUE", "PARDON", "PARTIE", "PEDALE", "RAQUETTE", "RECREATION", "SIFFLET", "TRICYCLE", "BAGARRER", "BATTRE", "CACHER", "CRACHER", "CREUSER", "DEGONFLER", "DISPUTE", "EMPECHER", "GALOPER", "HURLER", "JONGLER", "LANCER", "PEDALER", "PLAINDRE", "PLEURER", "POURSUIVRE", "PROTEGER", "SAIGNER", "SIFFLER", "SURVEILLER", "TRAINER", "TROUVER", "MECHANT"];

export default words;
