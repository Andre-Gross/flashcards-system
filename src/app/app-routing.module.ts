import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.page').then(c => c.HomePage)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'learn', loadComponent: () =>
		import('./learn-flashcards/learn-flashcards.component')
			.then(m => m.LearnFlashcardsComponent)}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
