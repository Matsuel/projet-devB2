"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const mongo_1 = __importStar(require("./Functions/mongo"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, express_session_1.default)({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { mail, password } = req.body;
    console.log(mail, password);
    const user = yield (0, mongo_1.login)({ mail, password });
    if (user.login) {
        req.session.user = user.id;
        res.send({ login: true });
    }
    else {
        res.send({ login: false });
    }
}));
(0, mongo_1.default)();
app.listen(3500, () => {
    console.log('Server is running on port 3500');
});
//Canaux de communication websockets
// login/register
// getConversations
// getMessages permet de récupérer les messages d'une conversation
// sendMessage permet d'envoyer un message dans une conversation
// createConversation permet de créer une conversation entre deux utilisateurs
// deleteConversation permet de supprimer une conversation
// getComments permet de récupérer les commentaires sur une auto école/moniteur
// postComment permet de poster un commentaire sur une auto école/moniteur
// deleteComment permet de supprimer un commentaire sur une auto école/moniteur
// postReview permet de poster un avis sur une auto école/moniteur
// deleteReview permet de supprimer un avis sur une auto école/moniteur
// getProfile permet de récupérer le profil de l'utilisateur connecté, en fonction de son type (auto école/moniteur/élève)
// updateProfile permet de mettre à jour le profil de l'utilisateur connecté, en fonction de son type (auto école/moniteur/élève)
// getAutoEcole permet de récupérer les informations d'une auto école
// search permet de rechercher une auto école ou une ville afin de récupérer les auto écoles correspondantes
// getMoniteur permet de récupérer les commentaires et avis d'un moniteur
// getAutoEcole permet de récupérer les commentaires et avis d'une auto école
// synchroMessages permet de synchroniser les messages d'une conversation entre deux utilisateurs si le destinataire n'est pas connecté on envoie un mail pour le notifier s'il a activé l'option
// Fonctions
// sendMail permet d'envoyer un mail
// synchroneMessages permet de synchroniser les messages d'une conversation entre deux utilisateurs
// voir si les autos écoles en db ont des objets avec les avis et commentaires
//Chiffrer les données entre le front et le back
//# sourceMappingURL=index.js.map