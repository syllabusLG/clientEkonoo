import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { GotologinComponent } from './gotologin/gotologin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import {
  MAT_DATE_LOCALE, MatAutocompleteModule,
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule, MatRadioModule, MatSelectModule, MatTabsModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateCompteComponent } from './create-compte/create-compte.component';
import { GenerateCodeComponent } from './generate-code/generate-code.component';
import { MenuComponent } from './menu/menu.component';
import { LancementAComponent } from './lancement-a/lancement-a.component';
import { ConnaissanceComponent } from './connaissance/connaissance.component';
import { LancementBComponent } from './lancement-b/lancement-b.component';
import { DonneesComponent } from './donnees/donnees.component';
import { AdresseComponent } from './adresse/adresse.component';
import { ChoixPieceComponent } from './choix-piece/choix-piece.component';
import { ViewLicenceDriverComponent } from './view-licence-driver/view-licence-driver.component';
import { ViewLicenceDriverVersoComponent } from './view-licence-driver-verso/view-licence-driver-verso.component';
import {WebcamModule} from 'ngx-webcam';
import { ConditionGeneraleComponent } from './condition-generale/condition-generale.component';
import { TakePictureComponent } from './take-picture/take-picture.component';
import { TakePictureVersoComponent } from './take-picture-verso/take-picture-verso.component';
import { TakeSelfieComponent } from './take-selfie/take-selfie.component';
import { SelfieComponent } from './selfie/selfie.component';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyProjectSuiteComponent } from './my-project-suite/my-project-suite.component';
import { AversionRisque1Component } from './aversion-risque1/aversion-risque1.component';
import { AversionRisque2Component } from './aversion-risque2/aversion-risque2.component';
import { AversionRisque3Component } from './aversion-risque3/aversion-risque3.component';
import { AversionRisque4Component } from './aversion-risque4/aversion-risque4.component';
import { Knowledge1Component } from './knowledge1/knowledge1.component';
import {CountToModule} from 'angular-count-to';
import { Knowledge2Component } from './knowledge2/knowledge2.component';
import { Knowledge3Component } from './knowledge3/knowledge3.component';
import { Knowledge4Component } from './knowledge4/knowledge4.component';
import { Knowledge5Component } from './knowledge5/knowledge5.component';
import { Knowledge6Component } from './knowledge6/knowledge6.component';
import { Knowledge7Component } from './knowledge7/knowledge7.component';
import { Knowledge8Component } from './knowledge8/knowledge8.component';
import { Knowledge9Component } from './knowledge9/knowledge9.component';
import { Knowledge10Component } from './knowledge10/knowledge10.component';
import { ScoreComponent } from './score/score.component';
import { EpargneMenuComponent } from './epargne-menu/epargne-menu.component';
import { EpargneRetraiteColComponent } from './epargne-retraite-col/epargne-retraite-col.component';
import { EpargneEntrepriseComponent } from './epargne-entreprise/epargne-entreprise.component';
import { EpargneRetraiteIndComponent } from './epargne-retraite-ind/epargne-retraite-ind.component';
import { EpargneIndividuelComponent } from './epargne-individuel/epargne-individuel.component';
import { VousJoindreComponent } from './vous-joindre/vous-joindre.component';
import { IdentityComponent } from './identity/identity.component';
import { RisquesComponent } from './risques/risques.component';
import { ProjectComponent } from './project/project.component';
import { OnBoard1Component } from './on-board1/on-board1.component';
import { OnBoard2Component } from './on-board2/on-board2.component';
import { OnBoard3Component } from './on-board3/on-board3.component';
import { OnBoard4Component } from './on-board4/on-board4.component';
import { OnBoard5Component } from './on-board5/on-board5.component';
import { Rachat1Component } from './rachat1/rachat1.component';
import { Rachat2Component } from './rachat2/rachat2.component';
import { Rachat3Component } from './rachat3/rachat3.component';
import { RachatGraphe1Component } from './rachat-graphe1/rachat-graphe1.component';
import { RachatGraphe2Component } from './rachat-graphe2/rachat-graphe2.component';
import { RachatGraphe3Component } from './rachat-graphe3/rachat-graphe3.component';
import { Dispositif1Component } from './dispositif1/dispositif1.component';
import { Dispositif2Component } from './dispositif2/dispositif2.component';
import { Dispositif3Component } from './dispositif3/dispositif3.component';
import { Dispositif4Component } from './dispositif4/dispositif4.component';
import { Dispositif5Component } from './dispositif5/dispositif5.component';
import { Dispositif6Component } from './dispositif6/dispositif6.component';
import { Dispositif7Component } from './dispositif7/dispositif7.component';
import {AngularSignaturePadModule} from 'angular-signature-pad/public_api';

import { RedeemComponent } from './redeem/redeem.component';
import {SignaturePadModule} from 'angular2-signaturepad';
import { ListerComponent } from './lister/lister.component';
import { DispositifsComponent } from './dispositifs/dispositifs.component';
import { DispositifDetailsComponent } from './dispositif-details/dispositif-details.component';
import { DetailItemComponent } from './dispositif-details/detail-item/detail-item.component';
import { DispositifItemDetailsComponent } from './dispositif-item-details/dispositif-item-details.component';
import { ContactComponent } from './contact/contact.component';
import { Fiscalit1Component } from './fiscalit1/fiscalit1.component';
import { SlideFiscalityComponent } from './slide-fiscality/slide-fiscality.component';
import { Fiscality2Component } from './fiscality2/fiscality2.component';
import { Fiscality3Component } from './fiscality3/fiscality3.component';
import { Fiscality4Component } from './fiscality4/fiscality4.component';
import { MesProduitsComponent } from './mes-produits/mes-produits.component';
import { ProduitItemComponent } from './mes-produits/produit-item/produit-item.component';
import { MesProduitDetailsComponent } from './mes-produit-details/mes-produit-details.component';
import { MesProduitObjectifComponent } from './mes-produit-objectif/mes-produit-objectif.component';
import { MesProduitHistoriqueNavComponent } from './mes-produit-historique-nav/mes-produit-historique-nav.component';
import { VerserComponent } from './verser/verser.component';
import { VersementPonctuelComponent } from './versement-ponctuel/versement-ponctuel.component';
import { VersementPonctuel2Component } from './versement-ponctuel2/versement-ponctuel2.component';
import { VersementPonctuel3Component } from './versement-ponctuel3/versement-ponctuel3.component';
import { VersementPonctuel4Component } from './versement-ponctuel4/versement-ponctuel4.component';
import { VersementPonctuel5Component } from './versement-ponctuel5/versement-ponctuel5.component';
import { MesProduitSettingComponent } from './mes-produit-setting/mes-produit-setting.component';
import { VersementRegulier1Component } from './versement-regulier1/versement-regulier1.component';
import { VersementRegulier2Component } from './versement-regulier2/versement-regulier2.component';
import { VersementRegulier3Component } from './versement-regulier3/versement-regulier3.component';
import { VersementRegulier4Component } from './versement-regulier4/versement-regulier4.component';
import { VersementRegulier5Component } from './versement-regulier5/versement-regulier5.component';
import { VersementRegulierPreComponent } from './versement-regulier-pre/versement-regulier-pre.component';
import { VersementPonctuelCarteComponent } from './versement-ponctuel-carte/versement-ponctuel-carte.component';
import { Menu2Component } from './menu2/menu2.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentRegulierComponent } from './payment-regulier/payment-regulier.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ContentComponent,
    GotologinComponent,
    ConnexionComponent,
    CreateCompteComponent,
    GenerateCodeComponent,
    MenuComponent,
    LancementAComponent,
    ConnaissanceComponent,
    LancementBComponent,
    DonneesComponent,
    AdresseComponent,
    ChoixPieceComponent,
    ViewLicenceDriverComponent,
    ViewLicenceDriverVersoComponent,
    ConditionGeneraleComponent,
    TakePictureComponent,
    TakePictureVersoComponent,
    TakeSelfieComponent,
    SelfieComponent,
    MyProjectComponent,
    MyProjectSuiteComponent,
    AversionRisque1Component,
    AversionRisque2Component,
    AversionRisque3Component,
    AversionRisque4Component,
    Knowledge1Component,
    Knowledge2Component,
    Knowledge3Component,
    Knowledge4Component,
    Knowledge5Component,
    Knowledge6Component,
    Knowledge7Component,
    Knowledge8Component,
    Knowledge9Component,
    Knowledge10Component,
    ScoreComponent,
    EpargneMenuComponent,
    EpargneRetraiteColComponent,
    EpargneEntrepriseComponent,
    EpargneRetraiteIndComponent,
    EpargneIndividuelComponent,
    VousJoindreComponent,
    IdentityComponent,
    RisquesComponent,
    ProjectComponent,
    OnBoard1Component,
    OnBoard2Component,
    OnBoard3Component,
    OnBoard4Component,
    OnBoard5Component,
    Rachat1Component,
    Rachat2Component,
    Rachat3Component,
    RachatGraphe1Component,
    RachatGraphe2Component,
    RachatGraphe3Component,
    Dispositif1Component,
    Dispositif2Component,
    Dispositif3Component,
    Dispositif4Component,
    Dispositif5Component,
    Dispositif6Component,
    Dispositif7Component,
    RedeemComponent,
    ListerComponent,
    RedeemComponent,
    DispositifsComponent,
    DispositifDetailsComponent,
    DetailItemComponent,
    DispositifItemDetailsComponent,
    ContactComponent,
    Fiscalit1Component,
    SlideFiscalityComponent,
    Fiscality2Component,
    Fiscality3Component,
    Fiscality4Component,
    ContactComponent,
    MesProduitsComponent,
    ProduitItemComponent,
    MesProduitDetailsComponent,
    MesProduitObjectifComponent,
    MesProduitHistoriqueNavComponent,
    VerserComponent,
    VersementPonctuelComponent,
    VersementPonctuel2Component,
    VersementPonctuel3Component,
    VersementPonctuel4Component,
    VersementPonctuel5Component,
    MesProduitHistoriqueNavComponent,
    MesProduitSettingComponent,
    VersementRegulier1Component,
    VersementRegulier2Component,
    VersementRegulier3Component,
    VersementRegulier4Component,
    VersementRegulier5Component,
    VersementRegulierPreComponent,
    VersementPonctuelCarteComponent,
    Menu2Component,
    PaymentComponent,
    PaymentRegulierComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    WebcamModule,
    MatAutocompleteModule,
    CountToModule,
    MatGridListModule,
    MatTabsModule,
    SignaturePadModule
    //AngularSignaturePadModule.forRoot()
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
