import { PolyMod, MixinType } from "https://cdn.polymodloader.com/PolyTrackMods/PolyModLoader/0.5.2/PolyModLoader.js";
class PastesDevImport extends PolyMod {
init = (pml) => {


pml.registerClassMixin(hx, fromExportString, MixinType.INSERT,  "const s = XA(e);", "console.log(t);console.log(e)" );
    }
  }
export let polyMod = new PastesDevImport();

