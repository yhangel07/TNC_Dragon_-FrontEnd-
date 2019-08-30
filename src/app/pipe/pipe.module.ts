import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { BranchesSearchPipe } from "./branches-search.pipe";

@NgModule({
  declarations: [BranchesSearchPipe],
  imports: [IonicModule],
  exports: [BranchesSearchPipe]
})
export class PipesModule {}