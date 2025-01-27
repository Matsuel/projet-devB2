"use strict";
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
exports.searchInCitiesFiles = void 0;
const cities_json_1 = __importDefault(require("../Utils/cities.json"));
function searchInCitiesFiles(search) {
    return __awaiter(this, void 0, void 0, function* () {
        search = search.replace("-", " ");
        search = search.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
        const cities = cities_json_1.default; // Cast datas to City[]
        const results = cities.filter((city) => city.name.includes(search));
        return results;
    });
}
exports.searchInCitiesFiles = searchInCitiesFiles;
//# sourceMappingURL=cities.js.map