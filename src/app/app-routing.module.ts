import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {GotologinComponent} from './gotologin/gotologin.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {CreateCompteComponent} from './create-compte/create-compte.component';
import {GenerateCodeComponent} from './generate-code/generate-code.component';
import {LancementAComponent} from './lancement-a/lancement-a.component';
import {MenuComponent} from './menu/menu.component';
import {ConnaissanceComponent} from './connaissance/connaissance.component';
import {LancementBComponent} from './lancement-b/lancement-b.component';
import {DonneesComponent} from './donnees/donnees.component';
import {AdresseComponent} from './adresse/adresse.component';
import {ChoixPieceComponent} from './choix-piece/choix-piece.component';
import {ViewLicenceDriverComponent} from './view-licence-driver/view-licence-driver.component';
import {ViewLicenceDriverVersoComponent} from './view-licence-driver-verso/view-licence-driver-verso.component';
import {ConditionGeneraleComponent} from './condition-generale/condition-generale.component';
import {TakePictureComponent} from './take-picture/take-picture.component';
import {TakePictureVersoComponent} from './take-picture-verso/take-picture-verso.component';
import {TakeSelfieComponent} from './take-selfie/take-selfie.component';
import {MyProjectComponent} from './my-project/my-project.component';
import {MyProjectSuiteComponent} from './my-project-suite/my-project-suite.component';
import {AversionRisque1Component} from './aversion-risque1/aversion-risque1.component';
import {AversionRisque2Component} from './aversion-risque2/aversion-risque2.component';
import {AversionRisque3Component} from './aversion-risque3/aversion-risque3.component';
import {AversionRisque4Component} from './aversion-risque4/aversion-risque4.component';
import {Knowledge1Component} from './knowledge1/knowledge1.component';
import {Knowledge2Component} from './knowledge2/knowledge2.component';
import {Knowledge3Component} from './knowledge3/knowledge3.component';
import {Knowledge4Component} from './knowledge4/knowledge4.component';
import {Knowledge5Component} from './knowledge5/knowledge5.component';
import {Knowledge6Component} from './knowledge6/knowledge6.component';
import {Knowledge7Component} from './knowledge7/knowledge7.component';
import {Knowledge8Component} from './knowledge8/knowledge8.component';
import {Knowledge9Component} from './knowledge9/knowledge9.component';
import {Knowledge10Component} from './knowledge10/knowledge10.component';
import {ScoreComponent} from './score/score.component';
import {EpargneMenuComponent} from './epargne-menu/epargne-menu.component';
import {EpargneRetraiteColComponent} from './epargne-retraite-col/epargne-retraite-col.component';
import {EpargneEntrepriseComponent} from './epargne-entreprise/epargne-entreprise.component';
import {EpargneRetraiteIndComponent} from './epargne-retraite-ind/epargne-retraite-ind.component';
import {EpargneIndividuelComponent} from './epargne-individuel/epargne-individuel.component';
import {VousJoindreComponent} from './vous-joindre/vous-joindre.component';
import {IdentityComponent} from './identity/identity.component';
import {RisquesComponent} from './risques/risques.component';
import {ProjectComponent} from './project/project.component';
import { OnBoard1Component } from './on-board1/on-board1.component';
import { OnBoard2Component } from './on-board2/on-board2.component';
import { OnBoard3Component } from './on-board3/on-board3.component';
import { OnBoard4Component } from './on-board4/on-board4.component';
import { OnBoard5Component } from './on-board5/on-board5.component';
import {Rachat1Component} from './rachat1/rachat1.component';
import {Rachat2Component} from './rachat2/rachat2.component';
import {Rachat3Component} from './rachat3/rachat3.component';
import {RachatGraphe1Component} from './rachat-graphe1/rachat-graphe1.component';
import {RachatGraphe2Component} from './rachat-graphe2/rachat-graphe2.component';
import {RachatGraphe3Component} from './rachat-graphe3/rachat-graphe3.component';
import {Dispositif1Component} from './dispositif1/dispositif1.component';
import {Dispositif2Component} from './dispositif2/dispositif2.component';
import {Dispositif3Component} from './dispositif3/dispositif3.component';
import {Dispositif4Component} from './dispositif4/dispositif4.component';
import {Dispositif5Component} from './dispositif5/dispositif5.component';
import {Dispositif6Component} from './dispositif6/dispositif6.component';
import {Dispositif7Component} from './dispositif7/dispositif7.component';
import {ListerComponent} from './lister/lister.component';
import { DispositifsComponent } from './dispositifs/dispositifs.component';
import { DispositifDetailsComponent } from './dispositif-details/dispositif-details.component';
import { DispositifItemDetailsComponent } from './dispositif-item-details/dispositif-item-details.component';
import {ContactComponent} from './contact/contact.component';
import {Fiscalit1Component} from './fiscalit1/fiscalit1.component';
import {SlideFiscalityComponent} from './slide-fiscality/slide-fiscality.component';
import {Fiscality2Component} from './fiscality2/fiscality2.component';
import {Fiscality3Component} from './fiscality3/fiscality3.component';
import {Fiscality4Component} from './fiscality4/fiscality4.component';
import { MesProduitsComponent } from './mes-produits/mes-produits.component';
import {MesProduitDetailsComponent} from "./mes-produit-details/mes-produit-details.component";
import {MesProduitObjectifComponent} from "./mes-produit-objectif/mes-produit-objectif.component";
import {MesProduitHistoriqueNavComponent} from "./mes-produit-historique-nav/mes-produit-historique-nav.component";
import {VerserComponent} from './verser/verser.component';
import {VersementPonctuelComponent} from './versement-ponctuel/versement-ponctuel.component';
import {VersementPonctuel2Component} from './versement-ponctuel2/versement-ponctuel2.component';
import {VersementPonctuel3Component} from './versement-ponctuel3/versement-ponctuel3.component';
import {VersementPonctuel4Component} from './versement-ponctuel4/versement-ponctuel4.component';
import {VersementPonctuel5Component} from './versement-ponctuel5/versement-ponctuel5.component';
import {MesProduitSettingComponent} from "./mes-produit-setting/mes-produit-setting.component";
import {VersementRegulier1Component} from './versement-regulier1/versement-regulier1.component';
import {VersementRegulier2Component} from './versement-regulier2/versement-regulier2.component';
import {VersementRegulier3Component} from './versement-regulier3/versement-regulier3.component';
import {VersementRegulier4Component} from './versement-regulier4/versement-regulier4.component';
import {VersementRegulier5Component} from './versement-regulier5/versement-regulier5.component';
import {VersementRegulierPreComponent} from './versement-regulier-pre/versement-regulier-pre.component';
import {VersementPonctuelCarteComponent} from './versement-ponctuel-carte/versement-ponctuel-carte.component';
import {Menu2Component} from './menu2/menu2.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'gotologin',
        component: GotologinComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'connexion',
        component: ConnexionComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'createCompte',
        component: CreateCompteComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'generateCode',
        component: GenerateCodeComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'lancementA',
        component:LancementAComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'menu',
        component:MenuComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'menu2',
        component:Menu2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'connaissance',
        component: ConnaissanceComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'lancementB',
        component: LancementBComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'donnees',
        component: DonneesComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'adresse',
        component: AdresseComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'choixPiece',
        component: ChoixPieceComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'viewLicenceDriver',
        component: ViewLicenceDriverComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'viewLicenceDriverVerso',
        component: ViewLicenceDriverVersoComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'conditionGenerale',
        component: ConditionGeneraleComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'takePicture',
        component: TakePictureComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'takePictureVerso',
        component: TakePictureVersoComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'takeSelfie',
        component: TakeSelfieComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'myProject',
        component: MyProjectComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'myProjectSuite',
        component: MyProjectSuiteComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'aversionRisque1',
        component: AversionRisque1Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'aversionRisque2',
        component: AversionRisque2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'aversionRisque3',
        component: AversionRisque3Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'aversionRisque4',
        component: AversionRisque4Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge',
        component: Knowledge1Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge2',
        component: Knowledge2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge3',
        component: Knowledge3Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge4',
        component: Knowledge4Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge5',
        component: Knowledge5Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge6',
        component: Knowledge6Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge7',
        component: Knowledge7Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge8',
        component: Knowledge8Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge9',
        component: Knowledge9Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'knowledge10',
        component: Knowledge10Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'score',
        component: ScoreComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'epargneMenu',
        component: EpargneMenuComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'epargneRetraiteCol',
        component: EpargneRetraiteColComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'epargneEntreprise',
        component: EpargneEntrepriseComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'epargneRetraiteInd',
        component: EpargneRetraiteIndComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'epargneIndividuel',
        component: EpargneIndividuelComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'vousJoindre',
        component: VousJoindreComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'identity',
        component: IdentityComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'risques',
        component: RisquesComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'project',
        component: ProjectComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'onBoard1',
        component: OnBoard1Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'onBoard2',
        component: OnBoard2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'onBoard3',
        component: OnBoard3Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'onBoard4',
        component: OnBoard4Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'onBoard5',
        component: OnBoard5Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'rachat1',
        component: Rachat1Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'rachat2',
        component: Rachat2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'rachat3/:capitalValue',
        component: Rachat3Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'rachatGraphe1/:capitalValue',
        component: RachatGraphe1Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'rachatGraphe2/:value',
        component: RachatGraphe2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'rachatGraphe3/:capital/:montant/:pourcentageMontant/:pourcentageViagere/:pourcentageFinanciere',
        component: RachatGraphe3Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositif1',
        component: Dispositif1Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositif2',
        component: Dispositif2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositif3',
        component: Dispositif3Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositif4',
        component: Dispositif4Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositif5',
        component: Dispositif5Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositif6',
        component: Dispositif6Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositif7',
        component: Dispositif7Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'lister',
        component: ListerComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositifs',
        component: DispositifsComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositif-details',
        component: DispositifDetailsComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'dispositif-item-details',
        component: DispositifItemDetailsComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'contact',
        component: ContactComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'fiscalite1',
        component: Fiscalit1Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'fiscalite2',
        component: Fiscality2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'slideFiscality',
        component: SlideFiscalityComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'fiscalite3',
        component: Fiscality3Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'fiscalite4',
        component: Fiscality4Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'mes-produits',
        component: MesProduitsComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'mes-produit-details',
        component: MesProduitDetailsComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'mes-produit-objectif/:component',
        component: MesProduitObjectifComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'mes-produit-historique-nav/:component',
        component: MesProduitHistoriqueNavComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'verser',
        component: VerserComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementPonctuel1',
        component: VersementPonctuelComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementPonctuel2/:montantValue',
        component: VersementPonctuel2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementPonctuel3/:montantValue',
        component: VersementPonctuel3Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementPonctuel4/:montantValue',
        component: VersementPonctuel4Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementPonctuel5/:montantValue',
        component: VersementPonctuel5Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'mes-produit-setting',
        component: MesProduitSettingComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementRegulier1',
        component: VersementRegulier1Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementRegulier2',
        component: VersementRegulier2Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementRegulier3',
        component: VersementRegulier3Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementRegulier4',
        component: VersementRegulier4Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementRegulier5',
        component: VersementRegulier5Component,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementRegulierPre',
        component: VersementRegulierPreComponent,
        outlet: 'contentOutlet'
      },
      {
        path: 'versementPonctuelCarte',
        component: VersementPonctuelCarteComponent,
        outlet: 'contentOutlet'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
