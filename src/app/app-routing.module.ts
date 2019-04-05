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
