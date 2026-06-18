import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Skills } from './skills/skills';
import { Experience } from './experience/experience';
import { Projects } from './projects/projects';
import { Certifications } from './certifications/certifications';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: LandingPage
    },
    {
        path: 'skills',
        component: Skills
    },
    {
        path: 'experience',
        component: Experience
    },
    {
        path: 'projects',
        component: Projects
    },
    {
        path: 'certifications',
        component: Certifications
    }
];
