import { PolyMod, MixinType } from "https://cdn.polymodloader.com/PolyTrackMods/PolyModLoader/0.5.2/PolyModLoader.js";
class PastesDevImport extends PolyMod {
init = (pml) => {


pml.registerClassMixin(hx, fromExportString, MixinType.INSERT,  "const s = XA(e);", "const PastesDevExport = PastesDev(e)" );


}



}
//class PastesDevExport extends PolyMod {
//  init = (pml) => {
  //pml.registerClassMixin();

//}
  export let polyMod = new PastesDevImport();

