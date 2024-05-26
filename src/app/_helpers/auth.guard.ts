import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // Ici, vous ajouteriez votre logique d'authentification.
    // Par exemple, vérifier si l'utilisateur est connecté :
    const isAuthenticated = false; // Remplacez par votre logique d'authentification

    if (isAuthenticated) {
      return true;
    } else {
      // Rediriger vers la page d'authentification si l'utilisateur n'est pas authentifié
      return this.router.createUrlTree(['auth']);
    }
  }
}
